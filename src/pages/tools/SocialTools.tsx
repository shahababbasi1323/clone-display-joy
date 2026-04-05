import { useState, useRef, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton, StatCard } from "@/components/tools/ToolUiPrimitives";
import { Bold, Italic, Underline, Strikethrough, AtSign, List, ListOrdered, Undo, Redo, Hash, ThumbsUp, MessageCircle, Repeat2, Send } from "lucide-react";

const UNICODE_MAPS = {
  bold: Object.fromEntries(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("").map((c, i) => [c, [..."𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵"][i]])
  ),
  italic: Object.fromEntries(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("").map((c, i) => [c, [..."𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻"][i]])
  ),
  underline: (text: string) => text.split("").map(c => c + "\u0332").join(""),
  strikethrough: (text: string) => text.split("").map(c => c + "\u0336").join(""),
};

const applyUnicode = (text: string, type: "bold" | "italic") => {
  const map = UNICODE_MAPS[type];
  return text.split("").map(c => map[c] || c).join("");
};

const WRITING_STYLES: { name: string; desc: string; transform: (text: string) => string }[] = [
  { name: "Professional", desc: "Polished, formal tone for business audiences", transform: (t) => t },
  { name: "Casual", desc: "Friendly, conversational tone for engagement", transform: (t) => t.replace(/\. /g, "! ").replace(/\.$/g, "! ") },
  { name: "Storytelling", desc: "Narrative-driven, hook-based format", transform: (t) => {
    const lines = t.split("\n").filter(Boolean);
    if (lines.length <= 1) return `Here's a story that changed my perspective:\n\n${t}\n\n↓ (thread below)`;
    return `${lines[0]}\n\n${lines.slice(1).join("\n\n")}\n\n♻ Repost if this resonated.`;
  }},
  { name: "List Format", desc: "Numbered points for maximum readability", transform: (t) => {
    const sentences = t.split(/[.!?]+/).filter(s => s.trim());
    return sentences.map((s, i) => `${i + 1}. ${s.trim()}`).join("\n\n");
  }},
];

