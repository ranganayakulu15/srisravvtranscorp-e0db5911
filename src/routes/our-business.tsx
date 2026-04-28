import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Bus, ArrowRight, Wifi, Coffee, ShieldCheck, Clock } from "lucide-react";
import busInterior from "@/assets/bus-interior.jpg";

export const Route = createFileRoute("/our-business")({
  head: () => ({
    meta: [
      { title: "Our Business — SRISRAVV TRANSCORP" },
      { name: "description", content: "Explore SRISRAVV TRANSCORP's flagship venture — premium intercity AC sleeper bus services." },
      { property: "og:title", content: "Our Business — SRISRAVV TRANSCORP" },
      { property: "og:description", content: "Premium intercity AC sleeper bus services." },
    ],
  }),
  component: OurBusiness,
});

function OurBusiness() {
  return (
    <Layout>
      <PageHero eyebrow="Our Business" title="Premium mobility, end to end." subtitle="A growing portfolio of travel and transport services — anchored by our flagship intercity sleeper brand." />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-royal opacity-25 blur-2xl" />
              <img src={busInterior} alt="Premium sleeper bus interior" loading="lazy" width={1600} height={1000} className="rounded-2xl shadow-royal" />
            </div>
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                <Bus className="h-3 w-3" /> Flagship Venture
              </p>
              <p className="mt-4 font-brand text-2xl font-bold tracking-wide text-gold-deep sm:text-3xl">SRISRAVV ROYALE</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">Intercity Premium AC Sleeper Buses</h2>
              <div className="mt-5 gold-divider" />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Our flagship offering — a meticulously designed premium AC sleeper service connecting India's busiest intercity routes. Built around comfort, punctuality, and uncompromised safety.
              </p>
              <ul className="mt-6 grid gap-3 text-sm">
                {[
                  { icon: ShieldCheck, t: "Safety-first operations" },
                  { icon: Coffee, t: "Concierge-level hospitality" },
                  { icon: Wifi, t: "Onboard amenities & connectivity" },
                  { icon: Clock, t: "On-time, every time" },
                ].map((f) => (
                  <li key={f.t} className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-gold text-gold-foreground"><f.icon className="h-4 w-4" /></span>
                    <span className="font-medium">{f.t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/intercity" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-royal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-royal transition-smooth hover:opacity-95">
                Explore the Brand <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">Roadmap</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Building for the long road ahead</h2>
          <div className="mx-auto mt-5 gold-divider" />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { phase: "Phase 1", title: "Premium Intercity Launch", desc: "Flagship AC sleeper service across high-density corridors." },
              { phase: "Phase 2", title: "Booking & Tracking Platform", desc: "Online ticketing, real-time bus tracking, and a dedicated mobile app." },
              { phase: "Phase 3", title: "National Network", desc: "Expanding our premium fleet across India with new categories of service." },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-8 text-left shadow-elegant">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">{p.phase}</span>
                <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
