import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { client } from "@/lib/sanity";

export const revalidate = 21600;

const topics = [
  "Shared Value", "SME Development", "AfCFTA", "Intra-African Trade",
  "Ecosystem Building", "Climate Innovation", "Social Entrepreneurship",
  "Digital Innovation", "Youth and SDGs", "Pan-African Development",
];

type Article = {
  title: string;
  link: string;
  date: string;
  thumb: string;
  excerpt: string;
  source: string;
};

const fallbackManualArticles: Article[] = [
  {
    source: "LinkedIn",
    date: "Jul 2025",
    title: "Beyond Buzzwords",
    excerpt: "Translating EU-Africa SME Summit insights into action for a connected continent.",
    link: "https://www.linkedin.com/pulse/beyond-buzzwords-translating-eu-africa-sme-summit-andrews-akoto-addo-jwcof/",
    thumb: "https://miro.medium.com/v2/resize:fill:320:214/1*hOYobDq9EngvmvLaMiF3mA.jpeg",
  },
  {
    source: "Discourse Channel",
    date: "2025",
    title: "The Polyglot Powerhouse",
    excerpt: "A feature on Andrews Akoto-Addo and his work as a Pan-African social entrepreneur, ecosystem builder and conference host.",
    link: "https://blog.discoursechannel.com/the-polyglot-powerhouse/",
    thumb: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776620236/Polyglot_m9dpce.png",
  },
];

async function getMediumArticles(): Promise<Article[]> {
  try {
    const res = await fetch("https://medium.com/feed/@andrewakotoaddo", {
      next: { revalidate: 21600 },
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
    return items.map((match) => {
      const item = match[1];
      const title = (item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || item.match(/<title>(.*?)<\/title>/)?.[1] || "").trim();
      const link = (item.match(/<link>(.*?)<\/link>/)?.[1] || item.match(/<guid[^>]*>(.*?)<\/guid>/)?.[1] || "").trim();
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
      const content = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/)?.[1] || item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] || "";
      let thumb = "";
      const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
      if (imgMatch) thumb = imgMatch[1];
      if (!thumb) { const mediaMatch = item.match(/<media:content[^>]+url="([^"]+)"/); if (mediaMatch) thumb = mediaMatch[1]; }
      const plain = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      const excerpt = plain.length > 180 ? plain.slice(0, 180) + "..." : plain;
      const date = pubDate ? new Date(pubDate).toLocaleDateString("en-GB", { month: "short", year: "numeric" }) : "";
      return { title, link, date, thumb, excerpt, source: "Medium" };
    }).filter(a => a.title && a.link);
  } catch {
    return [];
  }
}

async function getManualArticles(): Promise<Article[]> {
  try {
    const sanityArticles = await client.fetch(`
      *[_type == "article"] | order(order asc) {
        _id, title, source, date, excerpt, link
      }
    `);
    if (sanityArticles.length > 0) {
      return sanityArticles.map((a: any) => ({
        title: a.title,
        link: a.link,
        date: a.date,
        thumb: "",
        excerpt: a.excerpt,
        source: a.source,
      }));
    }
    return fallbackManualArticles;
  } catch {
    return fallbackManualArticles;
  }
}