export const LinkedInPostFormatter = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Your Name");
  const [headline, setHeadline] = useState("Your headline here");
  const [style, setStyle] = useState(0);
  const [history, setHistory] = useState<string[]>([""]);
  const [historyIdx, setHistoryIdx] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const charCount = text.length;

  const pushHistory = useCallback((newText: string) => {
    const newHistory = history.slice(0, historyIdx + 1);
    newHistory.push(newText);
    setHistory(newHistory);
    setHistoryIdx(newHistory.length - 1);
  }, [history, historyIdx]);

  const handleTextChange = (val: string) => {
    setText(val);
    pushHistory(val);
  };

  const undo = () => {
    if (historyIdx > 0) {
      const newIdx = historyIdx - 1;
      setHistoryIdx(newIdx);
      setText(history[newIdx]);
    }
  };

  const redo = () => {
    if (historyIdx < history.length - 1) {
      const newIdx = historyIdx + 1;
      setHistoryIdx(newIdx);
      setText(history[newIdx]);
    }
  };

  const wrapSelection = (type: "bold" | "italic" | "underline" | "strikethrough") => {
    const el = textareaRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = text.slice(start, end);
    if (!selected) return;

    let formatted: string;
    if (type === "bold") formatted = applyUnicode(selected, "bold");
    else if (type === "italic") formatted = applyUnicode(selected, "italic");
    else if (type === "underline") formatted = UNICODE_MAPS.underline(selected);
    else formatted = UNICODE_MAPS.strikethrough(selected);

    const newText = text.slice(0, start) + formatted + text.slice(end);
    setText(newText);
    pushHistory(newText);
  };

  const insertAtCursor = (insert: string) => {
    const el = textareaRef.current;
    if (!el) { setText(text + insert); return; }
    const pos = el.selectionStart;
    const newText = text.slice(0, pos) + insert + text.slice(pos);
    setText(newText);
    pushHistory(newText);
  };

  const addBulletList = () => insertAtCursor("\n• \n• \n• ");
  const addNumberedList = () => insertAtCursor("\n1. \n2. \n3. ");

  const applyStyle = () => {
    const transformed = WRITING_STYLES[style].transform(text);
    setText(transformed);
    pushHistory(transformed);
  };

  const previewText = text || "Start writing and your post will appear here..";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Panel — Editor */}
      <div className="space-y-5">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="text-accent">in</span> Write here...
        </h3>

        {/* Toolbar */}
        <div className="glass rounded-lg p-2 flex flex-wrap gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => wrapSelection("bold")} title="Bold"><Bold className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => wrapSelection("italic")} title="Italic"><Italic className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => wrapSelection("underline")} title="Underline"><Underline className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => wrapSelection("strikethrough")} title="Strikethrough"><Strikethrough className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertAtCursor("@")} title="Mention"><AtSign className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={addBulletList} title="Bullet List"><List className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={addNumberedList} title="Numbered List"><ListOrdered className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={undo} title="Undo" disabled={historyIdx <= 0}><Undo className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={redo} title="Redo" disabled={historyIdx >= history.length - 1}><Redo className="h-4 w-4" /></Button>
        </div>

        {/* Text Area */}
        <Textarea
          ref={textareaRef}
          value={text}
          onChange={e => handleTextChange(e.target.value)}
          placeholder="Start writing and your post will appear here... Select text and use toolbar to format, or type and apply a style."
          rows={12}
          className="resize-none"
        />

        {/* Writing Style */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Writing Style</span>
            <span className={`text-xs ${charCount > 3000 ? "text-destructive" : "text-muted-foreground"}`}>{charCount}/3000</span>
          </div>
          <select
            value={style}
            onChange={e => setStyle(Number(e.target.value))}
            className="glass rounded-lg p-2.5 text-sm w-full mb-3"
          >
            {WRITING_STYLES.map((s, i) => (
              <option key={i} value={i}>{s.name} — {s.desc}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <Button size="sm" onClick={applyStyle} disabled={!text}>✨ Apply Style</Button>
            <CopyButton text={text} />
          </div>
        </div>
      </div>

      {/* Right Panel — Preview */}
      <div>
        <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
          <Hash className="h-5 w-5 text-accent" /> Post Preview
        </h3>

        <div className="glass rounded-xl overflow-hidden">
          {/* Profile header */}
          <div className="p-4 flex items-start gap-3">
            <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg shrink-0">
              {name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-sm">{name}</p>
              <p className="text-xs text-muted-foreground">{headline}</p>
              <p className="text-xs text-muted-foreground">Now • </p>
            </div>
          </div>

          {/* Post content */}
          <div className="px-4 pb-4">
            <p className="text-sm whitespace-pre-wrap">{previewText}</p>
          </div>

          {/* Engagement stats */}
          <div className="px-4 py-2 border-t border-border flex justify-between text-xs text-muted-foreground">
            <span>❤57</span>
            <span>24 comments · 6 reposts</span>
          </div>

          {/* Action buttons */}
          <div className="border-t border-border grid grid-cols-4">
            {[
              { icon: ThumbsUp, label: "Like" },
              { icon: MessageCircle, label: "Comment" },
              { icon: Repeat2, label: "Repost" },
              { icon: Send, label: "Send" },
            ].map(({ icon: Icon, label }) => (
              <button key={label} className="flex items-center justify-center gap-1.5 py-3 text-xs text-muted-foreground hover:bg-accent/5 transition-colors">
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Name / Headline inputs */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div><label className="text-xs font-medium mb-1 block">Display Name</label><Input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" /></div>
          <div><label className="text-xs font-medium mb-1 block">Headline</label><Input value={headline} onChange={e => setHeadline(e.target.value)} placeholder="Your headline" /></div>
        </div>
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
    `${role} ${skills || "Helping"} ${industry || "companies"} achieve results`,
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
  const summary = role ? `As a ${role} with ${experience || "extensive"} experience, I specialize in ${skills || "delivering exceptional results"}.\n\n${passion ? `I'm passionate about ${passion} and ` : "I "}believe in driving measurable outcomes for every project I take on.\n\nThroughout my career, I've helped organizations achieve their goals through strategic thinking, data-driven decisions, and a commitment to excellence.\n\n${skills ? skills.split(",").map(s => s.trim()).join("\n") : "Strategic Planning\nTeam Leadership\nGrowth Strategy"}\n\nLet's connect! I'm always open to discussing new opportunities and collaborations.\n\nFeel free to reach out.` : "";

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
    `${role || "Creator"} ✨ ${niche || "Living life"} ${name}`,
    `${name} | ${role || "Dreamer"} ${niche || "Making things happen"} `,
    `${role || "Professional"} | ${niche || "Sharing my journey"}\nDM for collabs\nLink below`,
    `${name} ✦ ${role || ""}\n${niche || "Content you'll love"} \nWorldwide`,
    `Hey, I'm ${name}! \n${role || "Creator"} × ${niche || "Explorer"}\n✨ Let's connect!`,
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
      <p className="text-xs text-muted-foreground">Best posting times: LinkedIn (Tue-Thu 9-11 AM), Instagram (Mon-Fri 11 AM-1 PM), Twitter (Wed-Fri 9-11 AM)</p>
    </div>
  );
};
