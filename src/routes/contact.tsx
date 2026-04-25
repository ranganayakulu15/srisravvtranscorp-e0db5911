import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SRISRAVV TRANSCORP" },
      { name: "description", content: "Get in touch with SRISRAVV TRANSCORP. Visit us at Kapil Kavuri Hub, Financial District, Hyderabad." },
      { property: "og:title", content: "Contact SRISRAVV TRANSCORP" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1500),
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    // Build mailto fallback (no backend yet)
    const body = `Name: ${result.data.name}%0D%0AEmail: ${result.data.email}%0D%0APhone: ${result.data.phone ?? "-"}%0D%0A%0D%0A${encodeURIComponent(result.data.message)}`;
    window.location.href = `mailto:sriharsha.komera@srisravv.com?subject=${encodeURIComponent(result.data.subject)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageHero eyebrow="Contact" title="Let's start a conversation" subtitle="For business, partnerships, careers, or general queries — our team is ready to help." />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3 md:px-8">
          {[
            { icon: MapPin, title: "Visit Us", lines: ["Alt.F, Kapil Kavuri Hub,", "Financial District, Nanakramguda,", "Telangana – 500032"] },
            { icon: Phone, title: "Call Us", lines: ["+91-9603158764"], link: "tel:+919603158764" },
            { icon: Mail, title: "Email Us", lines: ["sriharsha.komera@srisravv.com"], link: "mailto:sriharsha.komera@srisravv.com" },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8 text-center shadow-elegant">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-royal text-primary-foreground shadow-royal">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-bold">{c.title}</h3>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                {c.lines.map((l) => c.link ? <a key={l} href={c.link} className="block hover:text-primary break-all">{l}</a> : <p key={l}>{l}</p>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8">
          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant sm:p-8 md:p-10">
            <h2 className="text-3xl font-bold">Send us a message</h2>
            <div className="mt-3 gold-divider" />
            {submitted ? (
              <div className="mt-8 flex flex-col items-center rounded-xl bg-secondary p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-gold-deep" />
                <h3 className="mt-4 text-xl font-bold">Thank you!</h3>
                <p className="mt-2 text-sm text-muted-foreground">Your email client should have opened. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                {[
                  { name: "name", label: "Full Name", type: "text" },
                  { name: "email", label: "Email Address", type: "email" },
                  { name: "phone", label: "Phone (optional)", type: "tel" },
                  { name: "subject", label: "Subject", type: "text" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="mb-1.5 block text-sm font-semibold text-foreground">{f.label}</label>
                    <input
                      name={f.name}
                      type={f.type}
                      maxLength={f.name === "message" ? 1500 : 255}
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                    />
                    {errors[f.name] && <p className="mt-1 text-xs text-destructive">{errors[f.name]}</p>}
                  </div>
                ))}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-foreground">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={1500}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-royal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-royal transition-smooth hover:opacity-95">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
            <iframe
              title="SRISRAVV TRANSCORP location"
              src="https://www.google.com/maps?q=Kapil+Kavuri+Hub,+Financial+District,+Nanakramguda,+Telangana+500032&output=embed"
              className="h-full min-h-[500px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
