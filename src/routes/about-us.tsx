import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import brainerdImage from "../assets/david-brainerd.jpg";
import edwardsImage from "../assets/jonathan-edwards.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Vaya Con Dios" },
      { name: "description", content: "Learn about the founding vision of Vaya Con Dios — a Christian organisation born from a divine revelation to reach indigenous people." },
    ],
  }),
  component: AboutUs,
});

function AboutUs() {
  return (
    <PageLayout>
      {/* ── Page hero ───────────────────────────────── */}
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow eyebrow-light">Who we are</p>
          <h1>About Us</h1>
        </div>
      </section>

      {/* ── Intro text ──────────────────────────────── */}
      <section className="section-space mx-auto max-w-7xl px-5 lg:px-8">
        <div className="prose-block">
          <p>
            We are a <strong>Christian organization</strong> born from the revelation of God's heart and love for the{" "}
            <strong>lost indigenous / red Indians</strong> through one of my dreams.
          </p>
          <p>In the dream, I saw two names written in the sky!</p>
          <p>
            <strong>David Brainerd</strong> and <strong>Jonathan Edwards</strong> intertwined together. As I woke up, I
            began to pray and was inspired to do some research online, to see if these two names ever existed.
          </p>
          <p>
            I found that both were once <strong>missionaries</strong> called to the <strong>indigenous people</strong>.
          </p>
          <p>
            Having found clarity about who they were and what they did, we began to pray and felt that God was also
            giving us a burden to reach out to the indigenous people.
          </p>
        </div>
      </section>

      {/* ── Portrait cards ──────────────────────────── */}
      <section className="section-space mx-auto max-w-7xl px-5 lg:px-8" style={{ paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">The inspiration behind our calling</p>
          <h2>Two names in the sky</h2>
        </div>
        <div className="story-grid">
          <article className="portrait-card portrait-card-wide">
            <img src={brainerdImage} alt="Portrait of David Brainerd" />
            <div className="portrait-copy">
              <span>01</span>
              <h3>David Brainerd</h3>
              <p>
                Particularly loved and sacrificed his life serving these people but he died under the care of Jonathan
                Edwards's daughter at the age of 29 years. He died without raising disciples to carry on the work.
              </p>
            </div>
          </article>

          <article className="portrait-card">
            <img src={edwardsImage} alt="Portrait of Jonathan Edwards" />
            <div className="portrait-copy">
              <span>02</span>
              <h3>Jonathan Edwards</h3>
              <p>
                Was inspired to reach out to the indigenous people after reading the journals that David Brainerd used
                to keep. Jonathan also died without raising disciples to continue the work.
              </p>
            </div>
          </article>

          <aside className="calling-card" style={{ gridColumn: "span 12" }}>
            <p>
              "Having found clarity about who they were and what they did, we began to pray and felt that God was also
              giving us a burden to reach out to the indigenous people."
            </p>
            <a href="/our-vision" className="text-link text-link-light">
              Read our vision <ArrowRight aria-hidden="true" size={16} />
            </a>
          </aside>
        </div>
      </section>

      {/* ── CTA band ────────────────────────────────── */}
      <section id="donate" className="donate-band">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="eyebrow eyebrow-light">Join the journey</p>
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
