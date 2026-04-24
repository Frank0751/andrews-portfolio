"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiArrowRight, HiExternalLink } from "react-icons/hi";
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

function Reveal({ children, style = {}, delay = 0 }: { children: React.ReactNode; style?: React.CSSProperties; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

const fallbackProjects = [
  {
    _id: "1",
    title: "African Youth, Gender and Climate Conference",
    org: "Self Employed",
    period: "Nov 2023 — Present",
    status: "Active",
    description: "An annual pan-African conference bringing together young leaders, gender advocates, and climate champions to develop actionable solutions for the continent's most pressing challenges. Andy serves as a key ecosystem advisor and conference host.",
    tags: ["Youth", "Climate", "Gender", "Conference", "Pan-African"],
    image: null,
    fallbackImage: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776549287/AYGCC2_pdrb6x.jpg",
    link: "https://www.linkedin.com/in/andrewsakotoaddo",
  },
  {
    _id: "2",
    title: "JamiiTrade: Access. Collaboration. Growth.",
    org: "JamiiTrade",
    period: "Aug 2021 — Present",
    status: "Active",
    description: "Championing intra-African trade by serving as the Ghana Focal Point for JamiiTrade, a curated peer-to-peer community for SME trading in Africa.",
    tags: ["Intra-African Trade", "SMEs", "AfCFTA", "Ecosystem"],
    image: null,
    fallbackImage: "https://api.microlink.io/?url=https://jamiitrade.africa/u/andrews&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://jamiitrade.africa/u/andrews",
  },
  {
    _id: "3",
    title: "Edupreneur Talks Podcast",
    org: "Reach for Change",
    period: "May 2023 — Jan 2024",
    status: "Completed",
    description: "A podcast series exploring the intersection of education and entrepreneurship across Africa.",
    tags: ["Podcast", "Education", "Entrepreneurship", "Youth"],
    image: null,
    fallbackImage: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776547377/Edupreneur_ypjbsv.jpg",
    link: "https://www.linkedin.com/in/andrewsakotoaddo",
  },
  {
    _id: "4",
    title: "Impact of Emotional Labour Research",
    org: "KNUST",
    period: "Oct 2017 — Jun 2018",
    status: "Completed",
    description: "A research paper examining the impact of emotional labour on workers in Ghana's service sector.",
    tags: ["Research", "Emotional Labour", "Human Capital", "Ghana"],
    image: null,
    fallbackImage: "https://api.microlink.io/?url=https://www.knust.edu.gh&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://www.linkedin.com/in/andrewsakotoaddo",
  },
];

export default function ProjectsClient({ sanityProjects }: { sanityProjects: any[] }) {
  const projects = sanityProjects.length > 0 ? sanityProjects : fallbackProjects;

  return (
    <main>
      <style>{`
        .page-hero-grid { display: grid; grid-template-columns: 1fr 420px; gap: 3rem; align-items: center; }
        .page-hero-photo { position: relative; height: 500px; }
        .project-card-grid { display: grid; }
        @media (max-width: 900px) {
          .page-hero-grid { grid-template-columns: 1fr !important; }
          .page-hero-photo { height: 320px; margin-top: 2rem; }
          .project-card-grid { grid-template-columns: 1fr !important; }
          .project-card-grid > div { order: unset !important; height: 250px !important; }
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
                  <span style={{ color: "#C9912A", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Projects</span>
                </div>
                <h1 className="animate-fade-up delay-2 font-serif" style={{ lineHeight: 1.05, marginBottom: "1.2rem", fontSize: "clamp(2.8rem,5vw,4.5rem)", color: "#ffffff", fontWeight: 700 }}>
                  Initiatives That<br />
                  <em style={{ color: "#C9912A" }}>Move the Needle</em>
                </h1>
                <p className="animate-fade-up delay-3" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "30rem", marginBottom: "2rem", fontSize: "1rem" }}>
                  A selection of projects, initiatives, and ventures that reflect
                  Andy&apos;s commitment to building ecosystems, amplifying voices,
                  and advancing African development.
                </p>
                <div className="animate-fade-up delay-4" style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.88rem", textDecoration: "none" }}>
                    Collaborate <HiArrowRight />
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
                    src="https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127739/652560878_18104771914854889_1109896403652481350_n_miptga.jpg"
                    alt="Andy leading projects"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority
                  />
                </div>
                <div style={{ position: "absolute", bottom: "-12px", left: "-16px", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>{projects.length}</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Key<br />Projects</span>
                  </div>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-heading)" }}>{projects.filter((p: any) => p.status === "Active").length}</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Currently<br />Active</span>
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

      {/* PROJECTS */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ marginBottom: "3rem" }}>
            <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem", display: "block" }}>All Projects</span>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(2rem,3.5vw,3rem)" }}>
              Work That <em style={{ color: "#00739A" }}>Matters</em>
            </h2>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {projects.map((project: any, i: number) => {
              const imageUrl = project.image
                ? urlFor(project.image).width(720).url()
                : project.fallbackImage;

              return (
                <Reveal key={project._id} delay={i * 0.1}>
                  <div
                    className="project-card-grid"
                    style={{
                      gridTemplateColumns: i % 2 === 0 ? "1fr 360px" : "360px 1fr",
                      gap: "3rem",
                      alignItems: "center",
                      background: "#ffffff",
                      borderRadius: "20px",
                      overflow: "hidden",
                      border: "1px solid rgba(0,0,0,0.08)",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 48px rgba(201,145,42,0.1)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#C9912A"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,0,0.08)"; }}
                  >
                    <div style={{ order: i % 2 === 0 ? 2 : 1, position: "relative", height: "300px" }}>
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt={project.title}
                          fill
                          style={{ objectFit: imageUrl.includes("Edupreneur") ? "contain" : "cover", background: imageUrl.includes("Edupreneur") ? "#ffffff" : "transparent" }}
                        />
                      )}
                    </div>
                    <div style={{ order: i % 2 === 0 ? 1 : 2, padding: "2.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                        <span style={{ background: project.status === "Active" ? "rgba(201,145,42,0.1)" : "rgba(0,0,0,0.06)", color: project.status === "Active" ? "#C9912A" : "#4a6070", fontSize: "0.65rem", fontWeight: 700, padding: "0.3rem 0.8rem", borderRadius: "2rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                          {project.status}
                        </span>
                        <span style={{ color: "#4a6070", fontSize: "0.8rem" }}>{project.period}</span>
                      </div>
                      <h3 className="font-serif" style={{ fontWeight: 700, color: "#0a1628", fontSize: "clamp(1.2rem,2vw,1.5rem)", lineHeight: 1.3, marginBottom: "0.4rem" }}>{project.title}</h3>
                      <div style={{ color: "#00739A", fontWeight: 600, fontSize: "0.85rem", marginBottom: "1rem" }}>{project.org}</div>
                      <p style={{ color: "#4a6070", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>{project.description}</p>
                      {project.tags && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                          {project.tags.map((tag: string) => (
                            <span key={tag} style={{ fontSize: "0.7rem", padding: "0.25rem 0.7rem", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.1)", background: "#F5F2EA", color: "#2d3f4e", fontWeight: 500 }}>{tag}</span>
                          ))}
                        </div>
                      )}
                      {project.link && (
                        <Link href={project.link} target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#C9912A", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}>
                          View Project <HiExternalLink size={14} />
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#152035", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(201,145,42,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "40rem", margin: "0 auto", padding: "0 5%", textAlign: "center" }}>
          <span style={{ color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem", display: "block" }}>Collaborate</span>
          <h2 className="font-serif" style={{ color: "#ffffff", lineHeight: 1.15, marginBottom: "1.5rem", fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
            Have a Project in <em style={{ color: "#C9912A" }}>Mind?</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "1rem" }}>
            Open to conversations about partnerships, new initiatives,
            and collaborative projects that advance the African development agenda.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", fontSize: "0.9rem", textDecoration: "none" }}>
              Get In Touch <HiArrowRight />
            </Link>
            <Link href="/experience" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", border: "1.5px solid rgba(255,255,255,0.25)", color: "#ffffff", fontWeight: 600, borderRadius: "3rem", fontSize: "0.9rem", textDecoration: "none" }}>
              View Experience
            </Link>
          </div>
        </div>
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