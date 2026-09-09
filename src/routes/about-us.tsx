import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Heart, Users, Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import { PageLayout } from "../components/PageLayout";
import heroImage from "../assets/hero-community.jpg";
import brainerdImage from "../assets/david-brainerd.jpg";
import edwardsImage from "../assets/jonathan-edwards.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Vaya Con Dios" },
      {
        name: "description",
        content:
          "Vaya Con Dios is a Christian organisation born from a divine dream — two names written in the sky: David Brainerd and Jonathan Edwards. Discover our story.",
      },
      { property: "og:title", content: "About Us | Vaya Con Dios" },
      { property: "og:description", content: "Born from a dream. Called to the lost." },
    ],
  }),
  component: AboutUs,
});

/** Wires up a simple CSS-class-based scroll-reveal for elements with [data-reveal] */
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
      { threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

const stats = [
  { value: "2013", label: "Year founded" },
  { value: "10+", label: "Years of mission" },
  { value: "3+", label: "Countries reached" },
  { value: "∞", label: "Faith in God" },
] as const;

const values = [
  {
    Icon: BookOpen,
    title: "Scripture-rooted",
    body: "Everything we do flows from a sincere reading of God's Word and its mandate to go to all nations.",
  },
  {
    Icon: Users,
    title: "People-centred",
    body: "We go to the lost — particularly indigenous communities who have been overlooked by mainstream mission.",
  },
  {
    Icon: Globe,
    title: "Kingdom-minded",
    body: "We collaborate with churches, organisations and individuals who share the same global gospel vision.",
  },
] as const;

function AboutUs() {
  const pageRef = useScrollReveal();

  return (
    <PageLayout>
      <div ref={pageRef}>
        {/* ══════════════════════════════════════════════════════
            HERO — full-bleed image + overlay text
        ══════════════════════════════════════════════════════ */}
        <section className="au-hero">
          <img src={heroImage} alt="Vaya Con Dios community outreach" className="au-hero-bg" />
          <div className="au-hero-overlay" />
          <div className="au-hero-content mx-auto max-w-7xl px-5 lg:px-8">
            <div data-reveal data-delay="0">
              <p className="eyebrow" style={{ color: "var(--gold)" }}>Who we are</p>
              <h1 className="au-hero-h1">Born from<br />a dream.</h1>
            </div>
            <div className="au-hero-quote" data-reveal data-delay="180">
              <span className="au-quote-mark">"</span>
              <p>In the dream, I saw two names written in the sky.</p>
            </div>
          </div>
          {/* Scroll cue */}
          <div className="au-scroll-cue" aria-hidden="true">
            <span />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            STAT STRIP
        ══════════════════════════════════════════════════════ */}
        <section className="au-stats-strip">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-5 py-10 lg:px-8">
            {stats.map(({ value, label }, i) => (
              <div key={label} className="au-stat" data-reveal data-delay={String(i * 80)}>
                <span className="au-stat-value">{value}</span>
                <span className="au-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            STORY — alternating editorial columns
        ══════════════════════════════════════════════════════ */}
        <section className="section-space mx-auto max-w-7xl px-5 lg:px-8">
          {/* Row A — text left, accent right */}
          <div className="au-editorial" data-reveal>
            <div className="au-editorial-copy">
              <p className="eyebrow">How it began</p>
              <h2>A revelation<br />of God's heart</h2>
              <p className="au-body">
                We are a <strong>Christian organisation</strong> born from the revelation of God's heart and
                love for the <strong>lost indigenous peoples</strong> through one of my dreams.
              </p>
              <p className="au-body">
                In the dream, I saw two names written in the sky —{" "}
                <strong>David Brainerd</strong> and <strong>Jonathan Edwards</strong> — intertwined together.
                As I woke up, I began to pray and was inspired to do some research online, to see if these
                two names ever existed.
              </p>
              <p className="au-body">
                I found that both were once <strong>missionaries</strong> called to the indigenous people.
                Having found clarity, we began to pray and felt that God was also giving <em>us</em> a burden
                to reach out to those same people.
              </p>
            </div>
            <div className="au-editorial-accent">
              <div className="au-accent-card">
                <span className="au-accent-number">1700s</span>
                <p>
                  The era of Brainerd &amp; Edwards — two faithful servants who each gave everything for the
                  indigenous people, yet never lived to see the fruit of their labour.
                </p>
                <div className="au-accent-line" />
                <p className="au-accent-footer">
                  Their unfinished work became our calling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PORTRAIT SECTION — Brainerd & Edwards
        ══════════════════════════════════════════════════════ */}
        <section className="au-portraits-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">The inspiration behind our calling</p>
                <h2>Two names in the sky</h2>
              </div>
              <p className="au-section-intro">
                Two missionaries. Two centuries apart. One unfinished mission.
              </p>
            </div>

            <div className="au-portraits-grid">
              {/* Brainerd */}
              <article className="au-portrait-card" data-reveal data-delay="0">
                <div className="au-portrait-image-wrap">
                  <img src={brainerdImage} alt="Portrait of David Brainerd" className="au-portrait-img" />
                  <div className="au-portrait-gradient" />
                  <div className="au-portrait-badge">01</div>
                </div>
                <div className="au-portrait-body">
                  <h3>David Brainerd</h3>
                  <p className="au-portrait-dates">1718 – 1747 · Age 29</p>
                  <p>
                    Particularly loved and sacrificed his life serving the indigenous people. He died under
                    the care of Jonathan Edwards's daughter, never having raised disciples to carry on the
                    work he started.
                  </p>
                  <div className="au-portrait-quote">
                    <span>"Lord, let me make a difference for eternity."</span>
                  </div>
                </div>
              </article>

              {/* Edwards */}
              <article className="au-portrait-card" data-reveal data-delay="140">
                <div className="au-portrait-image-wrap">
                  <img src={edwardsImage} alt="Portrait of Jonathan Edwards" className="au-portrait-img" />
                  <div className="au-portrait-gradient" />
                  <div className="au-portrait-badge">02</div>
                </div>
                <div className="au-portrait-body">
                  <h3>Jonathan Edwards</h3>
                  <p className="au-portrait-dates">1703 – 1758 · Theologian & Missionary</p>
                  <p>
                    Was inspired to reach out to the indigenous people after reading the journals that David
                    Brainerd used to keep. Jonathan also died without raising disciples to continue the work.
                  </p>
                  <div className="au-portrait-quote">
                    <span>"Resolution: to do whatever I think to be most to the glory of God."</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SCRIPTURE PULLQUOTE
        ══════════════════════════════════════════════════════ */}
        <section className="au-scripture-section" data-reveal>
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <div className="au-scripture-deco" aria-hidden="true" />
            <blockquote className="au-scripture-quote">
              "Go therefore and make disciples of all nations, baptising them in the name of the Father and
              of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you."
            </blockquote>
            <cite className="au-scripture-cite">Matthew 28:19–20 (ESV)</cite>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            MISSION VALUES
        ══════════════════════════════════════════════════════ */}
        <section className="section-space mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">What we stand on</p>
              <h2>Our core values</h2>
            </div>
          </div>
          <div className="au-values-grid">
            {values.map(({ Icon, title, body }, i) => (
              <article key={title} className="au-value-card" data-reveal data-delay={String(i * 100)}>
                <div className="au-value-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CALLING CARD — full-width dark green pull
        ══════════════════════════════════════════════════════ */}
        <section className="au-calling-full" data-reveal>
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="au-calling-inner">
              <div className="au-calling-text">
                <p className="eyebrow" style={{ color: "var(--gold)" }}>The burden</p>
                <h2>
                  An unfinished work<br />
                  <em>— now ours to continue.</em>
                </h2>
                <p>
                  Brainerd and Edwards each gave everything, yet the torch was never passed. Through a
                  dream, God made it clear: the work must go on. We are called to raise disciples who will
                  go where others have not — and stay.
                </p>
              </div>
              <div className="au-calling-links">
                <Link to="/our-vision" className="button button-gold">
                  See our vision <ArrowRight aria-hidden="true" size={17} />
                </Link>
                <Link to="/join-us" className="button button-light">
                  Join us <ArrowRight aria-hidden="true" size={17} />
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
              <p className="eyebrow eyebrow-light">Join the journey</p>
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
