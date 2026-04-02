import { useEffect } from "react";
import { blogPosts } from "@/data/blogData";

const imageMap: Record<string, string> = {
  "seo-strategy": "/assets/blog/seo-strategy.jpg",
  "technical-seo": "/assets/blog/technical-seo.jpg",
  "local-seo": "/assets/blog/local-seo.jpg",
  "ecommerce-seo": "/assets/blog/ecommerce-seo.jpg",
  "link-building": "/assets/blog/link-building.jpg",
  "content-marketing": "/assets/blog/content-marketing.jpg",
  "google-updates": "/assets/blog/google-updates.jpg",
  "keyword-research": "/assets/blog/keyword-research.jpg",
  "on-page-seo": "/assets/blog/on-page-seo.jpg",
  "ai-seo": "/assets/blog/ai-seo.jpg",
};

const RssFeed = () => {
  useEffect(() => {
    const rssXml = generateRssXml();
    document.open("application/rss+xml");
    document.write(rssXml);
    document.close();
  }, []);

  return null;
};

function generateRssXml(): string {
  const siteUrl = "https://shahababbasi.com";
  const items = blogPosts
    .map((post) => {
      const imgPath = imageMap[post.image] || "";
      const imgUrl = imgPath ? `${siteUrl}${imgPath}` : "";
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>${imgUrl ? `
      <enclosure url="${imgUrl}" type="image/jpeg" length="0"/>
      <media:content url="${imgUrl}" medium="image" type="image/jpeg"/>
      <media:thumbnail url="${imgUrl}"/>` : ""}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/">
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
