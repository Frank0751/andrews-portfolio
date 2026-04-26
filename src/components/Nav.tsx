"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { FaLinkedinIn, FaInstagram, FaMediumM, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const WA_HREF = "https://wa.me/233551441428";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/impact", label: "Impact" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Connect" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .nav-root.scrolled {
          background: rgba(10,22,40,0.97);
          box-shadow: 0 1px 0 rgba(255,255,255,0.06);
          backdrop-filter: blur(12px);
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
          height: 4.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
        }
        .nav-logo span { color: #C9912A; }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #ffffff; }
        .nav-link.active { color: #C9912A; }
        .nav-cta {
          padding: 0.5rem 1.2rem;
          background: #C9912A;
          color: #0a1628;
          border-radius: 2rem;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .nav-cta:hover { opacity: 0.88; }
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 0.4rem;
          z-index: 60;
          position: relative;
        }
        .nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 55;
          background: #0a1628;
          display: flex;
          flex-direction: column;
          padding: 6rem 5% 3rem;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-overlay.open { transform: translateX(0); }
        .nav-overlay-link {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 7vw, 3rem);
          font-weight: 700;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          padding: 0.6rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.2s;
        }
        .nav-overlay-link:hover, .nav-overlay-link.active { color: #C9912A; }
        .nav-overlay-socials {
          display: flex;
          gap: 1rem;
          margin-top: auto;
          padding-top: 2rem;
        }
        .nav-overlay-social {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: all 0.2s;
        }
        .nav-overlay-social:hover { border-color: #C9912A; color: #C9912A; }
        .nav-wa-float {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 3.4rem;
          height: 3.4rem;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(37,211,102,0.45);
          z-index: 200;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-wa-float:hover { transform: scale(1.1); box-shadow: 0 6px 24px rgba(37,211,102,0.55); }
        @media (max-width: 900px) {
          .nav-desktop { display: none; }
          .nav-hamburger { display: flex; align-items: center; justify-content: center; }
        }
      `}</style>

      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Andy<span>.</span>
          </Link>

          <div className="nav-desktop">
            {links.slice(0, -1).map((l) => (
              <Link key={l.href} href={l.href} className={`nav-link${pathname === l.href ? " active" : ""}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-cta">Connect</Link>
          </div>

          <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </nav>

      <div className={`nav-overlay${open ? " open" : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={`nav-overlay-link${pathname === l.href ? " active" : ""}`}>
            {l.label}
          </Link>
        ))}
        <div className="nav-overlay-socials">
          <Link href="https://www.linkedin.com/in/andrewsakotoaddo" target="_blank" className="nav-overlay-social"><FaLinkedinIn size={14} /></Link>
          <Link href="https://medium.com/@andrewakotoaddo" target="_blank" className="nav-overlay-social"><FaMediumM size={14} /></Link>
          <Link href="https://www.instagram.com/andrewsakotoaddo" target="_blank" className="nav-overlay-social"><FaInstagram size={14} /></Link>
          <Link href="https://web.facebook.com/andrew.mul" target="_blank" className="nav-overlay-social"><FaFacebookF size={14} /></Link>
          <Link href={WA_HREF} target="_blank" className="nav-overlay-social" style={{ borderColor: "rgba(37,211,102,0.4)", color: "#25D366" }}><FaWhatsapp size={14} /></Link>
        </div>
      </div>

      {/* Floating WhatsApp button — visible on all pages */}
      <Link href={WA_HREF} target="_blank" rel="noreferrer" className="nav-wa-float" aria-label="Chat on WhatsApp">
        <FaWhatsapp size={22} />
      </Link>
    </>
  );
}