"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

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

function Reveal({
  children,
  className = "",
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const current = [
  {
    role: "Managing Director, Ghana",
    org: "Shared Value Africa (SVAI)",
    period: "2022 — Present",
    location: "Accra, Ghana",
    description: "Leading SVAI's operations in Ghana, driving the shared value agenda across the private sector, government, and civil society. Building ecosystems where business success and community prosperity are mutually reinforced.",
    tags: ["Shared Value", "Ecosystem Building", "Private Sector"],
  },
  {
    role: "Head of New Business",
    org: "Shared Value Africa (SVAI)",
    period: "2021 — Present",
    location: "Pan-African",
    description: "Spearheading business development and partnership linkages across the African continent. Identifying and securing new opportunities that advance the shared value mission.",
    tags: ["Business Development", "Partnerships", "Fundraising"],
  },
  {
    role: "Ghana Focal Point",
    org: "JamiiTrade Africa",
    period: "2023 — Present",
    location: "Accra, Ghana",
    description: "Championing intra-African trade by connecting Ghanaian SMEs to the JamiiTrade peer-to-peer trading platform. Reducing barriers and expanding market access across the continent.",
    tags: ["Intra-African Trade", "SME Development", "AfCFTA"],
  },
  {
    role: "Conference Host and Panel Moderator",
    org: "Independent",
    period: "2018 — Present",
    location: "Pan-African",
    description: "An engaging conference host and panel moderator facilitating critical conversations at summits across Africa and beyond. Known for a warm, authoritative presence that turns panels into genuine conversations.",
    tags: ["Conference Hosting", "Panel Moderation", "Public Speaking"],
  },
];

const previous = [
  {
    role: "Programme Officer",
    org: "Ghana Climate Innovation Centre (GCIC)",
    period: "2019 — 2021",
    location: "Accra, Ghana",
    description: "Supported climate-focused entrepreneurs with business development, fundraising, and programme management. Conducted tech startup maturity assessments connecting promising ventures to international programmes.",
    tags: ["Climate Innovation", "Startups", "Programme Management"],
  },
  {
    role: "Innovation Lab Facilitator",
    org: "UNLEASH Global",
    period: "2018 — 2020",
    location: "Multiple Countries",
    description: "Facilitated innovation labs bringing together 1,000 young leaders to develop solutions to the UN Sustainable Development Goals. Guided teams from personal insights to scalable solutions.",
    tags: ["SDGs", "Innovation", "Youth Leadership"],
  },
  {
    role: "Business Development Officer",
    org: "Aspen Network of Development Entrepreneurs (ANDE)",
    period: "2017 — 2019",
    location: "Accra, Ghana",
    description: "Supported small and growing businesses across Ghana through capacity building, investor connections, and ecosystem development initiatives.",
    tags: ["SME Support", "Investor Relations", "Capacity Building"],
  },
  {
    role: "Ecosystem Advisor",
    org: "African Youth, Gender and Climate Conference",
    period: "2023 — Present",
    location: "Pan-African",
    description: "Providing advisory support on event planning, speaker selection, and conference content creation for this annual pan-African conference hosted by the Anijie Global Foundation.",
    tags: ["Advisory", "Youth", "Climate"],
  },
  {
    role: "Research and Policy Analyst",
    org: "Various Organisations",
    period: "2012 — 2016",
    location: "Ghana",
    description: "Conducted research and policy analysis across development, trade, and private sector engagement topics. Built the analytical foundation that underpins current ecosystem work.",
    tags: ["Research", "Policy", "Analysis"],
  },
  {
    role: "Community Development Officer",
    org: "Social Enterprise Ghana",
    period: "2011 — 2013",
    location: "Accra, Ghana",
    description: "Worked at the grassroots level to support community-based enterprises, building the human foundations of ecosystem thinking from the ground up.",
    tags: ["Community Development", "Social Enterprise", "Grassroots"],
  },
];

const skills = [
  { category: "Core Expertise", items: ["Business Development", "Partnership Linkages", "Fundraising", "Programme Management", "Ecosystem Building", "Shared Value Strategy"] },
  { category: "Sector Knowledge", items: ["SME Development", "AfCFTA and Intra-African Trade", "Climate Innovation", "Digital Innovation", "Social Entrepreneurship", "SDGs"] },
  { category: "Soft Skills", items: ["Conference Hosting", "Panel Moderation", "Public Speaking", "Strategic Communications", "Stakeholder Engagement", "Thought Leadership"] },
];

export default function Experience() {
  return (
    <main>
      <style>{`
        .page-hero-grid { display: grid; grid-template-columns: 1fr 420px; gap: 3rem; align-items: center; }
        .page-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .page-3col { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.2rem; }
        .page-hero-photo { position: relative; height: 500px; }
        .page-hero-matrix { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 0.6rem; height: 500px; }
        @media (max-width: 900px) {
          .page-hero-grid { grid-template-columns: 1fr; }
          .page-hero-photo { height: 320px; margin-top: 2rem; }
          .page-hero-matrix { height: 260px; margin-top: 2rem; }
          .page-2col { grid-template-columns: 1fr; gap: 2.5rem; }
          .page-3col { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .page-3col { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section style={{
        background: "#0a1628",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}>

        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(0,165,195,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,165,195,0.04) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }} />
          <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse 70% 80% at 80% 40%, rgba(0,165,195,0.08) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "33%", height: "50%", background: "radial-gradient(ellipse 60% 60% at 20% 80%, rgba(201,145,42,0.06) 0%, transparent 60%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "8rem 0 4rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
            <div className="page-hero-grid">

              {/* LEFT */}
              <div>
                <div className="animate-fade-up delay-1" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
                  
                  <span style={{ color: "#C9912A", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                    Work History
                  </span>
                </div>

                <h1 className="animate-fade-up delay-2 font-serif" style={{ lineHeight: 1.05, marginBottom: "1.2rem", fontSize: "clamp(2.8rem,5vw,4.5rem)", color: "#ffffff", fontWeight: 700 }}>
                  12 Years of<br />
                  <em style={{ fontStyle: "italic", color: "#C9912A" }}>Building Africa</em>
                </h1>

                <p className="animate-fade-up delay-3" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "30rem", marginBottom: "2rem", fontSize: "1rem" }}>
                  From grassroots community development to continental ecosystem
                  building. Every role has been a step toward a more connected,
                  prosperous Africa.
                </p>

                <div className="animate-fade-up delay-4" style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    Work Together <HiArrowRight />
                  </Link>
                  <Link href="/impact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", border: "1.5px solid rgba(255,255,255,0.3)", color: "#ffffff", fontWeight: 600, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    See Impact
                  </Link>
                </div>
              </div>

              {/* RIGHT — Photo */}
              <div className="animate-fade-in delay-3 page-hero-photo">
                <div style={{ position: "absolute", inset: 0, border: "1.5px solid rgba(201,145,42,0.25)", borderRadius: "2px", transform: "translate(10px,10px)" }} />
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: "2px" }}>
                  <Image
                    src="https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127496/568690701_18389482405130220_4097415862773396182_n_fpagkr.jpg"
                    alt="Andy at a summit"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority
                  />
                </div>
                <div style={{ position: "absolute", bottom: "-12px", left: "-16px", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "Playfair Display, serif" }}>12+</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Roles Held<br />across Career</span>
                  </div>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "Playfair Display, serif" }}>4</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Current<br />Active Roles</span>
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

      {/* ═══════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════ */}
      <div style={{ background: "#152035", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {[
            { num: "12+", label: "Years of Impact" },
            { num: "10+", label: "Organisations Served" },
            { num: "4", label: "Current Roles" },
            { num: "3", label: "Continents" },
          ].map((s, i, arr) => (
            <div key={i} style={{ padding: "1.6rem 2rem", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: "2.2rem", fontWeight: 700, color: "#C9912A", lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", marginTop: "0.3rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          CURRENT ROLES
      ═══════════════════════════════════════ */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ marginBottom: "3rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
               Currently Active
            </span>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              Present <em style={{ fontStyle: "italic", color: "#00739A" }}>Engagements</em>
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem" }}>
            {current.map((role, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "2rem",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderTop: "3px solid #C9912A",
                  height: "100%",
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(201,145,42,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", gap: "1rem" }}>
                    <div>
                      <h3 className="font-serif" style={{ fontWeight: 600, color: "#0a1628", fontSize: "1.1rem", lineHeight: 1.3, marginBottom: "0.3rem" }}>{role.role}</h3>
                      <div style={{ color: "#00739A", fontWeight: 600, fontSize: "0.88rem" }}>{role.org}</div>
                    </div>
                    <div style={{ background: "rgba(201,145,42,0.1)", color: "#C9912A", fontSize: "0.65rem", fontWeight: 700, padding: "0.3rem 0.7rem", borderRadius: "2rem", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0 }}>
                      Active
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", color: "#4a6070", fontSize: "0.8rem" }}>
                    <span>{role.period}</span>
                    <span>·</span>
                    <span>{role.location}</span>
                  </div>
                  <p style={{ color: "#4a6070", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>{role.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {role.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: "0.7rem", padding: "0.25rem 0.7rem", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.1)", background: "#F5F2EA", color: "#2d3f4e", fontWeight: 500 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PHOTO BREAK
      ═══════════════════════════════════════ */}
      <section style={{ background: "#0a1628", padding: "4rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
            {[
              "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127495/568758733_18389482435130220_2395841773803828042_n_wunghb.jpg",
              "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127496/568594050_18389482393130220_4749439351109328621_n_wbjpwh.jpg",
              "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127739/652560878_18104771914854889_1109896403652481350_n_miptga.jpg",
            ].map((src, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ position: "relative", height: "220px", borderRadius: "12px", overflow: "hidden" }}>
                  <Image src={src} alt="Andy in action" fill style={{ objectFit: "cover" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PREVIOUS ROLES
      ═══════════════════════════════════════ */}
      <section style={{ background: "#EDE8DC", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ marginBottom: "3rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
               Previous Roles
            </span>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              The <em style={{ fontStyle: "italic", color: "#00739A" }}>Journey So Far</em>
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.2rem" }}>
            {previous.map((role, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "1.8rem",
                  border: "1px solid rgba(0,0,0,0.08)",
                  height: "100%",
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#C9912A"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(201,145,42,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  <h3 className="font-serif" style={{ fontWeight: 600, color: "#0a1628", fontSize: "1rem", lineHeight: 1.3, marginBottom: "0.3rem" }}>{role.role}</h3>
                  <div style={{ color: "#00739A", fontWeight: 600, fontSize: "0.82rem", marginBottom: "0.4rem" }}>{role.org}</div>
                  <div style={{ color: "#4a6070", fontSize: "0.78rem", marginBottom: "1rem" }}>{role.period} · {role.location}</div>
                  <p style={{ color: "#4a6070", fontSize: "0.84rem", lineHeight: 1.7, marginBottom: "1rem" }}>{role.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {role.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: "0.68rem", padding: "0.2rem 0.65rem", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.1)", background: "#EDE8DC", color: "#2d3f4e", fontWeight: 500 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SKILLS
      ═══════════════════════════════════════ */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ textAlign: "center", maxWidth: "40rem", margin: "0 auto 4rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
               Skills
            </span>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              Areas of <em style={{ fontStyle: "italic", color: "#00739A" }}>Expertise</em>
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {skills.map((group, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: "#ffffff", borderRadius: "16px", padding: "2rem", border: "1px solid rgba(0,0,0,0.08)", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
                    <div style={{ width: "3px", height: "1.4rem", background: "#C9912A", borderRadius: "2px" }} />
                    <h3 style={{ fontWeight: 700, color: "#0a1628", fontSize: "0.88rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{group.category}</h3>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {group.items.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9912A", flexShrink: 0 }} />
                        <span style={{ color: "#2d3f4e", fontSize: "0.9rem" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section style={{ background: "#152035", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(201,145,42,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", zIndex: 10, maxWidth: "40rem", margin: "0 auto", padding: "0 5%", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
             Work Together
          </span>
          <h2 className="font-serif" style={{ color: "#ffffff", lineHeight: 1.15, marginBottom: "1.5rem", fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
            Let&apos;s Build Something <em style={{ fontStyle: "italic", color: "#C9912A" }}>Together</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "1rem" }}>
            Open to conversations about partnerships, speaking engagements,
            ecosystem building, and shared value opportunities across Africa.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.9rem", textDecoration: "none" }}>
              Get In Touch <HiArrowRight />
            </Link>
            <Link href="/impact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", border: "1.5px solid rgba(255,255,255,0.25)", color: "#ffffff", fontWeight: 600, borderRadius: "3rem", fontSize: "0.9rem", textDecoration: "none" }}>
              See Impact
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
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
