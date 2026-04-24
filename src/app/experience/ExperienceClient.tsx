"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { HiArrowRight, HiExternalLink } from "react-icons/hi";

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

/* ── Real experience data ── */
const currentRoles = [
  {
    org: "Shared Value Africa",
    website: "https://www.svai.africa/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776711488/Screenshot_2026-04-20_173752_sb3dp4.png",
    roles: [
      { title: "Managing Director – Ghana", period: "Sep 2025 – Present · 8 mos", type: "Full-time", location: "Accra, Ghana / Remote" },
      { title: "Head of New Business", period: "Sep 2025 – Present · 8 mos", type: "Full-time", location: "Pan-African" },
    ],
    description: "Actively supporting the CEO in driving long-term sustainability and securing the necessary funding to strengthen and grow Shared Value Africa. This involves the operational setup and Ghana chapter activation, stakeholder engagement and local ecosystem building, business development and funding mobilisation, and brand awareness and media visibility.",
    tags: ["Non-profit Leadership", "Program Management", "Ecosystem Building", "Business Development"],
  },
  {
    org: "JamiiTrade",
    website: "https://jamiitrade.africa/jamii-home",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776711488/Screenshot_2026-04-20_173823_ynazjg.png",
    roles: [
      { title: "Focal Point", period: "Feb 2022 – Present · 4 yrs 3 mos", type: "Hybrid", location: "Johannesburg, SA / Accra, Ghana" },
    ],
    description: "Collaborating with SVA and its partners as a focal point, championing the development of JamiiTrade — a curated peer-to-peer community for SME trading in Africa and beyond.",
    tags: ["Intra-African Trade", "SME Development", "AfCFTA", "Partnership"],
  },
  {
    org: "Conference Host & Panel Moderator",
    website: "",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776711487/Screenshot_2026-04-20_173936_liwi1y.png",
    roles: [
      { title: "Conference Host & Panel Moderator", period: "Feb 2018 – Present · 8 yrs 3 mos", type: "Self-employed · Seasonal", location: "Global · Hybrid" },
    ],
    description: "An engaging and dynamic innovation event and conference host/MC and panel moderator with the tactfulness to lead insightful discussions on entrepreneurship ecosystem development themes including enterprise development, gender and economic empowerment, climate action, social innovation, creating shared value, and digital innovation.",
    tags: ["Conference Hosting", "Panel Moderation", "Public Speaking", "Thought Leadership"],
    highlights: [
      { label: "3rd EU-African SME Summit 2025", video: "https://www.youtube.com/watch?v=8tNzJhQFni8", cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776711487/Screenshot_2026-04-20_173936_liwi1y.png" },
      { label: "Partnering for Change Ghana 2025", video: "https://www.youtube.com/watch?v=fMfQ1MZH09U", cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776711488/Screenshot_2026-04-20_174142_iwqhii.png" },
      { label: "AYGCC 2024", video: "https://www.ghanaweb.com/blogs/trenderhq/The-2024-African-Youth-Gender-Climate-Conference-Empowering-the-Next-Generation-of-Changemakers-3532", cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776549287/AYGCC2_pdrb6x.jpg" },
    ],
  },
];

const previousRoles = [
  {
    org: "Reach for Change",
    website: "https://reachforchange.org/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776711487/Screenshot_2026-04-20_181138_gbwwpz.png",
    roles: [
      { title: "Project and Partnership Officer", period: "Jan 2025 – Sep 2025 · 9 mos", type: "Full-time", location: "Global · Hybrid" },
      { title: "Global Content & SoMe Officer", period: "Jun 2024 – Mar 2025 · 10 mos", type: "Full-time", location: "Global · Hybrid" },
      { title: "Communication Officer", period: "Feb 2024 – Jun 2024 · 5 mos", type: "Full-time", location: "Addis Ababa, Ethiopia" },
      { title: "Program & Communication Officer", period: "Aug 2022 – May 2024 · 1 yr 10 mos", type: "Full-time", location: "Accra, Ghana · Hybrid" },
      { title: "Program Consultant", period: "Jun 2022 – Jul 2022 · 2 mos", type: "Contract", location: "Greater Accra, Ghana" },
    ],
    description: "Supported the organisation in aligning ecosystem development, stakeholder management, and project strategies for sustained growth and impact at scale. Led global content and social media strategies and supported RFC's vision of building a resilient social entrepreneurship ecosystem in Ghana.",
    tags: ["Ecosystem Management", "Communications", "Program Management", "Content Strategy"],
    duration: "3 yrs 4 mos",
  },
  {
    org: "UNLEASH – Innovation Lab for SDGs",
    website: "https://unleashcommunity.org/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776711492/Screenshot_2026-04-20_181659_exvqvw.png",
    roles: [
      { title: "UNLEASH Ambassador", period: "Jan 2022 – Jun 2024 · 2 yrs 6 mos", type: "Full-time", location: "Global" },
      { title: "Thematic Facilitator – SDG 7", period: "Nov 2023 – Dec 2023 · 2 mos", type: "Seasonal", location: "Kigali, Rwanda · On-site" },
      { title: "Thematic Facilitator – SDG 6", period: "Dec 2022 · 1 mo", type: "Seasonal", location: "Mysore, India · On-site" },
      { title: "UNLEASH Hack Organising Team Lead", period: "Mar 2021 – Nov 2022 · 1 yr 9 mos", type: "Seasonal", location: "Accra, Ghana" },
      { title: "UNLEASH Ambassador", period: "Jan 2021 – Dec 2021 · 1 yr", type: "Full-time", location: "Global" },
    ],
    description: "Facilitating innovation labs that turn personal insights into sustainable development solutions. Served as thematic facilitator for SDG 6 (Clean Water) and SDG 7 (Energy), and led the organising team for UNLEASH Hack Ghana.",
    tags: ["SDGs", "Innovation Labs", "Facilitation", "Youth Leadership"],
    duration: "3 yrs 6 mos",
    highlights: [
      { label: "UNLEASH Rwanda Opening Ceremony", cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776127734/653478802_18096412808012403_1460902080233589365_n_w68tjo.jpg" },
      { label: "UNLEASH Rwanda Closing Ceremony", cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776127855/652073189_18109363483794186_7876016736839192420_n_ymwgwt.jpg" },
    ],
  },
  {
    org: "International Trade Centre",
    website: "https://www.intracen.org/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776711488/Screenshot_2026-04-20_182346_byr5py.png",
    roles: [
      { title: "ITC NTF V Tech Startups Assessor", period: "Mar 2021 – Jul 2023 · 2 yrs 5 mos", type: "Seasonal", location: "Accra, Ghana · On-site" },
    ],
    description: "Conducted tech startup maturity assessments across Ghana, connecting promising ventures to international programmes and investor networks.",
    tags: ["Startup Assessment", "Trade", "Capacity Building"],
  },
  {
    org: "Ghana Tech Lab",
    website: "https://www.ghanatechlab.com/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776714021/Screenshot_2026-04-20_190150_v3kque.png",
    roles: [
      { title: "Investment Associate", period: "May 2021 – Jun 2022 · 1 yr 2 mos", type: "Full-time", location: "Accra, Ghana" },
      { title: "National Coordinator, Ghana Investor Network", period: "2021 – 2022", type: "Project role", location: "Ghana" },
      { title: "Access to Finance Lead, Ghana Startup Ecosystem Mapping", period: "2021 – 2022", type: "Project role", location: "Ghana" },
      { title: "Convener, Ghana Startup Summit", period: "2021 – 2022", type: "Project role", location: "Ghana" },
    ],
    description: "Held multiple roles supporting Ghana's startup ecosystem — from investment facilitation and ecosystem mapping to organising the Ghana Startup Summit and coordinating the national investor network.",
    tags: ["Investment", "Startup Ecosystem", "Access to Finance", "Convening"],
  },
  {
    org: "GrassRoots Hub",
    website: "https://grassrootshubgh.net/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776714023/Screenshot_2026-04-20_190627_qvaieh.png",
    roles: [
      { title: "Technical Lead, Business Development & Sustainability", period: "Jul 2020 – Apr 2021 · 10 mos", type: "Contract", location: "Sunyani, Bono Region, Ghana" },
      { title: "Technical Lead, Monitoring, Evaluation & Learning (ME&L)", period: "Jun 2020 – Feb 2021 · 9 mos", type: "Contract", location: "Sunyani, Bono Region, Ghana" },
      { title: "Trainee Consultant", period: "2020", type: "Contract", location: "Ghana" },
    ],
    description: "Led technical functions in business development, sustainability planning, and monitoring, evaluation & learning across an 11-month engagement.",
    tags: ["Business Development", "MEL", "Sustainability", "Consulting"],
    duration: "11 mos",
  },
  {
    org: "Circadian Consulting Limited",
    website: "https://circadianconsultants.com/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776714021/Screenshot_2026-04-20_190931_gljshe.png",
    roles: [
      { title: "Consultant", period: "Jan 2020 – Jun 2020 · 6 mos", type: "Contract", location: "Accra, Ghana" },
    ],
    description: "Provided consulting support to the firm across various client engagements in Accra.",
    tags: ["Consulting", "Strategy"],
  },
  {
    org: "UNLEASH – Global Talent",
    website: "https://unleashcommunity.org/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776711492/Screenshot_2026-04-20_181659_exvqvw.png",
    roles: [
      { title: "Global Talent – Clean Water & Sanitation (SDG 6)", period: "Jul 2019 – Nov 2019 · 5 mos", type: "Seasonal", location: "Shenzhen, China" },
    ],
    description: "Selected as one of 1,000 global talents to develop solutions to the UN Sustainable Development Goals, specifically in the Clean Water and Sanitation track.",
    tags: ["SDG 6", "Innovation", "Global Talent"],
  },
  {
    org: "UNDP Ghana",
    website: "https://www.undp.org/ghana",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776714023/Screenshot_2026-04-20_191330_gcmt34.png",
    roles: [
      { title: "Ass. Executive Associate to the Resident Representative", period: "Sep 2018 – Aug 2019 · 1 yr", type: "Full-time", location: "Ghana" },
      { title: "Human Resource (Support) – NSP", period: "Aug 2018 – Sep 2018 · 2 mos", type: "Support", location: "Accra, Ghana" },
    ],
    description: "Supported the Resident Representative with executive coordination and assisted with HR functions during a national service period.",
    tags: ["UN", "Executive Support", "HR"],
    duration: "1 yr 1 mo",
  },
  {
    org: "Ghana International Model United Nations",
    website: "https://prepandpave.org/about-gimun2026-2/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776714019/Screenshot_2026-04-20_191618_kgcjt3.png",
    roles: [
      { title: "Administrative Assistant", period: "Mar 2017 – Sep 2018 · 1 yr 7 mos", type: "Freelance", location: "Legon, Ghana" },
    ],
    description: "Provided administrative support for Ghana's premier Model United Nations conference.",
    tags: ["Administration", "MUN", "Diplomacy"],
  },
];

const earlyCareer = [
  {
    org: "Data Link Institute of Business and Technology",
    website: "https://datalink.edu.gh/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776714022/Screenshot_2026-04-20_192316_szbuq5.png",
    role: "SRC President",
    period: "Aug 2017 – Aug 2018 · 1 yr 1 mo",
    location: "Tema, Ghana",
  },
  {
    org: "Opportunity International Savings and Loans",
    website: "https://opportunityghana.com/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776714023/Screenshot_2026-04-20_193127_lyocks.png",
    role: "Customer Service Assistant (Internship)",
    period: "Aug 2015 – Oct 2015 · 3 mos",
    location: "Accra, Ghana",
  },
  {
    org: "Edupreneur Talks Podcast",
    website: "https://reachforchange.org/programs/edupreneur-talks/",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776714437/Screenshot_2026-04-20_194651_tb0ee9.png",
    role: "Podcast Host",
    period: "Reach for Change",
    location: "Ghana",
  },
  {
    org: "Value Creation Forum Ghana 2023",
    website: "",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776120827/1693986824423_ejizvo.jpg",
    role: "Co-Host & Facilitator",
    period: "2023",
    location: "Accra, Ghana",
  },
  {
    org: "Africa Shared Value Leadership Summit 2022",
    website: "",
    cover: "https://res.cloudinary.com/dmyrmlj5z/image/upload/v1776127739/640444919_17976286100834819_9105085867200179719_n_zmqpet.jpg",
    role: "Panel Moderator",
    period: "2022",
    location: "Pan-African",
  },
];

const skills = [
  { category: "Core Expertise", items: ["Business Development", "Partnership Linkages", "Fundraising", "Programme Management", "Ecosystem Building", "Shared Value Strategy"] },
  { category: "Sector Knowledge", items: ["SME Development", "AfCFTA & Intra-African Trade", "Climate Innovation", "Digital Innovation", "Social Entrepreneurship", "SDGs"] },
  { category: "Soft Skills", items: ["Conference Hosting", "Panel Moderation", "Public Speaking", "Strategic Communications", "Stakeholder Engagement", "Thought Leadership"] },
];

export default function ExperienceClient({ experience: sanityExperience }: { experience: any[] }) {
  return (
    <main>
      <style>{`
        .page-hero-grid { display: grid; grid-template-columns: 1fr 420px; gap: 3rem; align-items: center; }
        .page-hero-photo { position: relative; height: 500px; }
        .exp-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.4rem; }
        .exp-grid-2 { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
        .highlights-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 0.75rem; margin-top: 1.2rem; }
        @media (max-width: 1024px) {
          .exp-grid-3 { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 900px) {
          .page-hero-grid { grid-template-columns: 1fr; }
          .page-hero-photo { height: 320px; margin-top: 2rem; }
          .exp-grid-2 { grid-template-columns: 1fr; }
          .highlights-row { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 600px) {
          .exp-grid-3 { grid-template-columns: 1fr; }
          .highlights-row { grid-template-columns: 1fr; }
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
                  <span style={{ color: "#C9912A", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Professional Journey</span>
                </div>
                <h1 className="animate-fade-up delay-2 font-serif" style={{ lineHeight: 1.05, marginBottom: "1.2rem", fontSize: "clamp(2.8rem,5vw,4.5rem)", color: "#ffffff", fontWeight: 700 }}>
                  Built on<br />
                  <em style={{ color: "#C9912A" }}>Purpose & Partnerships</em>
                </h1>
                <p className="animate-fade-up delay-3" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "30rem", marginBottom: "2rem", fontSize: "1rem" }}>
                  From grassroots community development to continental ecosystem building. Every role has been a step toward a more connected, prosperous Africa.
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
              <div className="animate-fade-in delay-3 page-hero-photo">
                <div style={{ position: "absolute", inset: 0, border: "1.5px solid rgba(201,145,42,0.25)", borderRadius: "2px", transform: "translate(10px,10px)" }} />
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: "2px" }}>
                  <img src="https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127496/568690701_18389482405130220_4097415862773396182_n_fpagkr.jpg" alt="Andy at a summit" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                </div>
                <div style={{ position: "absolute", bottom: "-12px", left: "-16px", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "Playfair Display, serif" }}>14+</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Roles Held<br />across Career</span>
                  </div>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "Playfair Display, serif" }}>3</span>
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

      {/* STATS */}
      <div style={{ background: "#152035", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {[{ num: "12+", label: "Years of Impact" }, { num: "10+", label: "Organisations Served" }, { num: "3", label: "Current Roles" }, { num: "3", label: "Continents" }].map((s, i, arr) => (
            <div key={i} style={{ padding: "1.6rem 2rem", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: "2.2rem", fontWeight: 700, color: "#C9912A", lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", marginTop: "0.3rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CURRENT ROLES */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ marginBottom: "3rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem", display: "block" }}>Currently Active</span>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              Present <em style={{ color: "#00739A" }}>Engagements</em>
            </h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
            {currentRoles.map((entry, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: "#ffffff", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", borderTop: "3px solid #C9912A", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(201,145,42,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                 
                  
                  <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 0 }}>
                    {/* Cover image */}
                    <div style={{ position: "relative", minHeight: "200px" }}>
                      <img src={entry.cover} alt={entry.org} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.08))" }} />
                    </div>
                    {/* Content */}
                    <div style={{ padding: "2rem 2rem 1.8rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", gap: "1rem" }}>
                        <div>
                          <h3 className="font-serif" style={{ fontWeight: 700, color: "#0a1628", fontSize: "1.2rem", lineHeight: 1.2, marginBottom: "0.3rem" }}>{entry.org}</h3>
                          {entry.website && (
                            <a href={entry.website} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", color: "#00739A", fontSize: "0.78rem", textDecoration: "none", fontWeight: 500 }}>
                              Visit website <HiExternalLink size={11} />
                            </a>
                          )}
                        </div>
                        <div style={{ background: "rgba(201,145,42,0.1)", color: "#C9912A", fontSize: "0.65rem", fontWeight: 700, padding: "0.3rem 0.7rem", borderRadius: "2rem", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0 }}>Active</div>
                      </div>

                      {/* Sub-roles */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                        {entry.roles.map((r, ri) => (
                          <div key={ri} style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap" }}>
                            <span style={{ fontWeight: 600, color: "#0a1628", fontSize: "0.88rem" }}>{r.title}</span>
                            <span style={{ color: "#4a6070", fontSize: "0.78rem" }}>·</span>
                            <span style={{ color: "#4a6070", fontSize: "0.78rem" }}>{r.period}</span>
                            <span style={{ color: "#4a6070", fontSize: "0.78rem" }}>·</span>
                            <span style={{ color: "#4a6070", fontSize: "0.78rem" }}>{r.location}</span>
                          </div>
                        ))}
                      </div>

                      <p style={{ color: "#4a6070", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>{entry.description}</p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: entry.highlights ? "1rem" : 0 }}>
                        {entry.tags.map((tag: string) => (
                          <span key={tag} style={{ fontSize: "0.7rem", padding: "0.25rem 0.7rem", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.1)", background: "#F5F2EA", color: "#2d3f4e", fontWeight: 500 }}>{tag}</span>
                        ))}
                      </div>

                      {/* Event highlights */}
                      {entry.highlights && (
                        <div className="highlights-row">
                          {entry.highlights.map((h: any, hi: number) => (
                            <a key={hi} href={h.video || "#"} target={h.video ? "_blank" : undefined} rel="noreferrer"
                              style={{ position: "relative", height: "80px", borderRadius: "8px", overflow: "hidden", display: "block", textDecoration: "none" }}>
                              <img src={h.cover} alt={h.label} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                              <div style={{ position: "absolute", inset: 0, background: "rgba(10,22,40,0.55)", display: "flex", alignItems: "flex-end", padding: "0.5rem 0.6rem" }}>
                                <span style={{ color: "#ffffff", fontSize: "0.65rem", fontWeight: 600, lineHeight: 1.2 }}>{h.label}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIOUS ROLES — 3×3 grid */}
      <section style={{ background: "#EDE8DC", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ marginBottom: "3rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem", display: "block" }}>Previous Roles</span>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              The <em style={{ color: "#00739A" }}>Journey So Far</em>
            </h2>
          </Reveal>
          <div className="exp-grid-3">
            {previousRoles.map((entry, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div style={{ background: "#ffffff", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", height: "100%", display: "flex", flexDirection: "column", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#C9912A"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(201,145,42,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  {/* Cover */}
                  <div style={{ position: "relative", height: "140px", flexShrink: 0 }}>
                    <img src={entry.cover} alt={entry.org} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 60%)" }} />
                    {entry.duration && (
                      <div style={{ position: "absolute", top: "0.7rem", right: "0.7rem", background: "rgba(10,22,40,0.85)", color: "#C9912A", fontSize: "0.65rem", fontWeight: 700, padding: "0.25rem 0.6rem", borderRadius: "2rem", letterSpacing: "0.06em" }}>
                        {entry.duration}
                      </div>
                    )}
                  </div>
                  {/* Body */}
                  <div style={{ padding: "1.4rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ marginBottom: "0.8rem" }}>
                      <h3 className="font-serif" style={{ fontWeight: 700, color: "#0a1628", fontSize: "1rem", lineHeight: 1.25, marginBottom: "0.25rem" }}>{entry.org}</h3>
                      {entry.website && (
                        <a href={entry.website} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "#00739A", fontSize: "0.72rem", textDecoration: "none" }}>
                          Website <HiExternalLink size={10} />
                        </a>
                      )}
                    </div>

                    {/* Roles list */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "0.9rem" }}>
                      {entry.roles.map((r, ri) => (
                        <div key={ri} style={{ borderLeft: ri === 0 ? "2px solid #C9912A" : "2px solid rgba(201,145,42,0.25)", paddingLeft: "0.6rem" }}>
                          <div style={{ fontWeight: 600, color: "#0a1628", fontSize: "0.82rem", lineHeight: 1.25 }}>{r.title}</div>
                          <div style={{ color: "#4a6070", fontSize: "0.72rem", marginTop: "0.1rem" }}>{r.period} · {r.location}</div>
                        </div>
                      ))}
                    </div>

                    <p style={{ color: "#4a6070", fontSize: "0.82rem", lineHeight: 1.65, flex: 1, marginBottom: "1rem" }}>{entry.description}</p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {entry.tags.map((tag: string) => (
                        <span key={tag} style={{ fontSize: "0.68rem", padding: "0.2rem 0.6rem", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.1)", background: "#EDE8DC", color: "#2d3f4e", fontWeight: 500 }}>{tag}</span>
                      ))}
                    </div>

                    {/* UNLEASH highlights */}
                    {(entry as any).highlights && (
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginTop: "1rem" }}>
                        {(entry as any).highlights.map((h: any, hi: number) => (
                          <div key={hi} style={{ position: "relative", height: "60px", borderRadius: "6px", overflow: "hidden" }}>
                            <img src={h.cover} alt={h.label} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                            <div style={{ position: "absolute", inset: 0, background: "rgba(10,22,40,0.5)", display: "flex", alignItems: "flex-end", padding: "0.3rem 0.4rem" }}>
                              <span style={{ color: "#fff", fontSize: "0.6rem", fontWeight: 600, lineHeight: 1.2 }}>{h.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EARLY CAREER & NOTABLE MOMENTS — 3×2 grid */}
      <section style={{ background: "#0a1628", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ marginBottom: "3rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem", display: "block" }}>Early Career & Notable Moments</span>
            <h2 className="font-serif" style={{ color: "#ffffff", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              Where It <em style={{ color: "#C9912A" }}>All Began</em>
            </h2>
          </Reveal>
          <div className="exp-grid-3" style={{ gap: "1rem" }}>
            {earlyCareer.map((entry, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div style={{ position: "relative", height: "220px", borderRadius: "12px", overflow: "hidden" }}>
                  <img src={entry.cover} alt={entry.org} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.3) 60%, transparent 100%)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.2rem 1.2rem" }}>
                    <div style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.88rem", lineHeight: 1.2, marginBottom: "0.2rem" }}>{entry.org}</div>
                    <div style={{ color: "#C9912A", fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.15rem" }}>{entry.role}</div>
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.7rem" }}>{entry.period} · {entry.location}</div>
                  </div>
                  {entry.website && (
                    <a href={entry.website} target="_blank" rel="noreferrer"
                      style={{ position: "absolute", top: "0.75rem", right: "0.75rem", background: "rgba(10,22,40,0.8)", color: "#C9912A", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                      <HiExternalLink size={12} />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ textAlign: "center", maxWidth: "40rem", margin: "0 auto 4rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", display: "block" }}>Skills</span>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              Areas of <em style={{ color: "#00739A" }}>Expertise</em>
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

      {/* CTA */}
      <section style={{ background: "#152035", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(201,145,42,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Reveal style={{ position: "relative", zIndex: 10, maxWidth: "40rem", margin: "0 auto", padding: "0 5%", textAlign: "center" }}>
          <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem", display: "block" }}>Work Together</span>
          <h2 className="font-serif" style={{ color: "#ffffff", lineHeight: 1.15, marginBottom: "1.5rem", fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
            Let&apos;s Build Something <em style={{ color: "#C9912A" }}>Together</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "1rem" }}>
            Open to conversations about partnerships, speaking engagements, ecosystem building, and shared value opportunities across Africa.
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