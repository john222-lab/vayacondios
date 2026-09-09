import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ArrowRight, ExternalLink, Globe, BookOpen, Users, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { PageLayout } from "../components/PageLayout";
import jesusFilmLogo from "../assets/partner-jesusfilm.jpg";
import wycliffeLogo from "../assets/partner-wycliffe.jpg";
import prayer247Logo from "../assets/partner-247prayer.jpg";
import tribeLogo from "../assets/partner-tribe.jpg";
import heroImage from "../assets/hero-community.jpg";

export const Route = createFileRoute("/networks-relationships")({
  head: () => ({
    meta: [
      { title: "Networks & Relationships | Vaya Con Dios" },
      {
        name: "description",
        content:
          "Vaya Con Dios partners with Christian media ministries, Bible translators, and prayer networks to advance the gospel among indigenous people.",
      },
      { property: "og:title", content: "Networks & Relationships | Vaya Con Dios" },
      { property: "og:description", content: "Mission is best done together." },
    ],
  }),
  component: NetworksRelationships,
});

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = (e.target as HTMLElement).dataset.delay ?? "0";
            (e.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

const partners = [
  {
    name: "Jesus Film Project",
    logo: jesusFilmLogo,
    url: "https://www.jesusfilm.org",
    category: "Media Ministry",
    Icon: Globe,
    tagline: "Sharing the greatest story ever told through film.",
    description:
      "We believe film media is the most dynamic way to hear and see the greatest story ever lived. The Jesus Film Project is a Christian Media Ministry dedicated to sharing the good news globally in every language and culture.",
    impact: "Seen by over 8 billion people in 2,000+ languages",
    why: "Film breaks through language barriers and cultural walls — making it a powerful tool for reaching indigenous communities where literacy may be limited.",
  },
  {
    name: "Wycliffe Bible Translators",
    logo: wycliffeLogo,
    url: "https://www.wycliffe.org.uk",
    category: "Bible Translation",
    Icon: BookOpen,
    tagline: "God's Word in every language.",
    description:
      "Partnering to ensure indigenous communities have access to the Word of God in their own language — a cornerstone of lasting gospel impact. Wycliffe brings the Bible to people who have never had it in their mother tongue.",
    impact: "Translation projects in 2,300+ languages",
    why: "Disciples cannot grow without God's Word. We believe every person deserves to hear scripture in the language they understand best.",
  },
  {
    name: "24-7 Prayer",
    logo: prayer247Logo,
    url: "https://www.24-7prayer.com",
    category: "Prayer Network",
    Icon: Zap,
    tagline: "Continual prayer. Global community.",
    description:
      "Committed to prayer as the foundation of all mission work. We partner with 24-7 Prayer to saturate our outreach efforts in intercession — because we believe nothing moves without prayer.",
    impact: "Prayer rooms in 100+ countries, millions of hours prayed",
    why: "Every initiative we take begins on our knees. Prayer is not a supplement to our mission strategy — it is the strategy.",
  },
  {
    name: "Tribe",
    logo: tribeLogo,
    url: "#",
    category: "Mobilisation",
    Icon: Users,
    tagline: "Mobilising the next generation for mission.",
    description:
      "Connecting with Tribe to mobilise young people and communities for mission among unreached indigenous peoples. Tribe builds a culture of mission in local churches, raising up the next generation of goers and senders.",
    impact: "Growing network of mission-minded young people across the UK",
    why: "The future of indigenous mission depends on raising a generation who are called, equipped, and willing to go. Tribe helps us do that.",
  },
] as const;

const principles = [
  { title: "Shared vision", body: "We only partner with organisations that share our specific heart for indigenous peoples and our theological convictions about the gospel." },
  { title: "Complementary strengths", body: "Each partner brings expertise we don't have — media, translation, prayer mobilisation. Together we are stronger than any of us alone." },
  { title: "Long-term commitment", body: "We don't believe in short-term transactional partnerships. We build deep, sustained relationships grounded in shared mission and mutual accountability." },
] as const;

function NetworksRelationships() {
  const pageRef = useScrollReveal();

  return (
    <PageLayout>
      <div ref={pageRef}>

        {/* ══════════════════════════════════════════════════════
            HERO — full-bleed with mesh gradient
        ══════════════════════════════════════════════════════ */}
        <section className="nr-hero">
          <img src={heroImage} alt="" className="nr-hero-bg" />
          <div className="nr-hero-overlay" />
          <div className="nr-hero-content mx-auto max-w-7xl px-5 lg:px-8">
            <div className="nr-hero-inner">
              <div data-reveal>
                <p className="eyebrow" style={{ color: "var(--gold)" }}>Who we work with</p>
                <h1 className="nr-hero-h1">
                  Stronger<br />
                  <em>together.</em>
                </h1>
                <p className="nr-hero-sub">
                  Mission is never a solo endeavour. We actively build deep, sustained
                  partnerships with established Christian organisations who share our
                  heart for indigenous peoples around the world.
                </p>
              </div>
              {/* Partner logo strip */}
              <div className="nr-hero-logos" data-reveal data-delay="200" aria-hidden="true">
                <span className="nr-hero-logos-label">In partnership with</span>
                <div className="nr-hero-logos-strip">
                  {[jesusFilmLogo, wycliffeLogo, prayer247Logo, tribeLogo].map((src, i) => (
                    <div key={i} className="nr-hero-logo-pill">
                      <img src={src} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PHILOSOPHY BAND
        ══════════════════════════════════════════════════════ */}
        <section className="nr-philosophy" data-reveal>
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="nr-philosophy-inner">
              <div className="nr-philosophy-text">
                <p className="eyebrow">Our philosophy</p>
                <h2>We believe mission is<br /><em>best done together.</em></h2>
              </div>
              <p className="nr-philosophy-body">
                Vaya Con Dios actively builds partnerships with established Christian organisations
                that share our heart for indigenous peoples — combining resources, expertise, and
                prayer to maximise kingdom impact. We are not trying to do everything ourselves.
                We are trying to do our part well, alongside others who do theirs.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PARTNERSHIP PRINCIPLES
        ══════════════════════════════════════════════════════ */}
        <section className="nr-principles-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">How we partner</p>
                <h2>Three partnership principles</h2>
              </div>
            </div>
            <div className="nr-principles-grid">
              {principles.map(({ title, body }, i) => (
                <div key={title} className="nr-principle" data-reveal data-delay={String(i * 100)}>
                  <div className="nr-principle-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PARTNER CARDS — full editorial layout
        ══════════════════════════════════════════════════════ */}
        <section className="section-space mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Strategic partners</p>
              <h2>Organisations we partner with</h2>
            </div>
            <p className="nr-section-sub">
              Each partnership is intentional — chosen because of shared values, complementary
              strengths, and a unified commitment to reaching the unreached.
            </p>
          </div>

          <div className="nr-partners">
            {partners.map(({ name, logo, url, category, Icon, tagline, description, impact, why }, i) => (
              <article
                key={name}
                className={`nr-partner-card ${i % 2 === 1 ? "nr-partner-card--flip" : ""}`}
                data-reveal
                data-delay={String(i * 80)}
              >
                {/* Logo panel */}
                <div className="nr-partner-logo-panel">
                  <div className="nr-partner-logo-wrap">
                    <img src={logo} alt={`${name} logo`} loading="lazy" />
                  </div>
                  <div className="nr-partner-logo-meta">
                    <div className="nr-partner-icon-wrap">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <span className="nr-partner-category">{category}</span>
                  </div>
                  <p className="nr-partner-tagline">"{tagline}"</p>
                  {url !== "#" && (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="nr-partner-link">
                      Visit website <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  )}
                </div>

                {/* Copy panel */}
                <div className="nr-partner-copy">
                  <h3>{name}</h3>
                  <p className="nr-partner-desc">{description}</p>

                  <div className="nr-partner-impact">
                    <p className="nr-partner-impact-label">Global reach</p>
                    <p className="nr-partner-impact-text">{impact}</p>
                  </div>

                  <div className="nr-partner-why">
                    <p className="nr-partner-why-label">Why we partner</p>
                    <p className="nr-partner-why-text">{why}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            BECOME A PARTNER CTA
        ══════════════════════════════════════════════════════ */}
        <section className="nr-become-section" data-reveal>
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="nr-become-inner">
              <div className="nr-become-copy">
                <p className="eyebrow" style={{ color: "var(--gold)" }}>Work with us</p>
                <h2>Interested in<br /><em>partnering?</em></h2>
                <p>
                  If your organisation shares our vision for indigenous peoples and wants to
                  explore collaboration, we'd love to hear from you. Whether you bring prayer,
                  resources, media, or expertise — there may be a place to work together.
                </p>
              </div>
              <div className="nr-become-actions">
                <a href="mailto:info@vayacondios.org.uk" className="button ft-btn-donate">
                  Get in touch <ArrowRight size={17} aria-hidden="true" />
                </a>
                <Link to="/our-vision" className="nr-become-secondary">
                  Read our vision first
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CTA BAND
        ══════════════════════════════════════════════════════ */}
        <section id="donate" className="donate-band">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="eyebrow eyebrow-light">Join the network</p>
              <h2>Step out in faith with us.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/join-us" className="button button-light">Join</Link>
              <a href="#" className="button button-gold">
                <Heart aria-hidden="true" size={16} />Donate
              </a>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
