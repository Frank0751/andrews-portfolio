"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { FaLinkedinIn, FaInstagram, FaMediumM, FaFacebookF } from "react-icons/fa";

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
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

const languages = [
  { lang: "English", level: "Native" },
  { lang: "Twi", level: "Native" },
  { lang: "Ewe", level: "Native" },
  { lang: "French", level: "Elementary" },
];

export default function About() {
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
                  
                  <span style={{ color: "#C9912A", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>About Andy</span>
                </div>
                <h1 className="animate-fade-up delay-2 font-serif" style={{ lineHeight: 1.05, marginBottom: "1.2rem", fontSize: "clamp(2.8rem,5vw,4.5rem)", color: "#ffffff", fontWeight: 700 }}>
                  The Story<br />
                  <em style={{ fontStyle: "italic", color: "#C9912A" }}>Behind the Work</em>
                </h1>
                <p className="animate-fade-up delay-3" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "30rem", marginBottom: "2rem", fontSize: "1rem" }}>
                  A Pan-African social entrepreneur and ecosystem builder
                  passionately dedicated to creating shared value across the continent.
                  From Ghana&apos;s public service to innovation hubs in Shenzhen, leadership
                  summits in Stockholm, entrepreneurship ecosystems in Johannesburg,
                  continental gatherings in Kigali, and the trade corridors of Rabat.
                </p>
                <div className="animate-fade-up delay-4" style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    Let&apos;s Connect <HiArrowRight />
                  </Link>
                  <Link href="/experience" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", border: "1.5px solid rgba(255,255,255,0.3)", color: "#ffffff", fontWeight: 600, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    View Experience
                  </Link>
                </div>
              </div>

              <div className="animate-fade-in delay-3 page-hero-photo">
                <div style={{ position: "absolute", inset: 0, border: "1.5px solid rgba(201,145,42,0.25)", borderRadius: "2px", transform: "translate(10px,10px)" }} />
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: "2px" }}>
                  <Image
                    src="https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776125121/491498564_18366378268130220_2175622565025465249_n_xpjqfi.jpg"
                    alt="Andrews Akoto-Addo (Andy)"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority
                  />
                </div>
                <div style={{ position: "absolute", bottom: "-12px", left: "-16px", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "Playfair Display, serif" }}>12+</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Years of Social<br />Entrepreneurship</span>
                  </div>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "Playfair Display, serif" }}>3</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Continents<br />Operating across</span>
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
            { num: "12+", label: "Roles Held" },
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
          MY STORY
      ═══════════════════════════════════════ */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

            {/* LEFT — Story */}
            <Reveal>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                 My Story
              </span>
              <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, marginBottom: "0.5rem", fontSize: "clamp(2rem,3.5vw,3rem)" }}>
                Thinkers of Great Thoughts,
              </h2>
              <h2 className="font-serif" style={{ color: "#00739A", fontStyle: "italic", lineHeight: 1.15, marginBottom: "1.5rem", fontSize: "clamp(2rem,3.5vw,3rem)" }}>
                Doers of Great Deeds
              </h2>

              <blockquote style={{ borderLeft: "2px solid #C9912A", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
                <p className="font-serif" style={{ fontStyle: "italic", color: "#0a1628", fontSize: "clamp(1rem,1.6vw,1.25rem)", fontWeight: 400, lineHeight: 1.6 }}>
                  &ldquo;The future belongs to those who believe in the beauty of their dreams. And build structures to realise them.&rdquo;
                </p>
              </blockquote>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", color: "#2d3f4e", lineHeight: 1.85, fontSize: "0.97rem" }}>
                <p>
                  Andrews Akoto-Addo (Andy) is a Pan-African social entrepreneur and
                  ecosystem builder passionately dedicated to creating shared value across
                  the continent. His journey has taken him from Ghana&apos;s public service
                  innovation hubs in Shenzhen, leadership summits in Stockholm, entrepreneurship
                  ecosystems in Johannesburg, continental gatherings in Kigali,
                  and the trade corridors of Rabat.
                </p>
                <p>
                  With expertise spanning business development, partnership linkages,
                  fundraising, and program management, Andy empowers African businesses
                  and entrepreneurship support organisations to achieve sustainable,
                  impactful growth. Not just for shareholders, but for the communities
                  they serve.
                </p>
                <p>
                  As Managing Director (Ghana) and Head of New Business at{" "}
                  <a href="https://www.svai.africa" target="_blank" rel="noreferrer" style={{ color: "#00739A", fontWeight: 600, textDecoration: "none" }}>
                    Shared Value Africa
                  </a>
                  , Andy is driving the philosophy that business success and community
                  prosperity are not trade-offs. They are the same goal.
                </p>
                <p>
                  An engaging and dynamic conference host and panel moderator, Andy is
                  known for facilitating insightful discussions on enterprise development,
                  AfCFTA, climate action, social innovation, and digital infrastructure.
                  Across Africa and globally.
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2rem" }}>
                {["Business Development", "Partnership Linkages", "Fundraising", "Program Management", "AfCFTA", "Digital Innovation", "Social Entrepreneurship", "SME Development", "Ecosystem Building", "Shared Value"].map((t) => (
                  <span key={t} style={{ fontSize: "0.72rem", padding: "0.3rem 0.85rem", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.1)", background: "#ffffff", color: "#2d3f4e", fontWeight: 500 }}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* RIGHT — Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* Photo */}
              <Reveal delay={0.1}>
                <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "12px", overflow: "hidden" }}>
                  <Image
                    src="https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127735/655937334_18112927921735492_7610053134791253292_n_w6uiqa.jpg"
                    alt="Andy at work"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </Reveal>

              {/* At a Glance */}
              <Reveal delay={0.15}>
                <div style={{ background: "#ffffff", borderRadius: "12px", padding: "1.8rem", border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.2rem" }}>At a Glance</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                    {[
                      { label: "Location", value: "Accra, Greater Accra, Ghana" },
                      { label: "Current Role", value: "MD Ghana & Head of New Business, Shared Value Africa" },
                      { label: "Email", value: "andy@shiftimpact.africa", href: "mailto:andy@shiftimpact.africa" },
                      { label: "Website", value: "svai.africa", href: "https://www.svai.africa" },
                    ].map((item) => (
                      <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                        <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#4a6070", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</span>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ fontSize: "0.88rem", color: "#00739A", fontWeight: 500, textDecoration: "none" }}>{item.value}</a>
                        ) : (
                          <span style={{ fontSize: "0.88rem", color: "#0a1628", fontWeight: 500 }}>{item.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Languages */}
              <Reveal delay={0.2}>
                <div style={{ background: "#ffffff", borderRadius: "12px", padding: "1.8rem", border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Languages</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                    {languages.map((l) => (
                      <div key={l.lang} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "0.9rem", color: "#0a1628", fontWeight: 500 }}>{l.lang}</span>
                        <span style={{ fontSize: "0.72rem", color: "#4a6070", background: "#F5F2EA", padding: "0.2rem 0.7rem", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.08)" }}>{l.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Connect */}
              <Reveal delay={0.25}>
                <div style={{ background: "#ffffff", borderRadius: "12px", padding: "1.8rem", border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Connect</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <a href="https://www.linkedin.com/in/andrewsakotoaddo" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "#2d3f4e", fontSize: "0.88rem" }}>
                      <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "rgba(201,145,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9912A", flexShrink: 0 }}>
                        <FaLinkedinIn size={14} />
                      </div>
                      linkedin.com/in/andrewsakotoaddo
                    </a>
                    <a href="https://andrewakotoaddo.medium.com" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "#2d3f4e", fontSize: "0.88rem" }}>
                      <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "rgba(201,145,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9912A", flexShrink: 0 }}>
                        <FaMediumM size={14} />
                      </div>
                      andrewakotoaddo.medium.com
                    </a>
                    <a href="https://www.instagram.com/andrewsakotoaddo" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "#2d3f4e", fontSize: "0.88rem" }}>
                      <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "rgba(201,145,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9912A", flexShrink: 0 }}>
                        <FaInstagram size={14} />
                      </div>
                      @andrewsakotoaddo
                    </a>
                    <a href="https://web.facebook.com/andrew.mul" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "#2d3f4e", fontSize: "0.88rem" }}>
                      <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "rgba(201,145,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9912A", flexShrink: 0 }}>
                        <FaFacebookF size={14} />
                      </div>
                      @FiifiAndrew
                    </a>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

     {/* ═══════════════════════════════════════
          AFFILIATIONS & NETWORKS
      ═══════════════════════════════════════ */}
      <section style={{ background: "#EDE8DC", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

            <div>
              <Reveal>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                   Affiliations & Networks
                </span>
                <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, marginBottom: "2rem", fontSize: "clamp(2rem,3.5vw,3rem)" }}>
                  Affiliations <em style={{ fontStyle: "italic", color: "#00739A" }}>&amp; Networks</em>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    "Shared Value Africa (SVA)",
                    "UNLEASH Global Community",
                    "Ghana ESO Collaborative",
                    "JamiiTrade SME Network",
                    "Reach for Change Alumni Network",
                    "Ghana International Model United Nations",
                    "International Trade Centre (ITC) NTF V Program",
                    "Africa Shared Value and ESG Summit",
                    "Young Green and Sustainability Entrepreneurs Consortium (YoGSEC)",
                    "Africa Europe Innovation Partnership",
                    "EU-Africa SME Summit",
                  ].map((m, i) => (
                    <Reveal key={i} delay={i * 0.05}>
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: "#ffffff", borderRadius: "10px", padding: "0.9rem 1.2rem", border: "1px solid rgba(0,0,0,0.08)" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C9912A", flexShrink: 0 }} />
                        <span style={{ color: "#2d3f4e", fontSize: "0.9rem", fontWeight: 500 }}>{m}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.15}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                   Current Focus
                </span>
                <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, marginBottom: "2rem", fontSize: "clamp(2rem,3.5vw,3rem)" }}>
                  Current <em style={{ fontStyle: "italic", color: "#00739A" }}>Focus</em>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  {[
                    { org: "Shared Value Africa", role: "MD Ghana & Head of New Business", href: "https://www.svai.africa" },
                    { org: "JamiiTrade Africa", role: "Ghana Focal Point", href: "https://jamiitrade.africa/u/andrews" },
                    { org: "African Youth, Gender and Climate Conference", role: "Ecosystem Advisor & Host", href: "https://www.linkedin.com/in/andrewsakotoaddo" },
                    { org: "Conference & Panel Moderation", role: "Pan-African Engagements", href: "/contact" },
                  ].map((item, i) => (
                    <Reveal key={i} delay={i * 0.08}>
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                        style={{ display: "block", background: "#ffffff", borderRadius: "12px", padding: "1.2rem 1.4rem", border: "1px solid rgba(0,0,0,0.08)", textDecoration: "none", transition: "all 0.3s", borderLeft: "3px solid #C9912A" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(201,145,42,0.1)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; }}
                      >
                        <div style={{ fontWeight: 600, color: "#0a1628", fontSize: "0.92rem", marginBottom: "0.25rem" }}>{item.org}</div>
                        <div style={{ color: "#00739A", fontSize: "0.82rem" }}>{item.role}</div>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

        {/* ═══════════════════════════════════════
          PHOTO STRIP
      ═══════════════════════════════════════ */}
      <section style={{ background: "#0a1628", padding: "4rem 0", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
            {[
              "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127498/568403187_18389482339130220_7445678454955259057_n_tqzlwz.jpg",
              "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127496/568690701_18389482405130220_4097415862773396182_n_fpagkr.jpg",
              "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127738/658877472_18584227099063671_8574493065532499635_n_zg28od.jpg",
            ].map((src, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ position: "relative", height: "240px", borderRadius: "12px", overflow: "hidden" }}>
                  <Image src={src} alt="Andy in action" fill style={{ objectFit: "cover" }} />
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
            Ready to Build Something <em style={{ fontStyle: "italic", color: "#C9912A" }}>Meaningful?</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "1rem" }}>
            Open to conversations about partnerships, speaking engagements,
            ecosystem building, and shared value opportunities across Africa.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.9rem", textDecoration: "none" }}>
              Get In Touch <HiArrowRight />
            </Link>
            <Link href="/experience" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", border: "1.5px solid rgba(255,255,255,0.25)", color: "#ffffff", fontWeight: 600, borderRadius: "3rem", fontSize: "0.9rem", textDecoration: "none" }}>
              View Experience
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
