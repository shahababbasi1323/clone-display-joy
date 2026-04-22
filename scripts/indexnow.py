#!/usr/bin/env python3
from __future__ import annotations

import json
import time
from pathlib import Path
from typing import Dict, List, Set
from urllib.parse import urljoin
import xml.etree.ElementTree as ET

import requests

ROOT = Path(__file__).resolve().parents[1]
CONFIG_PATH = ROOT / "indexnow.config.json"

def load_config() -> dict:
    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def state_path(config: dict) -> Path:
    return ROOT / config.get("state_file", ".indexnow-state.json")

def load_state(config: dict) -> dict:
    p = state_path(config)
    if not p.exists():
        return {"last_sent": {}}
    with open(p, "r", encoding="utf-8") as f:
        return json.load(f)

def save_state(config: dict, state: dict) -> None:
    p = state_path(config)
    with open(p, "w", encoding="utf-8") as f:
        json.dump(state, f, indent=2, ensure_ascii=False)

def read_indexnow_key(config: dict) -> str:
    public_rel = config["indexnow_key_file_public_path"].lstrip("/")
    p = ROOT / "public" / Path(public_rel).name
    if not p.exists():
        raise FileNotFoundError(f"Missing key file: {p}")
    key = p.read_text(encoding="utf-8").strip()
    if not key:
        raise ValueError("IndexNow key file is empty.")
    return key

def fetch_xml(url: str, timeout: int) -> str:
    r = requests.get(url, timeout=timeout, headers={"User-Agent": "IndexNow-Pro-Bot/1.0"})
    r.raise_for_status()
    return r.text

def parse_sitemap_recursive(sitemap_url: str, timeout: int, visited: Set[str] | None = None, depth: int = 0) -> List[str]:
    if visited is None:
        visited = set()
    if sitemap_url in visited or depth > 8:
        return []

    visited.add(sitemap_url)
    xml_text = fetch_xml(sitemap_url, timeout)
    root = ET.fromstring(xml_text)
    tag = root.tag.lower()

    urls: List[str] = []

    if tag.endswith("sitemapindex"):
        for child in root.findall(".//{*}loc"):
            loc = (child.text or "").strip()
            if loc:
                urls.extend(parse_sitemap_recursive(loc, timeout, visited, depth + 1))
        return list(dict.fromkeys(urls))

    if tag.endswith("urlset"):
        for child in root.findall(".//{*}loc"):
            loc = (child.text or "").strip()
            if loc and not loc.lower().endswith(".xml"):
                urls.append(loc)
        return list(dict.fromkeys(urls))

    for child in root.findall(".//{*}loc"):
        loc = (child.text or "").strip()
        if not loc:
            continue
        if loc.lower().endswith(".xml"):
            urls.extend(parse_sitemap_recursive(loc, timeout, visited, depth + 1))
        else:
            urls.append(loc)

    return list(dict.fromkeys(urls))

def gather_all_urls(config: dict) -> List[str]:
    all_urls: List[str] = []
    timeout = int(config.get("request_timeout_seconds", 20))
    for sitemap in config.get("sitemaps", []):
        print(f"Reading sitemap: {sitemap}")
        all_urls.extend(parse_sitemap_recursive(sitemap, timeout))
    return list(dict.fromkeys(all_urls))

def filter_urls_for_send(urls: List[str], state: dict, config: dict) -> List[str]:
    now = int(time.time())
    cooldown_seconds = int(config.get("cooldown_hours", 24)) * 3600
    sent_map: Dict[str, int] = state.get("last_sent", {})
    filtered = []
    for url in urls:
        last = int(sent_map.get(url, 0))
        if (now - last) >= cooldown_seconds:
            filtered.append(url)
    max_urls = int(config.get("max_urls_per_run", 100))
    return filtered[:max_urls]

def submit_batch(config: dict, key: str, batch: List[str]) -> int:
    host = config["site_url"].replace("https://", "").replace("http://", "").strip("/")
    key_location = urljoin(config["site_url"].rstrip("/") + "/", config["indexnow_key_file_public_path"].lstrip("/"))
    payload = {
        "host": host,
        "key": key,
        "keyLocation": key_location,
        "urlList": batch,
    }
    r = requests.post(
        config["indexnow_api"],
        json=payload,
        timeout=int(config.get("request_timeout_seconds", 20)),
        headers={"Content-Type": "application/json"},
    )
    print(f"Batch size {len(batch)} => status {r.status_code}")
    if r.text:
        print(r.text[:500])
    return r.status_code

def send_with_retry(config: dict, key: str, batch: List[str]) -> int:
    retries = int(config.get("max_retries_on_429", 3))
    backoff = int(config.get("retry_backoff_seconds", 30))

    for attempt in range(retries + 1):
        status = submit_batch(config, key, batch)
        if status != 429:
            return status
        if attempt < retries:
            wait = backoff * (attempt + 1)
            print(f"429 received. Sleeping {wait}s before retry.")
            time.sleep(wait)
    return 429

def main() -> None:
    config = load_config()
    key = read_indexnow_key(config)
    state = load_state(config)

    urls = gather_all_urls(config)
    print(f"Found URLs total: {len(urls)}")

    eligible = filter_urls_for_send(urls, state, config)
    print(f"URLs selected for this run: {len(eligible)}")

    if not eligible:
        print("No eligible URLs to send.")
        return

    batch_size = max(1, int(config.get("batch_size", 20)))
    delay = int(config.get("delay_between_batches_seconds", 3))
    now = int(time.time())

    for i in range(0, len(eligible), batch_size):
        batch = eligible[i:i + batch_size]
        status = send_with_retry(config, key, batch)
        if 200 <= status < 300:
            state.setdefault("last_sent", {})
            for url in batch:
                state["last_sent"][url] = now
            save_state(config, state)
        else:
            raise SystemExit(f"IndexNow batch failed with status {status}")
        if i + batch_size < len(eligible):
            time.sleep(delay)

    print("Run completed successfully.")

if __name__ == "__main__":
    main()
