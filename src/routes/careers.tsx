import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Briefcase, Users, TrendingUp, Mail } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — SRISRAVV TRANSCORP" },
      { name: "description", content: "Join SRISRAVV TRANSCORP and help build India's most trusted premium intercity travel brand." },
      { property: "og:title", content: "Careers at SRISRAVV TRANSCORP" },
      { property: "og:description", content: "Build the future of premium intercity travel with us." },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <Layout>
      <PageHero eyebrow="Careers" title="Build the road ahead, with us." subtitle="We're assembling a passionate team to launch India's next premium intercity travel brand." />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: TrendingUp, title: "Grow With Us", desc: "Be part of a fast-moving organisation entering an exciting growth phase." },
              { icon: Users, title: "People-First Culture", desc: "We invest in our people — with training, mentorship, and meaningful ownership." },
              { icon: Briefcase, title: "Meaningful Work", desc: "Solve real problems in mobility and reshape how India travels intercity." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-royal text-primary-foreground shadow-royal">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">Open Roles</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">We're hiring across functions</h2>
          <div className="mx-auto mt-5 gold-divider" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Operations, Fleet Management, Customer Experience, Technology, Marketing, Finance, and more. Specific roles will be posted here soon — in the meantime, send us your profile.
          </p>
          <a href="mailto:sriharsha.komera@srisravv.com?subject=Career%20Opportunity%20at%20SRISRAVV" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-royal px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-royal transition-smooth hover:opacity-95">
            <Mail className="h-4 w-4" /> Send Your Resume
          </a>
          <div className="mt-6">
            <Link to="/contact" className="text-sm font-semibold text-primary hover:text-primary-glow">or get in touch with us →</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
