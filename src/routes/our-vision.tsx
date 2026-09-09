import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

export const Route = createFileRoute("/our-vision")({
  head: () => ({
    meta: [
      { title: "Our Vision | Vaya Con Dios" },
      { name: "description", content: "Our vision is to raise disciples among indigenous people, support pastors in the field, and work with national organisations to bring lasting change." },
    ],
  }),
  component: OurVision,
});

const pillars = [
  {
    number: "01",
    title: "Raise Disciples",
    body: "We are not called to plant churches but to identify aspiring evangelists among the indigenous in order to raise disciples willing to be trained, equipped, and then sent back to evangelise their own people.",
  },
  {
    number: "02",
    title: "Support Pastors",
    body: "We support indigenous pastors who are already in the field with any resources they need to be able to go and preach the gospel effectively.",
  },
  {
    number: "03",
    title: "Collaborate for Change",
    body: "We are willing to collaborate with national organisations of the indigenous people as well as government bodies to develop rehabilitation centres that help youth come out of gang or drug-related lifestyles.",
  },
] as const;

function OurVision() {
  return (
    <PageLayout>
      {/* ── Page hero ───────────────────────────────── */}
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow eyebrow-light">What drives us</p>
          <h1>Our Vision</h1>
        </div>
      </section>

      {/* ── Vision summary ──────────────────────────── */}
      <section className="section-space mx-auto max-w-7xl px-5 lg:px-8">
        <div className="vision-intro">
          <div className="prose-block">
            <p>
              We are not called to plant churches but to <strong>identify aspiring evangelists</strong> among the
              indigenous in order to raise disciples willing to be trained and equipped and then sent back to
              evangelise their people.
            </p>
            <p>
              We will also support indigenous pastors who are already in the field with any resources they need to be
              able to go and preach the gospel.
            </p>
            <p>
              We are also willing to collaborate with the national organisations of the indigenous people as well as
              the government to come up with a lasting solution to the challenges faced by youth. We are keen to come
              up with rehabilitation centres that will help and facilitate with these youth to come out of gang or drug
              related lifestyles.
            </p>
          </div>
          <aside className="vision-scripture">
            <blockquote>
              "Go therefore and make disciples of all nations… teaching them to observe all that I have commanded you."
            </blockquote>
            <cite>Matthew 28:19–20</cite>
          </aside>
        </div>
      </section>

      {/* ── Three pillars ───────────────────────────── */}
      <section className="section-space mx-auto max-w-7xl px-5 lg:px-8" style={{ paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">How we work</p>
          <h2>Three core commitments</h2>
        </div>
        <div className="pillars-grid">
          {pillars.map(({ number, title, body }) => (
            <article key={number} className="pillar-card">
              <span className="pillar-number">{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a href="/join-us" className="button button-primary">
            Join us <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
      </section>

      {/* ── CTA band ────────────────────────────────── */}
      <section id="donate" className="donate-band">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="eyebrow eyebrow-light">Be part of the story</p>
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
