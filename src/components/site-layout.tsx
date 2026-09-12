import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Menu, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Projects", "/projects"], ["Reviews", "/reviews"], ["Contact", "/contact"],
] as const;

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link to="/" className={`flex items-center gap-3 ${inverse ? "text-background" : "text-foreground"}`} aria-label="Progress Interior Designs home">
    <span className="grid size-10 shrink-0 place-items-center border border-primary font-display text-sm font-extrabold text-primary">PID</span>
    <span className="hidden leading-tight sm:block"><strong className="block font-display text-sm">PROGRESS</strong><span className="block text-[10px] uppercase tracking-[0.16em] opacity-70">Interior Designs</span></span>
  </Link>;
}

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 50); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const solid = scrolled || !overlay;
  return <>
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${solid ? "border-border/70 bg-background/95 py-3 text-foreground backdrop-blur-md" : "border-primary-foreground/15 bg-transparent py-5 text-background"}`}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:grid-cols-[auto_1fr_auto] lg:px-10">
        <Logo inverse={!solid} />
        <nav className="hidden justify-center gap-7 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, to]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="relative py-2 text-[11px] font-bold uppercase tracking-[0.12em] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-primary hover:after:scale-x-100" activeProps={{ className: "text-primary after:scale-x-100" }}>{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex"><Link to="/contact">Free Estimate <ArrowRight /></Link></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}><Menu /></Button>
        </div>
      </div>
    </header>
    <div className={`fixed inset-0 z-[60] bg-ink text-background transition-transform duration-500 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`} aria-hidden={!open}>
      <div className="flex items-center justify-between border-b border-line p-5"><Logo inverse /><Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}><X /></Button></div>
      <nav className="flex h-[calc(100%-80px)] flex-col justify-center px-7" aria-label="Mobile navigation">
        {nav.map(([label, to], i) => <Link key={to} to={to} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-line py-5 font-display text-3xl font-semibold"><span><span className="mr-5 text-xs text-primary">0{i + 1}</span>{label}</span><ArrowRight className="text-primary" /></Link>)}
      </nav>
    </div>
  </>;
}

export function Footer() {
  return <footer className="bg-ink pb-24 pt-20 text-background md:pb-10">
    <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
      <div className="grid gap-12 border-b border-line pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-primary">Start a conversation</p><h2 className="max-w-lg text-4xl font-bold leading-[1.06] md:text-6xl">Let’s Build Something Better.</h2></div>
        <FooterList title="Company" items={nav.map(([l]) => l)} />
        <FooterList title="Services" items={["Foundation Repair", "General Contracting", "Flooring", "Drywall & Painting", "Basement Finishing", "Handyman Services"]} />
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-primary">Contact</p><p className="mb-2 text-sm text-background/65">Serving residential & commercial clients</p><Link to="/contact" className="text-sm underline underline-offset-4">Request contact details</Link><div className="mt-8 inline-flex items-center gap-2 border border-primary px-3 py-2 text-xs font-bold uppercase text-primary"><Phone className="size-4" /> 24/7 Emergency Service</div></div>
      </div>
      <div className="flex flex-col gap-4 pt-7 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Progress Interior Designs. All Rights Reserved.</p><a href="https://instagram.com" aria-label="Instagram" rel="noreferrer" target="_blank"><Instagram className="size-4" /></a></div>
    </div>
  </footer>;
}

function FooterList({ title, items }: { title: string; items: readonly string[] }) {
  return <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-primary">{title}</p><ul className="space-y-2 text-sm text-background/65">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}

export function SitePage({ children, title, eyebrow, image }: { children: ReactNode; title: string; eyebrow: string; image: string }) {
  return <><Header /><main><section className="relative min-h-[66vh] overflow-hidden bg-ink pt-24 text-background"><img src={image} alt="" className="absolute inset-0 size-full object-cover opacity-45" /><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" /><div className="relative mx-auto flex min-h-[calc(66vh-6rem)] max-w-[1440px] flex-col justify-end px-5 pb-16 lg:px-10"><p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p><h1 className="max-w-4xl text-5xl font-bold leading-[.98] md:text-7xl lg:text-8xl">{title}</h1></div></section>{children}</main><Footer /><MobileActions /></>;
}

export function MobileActions() { return <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background p-2 md:hidden"><Button variant="dark" asChild><Link to="/contact"><Phone /> Call Now</Link></Button><Button asChild><Link to="/contact">Free Estimate</Link></Button></div>; }