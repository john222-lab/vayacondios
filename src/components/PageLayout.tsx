import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import logo from "../assets/vcd-logo.png";

const navigation = [
  ["About Us", "/about-us"],
  ["Our Vision", "/our-vision"],
  ["What We Have Done", "/what-we-have-done"],
  ["Networks & Relationships", "/networks-relationships"],
] as const;

const footerPages = [
  ["About Us", "/about-us"],
  ["Our Vision", "/our-vision"],
  ["What We Have Done", "/what-we-have-done"],
  ["Networks & Relationships", "/networks-relationships"],
  ["Join Us", "/join-us"],
] as const;

const footerQuickLinks = [
  ["How It All Began", "/about-us"],
  ["Stepping Out In Faith", "/our-vision"],
  ["Our Partners", "/networks-relationships"],
  ["Donate", "#donate"],
  ["Contact", "/join-us"],
] as const;

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Header ──────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          <Link to="/" aria-label="Vaya Con Dios home" className="shrink-0">
            <img src={logo} alt="Vaya Con Dios" className="h-12 w-auto" />
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navigation.map(([label, href]) => (
              <Link
                key={label}
                to={href}
                className="nav-link"
                activeProps={{ className: "nav-link font-semibold text-foreground" }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/join-us" className="button button-outline hidden sm:inline-flex">Join</Link>
            <a href="#donate" className="button button-primary"><Heart aria-hidden="true" size={16} />Donate</a>
            <details className="mobile-menu lg:hidden">
              <summary className="icon-button" aria-label="Open menu"><Menu aria-hidden="true" size={21} /></summary>
              <nav aria-label="Mobile navigation">
                {navigation.map(([label, href]) => (
                  <Link key={label} to={href}>{label}</Link>
                ))}
                <Link to="/join-us">Join</Link>
              </nav>
            </details>
          </div>
        </div>
      </header>

      {/* ── Page content ────────────────────────────── */}
      <main>{children}</main>

      {/* ══════════════════════════════════════════════
          ENHANCED FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="ft-root" aria-label="Site footer">

        {/* ── Pre-footer CTA strip ──────────────────── */}
        <div className="ft-cta-strip">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row lg:px-8">
            <div>
              <p className="ft-cta-eyebrow">Go with God</p>
              <p className="ft-cta-heading">
                Join us in reaching the <em>lost</em> and the<br className="hidden sm:block" /> forgotten.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link to="/join-us" className="button ft-btn-join">Join the mission</Link>
              <a href="#" className="button ft-btn-donate"><Heart size={15} aria-hidden="true" />Donate</a>
            </div>
          </div>
        </div>

        {/* ── Gradient divider ─────────────────────── */}
        <div className="ft-divider" aria-hidden="true" />

        {/* ── Main grid ────────────────────────────── */}
        <div className="ft-main">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">

            {/* Col 1 – Brand ───────────────────────── */}
            <div className="ft-col-brand">
              <Link to="/" aria-label="Vaya Con Dios home">
                <img src={logo} alt="Vaya Con Dios" className="ft-logo" />
              </Link>
              <p className="ft-tagline">
                A Christian organisation born from a divine dream — called to reach the lost indigenous peoples
                of the world with the gospel of Jesus Christ.
              </p>

              {/* Social icons */}
              <div className="ft-social-row" aria-label="Social media links">
                <a href="#" aria-label="Facebook" className="ft-social"><Facebook size={17} /></a>
                <a href="#" aria-label="Twitter / X" className="ft-social">
                  <Twitter size={17} />
                </a>
                <a href="#" aria-label="YouTube" className="ft-social"><Youtube size={17} /></a>
              </div>
            </div>

            {/* Col 2 – Pages ──────────────────────── */}
            <nav aria-label="Footer pages navigation">
              <p className="ft-col-title">Pages</p>
              <ul className="ft-link-list">
                {footerPages.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="ft-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Col 3 – Quick links ─────────────────── */}
            <nav aria-label="Footer quick links">
              <p className="ft-col-title">Quick links</p>
              <ul className="ft-link-list">
                {footerQuickLinks.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="ft-link">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Col 4 – Contact ─────────────────────── */}
            <div>
              <p className="ft-col-title">Get in touch</p>
              <ul className="ft-contact-list">
                <li>
                  <span className="ft-contact-icon"><MapPin size={14} /></span>
                  <address className="ft-contact-text not-italic">
                    64 Woodrush Way, Romford<br />RM6 5BL, London, UK
                  </address>
                </li>
                <li>
                  <span className="ft-contact-icon"><Phone size={14} /></span>
                  <a href="tel:+447932562569" className="ft-contact-text ft-link">+44 7932 562569</a>
                </li>
                <li>
                  <span className="ft-contact-icon"><Mail size={14} /></span>
                  <a href="mailto:info@vayacondios.org.uk" className="ft-contact-text ft-link">
                    info@vayacondios.org.uk
                  </a>
                </li>
              </ul>

              {/* Newsletter mini-form */}
              <div className="ft-newsletter">
                <p className="ft-newsletter-label">Prayer &amp; news updates</p>
                <form
                  className="ft-newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    aria-label="Email for newsletter"
                    required
                  />
                  <button type="submit" aria-label="Subscribe">
                    <Mail size={15} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────── */}
        <div className="ft-bottom">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="ft-bottom-text">© {new Date().getFullYear()} Vaya Con Dios. All rights reserved.</p>
            <p className="ft-bottom-text ft-charity-reg">
              UK Registered Charity No. 0000000 · Company Limited by Guarantee 0000000 · Registered in England &amp; Wales
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#" className="ft-bottom-link">Terms &amp; conditions</a>
              <a href="#" className="ft-bottom-link">Privacy policy</a>
              <a href="#" className="ft-bottom-link">Cookie settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
