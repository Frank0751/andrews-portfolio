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

const fallbackTestimonials = [
  { _id: "1", quote: "Andy brings an unmatched energy and clarity to every room he enters. His ability to connect people, ideas, and purpose is rare.", name: "A Senior Ecosystem Partner", title: "Pan-African Development Sector" },
  { _id: "2", quote: "His hosting style is warm, authoritative, and deeply informed. Every panel he moderates becomes a genuine conversation.", name: "Conference Organiser", title: "International Summit, Kigali" },
  { _id: "3", quote: "What sets Andy apart is his belief that business and community are not in tension. He lives that conviction every day.", name: "SVAI Collaborator", title: "Shared Value Africa" },
  { _id: "4", quote: "Andy is one of those rare individuals who can hold a room of executives and a room of young entrepreneurs with equal command. A truly gifted communicator.", name: "Development Sector Leader", title: "West Africa" },
];

const fallbackArticles = [
  { source: "Medium", date: "Apr 2026", title: "The Work of God", excerpt: "From the heart of service. A reflection on faith, purpose, and the work that truly matters.", href: "https://andrewakotoaddo.medium.com/the-work-of-god-7967a863778d", thumb: "https://miro.medium.com/v2/resize:fill:320:214/1*DmqhGt-gMtSeSG5Z-_Z0iA@2x.jpeg" },
  { source: "Medium", date: "Dec 2025", title: "2025 Wrapped!", excerpt: "It has been an incredible year, defined by faith, courage and patience.", href: "https://andrewakotoaddo.medium.com/2025-wrapped-a54b6442f394", thumb: "https://miro.medium.com/v2/resize:fill:320:214/1*Ce0HmtO6GWknGLbjE9bR8g.jpeg" },
  { source: "LinkedIn", date: "Jul 2025", title: "Beyond Buzzwords", excerpt: "Translating EU-Africa SME Summit insights into action for a connected continent.", href: "https://www.linkedin.com/pulse/beyond-buzzwords-translating-eu-africa-sme-summit-andrews-akoto-addo-jwcof/", thumb: "https://miro.medium.com/v2/resize:fill:320:214/1*hOYobDq9EngvmvLaMiF3mA.jpeg" },
  { source: "Discourse Channel", date: "2025", title: "The Polyglot Powerhouse", excerpt: "A feature on Andrews Akoto-Addo and his work as a Pan-African social entrepreneur.", href: "https://blog.discoursechannel.com/the-polyglot-powerhouse/", thumb: "https://miro.medium.com/v2/resize:fill:320:214/1*F71JHJSfnEfLNSx2fPgUGw.jpeg" },
];

