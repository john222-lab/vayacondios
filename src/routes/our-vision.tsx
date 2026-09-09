import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Users, BookOpen, Handshake, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { PageLayout } from "../components/PageLayout";
import heroImage from "../assets/hero-community.jpg";

export const Route = createFileRoute("/our-vision")({
  head: () => ({
    meta: [
      { title: "Our Vision | Vaya Con Dios" },
      {
        name: "description",
        content:
          "Our vision: raise indigenous disciples, support pastors in the field, and collaborate with communities for lasting gospel transformation.",
      },
      { property: "og:title", content: "Our Vision | Vaya Con Dios" },
      { property: "og:description", content: "Not to plant churches, but to raise disciples." },
    ],
  }),
  component: OurVision,
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

const commitments = [
  {
    number: "01",
    Icon: Users,
    title: "Raise Disciples",
    subtitle: "Identify. Train. Send.",
    body: "We are not called to plant churches but to identify aspiring evangelists among the indigenous in order to raise disciples willing to be trained, equipped, and then sent back to evangelise their own people.",
    detail: "This means a long-term investment in people — walking alongside them, providing biblical training, and creating a community of accountability that outlasts any single mission trip.",
    accent: "Matthew 28:19 — 'Go and make disciples of all nations'",
  },
  {
    number: "02",
    Icon: BookOpen,
    title: "Support Pastors",
    subtitle: "Resource. Equip. Sustain.",
    body: "We support indigenous pastors who are already in the field with any resources they need to be able to go and preach the gospel effectively.",
    detail: "Often these men and women serve at great personal cost with very little material support. We come alongside them with practical resources — transport, Bible materials, and financial support — so they can focus on the work they are called to.",
    accent: "Romans 10:15 — 'How beautiful are the feet of those who bring good news'",
  },
  {
    number: "03",
    Icon: Handshake,
    title: "Collaborate for Change",
    subtitle: "Partner. Restore. Transform.",
    body: "We collaborate with national organisations and government bodies to develop rehabilitation centres that help youth come out of gang or drug-related lifestyles.",
    detail: "The gospel changes lives holistically. We believe in partnering with others — church networks, NGOs, and local authorities — to address the deep social challenges facing indigenous communities and bring wholeness.",
    accent: "Isaiah 61:1 — 'To proclaim freedom for the captives'",
  },
] as const;

const approach = [
  { step: "01", label: "Pray & Listen", text: "Every initiative begins with prayer. We seek God's direction before committing to any community or project." },
  { step: "02", label: "Identify", text: "We find indigenous evangelists and pastors already working in communities — those whom God has already called." },
  { step: "03", label: "Resource", text: "We come alongside them with practical support: transport, materials, financial assistance, and training." },
  { step: "04", label: "Disciple", text: "We invest long-term in raising disciples who will continue the work — not dependent on outside mission teams." },
  { step: "05", label: "Release", text: "We send equipped disciples back into their communities to multiply the gospel and build indigenous-led churches." },
] as const;

function OurVision() {
  const pageRef = useScrollReveal();

  return (
    <PageLayout>
      <div ref={pageRef}>

        {/* ══════════════════════════════════════════════════════
            HERO — split screen
        ══════════════════════════════════════════════════════ */}
        <section className="ov-hero">
          {/* Left: dark panel with text */}
          <div className="ov-hero-copy">
            <div data-reveal>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>What drives us</p>
              <h1 className="ov-hero-h1">
                Not to plant<br />
                churches —<br />
                <em>to raise disciples.</em>
              </h1>
            </div>
            <div className="ov-hero-meta" data-reveal data-delay="160">
              <div className="ov-hero-rule" aria-hidden="true" />
              <p className="ov-hero-sub">
                A vision born from scripture, sharpened by prayer, and lived out in the most overlooked
                corners of the world.
              </p>
              <Link to="/join-us" className="button ft-btn-donate mt-4">
                Get involved <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>
          {/* Right: image */}
          <div className="ov-hero-image-wrap" aria-hidden="true">
            <img src={heroImage} alt="" className="ov-hero-image" />
            <div className="ov-hero-image-overlay" />
            {/* Floating scripture tile */}
            <div className="ov-float-tile" data-reveal data-delay="300">
              <p className="ov-float-ref">Matthew 28:19</p>
              <p className="ov-float-quote">"Go therefore and make disciples of all nations."</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            MANIFESTO — large full-width pullquote
        ══════════════════════════════════════════════════════ */}
        <section className="ov-manifesto" data-reveal>
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="ov-manifesto-inner">
              <p className="eyebrow" style={{ color: "var(--gold)" }}>The mandate</p>
              <blockquote className="ov-manifesto-quote">
                "We are not called to plant churches but to identify aspiring evangelists among the indigenous —
                to raise disciples willing to be trained, equipped, and sent back to evangelise{" "}
                <em>their own people.</em>"
              </blockquote>
              <div className="ov-manifesto-deco" aria-hidden="true">Vision</div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            WHO WE SERVE — spotlight panel
        ══════════════════════════════════════════════════════ */}
        <section className="ov-serve-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="ov-serve-grid" data-reveal>
              <div className="ov-serve-text">
                <p className="eyebrow">Who we serve</p>
                <h2>The forgotten<br /><em>first peoples.</em></h2>
                <p className="ov-serve-body">
                  Indigenous communities around the world are among the most unreached people groups on earth.
                  Many live in geographical and cultural isolation, with limited access to the gospel and even
                  less access to discipleship resources.
                </p>
                <p className="ov-serve-body">
                  Our specific calling is to <strong>identify, resource, and release</strong> indigenous men
                  and women who carry a burden for their own people — ensuring the gospel takes root in soil
                  that lasts beyond any single mission team or foreign worker.
                </p>
                <Link to="/what-we-have-done" className="text-link mt-5">
                  See what we've done <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <div className="ov-serve-stats">
                <div className="ov-stat-block">
                  <span className="ov-stat-n">476M</span>
                  <span className="ov-stat-l">Indigenous people worldwide</span>
                </div>
                <div className="ov-stat-block">
                  <span className="ov-stat-n">90+</span>
                  <span className="ov-stat-l">Countries with indigenous communities</span>
                </div>
                <div className="ov-stat-block">
                  <span className="ov-stat-n">5%</span>
                  <span className="ov-stat-l">Of world's population — yet among the most unreached</span>
                </div>
                <div className="ov-stat-block ov-stat-block--gold">
                  <span className="ov-stat-n">1</span>
                  <span className="ov-stat-l">Commission: go and make disciples</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            THREE COMMITMENTS — premium expanded cards
        ══════════════════════════════════════════════════════ */}
        <section className="section-space mx-auto max-w-7xl px-5 lg:px-8">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">How we work</p>
              <h2>Three core commitments</h2>
            </div>
            <p className="ov-section-sub">Each commitment flows directly from our reading of scripture and the lessons of those who came before us.</p>
          </div>

          <div className="ov-commitments">
            {commitments.map(({ number, Icon, title, subtitle, body, detail, accent }, i) => (
              <article
                key={number}
                className="ov-commitment-card"
                data-reveal
                data-delay={String(i * 120)}
              >
                {/* Number watermark */}
                <div className="ov-commitment-watermark" aria-hidden="true">{number}</div>

                <div className="ov-commitment-header">
                  <div className="ov-commitment-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="ov-commitment-subtitle">{subtitle}</p>
                    <h3>{title}</h3>
                  </div>
                </div>

                <p className="ov-commitment-body">{body}</p>

                <div className="ov-commitment-detail">
                  <p>{detail}</p>
                </div>

                <div className="ov-commitment-accent">
                  <span>{accent}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            STRATEGIC APPROACH — horizontal step flow
        ══════════════════════════════════════════════════════ */}
        <section className="ov-approach-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Our process</p>
                <h2>The strategic approach</h2>
              </div>
            </div>
            <ol className="ov-approach-list">
              {approach.map(({ step, label, text }, i) => (
                <li key={step} className="ov-approach-step" data-reveal data-delay={String(i * 90)}>
                  <div className="ov-approach-num">{step}</div>
                  <div className="ov-approach-connector" aria-hidden="true" />
                  <div className="ov-approach-content">
                    <h4>{label}</h4>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SCRIPTURE COMMISSION — large display
        ══════════════════════════════════════════════════════ */}
        <section className="ov-commission" data-reveal>
          <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
            <div className="ov-commission-rule" aria-hidden="true" />
            <p className="eyebrow" style={{ color: "var(--gold)", textAlign: "center" }}>The great commission</p>
            <p className="ov-commission-reference">Matthew 28:18–20</p>
            <blockquote className="ov-commission-text">
              "All authority in heaven and on earth has been given to me. Go therefore and make disciples of all
              nations, baptising them in the name of the Father and of the Son and of the Holy Spirit, teaching
              them to observe all that I have commanded you. And behold, I am with you always, to the end of the age."
            </blockquote>
            <cite className="ov-commission-cite">— Jesus Christ</cite>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CTA BAND
        ══════════════════════════════════════════════════════ */}
        <section id="donate" className="donate-band">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="eyebrow eyebrow-light">Be part of the story</p>
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
