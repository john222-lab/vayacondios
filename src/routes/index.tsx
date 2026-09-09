import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Facebook, Heart, Menu, Quote, Youtube } from "lucide-react";
import heroImage from "../assets/hero-community.jpg";
import logo from "../assets/vcd-logo.png";
import brainerdImage from "../assets/david-brainerd.jpg";
import edwardsImage from "../assets/jonathan-edwards.jpg";

const site = "https://vayacondios.org.uk";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaya Con Dios | Stepping Out in Faith" },
      { name: "description", content: "Vaya Con Dios is a Christian organisation inspired to reach out to indigenous people and step out in faith." },
      { property: "og:title", content: "Vaya Con Dios | Stepping Out in Faith" },
      { property: "og:description", content: "A Christian organisation inspired to reach out to indigenous people and step out in faith." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = [
  ["About Us", `${site}/about-us/`],
  ["Our vision", `${site}/our-vision/`],
  ["What we have done", `${site}/what-we-have-done/`],
  ["Networks & Relationships", `${site}/networks-relationships`],
] as const;

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          <a href="#top" aria-label="Vaya Con Dios home" className="shrink-0">
            <img src={logo} alt="Vaya Con Dios" className="h-12 w-auto" />
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navigation.map(([label, href]) => (
              <a key={label} href={href} className="nav-link">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={`${site}/join-us/`} className="button button-outline hidden sm:inline-flex">Join</a>
            <a href="#donate" className="button button-primary"><Heart aria-hidden="true" size={16} />Donate</a>
            <details className="mobile-menu lg:hidden">
              <summary className="icon-button" aria-label="Open menu"><Menu aria-hidden="true" size={21} /></summary>
              <nav aria-label="Mobile navigation">
                {navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
                <a href={`${site}/join-us/`}>Join</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-7xl px-5 pt-5 lg:px-8 lg:pt-7">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Go with God</p>
              <h1>Stepping out<br />in faith</h1>
              <p className="hero-lede">A Christian organisation born from the revelation of God’s heart and love for the lost indigenous people.</p>
              <div className="flex flex-wrap gap-3">
                <a href={`${site}/how-it-all-began/`} className="button button-gold">How it started <ArrowRight aria-hidden="true" size={17} /></a>
                <a href={`${site}/stepping-out-in-faith/`} className="text-link">Learn more <ArrowRight aria-hidden="true" size={16} /></a>
              </div>
            </div>
            <figure className="hero-image-wrap">
              <img src={heroImage} alt="Vaya Con Dios visiting an indigenous community" className="hero-image" />
              <figcaption>Walking together, led by faith.</figcaption>
            </figure>
            <aside className="scripture-tile">
              <Quote aria-hidden="true" size={28} />
              <p>“In the dream, I saw two names written in the sky.”</p>
            </aside>
          </div>
        </section>

        <section id="story" className="section-space mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading">
            <p className="eyebrow">How it started</p>
            <h2>A calling revealed</h2>
          </div>
          <div className="story-grid">
            <article className="story-intro">
              <p>We are a Christian organization born from the revelation of God’s heart and love for the lost indigenous/ red Indians through one of my dreams.</p>
              <p>In the dream, I saw two names written in the sky!</p>
              <p>David Brainerd and Jonathan Edwards intertwined together. As I woke up, I began to pray and was inspired to do some research online, to see if these Two names ever existed.</p>
              <p>I found that both were once missionaries called to the indigenous people.</p>
            </article>

            <article className="portrait-card portrait-card-wide">
              <img src={brainerdImage} alt="Portrait of David Brainerd" />
              <div className="portrait-copy">
                <span>01</span>
                <h3>David Brainerd</h3>
                <p>Particularly loved and sacrificed his life serving these people but he died under the care of Jonathan Edwards’s daughter at the age of 29 years. He died without raising disciples to carry on the work.</p>
              </div>
            </article>

            <article className="portrait-card">
              <img src={edwardsImage} alt="Portrait of Jonathan Edwards" />
              <div className="portrait-copy">
                <span>02</span>
                <h3>Jonathan Edwards</h3>
                <p>was inspired to reach out to the indigenous people after reading the journals that David Brainerd used to keep. Jonathan also died without raising disciples.</p>
              </div>
            </article>

            <aside className="calling-card">
              <p>Having found clarity about who they were and what they did, we began to pray and felt that God was also giving us a burden to reach out to the indigenous people.</p>
              <a href={`${site}/our-vision/`} className="text-link text-link-light">Our vision <ArrowRight aria-hidden="true" size={16} /></a>
            </aside>
          </div>
        </section>

        <section id="donate" className="donate-band">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="eyebrow eyebrow-light">Join the journey</p>
              <h2>Step out in faith with us.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`${site}/join-us/`} className="button button-light">Join</a>
              <a href={`${site}/`} className="button button-gold"><Heart aria-hidden="true" size={16} />Donate</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
          <div>
            <img src={logo} alt="Vaya Con Dios" className="h-14 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-6 text-footer-muted">64 Woodrush Way<br />Romford<br />RM6 5BL<br />London UK</p>
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
            <div className="flex gap-4"><a href="#">Terms and conditions</a><a href="#">Privacy and usage policy</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}