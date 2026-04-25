import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Bus, Bell, ArrowLeft } from "lucide-react";
import busInterior from "@/assets/bus-interior.jpg";

export const Route = createFileRoute("/intercity")({
  head: () => ({
    meta: [
      { title: "Intercity Premium AC Sleeper Buses — Coming Soon | SRISRAVV" },
      { name: "description", content: "SRISRAVV's premium intercity AC sleeper bus service is launching soon. Stay tuned for India's most luxurious overnight travel experience." },
      { property: "og:title", content: "Intercity Premium AC Sleeper — Coming Soon" },
      { property: "og:description", content: "India's next premium intercity travel brand. Launching soon." },
    ],
  }),
  component: Intercity,
});

function Intercity() {
  return (
    <Layout>
      <section className="relative isolate min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={busInterior} alt="Premium AC sleeper bus interior" className="h-full w-full object-cover" width={1600} height={1000} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.13 0.08 295 / 0.95) 0%, oklch(0.2 0.12 295 / 0.85) 100%)" }} />
        </div>
        <div className="mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center text-primary-foreground md:px-8 md:py-24">
          <div className="inline-flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground shadow-gold sm:h-20 sm:w-20">
            <Bus className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gold sm:mt-8 sm:text-xs sm:tracking-[0.4em]">Launching Soon</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            Intercity Premium <br className="hidden md:block" />
            <span className="text-gradient-gold">AC Sleeper Buses</span>
          </h1>
          <div className="mx-auto mt-6 gold-divider" />
          <p className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/85 sm:mt-8 sm:text-lg md:text-xl">
            We're crafting India's most luxurious overnight travel experience. A new fleet, a new brand, a new standard — coming very soon.
          </p>

          <div className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-3 sm:gap-4">
            {[
              { n: "Premium", l: "Fleet" },
              { n: "Pan-India", l: "Routes" },
              { n: "24×7", l: "Support" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-3 backdrop-blur sm:p-5">
                <div className="text-base font-bold text-gradient-gold sm:text-2xl">{s.n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-primary-foreground/70 sm:text-xs">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:opacity-95">
              <Bell className="h-4 w-4" /> Notify Me at Launch
            </Link>
            <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-primary-foreground/10">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