export default async function Writing() {
  const [mediumArticles, manualArticles] = await Promise.all([
    getMediumArticles(),
    getManualArticles(),
  ]);

  const allArticles: Article[] = [...mediumArticles, ...manualArticles];
  const featured = allArticles[0];
  const rest = allArticles.slice(1);

  return (
    <main>
      <style>{`
        .page-hero-grid { display: grid; grid-template-columns: 1fr 420px; gap: 3rem; align-items: center; }
        .page-hero-photo { position: relative; height: 500px; }
        @media (max-width: 900px) {
          .page-hero-grid { grid-template-columns: 1fr; }
          .page-hero-photo { height: 320px; margin-top: 2rem; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: "#0a1628", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,165,195,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,165,195,0.04) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
          <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse 70% 80% at 80% 40%, rgba(0,165,195,0.08) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "33%", height: "50%", background: "radial-gradient(ellipse 60% 60% at 20% 80%, rgba(201,145,42,0.06) 0%, transparent 60%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "8rem 0 4rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
            <div className="page-hero-grid">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
                  <span style={{ color: "#C9912A", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Thought Leadership</span>
                </div>
                <h1 style={{ fontFamily: "var(--font-heading)", lineHeight: 1.05, marginBottom: "1.2rem", fontSize: "clamp(2.8rem,5vw,4.5rem)", color: "#ffffff", fontWeight: 700 }}>
                  Ideas Worth<br />
                  <em style={{ color: "#C9912A" }}>Sharing</em>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "30rem", marginBottom: "2rem", fontSize: "1rem" }}>
                  Perspectives on Pan-African development, shared value, SME growth, and the systems that shape the continent&apos;s future.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                  {topics.slice(0, 5).map((t) => (
                    <span key={t} style={{ fontSize: "0.72rem", padding: "0.3rem 0.85rem", borderRadius: "2rem", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="https://medium.com/@andrewakotoaddo" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    Follow on Medium <HiArrowRight />
                  </Link>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", border: "1.5px solid rgba(255,255,255,0.3)", color: "#ffffff", fontWeight: 600, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    Get In Touch
                  </Link>
                </div>
              </div>
              <div className="page-hero-photo">
                <div style={{ position: "absolute", inset: 0, border: "1.5px solid rgba(201,145,42,0.25)", borderRadius: "2px", transform: "translate(10px,10px)" }} />
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: "2px" }}>
                  <Image src="https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127852/656160964_18357772666231283_2151060228362153169_n_xjbuaa.jpg" alt="Andy writing and speaking" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
                </div>
                <div style={{ position: "absolute", bottom: "-12px", left: "-16px", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>{allArticles.length}</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Published<br />Articles</span>
                  </div>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>10+</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Topics<br />Covered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "2rem", background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </div>
      </section>

      {/* ARTICLES */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem", display: "block" }}>All Writing</span>
            <h2 style={{ fontFamily: "var(--font-heading)", color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              Latest <em style={{ color: "#00739A" }}>Articles</em>
            </h2>
          </div>

          {featured && (
            <a href={featured.link} target="_blank" rel="noreferrer"
              style={{ display: "grid", gridTemplateColumns: "1fr 480px", alignItems: "center", background: "#ffffff", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", textDecoration: "none", marginBottom: "3rem" }}
            >
              <div style={{ padding: "3rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ background: "rgba(201,145,42,0.1)", color: "#C9912A", fontSize: "0.62rem", fontWeight: 700, padding: "0.25rem 0.7rem", borderRadius: "2rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Latest</span>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#C9912A", textTransform: "uppercase", letterSpacing: "0.1em" }}>{featured.source}</span>
                  <span style={{ color: "rgba(0,0,0,0.2)" }}>·</span>
                  <span style={{ fontSize: "0.78rem", color: "#4a6070" }}>{featured.date}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "#0a1628", fontSize: "clamp(1.5rem,2.5vw,2rem)", lineHeight: 1.25, marginBottom: "1rem" }}>{featured.title}</h3>
                <p style={{ color: "#4a6070", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>{featured.excerpt}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#C9912A", fontSize: "0.88rem", fontWeight: 700 }}>
                  Read Article <HiArrowRight />
                </div>
              </div>
              <div style={{ position: "relative", height: "380px", background: "#152035" }}>
                {featured.thumb && <Image src={featured.thumb} alt={featured.title} fill style={{ objectFit: "cover" }} unoptimized />}
              </div>
            </a>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {rest.map((article, i) => (
              <a key={i} href={article.link} target="_blank" rel="noreferrer"
                style={{ display: "flex", flexDirection: "column", background: "#ffffff", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", textDecoration: "none", height: "100%" }}
              >
                <div style={{ position: "relative", height: "10rem", flexShrink: 0, background: "#152035" }}>
                  {article.thumb && <Image src={article.thumb} alt={article.title} fill style={{ objectFit: "cover" }} unoptimized />}
                </div>
                <div style={{ padding: "1.3rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.62rem", fontWeight: 700, color: "#C9912A", textTransform: "uppercase", letterSpacing: "0.1em" }}>{article.source}</span>
                    <span style={{ color: "rgba(0,0,0,0.2)" }}>·</span>
                    <span style={{ fontSize: "0.72rem", color: "#4a6070" }}>{article.date}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: "#0a1628", fontSize: "1rem", lineHeight: 1.35, marginBottom: "0.5rem" }}>{article.title}</h3>
                  <p style={{ color: "#4a6070", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "0.9rem", flex: 1 }}>{article.excerpt}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", color: "#C9912A", fontSize: "0.75rem", fontWeight: 600 }}>
                    Read <HiArrowRight size={11} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section style={{ background: "#EDE8DC", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem", display: "block" }}>Topics Covered</span>
              <h2 style={{ fontFamily: "var(--font-heading)", color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
                Writing Across <em style={{ color: "#00739A" }}>the Ecosystem</em>
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", maxWidth: "500px" }}>
              {topics.map((t) => (
                <span key={t} style={{ fontSize: "0.8rem", padding: "0.4rem 1rem", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.12)", background: "#ffffff", color: "#2d3f4e", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0a1628", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)", color: "#ffffff", lineHeight: 1.15, fontSize: "clamp(1.8rem,3vw,2.5rem)", marginBottom: "0.75rem" }}>
                Read more on <em style={{ color: "#C9912A" }}>Medium</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", maxWidth: "28rem" }}>
                Follow Andy on Medium for regular perspectives on Pan-African development, shared value, and ecosystem building.
              </p>
            </div>
            <Link href="https://medium.com/@andrewakotoaddo" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.9rem", textDecoration: "none", whiteSpace: "nowrap" }}>
              Visit Medium Profile <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0a1628", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "2rem 5%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/" style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
            Andrews Akoto-Addo <span style={{ color: "#C9912A" }}>(Andy)</span>
          </Link>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>Pan-African Social Entrepreneur · Accra, Ghana</span>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem" }}>
            Built by{" "}
            <a href="https://koombei-website.vercel.app" target="_blank" rel="noreferrer" style={{ color: "#5a8fb9", textDecoration: "none" }}>KoomBei</a>
          </span>
        </div>
      </footer>
    </main>
  );
}