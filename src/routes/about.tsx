import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Eye, Compass, Heart } from "lucide-react";
import office from "@/assets/office.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — SRISRAVV TRANSCORP PRIVATE LIMITED" },
      { name: "description", content: "Learn about SRISRAVV TRANSCORP — our story, vision, mission, and commitment to redefining intercity travel in India." },
      { property: "og:title", content: "About SRISRAVV TRANSCORP" },
      { property: "og:description", content: "Driven by Trust. Defined by Excellence." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero eyebrow="About Us" title="The story behind SRISRAVV" subtitle="A modern transport corporation with a singular goal — to set new benchmarks in intercity travel." />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <img src={office} alt="Corporate office" loading="lazy" width={1600} height={1000} className="rounded-2xl shadow-elegant" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">Who We Are</p>
            <h2 className="mt-3 text-4xl font-bold">Crafted with conviction. Built for scale.</h2>
            <div className="mt-5 gold-divider" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              SRISRAVV TRANSCORP PRIVATE LIMITED is a Hyderabad-based transport corporation, founded with the ambition of building India's most trusted premium travel brand. We bring together operational rigour, passenger-first design, and a deep respect for our customers' time.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From our headquarters at Kapil Kavuri Hub, we are preparing to launch a fleet of premium AC sleeper buses connecting India's most important intercity corridors.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Eye, title: "Our Vision", text: "To be India's most respected premium intercity travel brand — defined by excellence in every journey." },
              { icon: Compass, title: "Our Mission", text: "To deliver a safe, punctual, and luxurious travel experience that elevates the way India moves between cities." },
              { icon: Heart, title: "Our Values", text: "Trust, integrity, customer-first thinking, and an uncompromising commitment to quality." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-royal text-primary-foreground shadow-royal">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">Leadership</p>
          <h2 className="mt-3 text-4xl font-bold">Led with purpose</h2>
          <div className="mx-auto mt-5 gold-divider" />
          <div className="mt-12 inline-block rounded-2xl border border-border bg-card px-12 py-10 shadow-elegant">
            <div className="mx-auto h-24 w-24 rounded-full bg-gradient-royal shadow-royal" />
            <h3 className="mt-6 text-2xl font-bold">Sriharsha Komera</h3>
            <p className="mt-1 text-sm font-medium text-gold-deep">Founder & Director</p>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">Driving SRISRAVV's vision of building India's most trusted premium intercity travel brand.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
