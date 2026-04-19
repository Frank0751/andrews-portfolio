import { NextResponse } from "next/server";

export const revalidate = 21600;

export async function GET() {
  try {
    const res = await fetch("https://medium.com/feed/@andrewakotoaddo", {
      next: { revalidate: 21600 },
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];

    const articles = items.map((match) => {
      const item = match[1];

      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1]
        || item.match(/<title>(.*?)<\/title>/)?.[1]
        || "";

      const link = item.match(/<link>(.*?)<\/link>/)?.[1]
        || item.match(/<guid[^>]*>(.*?)<\/guid>/)?.[1]
        || "";

      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";

      const content = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/)?.[1]
        || item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1]
        || "";

      // Try multiple patterns to find the cover image
      let thumb = "";

      // Pattern 1: figure tag with img
      const figureMatch = content.match(/<figure[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"[^>]*>/);
      if (figureMatch) thumb = figureMatch[1];

      // Pattern 2: first img src anywhere
      if (!thumb) {
        const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
        if (imgMatch) thumb = imgMatch[1];
      }

      // Pattern 3: medium:thumbnail or media:content
      if (!thumb) {
        const mediaMatch = item.match(/<media:content[^>]+url="([^"]+)"/);
        if (mediaMatch) thumb = mediaMatch[1];
      }

      if (!thumb) {
        const thumbnailMatch = item.match(/<medium:thumbnail[^>]+url="([^"]+)"/);
        if (thumbnailMatch) thumb = thumbnailMatch[1];
      }

      // Extract excerpt
      const excerptRaw = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      const excerpt = excerptRaw.slice(0, 180) + (excerptRaw.length > 180 ? "..." : "");

      const date = pubDate
        ? new Date(pubDate).toLocaleDateString("en-GB", { month: "short", year: "numeric" })
        : "";

      return { title, link, date, thumb, excerpt, source: "Medium" };
    });

    return NextResponse.json({ articles });
  } catch (err) {
    console.error("RSS fetch error:", err);
    return NextResponse.json({ articles: [] });
  }
}