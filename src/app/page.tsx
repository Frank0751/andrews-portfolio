"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaInstagram, FaMediumM, FaFacebookF } from "react-icons/fa";
import { MdGroups, MdHandshake, MdMic, MdLightbulb, MdTrendingUp, MdCreate } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";

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

const pillars = [
  { icon: <RiGlobalLine size={22} />, title: "Ecosystem Building", sub: "Pan-African networks for SMEs" },
  { icon: <MdHandshake size={22} />, title: "Creating Shared Value", sub: "Driving profit with purpose" },
  { icon: <MdMic size={22} />, title: "Conference Hosting", sub: "Events and panel moderation" },
  { icon: <MdLightbulb size={22} />, title: "Innovation Labs", sub: "SDG-driven solutions" },
  { icon: <MdTrendingUp size={22} />, title: "Business Development", sub: "Growth and fundraising" },
  { icon: <MdCreate size={22} />, title: "Thought Leadership", sub: "Publications and writing" },
];

const impactAreas = [
  { icon: <MdGroups size={28} />, title: "Ecosystem Architecture", text: "Building the infrastructure for African entrepreneurship. From startup assessment frameworks to national investor networks." },
  { icon: <MdHandshake size={28} />, title: "Creating Shared Value", text: "Embedding the philosophy into business, operations and strategies that ensure business success and community prosperity are mutually reinforced. Profit with purpose." },
  { icon: <MdMic size={28} />, title: "Stage and Platform", text: "An engaging conference host and panel moderator facilitating critical conversations at summits across Africa and beyond." },
  { icon: <RiGlobalLine size={28} />, title: "Intra-African Trade Facilitation", text: "Championing a curated peer-to-peer community for SME trading in Africa, reducing barriers and expanding reach." },
  { icon: <MdLightbulb size={28} />, title: "Youth and SDGs", text: "Through UNLEASH, facilitating innovation labs that turn personal insights into sustainable development solutions." },
  { icon: <MdTrendingUp size={28} />, title: "Startup Growth", text: "Conducting tech startup maturity assessments across Ghana, connecting promising ventures to international programs." },
];

const stats = [
  { num: "12+", label: "Years of Impact" },
  { num: "10+", label: "Organisations Served" },
  { num: "12+", label: "Roles Held" },
  { num: "3", label: "Continents" },
];

const testimonials = [
  { quote: "Andy brings an unmatched energy and clarity to every room he enters. His ability to connect people, ideas, and purpose is rare.", name: "A Senior Ecosystem Partner", title: "Pan-African Development Sector" },
  { quote: "His hosting style is warm, authoritative, and deeply informed. Every panel he moderates becomes a genuine conversation.", name: "Conference Organiser", title: "International Summit, Kigali" },
  { quote: "What sets Andy apart is his belief that business and community are not in tension. He lives that conviction every day.", name: "SVAI Collaborator", title: "Shared Value Africa" },
  { quote: "Andy is one of those rare individuals who can hold a room of executives and a room of young entrepreneurs with equal command. A truly gifted communicator.", name: "Development Sector Leader", title: "West Africa" },
];

