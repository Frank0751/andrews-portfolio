"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiX } from "react-icons/hi";

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

const photos = [
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776120830/Andrews-Website-_lhhs4d.png", category: "Portrait" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776125121/491498564_18366378268130220_2175622565025465249_n_xpjqfi.jpg", category: "Speaking" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776125121/491439181_18366378259130220_5959255673779854005_n_nkjshm.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127496/568690701_18389482405130220_4097415862773396182_n_fpagkr.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127498/568403187_18389482339130220_7445678454955259057_n_tqzlwz.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127495/568758733_18389482435130220_2395841773803828042_n_wunghb.jpg", category: "Speaking" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127496/568594050_18389482393130220_4749439351109328621_n_wbjpwh.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127499/569263721_18389482327130220_1045684524461661899_n_mfruut.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127499/476352010_618425277436121_78620908508698518_n_zhuzzp.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127735/655937334_18112927921735492_7610053134791253292_n_w6uiqa.jpg", category: "Portrait" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127738/658877472_18584227099063671_8574493065532499635_n_zg28od.jpg", category: "Speaking" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127739/652560878_18104771914854889_1109896403652481350_n_miptga.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127734/653478802_18096412808012403_1460902080233589365_n_w68tjo.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127736/658761575_18112329346684775_162619148172086078_n_zqbdpq.jpg", category: "Speaking" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127737/652369399_17997998483873720_6001609916839923661_n_ez17z6.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127737/655185478_18048399530718488_3624784919942353557_n_ujqpj0.jpg", category: "Speaking" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127739/640444919_17976286100834819_9105085867200179719_n_zmqpet.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127852/656160964_18357772666231283_2151060228362153169_n_xjbuaa.jpg", category: "Speaking" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127855/652073189_18109363483794186_7876016736839192420_n_ymwgwt.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127855/653484089_18017444918655055_4981351734711690384_n_cwzjqf.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776128269/440748096_18321136168130220_8422845594770408380_n_qfoda6.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776128269/440800345_18321136132130220_614070216242985709_n_rnyavk.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776128269/440969958_18321136156130220_6665600419012793334_n_kzxakp.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776128271/440978463_18321136159130220_2464150683819729634_n_t0gljp.jpg", category: "Speaking" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776128272/656160964_18357772666231283_2151060228362153169_n_bzir8q.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776128272/669773749_18387215191093139_301502406807195260_n_uvpiwp.jpg", category: "Portrait" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776120826/1731542591188_u3ctwg.jpg", category: "Portrait" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776120826/1753444370446_ekkfpe.jpg", category: "Portrait" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776120826/1749804203712_p7xsh4.jpg", category: "Portrait" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127499/567776312_18389482366130220_8345196714403877504_n_kmpsvz.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127735/657459075_18348000886214048_2946261413149880132_n_zskm9q.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127854/649235807_17990980325935191_3652269518509177586_n_eiqh4s.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776128269/656439866_18136317109460030_2123201914999634158_n_emohsp.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776128269/662491605_18573915088012538_6121732477133161388_n_l5sunb.jpg", category: "Events" },
  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776128285/653484089_18017444918655055_4981351734711690384_n_tsqe9f.jpg", category: "Speaking" },
];

const videos = [
  {
    src: "https://res.cloudinary.com/dmyrmlj5z/video/upload/q_auto/f_auto/v1776157340/AQOTK_dv1FU1SZRW0VuabG7Iv7UeWry0k-y1JEpIN4AaQgD85izcrA38E72onx65vfnDH3mvhbbU7MT4qH6o5z1O_ggslbq.mp4",
    caption: "Commencement Speech at Data Link Institute of Business and Technology (DLIBT), Graduating Class of 2025",
    sub: "Invited to speak seven years after his own graduation, Andy returned as the 9th SRC President to address the next generation.",
    poster: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776521826/Thumbnail_for_video_kjxt2j.png",
  },
];

