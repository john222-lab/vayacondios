import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Heart, Menu, Youtube } from "lucide-react";
import logo from "../assets/vcd-logo.png";

const navigation = [
  ["About Us", "/about-us"],
  ["Our Vision", "/our-vision"],
  ["What We Have Done", "/what-we-have-done"],
  ["Networks & Relationships", "/networks-relationships"],
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

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="site-footer">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
          <div>
            <img src={logo} alt="Vaya Con Dios" className="h-14 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-6 text-footer-muted">
              64 Woodrush Way<br />Romford<br />RM6 5BL<br />London UK
            </p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <a href="tel:+447932562569">+44 7932 562569</a>
            <a href="mailto:info@vayacondios.org.uk">info@vayacondios.org.uk</a>
          </div>
          <div>
            <h3>Connect With Us</h3>
            <div className="flex gap-2">
              <a className="social-link" href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a className="social-link" href="#" aria-label="Twitter">X</a>
              <a className="social-link" href="#" aria-label="YouTube"><Youtube size={19} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-footer-line">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-footer-muted md:flex-row md:items-center md:justify-between lg:px-8">
            <p>© 2024 Vaya Con Dios</p>
            <p>UK Registered Charity 0000000 · Company Limited by Guarantee 0000000 Registered in England and Wales</p>
            <div className="flex gap-4">
              <a href="#">Terms and conditions</a>
              <a href="#">Privacy and usage policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
