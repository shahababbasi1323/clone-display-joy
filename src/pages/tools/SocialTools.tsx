import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton, StatCard } from "@/components/tools/ToolUiPrimitives";

const toBold = (text: string) => {
  const boldMap: Record<string, string> = {};
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("").forEach((c, i) => {
    const bold = "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵";
    boldMap[c] = [...bold][i];
  });
  return text.split("").map(c => boldMap[c] || c).join("");
};

export const LinkedInPostFormatter = () => {
  const [text, setText] = useState("");
  const [boldText, setBoldText] = useState("");
  const charCount = text.length;
  const hashtagInput = text.match(/#\w+/g) || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div><label className="text-sm font-medium mb-1.5 flex justify-between"><span>Post Text</span><span className={charCount > 3000 ? "text-destructive" : "text-muted-foreground"}>{charCount}/3000</span></label>
          <Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Write your LinkedIn post..." rows={12} /></div>
        <div><label className="text-sm font-medium mb-1.5 block">Text to Bold</label>
          <div className="flex gap-2"><Input value={boldText} onChange={e => setBoldText(e.target.value)} placeholder="Enter text to make bold" /><CopyButton text={toBold(boldText)} /></div>
          {boldText && <p className="mt-2 text-sm glass rounded-lg p-2">{toBold(boldText)}</p>}
        </div>
        <div><p className="text-sm font-medium mb-2">Quick Emojis</p>
          <div className="flex flex-wrap gap-2">{["🚀","💡","✅","🔥","📈","💪","🎯","⭐","🏆","📌","👉","❌","✨","🤝","📊"].map(e => <button key={e} onClick={() => setText(text + e)} className="text-xl hover:scale-125 transition-transform">{e}</button>)}</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-2"><span className="text-sm font-medium">Preview</span><CopyButton text={text} /></div>
        <div className="glass rounded-xl p-4 whitespace-pre-wrap text-sm min-h-[200px]">{text || "Your post preview..."}</div>
        {hashtagInput.length > 0 && <p className="text-xs text-muted-foreground mt-2">Hashtags: {hashtagInput.join(" ")}</p>}
      </div>
    </div>
  );
};

