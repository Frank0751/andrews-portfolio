"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { MdGroups, MdHandshake, MdMic, MdLightbulb, MdTrendingUp } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import { urlFor } from "@/lib/sanity";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({ children, className = "", delay = 0, style = {} }: {
  children: React.ReactNode; className?: string; delay?: number; style?: React.CSSProperties;
}) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

const hardcodedImpactAreas = [
  { icon: <MdGroups size={32} />, title: "Ecosystem Architecture", description: "Building the infrastructure for African entrepreneurship. From startup assessment frameworks to national investor networks, Andy has helped shape the systems that allow businesses to grow.", highlights: ["Tech startup maturity assessments across Ghana", "Connecting ventures to international accelerators", "Building national SME support frameworks"] },
  { icon: <MdHandshake size={32} />, title: "Creating Shared Value", description: "Embedding the philosophy into business operations and strategies that ensure business success and community prosperity are mutually reinforced. Profit with purpose.", highlights: ["Private sector engagement strategies", "Community benefit frameworks", "Stakeholder alignment programmes"] },
  { icon: <MdMic size={32} />, title: "Stage and Platform", description: "An engaging conference host and panel moderator facilitating critical conversations at summits across Africa and beyond. Known for turning panels into genuine conversations.", highlights: ["African Climate Summit, Nairobi", "EU-Africa SME Summit", "SVAI Annual Conference", "JamiiTrade Community Events"] },
  { icon: <RiGlobalLine size={32} />, title: "Intra-African Trade", description: "Championing a curated peer-to-peer community for SME trading in Africa, reducing barriers and expanding reach under the AfCFTA framework.", highlights: ["JamiiTrade focal point for Ghana", "SME onboarding and capacity building", "AfCFTA awareness and adoption"] },
  { icon: <MdLightbulb size={32} />, title: "Youth and SDGs", description: "Through UNLEASH, facilitating innovation labs that turn personal insights into sustainable development solutions. Bridging the gap between young people and systemic change.", highlights: ["UNLEASH Global Innovation Lab facilitator", "SDG-focused solution development", "Youth leadership programme design"] },
  { icon: <MdTrendingUp size={32} />, title: "Startup Growth", description: "Conducting tech startup maturity assessments across Ghana, connecting promising ventures to international programmes and building the next generation of African enterprises.", highlights: ["Ghana Climate Innovation Centre", "Startup assessment frameworks", "International programme linkages"] },
];

const hardcodedNumbers = [
  { num: "12+", label: "Years of Social Entrepreneurship" },
  { num: "10+", label: "Organisations Served" },
  { num: "12+", label: "Roles Held" },
  { num: "3", label: "Continents Active" },
  { num: "1000+", label: "Young Leaders Engaged" },
  { num: "5+", label: "Countries of Active Work" },
];

