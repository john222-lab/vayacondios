import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

export const Route = createFileRoute("/what-we-have-done")({
  head: () => ({
    meta: [
      { title: "What We Have Done | Vaya Con Dios" },
      { name: "description", content: "From buying the first missionary bike in 2015 to sending teams to indigenous communities — a record of what Vaya Con Dios has accomplished in faith." },
    ],
  }),
  component: WhatWeHaveDone,
});

const milestones = [
  {
    year: "2015",
    title: "First Bike Bought",
    body: "The first pastor we identified was Andreas Jimenez who is married to an indigenous woman and was sent by his church Iglesia Bautista Prado Centro to Cristiania to work as a missionary in this community. We raised funds from Christian well-wishers and our church and bought him a bike to help with transport.",
    images: [
      "https://vayacondios.org.uk/wp-content/uploads/2024/08/First-Bike-b.png",
      "https://vayacondios.org.uk/wp-content/uploads/2024/08/First-Bike-a.png",
      "https://vayacondios.org.uk/wp-content/uploads/2024/08/First-Bike.png",
    ],
  },
  {
    year: "2016",
    title: "Second Bike & Expansion",
    body: "We continued to support our missionary partners and funded a second motorbike, enabling further outreach into remote areas of the indigenous communities.",
    images: [
      "https://vayacondios.org.uk/wp-content/uploads/2024/08/Second-Bike-a.png",
      "https://vayacondios.org.uk/wp-content/uploads/2024/08/Second-Bike-b.png",
    ],
  },
  {
    year: "Ongoing",
    title: "Community Visits & Evangelism",
    body: "Our teams have made multiple visits to indigenous communities, sharing the gospel, distributing resources, and building lasting relationships rooted in faith and service.",
    images: [
      "https://vayacondios.org.uk/wp-content/uploads/2024/08/IMG-20190929-WA0045-1.jpg",
      "https://vayacondios.org.uk/wp-content/uploads/2024/08/IMG-20190929-WA0046-1.jpg",
    ],
  },
] as const;

function WhatWeHaveDone() {
  return (
    <PageLayout>
      {/* ── Page hero ───────────────────────────────── */}
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow eyebrow-light">Our track record</p>
          <h1>What We Have Done</h1>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────── */}
      <section className="section-space mx-auto max-w-7xl px-5 lg:px-8">
        <div className="timeline">
          {milestones.map(({ year, title, body, images }, i) => (
            <article key={year} className={`timeline-item ${i % 2 === 0 ? "timeline-item-left" : "timeline-item-right"}`}>
              <div className="timeline-marker">
                <span>{year}</span>
              </div>
              <div className="timeline-content">
                <h2>{title}</h2>
                <p>{body}</p>
                <div className="timeline-images">
                  {images.slice(0, 2).map((src, j) => (
                    <img
                      key={j}
                      src={src}
                      alt={`${title} photo ${j + 1}`}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA band ────────────────────────────────── */}
      <section id="donate" className="donate-band">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="eyebrow eyebrow-light">Help us do more</p>
            <h2>Partner with us today.</h2>
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
