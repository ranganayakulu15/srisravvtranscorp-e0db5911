import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, ShieldCheck, Bus, Users, Award, Target } from "lucide-react";
import hero from "@/assets/hero-bus.jpg";
import office from "@/assets/office.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SRISRAVV TRANSCORP — Driven by Trust. Defined by Excellence." },
      { name: "description", content: "SRISRAVV TRANSCORP PRIVATE LIMITED — premium intercity AC sleeper bus services. Building India's most trusted travel brand." },
      { property: "og:title", content: "SRISRAVV TRANSCORP — Driven by Trust. Defined by Excellence." },
      { property: "og:description", content: "Premium intercity AC sleeper bus services from SRISRAVV TRANSCORP." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="Premium AC sleeper bus on highway at dusk" className="h-full w-full object-cover brightness-75" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/70 via-primary-deep/50 to-primary-deep/20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.18 0.1 295 / 0.55) 0%, oklch(0.22 0.12 295 / 0.35) 50%, oklch(0.18 0.1 295 / 0.15) 100%)" }} />
        </div>
        <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-16 sm:py-20 md:min-h-[88vh] md:px-8 md:py-24">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-3xl font-bold leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl">
              Engineering <span className="text-gradient-gold">Excellence</span> in Logistics &amp; Transport.
            </h1>
            <p className="mt-5 max-w-xl text-sm text-primary-foreground/85 sm:text-base md:text-lg">
              A diversified transport powerhouse delivering premium passenger mobility and end-to-end cargo solutions across India.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link to="/our-business" className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:opacity-95">
                Discover Our Business <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-smooth hover:bg-primary-foreground/10">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">Our Promise</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">The Definitive Transit Standard</h2>
            <div className="mx-auto mt-5 gold-divider" />
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Uncompromising Trust", desc: "Building lasting credibility through transparent operations and a culture of accountability." },
              { icon: Award, title: "Elite Guest Experience", desc: "Delivering an end-to-end premium environment designed specifically for the discerning traveler." },
              { icon: Target, title: "The Future of Mobility", desc: "A forward-thinking corporate framework engineered to lead India's next evolution in transport." },
            ].map((p) => (
              <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-royal">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-royal opacity-10 transition-smooth group-hover:opacity-20" />
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-royal text-primary-foreground shadow-royal">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-royal opacity-20 blur-2xl" />
            <img src={office} alt="SRISRAVV Transcorp office" loading="lazy" width={1600} height={1000} className="rounded-2xl shadow-royal" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">About SRISRAVV</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">A corporation built on conviction</h2>
            <div className="mt-5 gold-divider" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Headquartered in the Financial District of Hyderabad, SRISRAVV TRANSCORP PRIVATE LIMITED is an emerging leader in high-performance intercity mobility. By integrating institutional-grade operational frameworks with an uncompromising approach to passenger-centric design, we are establishing the new benchmark for premium transit.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our Mission:</span> To redefine the travel experience through precision, luxury, and unwavering service integrity.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Business teaser */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Business</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Premium intercity, reimagined.</h2>
              <div className="mt-5 gold-divider" />
              <p className="mt-6 text-lg text-primary-foreground/85">
                Our flagship venture <span className="font-bold text-gradient-gold">SRISRAVV ROYALE</span> — a fleet of premium AC sleeper buses connecting India's most travelled corridors with luxury, safety, and punctuality.
              </p>
              <Link to="/intercity" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:opacity-95">
                <Bus className="h-4 w-4" /> Intercity Buses — Coming Soon
              </Link>
            </div>
            <div className="grid gap-4">
              {[
                { icon: Bus, label: "Premium AC Sleeper Fleet" },
                { icon: Users, label: "Trained, Certified Crew" },
                { icon: ShieldCheck, label: "Safety-First Operations" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-4 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold text-gold-foreground">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-royal px-6 py-12 text-center text-primary-foreground shadow-royal sm:px-8 sm:py-16 md:px-16">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Partner with India's next premium travel brand.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">For partnerships, investments, or career opportunities — we'd love to hear from you.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:opacity-95">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
