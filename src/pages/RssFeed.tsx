import { useEffect } from "react";
import { blogPosts } from "@/data/blogData";

const RssFeed = () => {
  useEffect(() => {
    const rssXml = generateRssXml();
    const blob = new Blob([rssXml], { type: "application/rss+xml; charset=utf-8" });
    const url = URL.createObjectURL(blob);

    // Replace the current document with the RSS XML
    document.open("application/rss+xml");
    document.write(rssXml);
    document.close();

    return () => URL.revokeObjectURL(url);
  }, []);

  return null;
};

function generateRssXml(): string {
  const siteUrl = "https://shahababbasi.com";
  const items = blogPosts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Shahab Abbasi – SEO Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Expert SEO tips, strategies, and guides by Shahab Abbasi covering keyword research, link building, technical SEO, local SEO, e-commerce optimization, and AI-powered search strategies.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/favicon-512.png</url>
      <title>Shahab Abbasi – SEO Blog</title>
      <link>${siteUrl}/blog</link>
    </image>
${items}
  </channel>
</rss>`;
}

export default RssFeed;
