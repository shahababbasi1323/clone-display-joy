import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CopyButton, ScoreDisplay } from "@/components/tools/ToolUiPrimitives";

export const EmailSubjectLineTester = () => {
  const [subject, setSubject] = useState("");
  const powerWords = ["free","new","proven","secret","exclusive","limited","urgent","breaking","important","alert","warning","instant","guaranteed","announcing","introducing","discover","unlock","revealed","finally","last chance"];
  const spamWords = ["buy now","act now","click here","limited time","congratulations","winner","100% free","no cost","risk free","satisfaction guaranteed","as seen on","call now","order now","subscribe","credit card","cash","dollar","earn money","make money","income"];
  const words = subject.toLowerCase().split(/\s+/);
  const hasPower = words.filter(w => powerWords.includes(w)).length;
  const hasSpam = words.filter(w => spamWords.some(s => subject.toLowerCase().includes(s))).length;
  const hasPersonalization = /\[|{|name|you|your/i.test(subject);
  const hasEmoji = /[\u{1F300}-\u{1FAFF}]/u.test(subject);
  const hasNumber = /\d/.test(subject);
  const lenScore = subject.length >= 30 && subject.length <= 50 ? 25 : subject.length >= 20 && subject.length <= 60 ? 15 : 5;
  const score = Math.min(100, lenScore + (hasPower ? 20 : 0) + (hasPersonalization ? 15 : 0) + (hasNumber ? 10 : 0) + (hasEmoji ? 5 : 0) + (hasSpam ? -20 : 15) + 10);

  return (
    <div className="space-y-6 max-w-2xl">
      <Input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Enter your email subject line..." className="text-lg" />
      {subject && (
        <div className="space-y-4">
          <ScoreDisplay score={Math.max(0, score)} label="Subject Line Score" />
          <div className="space-y-2">
            <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">Length</span><span className={`text-sm font-medium ${subject.length >= 30 && subject.length <= 50 ? "text-accent" : "text-destructive"}`}>{subject.length} chars ({subject.length >= 30 && subject.length <= 50 ? "Ideal" : subject.length < 30 ? "Too short" : "Too long"})</span></div>
            <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">Power Words</span><span className={`text-sm font-medium ${hasPower ? "text-accent" : "text-muted-foreground"}`}>{hasPower ? `${hasPower} found ✓` : "None"}</span></div>
            <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">Spam Triggers</span><span className={`text-sm font-medium ${hasSpam ? "text-destructive" : "text-accent"}`}>{hasSpam ? `${hasSpam} found ✗` : "Clean ✓"}</span></div>
            <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">Personalization</span><span className={`text-sm font-medium ${hasPersonalization ? "text-accent" : "text-muted-foreground"}`}>{hasPersonalization ? "Yes ✓" : "No"}</span></div>
            <div className="glass rounded-lg p-3 flex justify-between"><span className="text-sm">Number</span><span className={`text-sm font-medium ${hasNumber ? "text-accent" : "text-muted-foreground"}`}>{hasNumber ? "Yes ✓" : "No"}</span></div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ColdEmailGenerator = () => {
  const [purpose, setPurpose] = useState("guest-post");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("");
  const templates: Record<string, string[]> = {
    "guest-post": [
      `Subject: Content Collaboration with ${company || "[Company]"}\n\nHi${name ? ` ${name}` : ""},\n\nI've been following ${company || "your company"}'s content on ${topic || "[topic]"} and really enjoyed your recent posts.\n\nI'd love to contribute a guest article that would provide value to your audience. I have expertise in ${topic || "[your expertise]"} and have been published on several industry sites.\n\nWould you be open to a quick chat about potential topics?\n\nBest,\n[Your Name]`,
    ],
    "link-building": [
      `Subject: Resource suggestion for ${company || "your"} ${topic || "article"}\n\nHi${name ? ` ${name}` : ""},\n\nI was reading your article about ${topic || "[topic]"} and found it incredibly helpful.\n\nI recently published a comprehensive guide on a related topic that might complement your resource. It covers [specific angle] with original data.\n\nWould you consider adding it as a reference? Here's the link: [Your URL]\n\nThanks for your time,\n[Your Name]`,
    ],
    "partnership": [
      `Subject: Partnership idea - ${topic || "mutual growth"}\n\nHi${name ? ` ${name}` : ""},\n\nI'm reaching out from [Your Company]. We work in the ${topic || "[industry]"} space and I believe there could be great synergy between our companies.\n\nSpecifically, I was thinking we could [co-create content / cross-promote / joint webinar].\n\nWould you have 15 minutes this week for a quick call?\n\nBest regards,\n[Your Name]`,
    ],
  };

  const emails = templates[purpose] || [];

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {[["guest-post","Guest Post"],["link-building","Link Building"],["partnership","Partnership"]].map(([val, label]) => (
          <Button key={val} variant={purpose === val ? "default" : "outline"} size="sm" onClick={() => setPurpose(val)}>{label}</Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Contact name" />
        <Input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company name" />
        <Input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Topic/niche" />
      </div>
      {emails.map((email, i) => (
        <div key={i} className="glass rounded-xl p-4">
          <div className="flex justify-end mb-2"><CopyButton text={email} /></div>
          <pre className="text-xs whitespace-pre-wrap text-muted-foreground">{email}</pre>
        </div>
      ))}
    </div>
  );
};
