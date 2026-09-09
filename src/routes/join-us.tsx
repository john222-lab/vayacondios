import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

export const Route = createFileRoute("/join-us")({
  head: () => ({
    meta: [
      { title: "Join Us | Vaya Con Dios" },
      { name: "description", content: "Join Vaya Con Dios — pray, give, volunteer or partner with us to reach indigenous peoples with the gospel of Jesus Christ." },
    ],
  }),
  component: JoinUs,
});

const ways = [
  {
    icon: "🙏",
    title: "Pray",
    body: "Intercession is the foundation of everything we do. Join our prayer network and stand with us as we reach indigenous communities.",
  },
  {
    icon: "💛",
    title: "Give",
    body: "Your financial support enables us to buy resources, support pastors in the field, and fund community visits. Every gift counts.",
  },
  {
    icon: "✋",
    title: "Volunteer",
    body: "We welcome people with a heart for mission — whether in administration, fundraising, or going on short-term trips.",
  },
  {
    icon: "🤝",
    title: "Partner",
    body: "Is your church or organisation moved by the same vision? Let's work together to multiply kingdom impact among indigenous peoples.",
  },
] as const;

function JoinUs() {
  return (
    <PageLayout>
      {/* ── Page hero ───────────────────────────────── */}
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow eyebrow-light">Get involved</p>
          <h1>Join Us</h1>
        </div>
      </section>

      {/* ── Ways to get involved ────────────────────── */}
      <section className="section-space mx-auto max-w-7xl px-5 lg:px-8">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How you can help</p>
            <h2>Four ways to step out in faith</h2>
          </div>
        </div>
        <div className="join-grid">
          {ways.map(({ icon, title, body }) => (
            <article key={title} className="join-card">
              <div className="join-icon" aria-hidden="true">{icon}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Contact section ─────────────────────────── */}
      <section className="section-space mx-auto max-w-7xl px-5 lg:px-8" style={{ paddingTop: 0 }}>
        <div className="contact-layout">
          {/* Contact info */}
          <div className="contact-info">
            <p className="eyebrow">Reach out</p>
            <h2>Get in touch</h2>
            <p className="contact-intro">
              Whether you have questions, want to volunteer, or simply want to know more — we'd love to hear from you.
            </p>
            <ul className="contact-list">
              <li>
                <MapPin size={18} aria-hidden="true" />
                <span>64 Woodrush Way, Romford, RM6 5BL, London UK</span>
              </li>
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href="tel:+447932562569">+44 7932 562569</a>
              </li>
              <li>
                <Mail size={18} aria-hidden="true" />
                <a href="mailto:info@vayacondios.org.uk">info@vayacondios.org.uk</a>
              </li>
            </ul>
          </div>

          {/* Contact form */}
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const el = e.currentTarget.querySelector<HTMLParagraphElement>(".form-success");
              if (el) el.hidden = false;
            }}
          >
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="join-name">Full name</label>
                <input id="join-name" type="text" placeholder="Jane Smith" required />
              </div>
              <div className="form-field">
                <label htmlFor="join-email">Email address</label>
                <input id="join-email" type="email" placeholder="jane@example.com" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="join-how">How would you like to get involved?</label>
              <select id="join-how">
                <option value="">Select an option…</option>
                <option value="pray">Prayer</option>
                <option value="give">Financial giving</option>
                <option value="volunteer">Volunteering</option>
                <option value="partner">Church / org partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="join-message">Message (optional)</label>
              <textarea id="join-message" rows={4} placeholder="Tell us a bit about yourself…" />
            </div>
            <button type="submit" className="button button-primary w-full">
              Send message <ArrowRight aria-hidden="true" size={17} />
            </button>
            <p className="form-success" hidden>
              ✅ Thank you! We'll be in touch soon.
            </p>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