const hardcodedHighlights = [
  { title: "EU-Africa SME Summit", location: "Brussels, Belgium", year: "2025", description: "Represented Ghana's SME ecosystem at the EU-Africa SME Summit, facilitating dialogue between European and African business leaders on trade and investment opportunities.", image: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127496/568690701_18389482405130220_4097415862773396182_n_fpagkr.jpg" },
  { title: "African Climate Summit", location: "Nairobi, Kenya", year: "2023", description: "Participated in the first African Climate Summit, contributing to conversations on private sector engagement in Africa's climate response and green economy transition.", image: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127498/568403187_18389482339130220_7445678454955259057_n_tqzlwz.jpg" },
  { title: "UNLEASH Innovation Lab", location: "Shenzhen, China", year: "2018", description: "Facilitated an innovation lab bringing together 1,000 young leaders to develop solutions to the UN Sustainable Development Goals. A defining moment in Andy's approach to ecosystem building.", image: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127738/658877472_18584227099063671_8574493065532499635_n_zg28od.jpg" },
];

const iconMap: Record<string, React.ReactNode> = {
  "Ecosystem Architecture": <MdGroups size={32} />,
  "Creating Shared Value": <MdHandshake size={32} />,
  "Stage and Platform": <MdMic size={32} />,
  "Intra-African Trade": <RiGlobalLine size={32} />,
  "Youth and SDGs": <MdLightbulb size={32} />,
  "Startup Growth": <MdTrendingUp size={32} />,
};

export default function ImpactClient({ impact: sanityImpact }: { impact: any[] }) {
  const sanityAreas = sanityImpact.filter((i: any) => i.category === "Impact Area");
  const sanityMoments = sanityImpact.filter((i: any) => i.category === "Key Moment");
  const sanityStats = sanityImpact.filter((i: any) => i.category === "Stat");

  const impactAreas = sanityAreas.length > 0
    ? sanityAreas.map((a: any) => ({
        icon: iconMap[a.title] || <MdGroups size={32} />,
        title: a.title,
        description: a.description,
        highlights: [],
      }))
    : hardcodedImpactAreas;

  const numbers = sanityStats.length > 0
    ? sanityStats.map((s: any) => ({ num: s.stat, label: s.title }))
    : hardcodedNumbers;

  const highlights = sanityMoments.length > 0
    ? sanityMoments.map((m: any) => ({
        title: m.title,
        location: "",
        year: "",
        description: m.description,
        image: m.image ? urlFor(m.image).width(760).url() : hardcodedHighlights[0].image,
      }))
    : hardcodedHighlights;

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
                <div className="animate-fade-up delay-1" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
                  <span style={{ color: "#C9912A", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Impact</span>
                </div>
                <h1 className="animate-fade-up delay-2 font-serif" style={{ lineHeight: 1.05, marginBottom: "1.2rem", fontSize: "clamp(2.8rem,5vw,4.5rem)", color: "#ffffff", fontWeight: 700 }}>
                  Creating<br />
                  <em style={{ color: "#C9912A" }}>Lasting Change</em>
                </h1>
                <p className="animate-fade-up delay-3" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "30rem", marginBottom: "2rem", fontSize: "1rem" }}>
                  From Accra to Shenzhen, to Stockholm, to Johannesburg, to Kigali, to Rabat. The work spans borders, sectors, and generations.
                </p>
                <div className="animate-fade-up delay-4" style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                  <Link href="/experience" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    View Experience <HiArrowRight />
                  </Link>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", border: "1.5px solid rgba(255,255,255,0.3)", color: "#ffffff", fontWeight: 600, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    Work Together
                  </Link>
                </div>
              </div>
              <div className="animate-fade-in delay-3 page-hero-photo">
                <div style={{ position: "absolute", inset: 0, border: "1.5px solid rgba(201,145,42,0.25)", borderRadius: "2px", transform: "translate(10px,10px)" }} />
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: "2px" }}>
                  <Image src="https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127739/640444919_17976286100834819_9105085867200179719_n_zmqpet.jpg" alt="Andy creating impact" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
                </div>
                <div style={{ position: "absolute", bottom: "-12px", left: "-16px", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>3</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Continents<br />of Active Work</span>
                  </div>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>1000+</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Young Leaders<br />Engaged</span>
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

      {/* NUMBERS */}
      <div style={{ background: "#152035", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(6,1fr)" }}>
          {numbers.map((s: any, i: number, arr: any[]) => (
            <div key={i} style={{ padding: "1.6rem 1rem", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 700, color: "#C9912A", lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.62rem", marginTop: "0.3rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* IMPACT AREAS */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ textAlign: "center", maxWidth: "40rem", margin: "0 auto 4rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "block" }}>Impact Areas</span>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, marginBottom: "1rem", fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              Where the Work <em style={{ color: "#00739A" }}>Happens</em>
            </h2>
            <p style={{ color: "#4a6070", lineHeight: 1.7 }}>Six dimensions of impact that together create ecosystems where African businesses and their communities thrive.</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {impactAreas.map((area: any, i: number) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: "#ffffff", borderRadius: "16px", padding: "2rem", border: "1px solid rgba(0,0,0,0.08)", height: "100%", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#C9912A"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(201,145,42,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "10px", background: "rgba(201,145,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9912A", marginBottom: "1.2rem" }}>
                    {area.icon}
                  </div>
                  <h3 className="font-serif" style={{ fontWeight: 600, color: "#0a1628", fontSize: "1.1rem", marginBottom: "0.75rem", lineHeight: 1.3 }}>{area.title}</h3>
                  <p style={{ color: "#4a6070", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>{area.description}</p>
                  {area.highlights && area.highlights.length > 0 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      {area.highlights.map((h: string) => (
                        <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                          <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9912A", flexShrink: 0, marginTop: "0.35rem" }} />
                          <span style={{ color: "#2d3f4e", fontSize: "0.8rem", lineHeight: 1.5 }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KEY MOMENTS */}
      <section style={{ background: "#EDE8DC", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ textAlign: "center", maxWidth: "40rem", margin: "0 auto 4rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "block" }}>Key Moments</span>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              Defining <em style={{ color: "#00739A" }}>Engagements</em>
            </h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {highlights.map((item: any, i: number) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 380px" : "380px 1fr", gap: "3rem", alignItems: "center", background: "#ffffff", borderRadius: "20px", padding: "2.5rem", border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                      {item.year && <span style={{ background: "rgba(201,145,42,0.1)", color: "#C9912A", fontSize: "0.7rem", fontWeight: 700, padding: "0.3rem 0.8rem", borderRadius: "2rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.year}</span>}
                      {item.location && <span style={{ color: "#4a6070", fontSize: "0.82rem", display: "flex", alignItems: "center" }}>{item.location}</span>}
                    </div>
                    <h3 className="font-serif" style={{ fontWeight: 600, color: "#0a1628", fontSize: "1.4rem", marginBottom: "1rem", lineHeight: 1.3 }}>{item.title}</h3>
                    <p style={{ color: "#4a6070", fontSize: "0.9rem", lineHeight: 1.75 }}>{item.description}</p>
                  </div>
                  <div style={{ order: i % 2 === 0 ? 2 : 1, position: "relative", height: "260px", borderRadius: "12px", overflow: "hidden" }}>
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} unoptimized />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#152035", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(201,145,42,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", zIndex: 10, maxWidth: "40rem", margin: "0 auto", padding: "0 5%", textAlign: "center" }}>
          <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem", display: "block" }}>Work Together</span>
          <h2 className="font-serif" style={{ color: "#ffffff", lineHeight: 1.15, marginBottom: "1.5rem", fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
            Let&apos;s Create Impact <em style={{ color: "#C9912A" }}>Together</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "1rem" }}>
            Open to conversations about partnerships, speaking engagements, ecosystem building, and shared value opportunities across Africa.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.9rem", textDecoration: "none" }}>
              Get In Touch <HiArrowRight />
            </Link>
            <Link href="/writing" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", border: "1.5px solid rgba(255,255,255,0.25)", color: "#ffffff", fontWeight: 600, borderRadius: "3rem", fontSize: "0.9rem", textDecoration: "none" }}>
              Read My Writing
            </Link>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0a1628", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "2rem 5%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/" className="font-serif" style={{ fontSize: "1.1rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
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