export const LinkedInHeadlineGenerator = () => {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [industry, setIndustry] = useState("");
  const headlines = role ? [
    `${role} | ${skills || "Expert"} | Helping ${industry || "businesses"} grow`,
    `${role} → ${skills || "Specialist"} in ${industry || "your industry"}`,
    `Experienced ${role} | ${skills || "Professional"} | ${industry || "Industry"} enthusiast`,
    `${role} 🚀 ${skills || "Helping"} ${industry || "companies"} achieve results`,
    `${role} | ${skills || "Driven"} professional passionate about ${industry || "growth"}`,
    `Your go-to ${role} for ${skills || "exceptional"} ${industry || "results"}`,
  ] : [];

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-3">
        <div><label className="text-sm font-medium mb-1 block">Your Role/Title</label><Input value={role} onChange={e => setRole(e.target.value)} placeholder="e.g. Marketing Manager" /></div>
        <div><label className="text-sm font-medium mb-1 block">Key Skills</label><Input value={skills} onChange={e => setSkills(e.target.value)} placeholder="e.g. SEO, Content Strategy, Growth" /></div>
        <div><label className="text-sm font-medium mb-1 block">Industry</label><Input value={industry} onChange={e => setIndustry(e.target.value)} placeholder="e.g. SaaS, Healthcare, Finance" /></div>
      </div>
      {headlines.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Generated Headlines (220 char max)</p>
          {headlines.map((h, i) => (
            <div key={i} className="glass rounded-lg p-3 flex justify-between items-center gap-2">
              <span className="text-sm flex-1">{h.slice(0, 220)}</span>
              <span className={`text-xs shrink-0 ${h.length > 220 ? "text-destructive" : "text-muted-foreground"}`}>{h.length}/220</span>
              <CopyButton text={h.slice(0, 220)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const LinkedInSummaryGenerator = () => {
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [passion, setPassion] = useState("");
  const summary = role ? `As a ${role} with ${experience || "extensive"} experience, I specialize in ${skills || "delivering exceptional results"}.\n\n${passion ? `I'm passionate about ${passion} and ` : "I "}believe in driving measurable outcomes for every project I take on.\n\nThroughout my career, I've helped organizations achieve their goals through strategic thinking, data-driven decisions, and a commitment to excellence.\n\n🔹 ${skills ? skills.split(",").map(s => s.trim()).join("\n🔹 ") : "Strategic Planning\n🔹 Team Leadership\n🔹 Growth Strategy"}\n\nLet's connect! I'm always open to discussing new opportunities and collaborations.\n\n📩 Feel free to reach out.` : "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-3">
        <div><label className="text-sm font-medium mb-1 block">Current Role</label><Input value={role} onChange={e => setRole(e.target.value)} placeholder="e.g. Senior SEO Consultant" /></div>
        <div><label className="text-sm font-medium mb-1 block">Years of Experience</label><Input value={experience} onChange={e => setExperience(e.target.value)} placeholder="e.g. 8+ years of" /></div>
        <div><label className="text-sm font-medium mb-1 block">Key Skills (comma-separated)</label><Input value={skills} onChange={e => setSkills(e.target.value)} placeholder="SEO, Content Strategy, Analytics" /></div>
        <div><label className="text-sm font-medium mb-1 block">What You're Passionate About</label><Input value={passion} onChange={e => setPassion(e.target.value)} placeholder="helping businesses grow online" /></div>
      </div>
      <div>
        {summary && (
          <div>
            <div className="flex justify-between mb-2"><span className="text-sm font-medium">Generated About Section</span><CopyButton text={summary} /></div>
            <div className="glass rounded-xl p-4 whitespace-pre-wrap text-sm">{summary}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export const TwitterThreadFormatter = () => {
  const [text, setText] = useState("");
  const tweets: string[] = [];
  if (text) {
    const words = text.split(/\s+/);
    let current = "";
    words.forEach(w => {
      if ((current + " " + w).trim().length <= 270) { current = (current + " " + w).trim(); }
      else { if (current) tweets.push(current); current = w; }
    });
    if (current) tweets.push(current);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <label className="text-sm font-medium mb-1.5 block">Long Text</label>
        <Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your long text to split into tweet-sized chunks..." rows={16} />
      </div>
      <div>
        <div className="flex justify-between mb-3"><p className="text-sm font-medium">{tweets.length} tweets</p><CopyButton text={tweets.map((t, i) => `${i + 1}/${tweets.length} ${t}`).join("\n\n")} /></div>
        <div className="space-y-3 max-h-[500px] overflow-auto">
          {tweets.map((tweet, i) => (
            <div key={i} className="glass rounded-xl p-4">
              <div className="flex justify-between text-xs text-muted-foreground mb-2"><span>{i + 1}/{tweets.length}</span><span>{tweet.length}/280</span></div>
              <p className="text-sm">{tweet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SIZES = [
  { platform: "LinkedIn", sizes: [{ name: "Profile Photo", w: 400, h: 400 }, { name: "Cover Image", w: 1584, h: 396 }, { name: "Shared Post", w: 1200, h: 627 }] },
  { platform: "Twitter/X", sizes: [{ name: "Profile Photo", w: 400, h: 400 }, { name: "Header", w: 1500, h: 500 }, { name: "In-stream", w: 1600, h: 900 }] },
  { platform: "Instagram", sizes: [{ name: "Square Post", w: 1080, h: 1080 }, { name: "Portrait", w: 1080, h: 1350 }, { name: "Story/Reel", w: 1080, h: 1920 }] },
  { platform: "Facebook", sizes: [{ name: "Profile Photo", w: 170, h: 170 }, { name: "Cover Photo", w: 820, h: 312 }, { name: "Shared Image", w: 1200, h: 630 }] },
  { platform: "YouTube", sizes: [{ name: "Thumbnail", w: 1280, h: 720 }, { name: "Channel Art", w: 2560, h: 1440 }, { name: "Profile", w: 800, h: 800 }] },
  { platform: "TikTok", sizes: [{ name: "Profile Photo", w: 200, h: 200 }, { name: "Video", w: 1080, h: 1920 }] },
  { platform: "Pinterest", sizes: [{ name: "Standard Pin", w: 1000, h: 1500 }, { name: "Square Pin", w: 1000, h: 1000 }] },
];

export const SocialMediaImageSizeGuide = () => (
  <div className="space-y-6">
    {SIZES.map(p => (
      <div key={p.platform} className="glass rounded-xl p-4">
        <h3 className="font-semibold mb-3">{p.platform}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {p.sizes.map(s => (
            <div key={s.name} className="bg-muted/50 rounded-lg p-3 text-center">
              <p className="text-sm font-medium">{s.name}</p>
              <p className="text-lg font-bold text-accent">{s.w} × {s.h}</p>
              <p className="text-xs text-muted-foreground">{(s.w / s.h).toFixed(2)}:1 ratio</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const HashtagGenerator = () => {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("instagram");
  const base = topic.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);
  const tags = topic ? [
    `#${base.join("")}`,
    ...base.map(w => `#${w}`),
    `#${base.join("")}tips`,
    `#${base[0] || ""}life`,
    `#${base[0] || ""}goals`,
    `#${base.join("")}strategy`,
    `#${base[0] || ""}expert`,
    `#${base.join("")}marketing`,
    "#trending", "#viral", "#growth", "#success", "#motivation",
  ].filter((v, i, a) => a.indexOf(v) === i && v.length > 1).slice(0, platform === "twitter" ? 5 : 30) : [];

  return (
    <div className="space-y-6 max-w-2xl">
      <Input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Enter your topic or keywords..." className="text-lg" />
      <div className="flex gap-2">{["instagram","twitter","linkedin","tiktok"].map(p => <Button key={p} variant={platform === p ? "default" : "outline"} size="sm" onClick={() => setPlatform(p)} className="capitalize">{p}</Button>)}</div>
      {tags.length > 0 && (
        <div>
          <div className="flex justify-between mb-2"><span className="text-sm font-medium">{tags.length} hashtags</span><CopyButton text={tags.join(" ")} /></div>
          <div className="glass rounded-xl p-4 flex flex-wrap gap-2">{tags.map(t => <span key={t} className="text-sm text-accent">{t}</span>)}</div>
        </div>
      )}
    </div>
  );
};

export const InstagramBioGenerator = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [niche, setNiche] = useState("");
  const bios = name ? [
    `${role || "Creator"} ✨ ${niche || "Living life"} 🌟 ${name}`,
    `${name} | ${role || "Dreamer"} 💫 ${niche || "Making things happen"} 👇`,
    `🚀 ${role || "Professional"} | ${niche || "Sharing my journey"}\n📩 DM for collabs\n🔗 Link below`,
    `${name} ✦ ${role || ""}\n${niche || "Content you'll love"} 💖\n📍 Worldwide`,
    `Hey, I'm ${name}! 👋\n${role || "Creator"} × ${niche || "Explorer"}\n✨ Let's connect!`,
  ] : [];

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-3">
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
        <Input value={role} onChange={e => setRole(e.target.value)} placeholder="Your role (e.g. Photographer)" />
        <Input value={niche} onChange={e => setNiche(e.target.value)} placeholder="Your niche (e.g. Travel & Adventure)" />
      </div>
      {bios.length > 0 && (
        <div className="space-y-3">
          {bios.map((bio, i) => (
            <div key={i} className="glass rounded-xl p-4">
              <div className="flex justify-between mb-2"><span className={`text-xs ${bio.length > 150 ? "text-destructive" : "text-muted-foreground"}`}>{bio.length}/150</span><CopyButton text={bio} /></div>
              <p className="text-sm whitespace-pre-wrap">{bio}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const SLOTS = [
  { time: "9:00 AM", platform: "LinkedIn", type: "Industry insight" },
  { time: "12:00 PM", platform: "Instagram", type: "Behind the scenes" },
  { time: "3:00 PM", platform: "Twitter/X", type: "Quick tip/thread" },
  { time: "6:00 PM", platform: "Facebook", type: "Community engagement" },
];

export const SocialPostCalendar = () => {
  const [week, setWeek] = useState<Record<string, Record<string, string>>>({});
  const getVal = (day: string, slot: string) => week[day]?.[slot] || "";
  const setVal = (day: string, slot: string, val: string) => setWeek({ ...week, [day]: { ...week[day], [slot]: val } });

  return (
    <div className="space-y-6 overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-8 gap-1 mb-2">
          <div className="text-xs font-medium p-2">Time</div>
          {DAYS.map(d => <div key={d} className="text-xs font-medium p-2 text-center">{d.slice(0, 3)}</div>)}
        </div>
        {SLOTS.map(slot => (
          <div key={slot.time} className="grid grid-cols-8 gap-1 mb-1">
            <div className="glass rounded-lg p-2">
              <p className="text-xs font-medium">{slot.time}</p>
              <p className="text-[10px] text-muted-foreground">{slot.platform}</p>
            </div>
            {DAYS.map(day => (
              <input key={day} value={getVal(day, slot.time)} onChange={e => setVal(day, slot.time, e.target.value)} placeholder={slot.type} className="glass rounded-lg p-2 text-xs w-full focus:outline-none focus:ring-1 focus:ring-accent" />
            ))}
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">💡 Best posting times: LinkedIn (Tue-Thu 9-11 AM), Instagram (Mon-Fri 11 AM-1 PM), Twitter (Wed-Fri 9-11 AM)</p>
    </div>
  );
};
