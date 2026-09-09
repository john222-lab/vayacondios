import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

export const Route = createFileRoute("/networks-relationships")({
  head: () => ({
    meta: [
      { title: "Networks & Relationships | Vaya Con Dios" },
      { name: "description", content: "Vaya Con Dios partners with Christian media ministries, Bible translators, and prayer networks to advance the gospel among indigenous people." },
    ],
  }),
  component: NetworksRelationships,
});

const partners = [
  {
    name: "Jesus Film Project",
    logo: "https://vayacondios.org.uk/wp-content/uploads/2024/08/jesusfilm.jpg",
    description: "We believe film media is the most dynamic way to hear and see the greatest story ever lived. A Christian Media Ministry sharing the good news globally.",
    category: "Media Ministry",
  },
  {
    name: "Wycliffe Bible Translators",
    logo: "https://vayacondios.org.uk/wp-content/uploads/2024/08/Wycliffe-Bible-Translators-USA.jpg",
    description: "Partnering to ensure indigenous communities have access to the Word of God in their own language — a cornerstone of lasting gospel impact.",
    category: "Bible Translation",
  },
  {
    name: "24-7 Prayer",
    logo: "https://vayacondios.org.uk/wp-content/uploads/2024/08/24-7-Prayer.png",
    description: "Committed to prayer as the foundation of all mission work. We partner with 24-7 Prayer to saturate our outreach efforts in intercession.",
    category: "Prayer Network",
  },
  {
    name: "Tribe",
    logo: "https://vayacondios.org.uk/wp-content/uploads/2024/08/tribe-logo.png",
    description: "Connecting with Tribe to mobilise young people and communities for mission among unreached indigenous peoples.",
    category: "Mobilisation",
  },
] as const;

function NetworksRelationships() {
  return (
    <PageLayout>
      {/* ── Page hero ───────────────────────────────── */}
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow eyebrow-light">Who we work with</p>
          <h1>Networks &amp; Relationships</h1>
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────── */}
      <section className="section-space mx-auto max-w-7xl px-5 lg:px-8">
        <div className="prose-block max-w-3xl">
          <p>
            Vaya Con Dios believes that mission is best done together. We actively build partnerships with established
            Christian organisations that share our heart for indigenous peoples — combining resources, expertise, and
            prayer to maximise our kingdom impact.
          </p>
        </div>
      </section>

      {/* ── Partner cards ───────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8" style={{ paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">Strategic partners</p>
          <h2>Organisations we partner with</h2>
        </div>
        <div className="partner-grid">
          {partners.map(({ name, logo, description, category }) => (
            <article key={name} className="partner-card">
              <div className="partner-logo-wrap">
                <img src={logo} alt={`${name} logo`} loading="lazy" />
              </div>
              <div className="partner-body">
                <span className="partner-category">{category}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Become a partner ────────────────────────── */}
      <section className="section-space mx-auto max-w-7xl px-5 lg:px-8" style={{ paddingTop: 0 }}>
        <div className="partner-cta-card">
          <p className="eyebrow eyebrow-light">Work with us</p>
          <h2>Interested in partnering?</h2>
          <p>
            If your organisation shares our vision for indigenous peoples and wants to explore collaboration, we'd love
            to hear from you.
          </p>
          <a href="mailto:info@vayacondios.org.uk" className="button button-light">
            Get in touch
          </a>
        </div>
      </section>

      {/* ── CTA band ────────────────────────────────── */}
      <section id="donate" className="donate-band">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="eyebrow eyebrow-light">Join the network</p>
            <h2>Step out in faith with us.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/join-us" className="button button-light">Join</a>
            <a href="#" className="button button-gold"><Heart aria-hidden="true" size={16} />Donate</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