const categories = ["All", "Portrait", "Speaking", "Events", "Videos"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? photos : active === "Videos" ? [] : photos.filter(p => p.category === active);
  const showPhotos = active !== "Videos";
  const showVideos = active === "All" || active === "Videos";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox !== null) setLightbox((lightbox + 1) % filtered.length);
      if (e.key === "ArrowLeft" && lightbox !== null) setLightbox((lightbox - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, filtered.length]);

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
          HERO — full viewport height with photo
      ═══════════════════════════════════════ */}
      <section style={{ background: "#0a1628", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>

        {/* Background grid + glows */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,165,195,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,165,195,0.04) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
          <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse 70% 80% at 80% 40%, rgba(0,165,195,0.08) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "33%", height: "50%", background: "radial-gradient(ellipse 60% 60% at 20% 80%, rgba(201,145,42,0.06) 0%, transparent 60%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "8rem 0 4rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
            <div className="page-hero-grid">

              {/* LEFT */}
              <div>
                <div className="animate-fade-up delay-1" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
                  
                  <span style={{ color: "#C9912A", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>Gallery</span>
                </div>
                <h1 className="animate-fade-up delay-2 font-serif" style={{ lineHeight: 1.05, marginBottom: "1.2rem", fontSize: "clamp(2.8rem,5vw,4.5rem)", color: "#ffffff", fontWeight: 700 }}>
                  Moments Across<br />
                  <em style={{ fontStyle: "italic", color: "#C9912A" }}>the Continent</em>
                </h1>
                <p className="animate-fade-up delay-3" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "30rem", marginBottom: "2rem", fontSize: "1rem" }}>
                  A visual record of summits, panels, conversations, and
                  the people and places that define this journey.
                </p>
                <div className="animate-fade-up delay-4" style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                  {["Photos", "Videos", "Events", "Speaking"].map((t) => (
                    <span key={t} style={{ fontSize: "0.72rem", padding: "0.3rem 0.85rem", borderRadius: "2rem", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — Photo matrix */}
              <div className="animate-fade-in delay-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "0.6rem", height: "500px" }}>
                {[
                  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127496/568690701_18389482405130220_4097415862773396182_n_fpagkr.jpg", tall: true },
                  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127498/568403187_18389482339130220_7445678454955259057_n_tqzlwz.jpg", tall: false },
                  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776125121/491498564_18366378268130220_2175622565025465249_n_xpjqfi.jpg", tall: false },
                  { src: "https://res.cloudinary.com/dmyrmlj5z/image/upload/q_auto/f_auto/v1776127852/656160964_18357772666231283_2151060228362153169_n_xjbuaa.jpg", tall: false },
                ].map((photo, i) => (
                  <div key={i} style={{ position: "relative", borderRadius: "8px", overflow: "hidden", gridRow: i === 0 ? "1 / 3" : "auto" }}>
                    <Image
                      src={photo.src}
                      alt="Andy in action"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "2rem", background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY CONTENT
      ═══════════════════════════════════════ */}
      <section style={{ background: "#F5F2EA", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>

          {/* Filter tabs */}
          <Reveal style={{ display: "flex", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setLightbox(null); }}
                style={{
                  padding: "0.55rem 1.4rem",
                  borderRadius: "2rem",
                  border: active === cat ? "none" : "1px solid rgba(0,0,0,0.12)",
                  background: active === cat ? "#C9912A" : "#ffffff",
                  color: active === cat ? "#0a1628" : "#2d3f4e",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  letterSpacing: "0.04em",
                }}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Videos — shown first */}
          {showVideos && (
            <div style={{ marginBottom: showPhotos && filtered.length > 0 ? "5rem" : "0" }}>
              <Reveal style={{ marginBottom: "2.5rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                   Videos
                </span>
                <h2 className="font-serif" style={{ color: "#0a1628", fontSize: "clamp(1.8rem,3vw,2.4rem)", lineHeight: 1.15 }}>
                  Watch <em style={{ fontStyle: "italic", color: "#00739A" }}>Andy in Action</em>
                </h2>
              </Reveal>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
                {videos.map((video, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", background: "#ffffff", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                      <video
                        controls
                        poster={video.poster}
                        style={{ width: "100%", display: "block", maxHeight: "400px", background: "#0a1628" }}
                        preload="metadata"
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                      <div style={{ padding: "1.5rem 1.8rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                          <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "rgba(201,145,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="#C9912A">
                              <path d="M0 0L10 6L0 12V0Z" />
                            </svg>
                          </div>
                          <span style={{ color: "#C9912A", fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Video</span>
                        </div>
                        <h3 className="font-serif" style={{ color: "#0a1628", fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.4, marginBottom: "0.5rem" }}>{video.caption}</h3>
                        <p style={{ color: "#4a6070", fontSize: "0.83rem", lineHeight: 1.65 }}>{video.sub}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Photos grid */}
          {showPhotos && filtered.length > 0 && (
            <>
              {active === "All" && (
                <Reveal style={{ marginBottom: "2.5rem" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#C9912A", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                     Photos
                  </span>
                  <h2 className="font-serif" style={{ color: "#0a1628", fontSize: "clamp(1.8rem,3vw,2.4rem)", lineHeight: 1.15 }}>
                    A Visual <em style={{ fontStyle: "italic", color: "#00739A" }}>Journey</em>
                  </h2>
                </Reveal>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
                {filtered.map((photo, i) => (
                  <Reveal key={`${active}-${i}`} delay={i * 0.04}>
                    <div
                      onClick={() => setLightbox(i)}
                      style={{ position: "relative", height: i % 4 === 0 ? "320px" : "240px", borderRadius: "12px", overflow: "hidden", cursor: "pointer" }}
                    >
                      <Image
                        src={photo.src}
                        alt="Andy"
                        fill
                        style={{ objectFit: "cover", transition: "transform 0.4s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                      />
                      <div
                        style={{ position: "absolute", inset: 0, background: "rgba(201,145,42,0.08)", opacity: 0, transition: "opacity 0.3s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = "1"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity = "0"; }}
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      {/* ═══════════════════════════════════════
          LIGHTBOX
      ═══════════════════════════════════════ */}
      {lightbox !== null && filtered.length > 0 && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(5,12,22,0.97)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
        >
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: "2.5rem", height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#ffffff" }}>
            <HiX size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + filtered.length) % filtered.length); }} style={{ position: "absolute", left: "1.5rem", background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: "3rem", height: "3rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#ffffff", fontSize: "1.4rem" }}>
            ‹
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", maxWidth: "900px", width: "100%", height: "75vh", borderRadius: "12px", overflow: "hidden" }}>
            <Image src={filtered[lightbox].src} alt="Andy" fill style={{ objectFit: "contain" }} />
          </div>
          <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>{lightbox + 1} / {filtered.length}</div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % filtered.length); }} style={{ position: "absolute", right: "1.5rem", background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: "3rem", height: "3rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#ffffff", fontSize: "1.4rem" }}>
            ›
          </button>
        </div>
      )}

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
