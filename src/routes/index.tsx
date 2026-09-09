import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Quote } from "lucide-react";
import heroImage from "../assets/hero-community.jpg";
import brainerdImage from "../assets/david-brainerd.jpg";
import edwardsImage from "../assets/jonathan-edwards.jpg";
import { PageLayout } from "../components/PageLayout";

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

function Index() {
  return (
    <PageLayout>
        <section className="mx-auto max-w-7xl px-5 pt-5 lg:px-8 lg:pt-7">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Go with God</p>
              <h1>Stepping out<br />in faith</h1>
              <p className="hero-lede">A Christian organisation born from the revelation of God’s heart and love for the lost indigenous people.</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/about-us" className="button button-gold">How it started <ArrowRight aria-hidden="true" size={17} /></Link>
                <Link to="/about-us" className="text-link">Learn more <ArrowRight aria-hidden="true" size={16} /></Link>
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
              <Link to="/our-vision" className="text-link text-link-light">Our vision <ArrowRight aria-hidden="true" size={16} /></Link>
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
              <a href="/join-us" className="button button-light">Join</a>
              <a href="#" className="button button-gold"><Heart aria-hidden="true" size={16} />Donate</a>
            </div>
          </div>
        </section>
    </PageLayout>
  );
}