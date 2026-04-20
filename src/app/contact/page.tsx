"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiMail, HiLocationMarker } from "react-icons/hi";
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

const reasons = [
  { title: "Partnerships", desc: "Exploring shared value opportunities and ecosystem collaborations across Africa." },
  { title: "Speaking Engagements", desc: "Conference hosting, panel moderation, and keynote opportunities." },
  { title: "Ecosystem Building", desc: "Working together to build stronger entrepreneurship ecosystems." },
  { title: "Intra-African Trade", desc: "Connecting businesses through JamiiTrade and AfCFTA conversations." },
];

const socials = [
  { icon: <FaLinkedinIn size={18} />, label: "LinkedIn", handle: "andrewsakotoaddo", href: "https://www.linkedin.com/in/andrewsakotoaddo" },
  { icon: <FaMediumM size={18} />, label: "Medium", handle: "@andrewakotoaddo", href: "https://andrewakotoaddo.medium.com" },
  { icon: <FaInstagram size={18} />, label: "Instagram", handle: "@andrewsakotoaddo", href: "https://www.instagram.com/andrewsakotoaddo" },
  { icon: <FaFacebookF size={18} />, label: "Facebook", handle: "andrew.mul", href: "https://web.facebook.com/andrew.mul" },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "55ac3558-2d82-4b52-828a-6998ffb4d539",
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "New message from Andy's Portfolio",
          message: formState.message,
          from_name: "Andy\u2019s Portfolio",
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

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
                  <span style={{ color: "#C9912A", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Get In Touch</span>
                </div>
                <h1 className="animate-fade-up delay-2 font-serif" style={{ lineHeight: 1.05, marginBottom: "1.2rem", fontSize: "clamp(2.8rem,5vw,4.5rem)", color: "#ffffff", fontWeight: 700 }}>
                  Let&apos;s Build Something<br />
                  <em style={{ fontStyle: "italic", color: "#C9912A" }}>Together</em>
                </h1>
                <p className="animate-fade-up delay-3" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "30rem", marginBottom: "2rem", fontSize: "1rem" }}>
                  Open to conversations about partnerships, speaking engagements,
                  ecosystem building, and shared value opportunities across Africa.
                </p>
                <div className="animate-fade-up delay-4" style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                  <a href="mailto:andy@shiftimpact.africa" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.95rem" }}>
                    <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "rgba(201,145,42,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9912A", flexShrink: 0 }}><HiMail size={15} /></div>
                    andy@shiftimpact.africa
                  </a>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}>
                    <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "rgba(201,145,42,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9912A", flexShrink: 0 }}><HiLocationMarker size={15} /></div>
                    Accra, Ghana
                  </div>
                </div>
                <div className="animate-fade-up delay-5" style={{ display: "flex", gap: "0.75rem" }}>
                  {socials.map((s, i) => (
                    <Link key={i} href={s.href} target="_blank" style={{ width: "2.2rem", height: "2.2rem", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                      {s.icon}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="animate-fade-in delay-3 page-hero-photo">
                <div style={{ position: "absolute", inset: 0, border: "1.5px solid rgba(201,145,42,0.25)", borderRadius: "2px", transform: "translate(10px,10px)" }} />
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: "2px" }}>
                  <Image src="https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776128271/440978463_18321136159130220_2464150683819729634_n_t0gljp.jpg" alt="Andy connecting with people" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
                </div>
                <div style={{ position: "absolute", bottom: "-12px", left: "-16px", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "Playfair Display, serif" }}>10+</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Organisations<br />Served</span>
                  </div>
                  <div style={{ background: "rgba(10,22,40,0.92)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "0.6rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ color: "#C9912A", fontSize: "1rem", fontWeight: 700, fontFamily: "Playfair Display, serif" }}>3</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.68rem" }}>Continents<br />Active</span>
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

      {/* CONTACT FORM + INFO */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <Reveal>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>Contact</span>
                <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, marginBottom: "1.5rem", fontSize: "clamp(2rem,3.5vw,3rem)" }}>
                  Open to the <em style={{ fontStyle: "italic", color: "#00739A" }}>Right Conversations</em>
                </h2>
                <p style={{ color: "#4a6070", lineHeight: 1.8, marginBottom: "2.5rem", fontSize: "0.97rem" }}>
                  Whether you have a partnership opportunity, a speaking engagement,
                  or simply want to connect around shared value and Pan-African development,
                  Andy would love to hear from you.
                </p>
              </Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                {reasons.map((r, i) => (
                  <Reveal key={i} delay={i * 0.07}>
                    <div style={{ background: "#ffffff", borderRadius: "12px", padding: "1.2rem 1.4rem", border: "1px solid rgba(0,0,0,0.08)", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C9912A", flexShrink: 0, marginTop: "0.4rem" }} />
                      <div>
                        <div style={{ fontWeight: 700, color: "#0a1628", fontSize: "0.9rem", marginBottom: "0.2rem" }}>{r.title}</div>
                        <div style={{ color: "#4a6070", fontSize: "0.82rem", lineHeight: 1.6 }}>{r.desc}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.3}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <a href="mailto:andy@shiftimpact.africa" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#2d3f4e", textDecoration: "none", fontSize: "0.9rem" }}>
                    <div style={{ width: "2.2rem", height: "2.2rem", borderRadius: "50%", background: "rgba(201,145,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9912A" }}><HiMail size={16} /></div>
                    andy@shiftimpact.africa
                  </a>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#2d3f4e", fontSize: "0.9rem" }}>
                    <div style={{ width: "2.2rem", height: "2.2rem", borderRadius: "50%", background: "rgba(201,145,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9912A" }}><HiLocationMarker size={16} /></div>
                    Accra, Ghana
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Form */}
            <Reveal delay={0.15}>
              <div style={{ background: "#ffffff", borderRadius: "20px", padding: "2.5rem", border: "1px solid rgba(0,0,0,0.08)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                    <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", background: "rgba(201,145,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "1.5rem", color: "#C9912A" }}>✓</div>
                    <h3 className="font-serif" style={{ color: "#0a1628", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Message Sent</h3>
                    <p style={{ color: "#4a6070", lineHeight: 1.7, marginBottom: "2rem" }}>Thank you for reaching out. Andy will be in touch soon.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", subject: "", message: "" }); setError(""); }}
                      style={{ padding: "0.7rem 1.8rem", background: "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", border: "none", fontSize: "0.88rem", cursor: "pointer" }}
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="font-serif" style={{ color: "#0a1628", fontSize: "1.4rem", fontWeight: 600, marginBottom: "0.5rem" }}>Send a Message</h3>
                    <p style={{ color: "#4a6070", fontSize: "0.85rem", marginBottom: "2rem" }}>Fill in the form and Andy will get back to you.</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#0a1628", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Name</label>
                          <input value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} placeholder="Your name" style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.9rem", color: "#0a1628", outline: "none", background: "#fafafa", fontFamily: "Outfit, sans-serif" }} />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#0a1628", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Email</label>
                          <input type="email" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} placeholder="your@email.com" style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.9rem", color: "#0a1628", outline: "none", background: "#fafafa", fontFamily: "Outfit, sans-serif" }} />
                        </div>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#0a1628", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Subject</label>
                        <input value={formState.subject} onChange={e => setFormState({ ...formState, subject: e.target.value })} placeholder="What is this about?" style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.9rem", color: "#0a1628", outline: "none", background: "#fafafa", fontFamily: "Outfit, sans-serif" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#0a1628", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Message</label>
                        <textarea value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })} placeholder="Tell Andy what you have in mind..." rows={5} style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.9rem", color: "#0a1628", outline: "none", background: "#fafafa", resize: "vertical", fontFamily: "Outfit, sans-serif" }} />
                      </div>
                      {error && (
                        <p style={{ color: "#c0392b", fontSize: "0.82rem", marginTop: "-0.5rem" }}>{error}</p>
                      )}
                      <button
                        onClick={handleSubmit}
                        disabled={sending}
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.9rem 2rem", background: sending ? "rgba(201,145,42,0.6)" : "#C9912A", color: "#0a1628", fontWeight: 700, borderRadius: "3rem", border: "none", fontSize: "0.9rem", cursor: sending ? "not-allowed" : "pointer", transition: "all 0.2s", width: "100%", fontFamily: "Outfit, sans-serif" }}
                      >
                        {sending ? "Sending..." : <><span>Send Message</span> <HiArrowRight /></>}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section style={{ background: "#EDE8DC", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ textAlign: "center", maxWidth: "36rem", margin: "0 auto 3rem" }}>
            <h2 className="font-serif" style={{ color: "#0a1628", lineHeight: 1.15, fontSize: "clamp(1.8rem,3vw,2.5rem)", marginBottom: "0.75rem" }}>
              Connect on <em style={{ fontStyle: "italic", color: "#00739A" }}>Social Media</em>
            </h2>
            <p style={{ color: "#4a6070", fontSize: "0.95rem" }}>Follow the journey across platforms.</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }}>
            {socials.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Link href={s.href} target="_blank"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", background: "#ffffff", borderRadius: "16px", padding: "2rem 1rem", border: "1px solid rgba(0,0,0,0.08)", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9912A"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(201,145,42,0.1)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.08)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(201,145,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9912A" }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, color: "#0a1628", fontSize: "0.9rem" }}>{s.label}</div>
                  <div style={{ color: "#4a6070", fontSize: "0.78rem" }}>{s.handle}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANISATIONS */}
      <section style={{ background: "#0a1628", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
          <Reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h2 className="font-serif" style={{ color: "#ffffff", lineHeight: 1.15, fontSize: "clamp(1.6rem,2.5vw,2.2rem)", marginBottom: "0.5rem" }}>Also find Andy at</h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>His work across organisations</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {[
                { label: "svai.africa", href: "https://www.svai.africa" },
                { label: "JamiiTrade", href: "https://jamiitrade.africa/u/andrews" },
                { label: "Medium", href: "https://andrewakotoaddo.medium.com" },
              ].map((org) => (
                <Link key={org.label} href={org.href} target="_blank"
                  style={{ padding: "0.6rem 1.4rem", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.85rem", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9912A"; (e.currentTarget as HTMLAnchorElement).style.color = "#C9912A"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; }}
                >
                  {org.label}
                </Link>
              ))}
            </div>
          </Reveal>
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