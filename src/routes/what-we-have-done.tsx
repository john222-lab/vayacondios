import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ArrowRight, MapPin, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";
import { PageLayout } from "../components/PageLayout";
import heroImage from "../assets/hero-community.jpg";
import origBikeA from "../assets/orig-first-bike-a.png";
import origBikeB from "../assets/orig-first-bike-b.png";
import origBikeC from "../assets/orig-first-bike.png";
import communityVisit from "../assets/community-visit.jpg";
import gospelOutreach from "../assets/gospel-outreach.jpg";

export const Route = createFileRoute("/what-we-have-done")({
  head: () => ({
    meta: [
      { title: "What We Have Done | Vaya Con Dios" },
      {
        name: "description",
        content:
          "From buying the first missionary bike in 2015 to sending teams to indigenous communities — a record of what Vaya Con Dios has accomplished in faith.",
      },
      { property: "og:title", content: "What We Have Done | Vaya Con Dios" },
      { property: "og:description", content: "A decade of stepping out in faith." },
    ],
  }),
  component: WhatWeHaveDone,
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

const milestones = [
  {
    year: "2015",
    era: "The beginning",
    title: "First Missionary Bike",
    location: "Cristiania, Peru",
    body: "The first pastor we identified was Andreas Jimenez who is married to an indigenous and was sent by his church Iglesia Bautista Prado Centro to Cristiania to work as a missionary in this community. We raised some funds from Christian well wishers and our church and bought him a bike to help him with transport in 2015.",
    impact: "Unlocked access to remote communities previously unreachable on foot.",
    images: [origBikeA, origBikeB] as const,
    accent: "Faith made tangible",
  },
  {
    year: "2015",
    era: "First year continued",
    title: "Second Bike Gallery",
    location: "Peru",
    body: "Further images from the first bike purchase and community engagement — showing the real faces of the missionary work started by Pastor Andreas Jimenez in the indigenous community of Cristiania.",
    impact: "Real people, real faith, real transformation.",
    images: [origBikeC, communityVisit] as const,
    accent: "Stepping out in faith",
  },
  {
    year: "Ongoing",
    era: "Continuing the work",
    title: "Community Visits & Evangelism",
    location: "Indigenous communities",
    body: "Our teams have made multiple visits to indigenous communities — sharing the gospel, distributing resources, building lasting relationships rooted in faith and service, and identifying new pastors and evangelists to raise up as disciples.",
    impact: "Multiple communities reached with the gospel across several years.",
    images: [gospelOutreach, communityVisit] as const,
    accent: "The harvest is plentiful",
  },
] as const;

const statBand = [
  { n: "2013", l: "Organisation founded" },
  { n: "2015", l: "First field operation" },
  { n: "2+", l: "Missionaries supported" },
  { n: "3+", l: "Countries reached" },
] as const;

function WhatWeHaveDone() {
  const pageRef = useScrollReveal();

  return (
    <PageLayout>
      <div ref={pageRef}>

        {/* ══════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════ */}
        <section className="ww-hero">
          <img src={heroImage} alt="" className="ww-hero-bg" />
          <div className="ww-hero-overlay" />
          <div className="ww-hero-content mx-auto max-w-7xl px-5 lg:px-8">
            <div data-reveal>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>Our track record</p>
              <h1 className="ww-hero-h1">What we<br />have done.</h1>
              <p className="ww-hero-sub">
                A decade of stepping out in faith — buying bikes, building relationships, and
                bringing the gospel to the forgotten corners of the earth.
              </p>
            </div>
          </div>
          {/* Floating stat */}
          <div className="ww-hero-float" data-reveal data-delay="200">
            <span className="ww-float-n">10+</span>
            <span className="ww-float-l">Years of faithful mission</span>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            STAT BAND
        ══════════════════════════════════════════════════════ */}
        <section className="ww-stat-band">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-5 py-10 lg:px-8">
            {statBand.map(({ n, l }, i) => (
              <div key={l} className="au-stat" data-reveal data-delay={String(i * 70)}>
                <span className="au-stat-value">{n}</span>
                <span className="au-stat-label">{l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            INTRO PULLOUT
        ══════════════════════════════════════════════════════ */}
        <section className="ww-intro-section" data-reveal>
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="ww-intro-inner">
              <p className="eyebrow">Our story in pictures</p>
              <p className="ww-intro-text">
                Every milestone below represents real faith, real sacrifice, and real people whose
                lives have been touched by the gospel. This is not a fundraising report — it is a
                testimony of what God can do when His people step out in faith.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            MILESTONE CARDS — alternating editorial layout
        ══════════════════════════════════════════════════════ */}
        <section className="section-space mx-auto max-w-7xl px-5 lg:px-8" style={{ paddingTop: "2rem" }}>
          <div className="ww-milestones">
            {milestones.map(({ year, era, title, location, body, impact, images, accent }, i) => (
              <article
                key={year}
                className={`ww-milestone ${i % 2 === 1 ? "ww-milestone--flip" : ""}`}
                data-reveal
                data-delay={String(i * 100)}
              >
                {/* Image panel */}
                <div className="ww-ms-images">
                  <div className="ww-ms-img-primary">
                    <img src={images[0]} alt={title} loading="lazy" />
                    <div className="ww-ms-img-overlay" />
                    {/* Year badge */}
                    <div className="ww-ms-year-badge">
                      <Calendar size={13} />
                      <span>{year}</span>
                    </div>
                  </div>
                  <div className="ww-ms-img-secondary">
                    <img src={images[1]} alt={`${title} — additional`} loading="lazy" />
                    {/* Accent chip */}
                    <div className="ww-ms-accent-chip">{accent}</div>
                  </div>
                </div>

                {/* Copy panel */}
                <div className="ww-ms-copy">
                  <div className="ww-ms-era">
                    <div className="ww-ms-era-line" aria-hidden="true" />
                    <span>{era}</span>
                  </div>
                  <div className="ww-ms-location">
                    <MapPin size={13} aria-hidden="true" />
                    <span>{location}</span>
                  </div>
                  <h2>{title}</h2>
                  <p className="ww-ms-body">{body}</p>
                  <div className="ww-ms-impact">
                    <div className="ww-ms-impact-line" aria-hidden="true" />
                    <div>
                      <p className="ww-ms-impact-label">Impact</p>
                      <p className="ww-ms-impact-text">{impact}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            TESTIMONY PULLQUOTE
        ══════════════════════════════════════════════════════ */}
        <section className="ww-testimony" data-reveal>
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <div className="au-scripture-deco" aria-hidden="true" />
            <blockquote className="ww-testimony-quote">
              "We began to pray and felt that God was also giving us a burden to reach out to
              the indigenous people. Each step has been a step of faith — and God has been faithful
              in every one."
            </blockquote>
            <cite className="ww-testimony-cite">— Founder, Vaya Con Dios</cite>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            LOOKING AHEAD — vision bridge
        ══════════════════════════════════════════════════════ */}
        <section className="ww-ahead-section" data-reveal>
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="ww-ahead-inner">
              <div className="ww-ahead-copy">
                <p className="eyebrow" style={{ color: "var(--gold)" }}>Looking ahead</p>
                <h2>The work is<br /><em>far from over.</em></h2>
                <p>
                  What you've read is just the beginning of what God wants to do. There are still
                  communities without a pastor, pastors without a bike, and disciples yet to be
                  raised. Will you be part of the next chapter?
                </p>
              </div>
              <div className="ww-ahead-links">
                <Link to="/our-vision" className="button ft-btn-join">
                  Our vision <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link to="/join-us" className="button ft-btn-donate">
                  Join us <ArrowRight size={17} aria-hidden="true" />
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
              <p className="eyebrow eyebrow-light">Help us do more</p>
              <h2>Partner with us today.</h2>
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