export default function Home() {
  return (
    <main>
      <style>{`
        .home-hero-grid { display: grid; grid-template-columns: 1fr 420px; gap: 3rem; align-items: center; }
        .home-stats-grid { display: grid; grid-template-columns: repeat(4,1fr); }
        .home-who-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .home-pillars-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        .home-impact-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.2rem; }
        .home-testimonials-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
        .home-articles-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.2rem; }
        .home-hero-photo { position: relative; height: 500px; display: block; }
        .andy-svg { max-width: 320px; }
        @media (max-width: 900px) {
          .home-hero-grid { grid-template-columns: 1fr; }
          .home-hero-photo { display: block; height: 380px; margin-top: 2rem; }
          .home-who-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .home-impact-grid { grid-template-columns: repeat(2,1fr); }
          .home-articles-grid { grid-template-columns: repeat(2,1fr); }
          .home-testimonials-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .home-stats-grid { grid-template-columns: repeat(2,1fr); }
          .home-pillars-grid { grid-template-columns: 1fr; }
          .home-impact-grid { grid-template-columns: 1fr; }
          .home-articles-grid { grid-template-columns: 1fr; }
          .andy-svg { max-width: 260px; }
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
            <div className="home-hero-grid">

              {/* LEFT */}
              <div>
                <div className="animate-fade-in delay-1" style={{ marginBottom: "0.5rem" }}>
                  <svg width="100%" viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="andy-svg">
                    <style>{`
                      .s { fill: none; stroke: #C9912A; stroke-linecap: round; stroke-linejoin: round; }
                      .tk { stroke-width: 16; }
                      .tn { stroke-width: 7; }
                      .draw { stroke-dasharray: 2000; stroke-dashoffset: 2000; animation: draw 0.9s cubic-bezier(0.4,0,0.2,1) forwards; }
                      .d1 { animation-delay: 0.0s; } .d2 { animation-delay: 0.35s; } .d3 { animation-delay: 0.65s; }
                      .d4 { animation-delay: 1.0s; } .d5 { animation-delay: 1.3s; } .d6 { animation-delay: 1.55s; }
                      .d7 { animation-delay: 1.8s; } .d8 { animation-delay: 2.05s; } .d9 { animation-delay: 2.3s; }
                      .d10 { animation-delay: 2.5s; }
                      @keyframes draw { to { stroke-dashoffset: 0; } }
                      .dot { fill: #C9912A; r: 0; animation: popin 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; animation-delay: 2.9s; }
                      @keyframes popin { to { r: 10; } }
                    `}</style>
                    <path className="s tk draw d1" d="M 52 185 L 110 35" />
                    <path className="s tn draw d2" d="M 110 35 L 168 185" />
                    <path className="s tn draw d3" d="M 73 128 L 147 128" />
                    <path className="s tk draw d4" d="M 208 185 L 208 85" />
                    <path className="s tn draw d5" d="M 208 100 C 220 62 282 60 284 100 L 284 185" />
                    <path className="s tn draw d6" d="M 362 35 L 362 185" />
                    <path className="s tk draw d7" d="M 362 155 C 356 188 292 192 288 148 C 284 104 315 76 362 96" />
                    <path className="s tk draw d8" d="M 402 90 L 448 162" />
                    <path className="s tn draw d9" d="M 494 90 L 448 162 L 422 210" />
                    <path className="s tn draw d10" d="M 52 200 C 160 215 340 215 494 200" strokeWidth="2" stroke="#C9912A" opacity="0.3" />
                    <circle className="dot" cx="530" cy="185" fill="#C9912A" />
                  </svg>
                  <span style={{ display: "block", fontWeight: 300, color: "rgba(255,255,255,0.75)", fontSize: "clamp(1rem,1.5vw,1.2rem)", letterSpacing: "0.06em", marginTop: "1.2rem" }}>
                    Andrews Akoto-Addo
                  </span>
                </div>

                <div className="animate-fade-up delay-2" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
                  <span style={{ color: "#C9912A", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                    Pan-African Social Entrepreneur
                  </span>
                </div>

                <p className="animate-fade-up delay-3" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "30rem", marginBottom: "2rem", fontSize: "1rem" }}>
                  Dedicated to value creation and the sustainability of the African
                  continent through systems change, SME growth, and private sector
                  engagement. From Accra to Shenzhen, to Stockholm, to Johannesburg,
                  to Kigali, and to Rabat.
                </p>

                <div className="animate-fade-up delay-4" style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "2rem" }}>
                  <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    My Story <HiArrowRight />
                  </Link>
                  <Link href="/#work" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", border: "1.5px solid rgba(255,255,255,0.3)", color: "#ffffff", fontWeight: 600, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    My Work
                  </Link>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", border: "1.5px solid rgba(255,255,255,0.3)", color: "#ffffff", fontWeight: 600, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    Let&apos;s Talk
                  </Link>
                </div>

                <div className="animate-fade-up delay-5" style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <Link href="https://www.linkedin.com/in/andrewsakotoaddo" target="_blank" style={{ width: "2rem", height: "2rem", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                    <FaLinkedinIn size={13} />
                  </Link>
                  <Link href="https://medium.com/@andrewakotoaddo" target="_blank" style={{ width: "2rem", height: "2rem", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                    <FaMediumM size={13} />
                  </Link>
                  <Link href="https://www.instagram.com/andrewsakotoaddo" target="_blank" style={{ width: "2rem", height: "2rem", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                    <FaInstagram size={13} />
                  </Link>
                  <Link href="https://web.facebook.com/andrew.mul" target="_blank" style={{ width: "2rem", height: "2rem", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                    <FaFacebookF size={13} />
                  </Link>
                  <span style={{ width: "1px", height: "1rem", background: "rgba(255,255,255,0.15)", margin: "0 0.2rem" }} />
                  <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>
                    <HiLocationMarker size={12} style={{ color: "#C9912A" }} />
                    Accra, Ghana
                  </span>
                </div>
              </div>

              {/* RIGHT — Photo */}
              <div className="home-hero-photo animate-fade-in delay-3">
                <div style={{ position: "absolute", inset: 0, border: "1.5px solid rgba(201,145,42,0.25)", borderRadius: "2px", transform: "translate(10px,10px)" }} />
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: "2px" }}>
                  <Image src="https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776120830/Andrews-Website-_lhhs4d.png" alt="Andrews Akoto-Addo (Andy)" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
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
        <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="home-stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{ padding: "1.6rem 2rem", textAlign: "center", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: "2.2rem", fontWeight: 700, color: "#C9912A", lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", marginTop: "0.3rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          WHO I AM
      ═══════════════════════════════════════ */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <div className="home-who-grid">
            <Reveal>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Who I Am
              </span>
              <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, marginBottom: "1rem", fontSize: "clamp(2rem,3.5vw,3rem)" }}>
                Creating Shared Value<br />
                <em style={{ fontStyle: "italic", color: "#00739A" }}>Across Africa</em>
              </h2>
              <p style={{ color: "#4a6070", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "32rem" }}>
                A Pan-African social entrepreneur dedicated to creating ecosystems
                where African businesses and their communities thrive together.
              </p>
              <div className="home-pillars-grid">
                {pillars.map((p, i) => (
                  <Reveal key={i} delay={i * 0.07}>
                    <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "12px", padding: "1.1rem 1.2rem", transition: "all 0.3s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#C9912A"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(201,145,42,0.12)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                    >
                      <div style={{ color: "#C9912A", marginBottom: "0.5rem" }}>{p.icon}</div>
                      <div style={{ fontWeight: 600, color: "#0a1628", fontSize: "0.85rem", lineHeight: 1.3 }}>{p.title}</div>
                      <div style={{ color: "#4a6070", fontSize: "0.75rem", marginTop: "0.2rem" }}>{p.sub}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <blockquote style={{ borderLeft: "2px solid #C9912A", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                <p className="font-serif" style={{ fontStyle: "italic", color: "#0a1628", fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 400, lineHeight: 1.4 }}>
                  &ldquo;Thinkers of great thoughts. Doers of great deeds.&rdquo;
                </p>
              </blockquote>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#2d3f4e", lineHeight: 1.8, fontSize: "0.97rem" }}>
                <p>Andrews Akoto-Addo (Andy) is a Pan-African social entrepreneur and ecosystem builder passionately dedicated to value creation and the sustainability of the African continent through systems change, SME growth, and private sector engagement.</p>
                <p>With expertise in business development, partnership linkages, fundraising, and program management, Andy empowers African businesses and entrepreneurship support organisations to achieve sustainable, impactful growth.</p>
                <p>He is also an event host/MC and panel moderator, known for his ability to inspire and facilitate meaningful discussions covering SME development, social entrepreneurship, digital innovation and the AfCFTA.</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.5rem" }}>
                {["Business Development", "Partnership Linkages", "Fundraising", "Program Management", "AfCFTA", "Digital Innovation", "Social Entrepreneurship", "SME Development"].map((t) => (
                  <span key={t} style={{ fontSize: "0.72rem", padding: "0.3rem 0.85rem", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.1)", background: "#ffffff", color: "#2d3f4e", fontWeight: 500 }}>{t}</span>
                ))}
              </div>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "2rem", color: "#0a1628", fontWeight: 700, fontSize: "0.9rem", borderBottom: "2px solid #C9912A", paddingBottom: "2px", textDecoration: "none" }}>
                Full Story <HiArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHAT I DO
      ═══════════════════════════════════════ */}
      <section id="work" style={{ background: "#EDE8DC", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ textAlign: "center", maxWidth: "40rem", margin: "0 auto 4rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "block" }}>What I Do</span>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, marginBottom: "1rem", fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              Creating Lasting <em style={{ fontStyle: "italic", color: "#00739A" }}>Impact</em>
            </h2>
            <p style={{ color: "#4a6070", lineHeight: 1.7 }}>
              From Accra to Shenzhen, to Stockholm, to Johannesburg, to Kigali, to Rabat.
              The work spans borders, sectors, and generations.
            </p>
          </Reveal>
          <div className="home-impact-grid">
            {impactAreas.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: "#ffffff", borderRadius: "16px", padding: "1.8rem", border: "1px solid rgba(0,0,0,0.08)", height: "100%", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#C9912A"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(201,145,42,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  <div style={{ width: "2.8rem", height: "2.8rem", borderRadius: "10px", background: "rgba(201,145,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9912A", marginBottom: "1rem" }}>{item.icon}</div>
                  <h3 className="font-serif" style={{ fontWeight: 600, color: "#0a1628", fontSize: "1.1rem", marginBottom: "0.6rem", lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ color: "#4a6070", fontSize: "0.85rem", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section style={{ background: "#0a1628", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ textAlign: "center", maxWidth: "36rem", margin: "0 auto 4rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "block" }}>Testimonials</span>
            <h2 className="font-serif" style={{ color: "#ffffff", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              What People <em style={{ fontStyle: "italic", color: "#C9912A" }}>Say</em>
            </h2>
          </Reveal>
          <div className="home-testimonials-grid">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div style={{ background: "#152035", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ color: "#C9912A", fontSize: "3rem", fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: "1rem" }}>&ldquo;</div>
                  <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.75, fontSize: "0.9rem", flex: 1, marginBottom: "1.5rem", fontStyle: "italic" }}>{t.quote}</p>
                  <div>
                    <div style={{ fontWeight: 600, color: "#ffffff", fontSize: "0.85rem" }}>{t.name}</div>
                    <div style={{ color: "#C9912A", fontSize: "0.75rem", marginTop: "0.2rem" }}>{t.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          THOUGHT LEADERSHIP
      ═══════════════════════════════════════ */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            <div>
              <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem", display: "block" }}>Thought Leadership</span>
              <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
                Ideas Worth <em style={{ fontStyle: "italic", color: "#00739A" }}>Sharing</em>
              </h2>
            </div>
            <Link href="/writing" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#0a1628", fontWeight: 700, fontSize: "0.9rem", borderBottom: "2px solid #C9912A", paddingBottom: "2px", textDecoration: "none", whiteSpace: "nowrap" }}>
              All Articles <HiArrowRight />
            </Link>
          </Reveal>
          <div className="home-articles-grid">
            {[
              { source: "Medium", date: "Apr 2026", title: "The Work of God", excerpt: "From the heart of service. A reflection on faith, purpose, and the work that truly matters.", href: "https://andrewakotoaddo.medium.com/the-work-of-god-7967a863778d", thumb: "https://miro.medium.com/v2/resize:fill:320:214/1*DmqhGt-gMtSeSG5Z-_Z0iA@2x.jpeg" },
              { source: "Medium", date: "Dec 2025", title: "2025 Wrapped!", excerpt: "It has been an incredible year, defined by faith, courage and patience.", href: "https://andrewakotoaddo.medium.com/2025-wrapped-a54b6442f394", thumb: "https://miro.medium.com/v2/resize:fill:320:214/1*Ce0HmtO6GWknGLbjE9bR8g.jpeg" },
              { source: "LinkedIn", date: "Jul 2025", title: "Beyond Buzzwords", excerpt: "Translating EU-Africa SME Summit insights into action for a connected continent.", href: "https://www.linkedin.com/pulse/beyond-buzzwords-translating-eu-africa-sme-summit-andrews-akoto-addo-jwcof/", thumb: "https://miro.medium.com/v2/resize:fill:320:214/1*hOYobDq9EngvmvLaMiF3mA.jpeg" },
              { source: "Discourse Channel", date: "2025", title: "The Polyglot Powerhouse", excerpt: "A feature on Andrews Akoto-Addo and his work as a Pan-African social entrepreneur.", href: "https://blog.discoursechannel.com/the-polyglot-powerhouse/", thumb: "https://miro.medium.com/v2/resize:fill:320:214/1*F71JHJSfnEfLNSx2fPgUGw.jpeg" },
            ].map((article, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <a href={article.href} target="_blank" rel="noreferrer"
                  style={{ display: "block", background: "#ffffff", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9912A"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(201,145,42,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.08)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; }}
                >
                  <div style={{ position: "relative", height: "11rem", overflow: "hidden" }}>
                    <Image src={article.thumb} alt={article.title} fill style={{ objectFit: "cover" }} unoptimized />
                  </div>
                  <div style={{ padding: "1.2rem 1.4rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#C9912A", textTransform: "uppercase", letterSpacing: "0.1em" }}>{article.source}</span>
                      <span style={{ color: "rgba(0,0,0,0.2)" }}>·</span>
                      <span style={{ fontSize: "0.75rem", color: "#4a6070" }}>{article.date}</span>
                    </div>
                    <h3 className="font-serif" style={{ fontWeight: 600, color: "#0a1628", fontSize: "1.05rem", lineHeight: 1.35, marginBottom: "0.5rem" }}>{article.title}</h3>
                    <p style={{ color: "#4a6070", fontSize: "0.82rem", lineHeight: 1.6 }}>{article.excerpt}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "1rem", color: "#C9912A", fontSize: "0.78rem", fontWeight: 600 }}>
                      Read <HiArrowRight size={12} />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONNECT CTA
      ═══════════════════════════════════════ */}
      <section style={{ background: "#152035", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(201,145,42,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", zIndex: 10, maxWidth: "40rem", margin: "0 auto", padding: "0 5%", textAlign: "center" }}>
          <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem", display: "block" }}>Get In Touch</span>
          <h2 className="font-serif" style={{ color: "#ffffff", lineHeight: 1.15, marginBottom: "1.5rem", fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
            Let&apos;s Build Something <em style={{ fontStyle: "italic", color: "#C9912A" }}>Together</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "1rem" }}>
            Open to conversations about partnerships, speaking engagements, ecosystem
            building, and shared value opportunities across Africa.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.9rem", textDecoration: "none" }}>
              Send a Message <HiArrowRight />
            </Link>
            <Link href="https://www.linkedin.com/in/andrewsakotoaddo" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", border: "1.5px solid rgba(255,255,255,0.25)", color: "#ffffff", fontWeight: 600, borderRadius: "3rem", fontSize: "0.9rem", textDecoration: "none" }}>
              <FaLinkedinIn /> Connect on LinkedIn
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem 1.5rem" }}>
            <Link href="mailto:andy@shiftimpact.africa" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem" }}>andy@shiftimpact.africa</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <Link href="https://www.svai.africa" target="_blank" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem" }}>svai.africa</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <Link href="https://jamiitrade.africa/u/andrews" target="_blank" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem" }}>JamiiTrade</Link>
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