export default function HomeClient({ testimonials: sanityTestimonials }: { testimonials: any[] }) {
  const testimonials = sanityTestimonials.length > 0 ? sanityTestimonials : fallbackTestimonials;

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
        .andy-svg { width: 100%; max-width: 360px; }

        /* ── Andy signature stroke animation ── */
        .ap { fill: none; stroke: #C9912A; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.4; }
        .au { fill: none; stroke: #C9912A; stroke-linecap: round; stroke-width: 1.8; stroke-opacity: 0.35; }
        @keyframes andyDraw { to { stroke-dashoffset: 0; } }

        /* A outer */
        .a0 { stroke-dasharray: 800;  stroke-dashoffset: 800;  animation: andyDraw 1.1s cubic-bezier(.4,0,.2,1) 0.0s  forwards; }
        /* A crossbar */
        .a1 { stroke-dasharray: 125;  stroke-dashoffset: 125;  animation: andyDraw 0.25s cubic-bezier(.4,0,.2,1) 0.9s  forwards; }
        /* n */
        .a2 { stroke-dasharray: 1400; stroke-dashoffset: 1400; animation: andyDraw 1.4s cubic-bezier(.4,0,.2,1) 1.1s  forwards; }
        /* d outer */
        .a3 { stroke-dasharray: 1055; stroke-dashoffset: 1055; animation: andyDraw 1.2s cubic-bezier(.4,0,.2,1) 2.3s  forwards; }
        /* d bowl counter */
        .a4 { stroke-dasharray: 510;  stroke-dashoffset: 510;  animation: andyDraw 0.65s cubic-bezier(.4,0,.2,1) 3.3s  forwards; }
        /* y */
        .a5 { stroke-dasharray: 1260; stroke-dashoffset: 1260; animation: andyDraw 1.3s cubic-bezier(.4,0,.2,1) 3.85s forwards; }
        /* underline */
        .a6 { stroke-dasharray: 420;  stroke-dashoffset: 420;  animation: andyDraw 0.7s cubic-bezier(.4,0,.2,1) 5.0s  forwards; }

        @media (max-width: 900px) {
          .home-hero-grid { grid-template-columns: 1fr; }
          .home-hero-photo { height: 380px; margin-top: 2rem; }
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
          .andy-svg { max-width: 280px; }
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
            <div className="home-hero-grid">
              <div>
                <div className="animate-fade-in delay-1" style={{ marginBottom: "0.5rem" }}>

                  {/* ── Andy Signature — real Playfair Display Italic paths ── */}
                  <svg
                    className="andy-svg"
                    viewBox="0 0 380 210"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ overflow: "visible", display: "block" }}
                    aria-label="Andy"
                  >
                    {/* A — outer contour */}
                    <path className="ap a0"
                      d="M34.94,115.34 L23.84,131.02 Q18.36,138.72 17.25,143.31 Q16.14,147.9 18.96,149.89 Q21.77,151.89 27.84,152.04 L27.1,155 Q22.95,154.7 18.51,154.63 Q14.07,154.56 10.22,154.56 Q6.52,154.56 4.01,154.63 Q1.49,154.7 -0.88,155 L-0.14,152.04 Q1.94,151.6 4.16,150.19 Q6.38,148.78 9.04,146.12 Q11.7,143.46 14.66,139.16 L78.45,49.48 L80.67,49.48 L86.59,142.57 Q87.04,147.9 89.33,149.89 Q91.62,151.89 93.84,152.04 L93.25,155 Q90.29,154.7 85.85,154.63 Q81.41,154.56 77.12,154.56 Q71.79,154.56 67.06,154.63 Q62.32,154.7 59.36,155 L59.95,152.04 Q67.06,151.74 70.02,149.45 Q72.98,147.16 72.68,139.61 L71.35,115.34 L34.94,115.34 Z"
                    />
                    {/* A — crossbar triangle */}
                    <path className="ap a1"
                      d="M37.01,112.38 L71.2,112.38 L68.68,67.53 L37.01,112.38 Z"
                    />
                    {/* n */}
                    <path className="ap a2"
                      d="M125.81,144.2 L123.15,155 L110.27,155 L128.03,91.51 Q128.62,89.73 128.99,87.59 Q129.36,85.44 128.77,83.89 Q128.18,82.33 125.81,82.33 Q122.56,82.33 120.04,85.51 Q117.52,88.7 114.42,97.43 L112.49,102.9 L109.68,102.9 L113.38,92.1 Q116.64,82.78 121.45,79.82 Q126.26,76.86 130.99,76.86 Q135.43,76.86 137.43,78.78 Q139.43,80.7 139.65,83.74 Q139.87,86.77 139.21,90.4 Q138.54,94.02 137.65,97.58 L132.62,117.7 Q136.32,108.68 140.02,101.87 Q144.9,92.84 149.64,87.29 Q154.38,81.74 159.33,79.3 Q164.29,76.86 169.62,76.86 Q176.58,76.86 179.17,80.19 Q181.76,83.52 181.46,88.62 Q181.16,93.73 179.39,99.2 L165.03,142.42 Q163.7,146.42 163.92,149.01 Q164.14,151.6 167.4,151.6 Q170.21,151.6 172.95,148.49 Q175.69,145.38 178.8,136.5 L180.72,131.02 L183.53,131.02 L179.83,141.83 Q177.76,148.04 174.73,151.3 Q171.69,154.56 168.36,155.81 Q165.03,157.07 161.92,157.07 Q158.37,157.07 156.08,155.89 Q153.78,154.7 152.6,152.78 Q150.97,150.12 151.56,145.82 Q152.16,141.53 153.93,136.35 L167.99,94.02 Q168.73,91.95 169.25,89.07 Q169.77,86.18 169.03,83.89 Q168.29,81.59 164.74,81.59 Q161.18,81.59 157.19,84.7 Q153.19,87.81 148.9,93.51 Q144.61,99.2 140.46,107.12 Q136.32,115.04 132.62,124.51 Q128.92,133.84 125.81,144.2 Z"
                    />
                    {/* d — outer contour with tall ascender */}
                    <path className="ap a3"
                      d="M274.55,37.34 L245.54,142.42 Q244.51,145.82 244.73,148.71 Q244.95,151.6 248.21,151.6 Q251.17,151.6 253.68,148.27 Q256.2,144.94 259.01,136.5 L260.79,131.02 L263.6,131.02 L260.2,141.83 Q258.42,147.75 255.46,151.08 Q252.5,154.41 249.24,155.74 Q245.99,157.07 243.03,157.07 Q234.15,157.07 233.7,148.64 Q233.56,146.27 234.07,143.16 Q234.59,140.05 235.63,136.35 L237.55,129.1 Q234.74,135.17 231.93,139.76 Q226.16,148.93 220.31,153 Q214.46,157.07 208.1,157.07 Q203.51,157.07 200.03,154.93 Q196.56,152.78 194.63,148.49 Q192.71,144.2 192.71,137.54 Q192.71,130.43 195,122.22 Q197.3,114 201.59,106.01 Q205.88,98.02 211.87,91.43 Q217.87,84.85 225.12,80.85 Q232.37,76.86 240.51,76.86 Q243.92,76.86 246.88,79.37 Q248.8,81.15 249.54,83.96 L256.94,56.28 Q258.27,51.25 256.5,48.88 Q254.72,46.52 247.47,46.52 L248.36,43.41 Q256.5,43.26 262.71,41.71 Q268.93,40.15 274.55,37.34 Z"
                    />
                    {/* d — bowl counter-form */}
                    <path className="ap a4"
                      d="M212.39,152.34 Q216.09,152.34 220.75,147.97 Q225.42,143.6 230.23,136.13 Q235.04,128.66 239.18,119.04 Q241.4,113.86 243.03,108.38 L248.5,87.81 Q247.76,84.26 245.99,82.48 Q243.62,80.26 240.66,80.26 Q235.04,80.26 229.78,84.11 Q224.53,87.96 220.24,94.32 Q215.94,100.68 212.69,108.45 Q209.43,116.22 207.66,124.29 Q205.88,132.36 205.88,139.46 Q205.88,145.97 207.51,149.15 Q209.14,152.34 212.39,152.34 Z"
                    />
                    {/* y — with descending tail flourish */}
                    <path className="ap a5"
                      d="M280.62,175.87 Q286.98,172.46 294.24,166.54 Q298.38,163.14 302.82,158.26 L291.87,91.8 Q291.13,87.22 290.09,85.44 Q289.06,83.66 287.13,83.66 Q285.5,83.66 283.43,86.25 Q281.36,88.84 278.4,97.28 L276.48,102.76 L273.66,102.76 L277.36,91.95 Q280.47,82.92 285.06,79.89 Q289.65,76.86 294.38,76.86 Q298.97,76.86 301.49,79.74 Q304,82.63 305.04,90.47 L312.59,146.12 Q319.25,136.8 325.02,125.84 Q332.12,112.08 334.94,98.02 Q332.57,96.69 329.83,94.69 Q327.09,92.69 325.32,89.95 Q323.54,87.22 323.69,83.81 Q323.98,80.41 326.06,78.63 Q328.13,76.86 331.24,76.86 Q335.23,76.86 337.08,79.89 Q338.93,82.92 338.93,88.84 Q338.93,96.39 336.42,105.05 Q333.9,113.71 329.68,122.59 Q325.46,131.47 320.28,139.68 Q315.1,147.9 309.78,154.56 Q307.41,157.52 303.26,161.96 Q299.12,166.4 293.42,171.06 Q287.72,175.72 280.62,179.12 Q276.18,181.2 273,182.01 Q269.82,182.82 267.74,182.82 Q264.78,182.82 262.56,181.27 Q260.34,179.72 260.34,176.76 Q260.34,173.5 262.79,171.8 Q265.23,170.1 268.34,170.1 Q271.74,170.1 274.77,171.87 Q277.81,173.65 280.62,175.87 Z"
                    />
                    {/* underline flourish */}
                    <path className="au a6"
                      d="M 5,168 C 120,180 260,180 355,168"
                    />
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

      {/* STATS */}
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

      {/* WHO I AM */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <div className="home-who-grid">
            <Reveal>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>Who I Am</span>
              <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, marginBottom: "1rem", fontSize: "clamp(2rem,3.5vw,3rem)" }}>
                Creating Shared Value<br />
                <em style={{ fontStyle: "italic", color: "#00739A" }}>Across Africa</em>
              </h2>
              <p style={{ color: "#4a6070", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "32rem" }}>
                A Pan-African social entrepreneur dedicated to creating ecosystems where African businesses and their communities thrive together.
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

      {/* WHAT I DO */}
      <section id="work" style={{ background: "#EDE8DC", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ textAlign: "center", maxWidth: "40rem", margin: "0 auto 4rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "block" }}>What I Do</span>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, marginBottom: "1rem", fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              Creating Lasting <em style={{ fontStyle: "italic", color: "#00739A" }}>Impact</em>
            </h2>
            <p style={{ color: "#4a6070", lineHeight: 1.7 }}>From Accra to Shenzhen, to Stockholm, to Johannesburg, to Kigali, to Rabat. The work spans borders, sectors, and generations.</p>
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

      {/* TESTIMONIALS */}
      <section style={{ background: "#0a1628", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ textAlign: "center", maxWidth: "36rem", margin: "0 auto 4rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "block" }}>Testimonials</span>
            <h2 className="font-serif" style={{ color: "#ffffff", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              What People <em style={{ fontStyle: "italic", color: "#C9912A" }}>Say</em>
            </h2>
          </Reveal>
          <div className="home-testimonials-grid">
            {testimonials.map((t: any, i: number) => (
              <Reveal key={t._id} delay={i * 0.12}>
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

      {/* THOUGHT LEADERSHIP */}
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
            {fallbackArticles.map((article, i) => (
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

      {/* CTA */}
      <section style={{ background: "#152035", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(201,145,42,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", zIndex: 10, maxWidth: "40rem", margin: "0 auto", padding: "0 5%", textAlign: "center" }}>
          <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem", display: "block" }}>Get In Touch</span>
          <h2 className="font-serif" style={{ color: "#ffffff", lineHeight: 1.15, marginBottom: "1.5rem", fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
            Let&apos;s Build Something <em style={{ fontStyle: "italic", color: "#C9912A" }}>Together</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "1rem" }}>
            Open to conversations about partnerships, speaking engagements, ecosystem building, and shared value opportunities across Africa.
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