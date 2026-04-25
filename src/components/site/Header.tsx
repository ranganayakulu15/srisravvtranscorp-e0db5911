import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";

type NavLink = { to: "/" | "/about" | "/our-business" | "/careers" | "/contact"; label: string; hasDropdown?: boolean };
const navLinks: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/our-business", label: "Our Business", hasDropdown: true },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="SRISRAVV TRANSCORP" className="h-12 w-auto rounded" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-bold tracking-wider text-primary">SRISRAVV</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Transcorp</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <div key={l.to} className="group relative">
              <Link
                to={l.to}
                className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-smooth hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
                {l.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {l.hasDropdown && (
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 pt-2 opacity-0 transition-smooth group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-lg border border-border bg-card shadow-elegant">
                    <Link
                      to="/intercity"
                      className="block px-5 py-4 transition-smooth hover:bg-accent"
                    >
                      <div className="text-sm font-semibold text-primary">Intercity Premium AC Sleeper Buses</div>
                      <div className="mt-1 text-xs text-muted-foreground">Coming soon — luxury intercity travel</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="ml-3 rounded-md bg-gradient-royal px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-royal transition-smooth hover:opacity-90"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent"
                activeProps={{ className: "text-primary bg-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/intercity"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 pl-6 text-sm text-muted-foreground hover:bg-accent"
            >
              ↳ Intercity Premium AC Sleeper Buses
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
