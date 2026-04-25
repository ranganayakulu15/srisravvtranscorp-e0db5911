import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <img src={logo} alt="SRISRAVV TRANSCORP" className="h-14 w-auto rounded" />
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75">
            SRISRAVV TRANSCORP PRIVATE LIMITED — Driven by Trust. Defined by Excellence.
            Setting new standards in premium intercity travel.
          </p>
          <div className="mt-6 gold-divider" />
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-gold transition-smooth">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-smooth">About Us</Link></li>
            <li><Link to="/our-business" className="hover:text-gold transition-smooth">Our Business</Link></li>
            <li><Link to="/intercity" className="hover:text-gold transition-smooth">Intercity Buses</Link></li>
            <li><Link to="/careers" className="hover:text-gold transition-smooth">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Reach Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" /><span>Alt.F, Kapil Kavuri Hub, Financial District, Nanakramguda, Telangana – 500032</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold" /><a href="tel:+919603158764" className="hover:text-gold">+91-9603158764</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-gold" /><a href="mailto:sriharsha.komera@srisravv.com" className="hover:text-gold break-all">sriharsha.komera@srisravv.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-primary-foreground/60 md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} SRISRAVV TRANSCORP PRIVATE LIMITED. All rights reserved.</span>
          <span>CIN: To be added</span>
        </div>
      </div>
    </footer>
  );
}
