import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  Clock,
  Hammer,
  Home,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
  Facebook,
  Linkedin
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png";

export const serviceLinks = [
  {
    to: "/services/kitchen-remodeling",
    title: "Kitchen Remodeling & Custom Cabinetry",
    desc: "Chef-grade islands, quartz surfaces, and bespoke cabinetry.",
    icon: Sparkles,
    tag: "Most Popular",
  },
  {
    to: "/services/bathroom-remodeling",
    title: "Luxury Bathroom & Spa Retreats",
    desc: "Walk-in curbless showers, freestanding soaking tubs & heated tile.",
    icon: Home,
    tag: "Master Suite",
  },
  {
    to: "/services/whole-home-renovation",
    title: "Whole-Home Architectural Renovations",
    desc: "Complete open-concept reconfigurations and interior expansions.",
    icon: Ruler,
    tag: "Turnkey",
  },
  {
    to: "/services/foundation-repair",
    title: "Foundation Repair & Structural Engineering",
    desc: "Piering, crack injection, leveling & load-bearing beam modifications.",
    icon: Hammer,
    tag: "Structural",
  },
  {
    to: "/services/flooring",
    title: "Hardwood, Stone & Designer Flooring",
    desc: "Handcrafted white oak, herringbone patterns, and precision stone tile.",
    icon: Wrench,
    tag: "Premium",
  },
  {
    to: "/services/basement-finishing",
    title: "Basement Finishing & Entertainment Suites",
    desc: "Subterranean living, home theaters, custom bars & wine cellars.",
    icon: Paintbrush,
    tag: "Value-Add",
  },
];

export function Logo({
  className = "",
  size = "default",
  inverse = false,
}: {
  className?: string;
  size?: "default" | "sm" | "lg";
  inverse?: boolean;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  return (
    <Link
      to="/"
      className={`inline-flex items-center transition-all duration-200 hover:opacity-90 active:scale-[0.99] shrink-0 ${className}`}
      aria-label="Progress Interior Designs Home"
    >
      <img
        src={logoImg}
        alt="Progress Interior Designs"
        className={`w-auto object-contain transition-all duration-200 drop-shadow-sm dark:brightness-110 ${size === "sm"
            ? "h-9 xs:h-10 sm:h-11"
            : size === "lg"
              ? "h-14 xs:h-16 sm:h-20"
              : "h-[44px] xs:h-[50px] sm:h-[58px] lg:h-[68px]"
          }`}
        onError={(e) => {
          e.currentTarget.src = "/logo.png";
        }}
      />
    </Link>
  );
}

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isHome = pathname === "/";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
        {/* Top Notification / Trust Bar (Inspired by 'Brown') */}
        <div className={`hidden lg:block transition-all duration-300 border-b border-border/15 ${scrolled ? "h-0 opacity-0 overflow-hidden py-0" : "h-10 opacity-100 glass-topbar py-2"}`}>
          <div className="mx-auto max-w-[1440px] px-8 flex items-center justify-between text-[11px] font-medium text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href="tel:8164623599" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span className="font-bold text-foreground">(816) 462-3599</span>
              </a>
              <span className="text-border/60">|</span>
              <a href="mailto:pid.2014.d@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>pid.2014.d@gmail.com</span>
              </a>
              <span className="text-border/60">|</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>Mon – Sat: 7:30 AM – 6:30 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <span className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </span>
                <span className="text-foreground text-[11px]">5.0 Star Rated (120+ Reviews)</span>
              </div>
              <span className="text-border/60">|</span>
              <span className="text-primary font-bold inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> High Quality Workmanship
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar (Locked height so header does not increase) */}
        <nav
          aria-label="Main Navigation"
          className={`border-b transition-all duration-300 flex items-center h-20 ${scrolled
              ? "glass-nav shadow-2xl"
              : overlay
                ? "bg-background/80 backdrop-blur-md border-border/20"
                : "bg-background/95 backdrop-blur-md border-border/30"
            }`}
        >
          <div className="mx-auto max-w-[1440px] w-full px-5 lg:px-8 flex items-center justify-between">
            <Logo />

            {/* Desktop Navigation Links (Positioned on the right) */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-8 ml-auto mr-7 xl:mr-10">
              {isHome ? (
                <>
                  <Link
                    to="/"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors cursor-pointer"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>

                  {/* Services Mega Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setServicesMenuOpen(true)}
                    onMouseLeave={() => setServicesMenuOpen(false)}
                  >
                    <Link
                      to="/services"
                      className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesMenuOpen ? "rotate-180 text-primary" : ""}`} />
                    </Link>

                    {/* Dropdown Menu Box */}
                    {servicesMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px] z-50">
                        <div className="glass-dropdown rounded-2xl p-6 grid grid-cols-2 gap-4 border border-primary/20 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                          <div className="col-span-2 flex items-center justify-between pb-3 border-b border-border/30">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-primary">Our Core Disciplines</p>
                              <p className="text-[11px] text-muted-foreground">Architectural design, structural execution & master finish work</p>
                            </div>
                            <Link to="/services" onClick={() => setServicesMenuOpen(false)} className="text-[11px] font-bold text-primary hover:underline inline-flex items-center gap-1 cursor-pointer">
                              View All <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          {serviceLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link 
                                key={item.title} 
                                to={item.to}
                                onClick={() => setServicesMenuOpen(false)}
                                className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-muted/70 border border-transparent hover:border-primary/20 transition-all cursor-pointer"
                              >
                                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                                      {item.title}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-muted-foreground leading-snug mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/projects"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Portfolio
                  </Link>

                  <Link
                    to="/reviews"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors"
                  >
                    Reviews
                  </Link>

                  <Link
                    to="/contact"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    activeOptions={{ exact: true }}
                    className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors"
                    activeProps={{ className: "text-primary font-extrabold" }}
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors"
                    activeProps={{ className: "text-primary font-extrabold" }}
                  >
                    About Us
                  </Link>

                  {/* Services Mega Dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesMenuOpen(true)}
                    onMouseLeave={() => setServicesMenuOpen(false)}
                  >
                    <Link
                      to="/services"
                      className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors py-2"
                      activeProps={{ className: "text-primary font-extrabold" }}
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesMenuOpen ? "rotate-180 text-primary" : ""}`} />
                    </Link>

                    {/* Dropdown Menu Box */}
                    {servicesMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px] z-50">
                        <div className="glass-dropdown rounded-2xl p-6 grid grid-cols-2 gap-4 border border-primary/20 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                          <div className="col-span-2 flex items-center justify-between pb-3 border-b border-border/30">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-primary">Our Core Disciplines</p>
                              <p className="text-[11px] text-muted-foreground">Architectural design, structural execution & master finish work</p>
                            </div>
                            <Link to="/services" className="text-[11px] font-bold text-primary hover:underline inline-flex items-center gap-1">
                              View All <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          {serviceLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.title}
                                to={item.to}
                                className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-muted/70 border border-transparent hover:border-primary/20 transition-all"
                              >
                                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                                      {item.title}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-muted-foreground leading-snug mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/projects"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors"
                    activeProps={{ className: "text-primary font-extrabold" }}
                  >
                    Portfolio
                  </Link>

                  <Link
                    to="/reviews"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors"
                    activeProps={{ className: "text-primary font-extrabold" }}
                  >
                    Reviews
                  </Link>

                  <Link
                    to="/contact"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors"
                    activeProps={{ className: "text-primary font-extrabold" }}
                  >
                    Contact
                  </Link>
                </>
              )}
            </div>

            {/* Right Action Controls */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="tel:8164623599"
                className="hidden xl:flex items-center gap-2 text-xs font-bold text-foreground hover:text-primary transition-colors bg-secondary/60 hover:bg-secondary px-3.5 py-2 rounded-full border border-border/40 hover:border-primary/40"
              >
                <Phone className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span>(816) 462-3599</span>
              </a>

              <Button asChild className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 btn-glow border border-primary/40 font-bold px-6 h-10 rounded-full cursor-pointer">
                <Link to="/estimate">Get Free Estimate</Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-foreground hover:bg-muted border border-border/30 rounded-xl"
                aria-label="Open menu"
                onClick={() => {
                  setOpen(true);
                  setMobileServicesOpen(true);
                }}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer (High Polish) */}
      <div
        className={`fixed inset-0 z-[100] bg-background text-foreground transition-all duration-300 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="absolute top-1/4 left-1/4 w-[320px] h-[320px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between border-b border-border/30 px-4 xs:px-6 py-3.5 bg-background/95 backdrop-blur-md">
          <Logo />
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="hover:bg-muted rounded-xl h-10 w-10 border border-border/40"
            >
              <X className="w-5 h-5 text-foreground" />
            </Button>
          </div>
        </div>

        <div className="relative z-10 h-[calc(100dvh-64px)] overflow-y-auto px-4 xs:px-6 py-6 flex flex-col justify-between overscroll-contain">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Navigation</p>

            {/* 01 Home */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/20 py-3.5 font-display text-xl font-bold hover:text-primary transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-primary/70">01</span>
                Home
              </span>
              <ArrowRight className="w-4 h-4 text-primary/50" />
            </Link>

            {/* 02 About Us */}
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/20 py-3.5 font-display text-xl font-bold hover:text-primary transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-primary/70">02</span>
                About Us
              </span>
              <ArrowRight className="w-4 h-4 text-primary/50" />
            </Link>

            {/* 03 Services (Expandable Sub Menu) */}
            <div className="border-b border-border/20">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-3.5 font-display text-xl font-bold hover:text-primary transition-colors text-left cursor-pointer group"
                aria-expanded={mobileServicesOpen}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-primary/70">03</span>
                  <span>Services</span>
                  <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 uppercase tracking-wider">
                    6 Disciplines
                  </span>
                </span>
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="text-[11px] font-sans font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    {mobileServicesOpen ? "Close" : "View"}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Sub-Menu Drawer Items */}
              {mobileServicesOpen && (
                <div className="pb-4 pt-1 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Master View All Link */}
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold text-xs hover:bg-primary/20 transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Explore All Renovation Disciplines</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* 6 Core Disciplines */}
                  <div className="grid grid-cols-1 gap-1.5 pt-1">
                    {serviceLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl bg-muted/40 hover:bg-muted/80 border border-border/30 hover:border-primary/30 transition-all text-left"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0 mt-0.5">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1.5">
                              <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                {item.title}
                              </p>
                              <span className="text-[9px] font-semibold text-primary/80 px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 shrink-0">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-[10px] text-muted-foreground line-clamp-1 mt-1 leading-normal">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 04 Portfolio Projects */}
            <Link
              to="/projects"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/20 py-3.5 font-display text-xl font-bold hover:text-primary transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-primary/70">04</span>
                Portfolio Projects
              </span>
              <ArrowRight className="w-4 h-4 text-primary/50" />
            </Link>

            {/* 05 Client Reviews */}
            <Link
              to="/reviews"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/20 py-3.5 font-display text-xl font-bold hover:text-primary transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-primary/70">05</span>
                Client Reviews
              </span>
              <ArrowRight className="w-4 h-4 text-primary/50" />
            </Link>

            {/* 06 Contact & Consultation */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/20 py-3.5 font-display text-xl font-bold hover:text-primary transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-primary/70">06</span>
                Contact & Consultation
              </span>
              <ArrowRight className="w-4 h-4 text-primary/50" />
            </Link>
          </div>

          <div className="pt-8 space-y-4">
            <div className="p-4 rounded-2xl glass-card border border-border/40 text-left space-y-2">
              <p className="text-xs font-bold text-foreground">Speak Directly With a Craftsman</p>
              <a href="tel:8164623599" className="flex items-center gap-2 text-primary font-bold text-lg">
                <Phone className="w-4 h-4" /> (816) 462-3599
              </a>
              <p className="text-[11px] text-muted-foreground">Mon – Sat: 7:30 AM – 6:30 PM • Rapid Response</p>
            </div>

            <Button asChild className="w-full bg-primary text-primary-foreground btn-glow h-12 rounded-xl text-sm font-bold cursor-pointer" size="lg">
              <Link to="/estimate" onClick={() => setOpen(false)}>
                Request a Free 3D Estimate →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#08090C] text-slate-300 pt-20 pb-12 overflow-hidden border-t border-white/10 selection:bg-primary selection:text-primary-foreground">
      {/* Luminous Top Gradient Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Ambient Radial Lighting Blooms */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-[400px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

        {/* Four Column Directory Grid */}
        <div className="grid gap-12 sm:gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.6fr_1fr_1.2fr_1.4fr]">

          {/* Col 1: Brand Anchor & Credentials */}
          <div className="space-y-6">
            <Logo size="default" className="brightness-110" />
            <p className="max-w-sm text-xs sm:text-[13px] leading-relaxed text-slate-400">
              Progress Interior Designs delivers master-grade residential transformations, architectural chef's kitchens, spa retreats, and foundation enhancements across Greater Kansas City with fixed-price integrity.
            </p>

            {/* Contractor Trust Badge */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5 max-w-sm backdrop-blur-md">
              <div className="flex items-center gap-2 text-primary text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>Master Quality Contractor</span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/[0.08] text-[11px]">
                <div>
                  <span className="block font-semibold text-slate-200">License #</span>
                  <span className="text-slate-400 font-mono">GC-89421-B</span>
                </div>
                <div>
                  <span className="block font-semibold text-slate-200">Liability Coverage</span>
                  <span className="text-slate-400 font-mono">Fully Insured & Bonded</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all shadow-sm group cursor-pointer"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all shadow-sm group cursor-pointer"
                aria-label="Follow on Facebook"
              >
                <Facebook className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all shadow-sm group cursor-pointer"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Company
              </p>
            </div>
            <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-400 font-medium">
              <li>
                <Link to="/" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary hover:translate-x-1 transition-all inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Renovation Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Project Portfolio</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Client Testimonials</Link>
              </li>
              <li>
                <Link to="/estimate" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Get a Free Estimate</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Contact & Consultations</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Breakdown */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Specialties
              </p>
            </div>
            <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-400 font-medium">
              {[
                { title: "Kitchen Remodeling", to: "/services/kitchen-remodeling" },
                { title: "Master Bathrooms & Spas", to: "/services/bathroom-remodeling" },
                { title: "Whole-Home Additions", to: "/services/whole-home-renovation" },
                { title: "Foundation & Piering Repair", to: "/services/foundation-repair" },
                { title: "Hardwood & Stone Flooring", to: "/services/flooring" },
                { title: "Basement Living Suites", to: "/services/basement-finishing" },
                { title: "Architectural Millwork", to: "/services/custom-millwork" },
              ].map((specialty) => (
                <li key={specialty.title}>
                  <Link to={specialty.to} className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                    {specialty.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Service Hours */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Direct Concierge
              </p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-[13px] text-slate-300">
              <a
                href="tel:8164623599"
                className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-primary/20 transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm block group-hover:text-primary transition-colors">(816) 462-3599</span>
                  <span className="text-[11px] text-slate-400">Direct Superintendent Line</span>
                </div>
              </a>

              <a
                href="mailto:pid.2014.d@gmail.com"
                className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-primary/20 transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <span className="text-white font-medium block truncate group-hover:text-primary transition-colors">pid.2014.d@gmail.com</span>
                  <span className="text-[11px] text-slate-400">Blueprint & Estimation Inquiries</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-2.5 -mx-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-white font-medium block">Grandview, MO 64030</span>
                  <span className="text-[11px] text-slate-400">Serving Greater Kansas City Metro</span>
                </div>
              </div>

              {/* Operating Schedule Card */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-1.5">
                <div className="flex items-center justify-between text-slate-200 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" /> Working Hours
                  </span>
                  <span className="text-primary font-mono text-[11px]">7:30 AM – 6:30 PM</span>
                </div>
                <p className="text-[11px] text-slate-400">Monday through Saturday</p>
                <div className="flex items-center gap-1.5 pt-1.5 border-t border-white/[0.08] text-[11px]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-400 font-semibold">24/7 Emergency Structural Dispatch</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Regional Coverage Ribbon */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300 font-semibold text-[11px] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>Regional Coverage:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            {["Grandview", "Overland Park", "Lee's Summit", "Leawood", "Prairie Village", "Brookside", "Country Club Plaza", "Mission Hills", "South Kansas City"].map((area) => (
              <span
                key={area}
                className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-primary/40 transition-colors font-medium cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright, guarantees, and back to top */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Progress Interior Designs LLC. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <span className="text-primary font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Guaranteed Craftsmanship
            </span>
            <span className="text-white/20">•</span>
            <span className="text-slate-300">20-Year Structural Warranty</span>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-primary/50 text-white text-[11px] font-bold transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer group"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3 text-primary group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}

export function SiteLayout({ children, overlay = false }: { children: ReactNode; overlay?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header overlay={overlay} />
      <main className="flex-1 w-full pt-16 lg:pt-24">{children}</main>
      <Footer />
    </div>
  );
}

export function SitePage({
  eyebrow,
  title,
  image,
  children
}: {
  eyebrow: string;
  title: string;
  image: string;
  children: ReactNode
}) {
  return (
    <SiteLayout overlay={false}>
      {/* Subpage Luxury Header */}
      <section className="relative overflow-hidden bg-background pt-24 pb-20 lg:pt-32 lg:pb-28 border-b border-border/30">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px] px-5 lg:px-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
            {title}
          </h1>
        </div>
      </section>

      {children}
    </SiteLayout>
  );
}
