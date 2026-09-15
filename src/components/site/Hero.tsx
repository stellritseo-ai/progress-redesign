import { ArrowRight, Award, BadgeCheck, Building2, CheckCircle2, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/heroprogress.mp4";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[94vh] flex items-center overflow-hidden bg-background pt-[72px] sm:pt-[84px] lg:pt-[96px] pb-10 sm:pb-14">
      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto" 
          className="h-full w-full object-cover object-center opacity-90 dark:opacity-75 scale-105 transition-transform duration-1000"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/heroprogress.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent dark:from-background/98 dark:via-background/70 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Ambient Glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-56 w-56 sm:h-80 sm:w-80 rounded-full bg-primary/10 blur-[100px] sm:blur-[130px] animate-blob" />
        <div className="absolute bottom-10 right-1/4 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-primary/10 blur-[120px] sm:blur-[150px] animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10 w-full py-6 sm:py-10 lg:py-12">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl flex flex-col items-start text-left animate-fade-up">

          {/* Trust Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 sm:px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold backdrop-blur-md shadow-sm">
            <span className="flex text-amber-400 gap-0.5 shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 sm:h-3.5 w-3 sm:w-3.5 fill-current text-amber-400" />
              ))}
            </span>
            <span className="text-foreground text-[10px] sm:text-[11.5px] leading-tight font-medium">
              11+ Years Master Craftsmanship &bull; High Quality Workmanship
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold leading-[1.08] tracking-tight text-foreground text-[30px] xs:text-[36px] sm:text-[46px] md:text-[54px] lg:text-[62px] mt-3.5 sm:mt-5">
            Architectural Elegance.<br />
            <span className="gradient-text-gold">Uncompromising Precision.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-3.5 sm:mt-5 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg sm:max-w-2xl font-normal">
            From bespoke kitchen &amp; master bath transformations to full-home structural renovations and architectural millwork. We bring decades of expertise, transparent pricing, and white-glove execution to every home.
          </p>

          {/* CTAs */}
          <div className="mt-5 sm:mt-7 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 w-full xs:w-auto">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow border border-primary/40 h-11 sm:h-12 px-5 sm:px-6 rounded-full font-bold text-xs sm:text-[13px] tracking-normal justify-center shadow-lg">
              <a href="#estimate" className="flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 shrink-0" /> Request Free 3D Estimate <ArrowRight className="ml-1.5 w-3.5 h-3.5 shrink-0" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-11 sm:h-12 px-5 sm:px-6 rounded-full border-border/70 hover:bg-muted text-foreground font-bold text-xs sm:text-[13px] tracking-normal justify-center bg-background/60 backdrop-blur-md">
              <a href="tel:8164623599" className="flex items-center justify-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" /> (816) 462-3599
              </a>
            </Button>
          </div>
        </div>

        {/* Trust Pills - Responsive flex-wrap on desktop, smooth scroll on mobile */}
        <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-border/25 w-full overflow-x-auto no-scrollbar">
          <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 sm:gap-2.5 min-w-max sm:min-w-0">
            {[
              { icon: ShieldCheck, label: "Commitment to Safety" },
              { icon: BadgeCheck, label: "High Quality Workmanship" },
              { icon: Sparkles, label: "5-Year Craftsmanship Warranty" },
              { icon: CheckCircle2, label: "Free Estimates & Transparent Pricing" },
              { icon: ShieldCheck, label: "Dust-Controlled Clean Sites" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#why-choose-us"
                className="group shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-primary/25 bg-background/85 hover:bg-card hover:border-primary/60 px-3 sm:px-3.5 py-1.5 text-[10px] sm:text-[11.5px] font-semibold text-foreground/85 hover:text-foreground backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 dark:bg-card/50 dark:hover:bg-card/85 dark:border-primary/30 dark:text-foreground"
              >
                <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                </span>
                <span className="whitespace-nowrap">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [
    { icon: Award, number: "11+", label: "Years of Master Excellence", sub: "Serving Metro Area Discerning Homeowners" },
    { icon: Building2, number: "1,200+", label: "Completed Transformations", sub: "Bespoke Kitchens, Baths & Full Estates" },
    { icon: Star, number: "99.4%", label: "Verified Client Satisfaction", sub: "500+ Independently Rated 5-Star Reviews" },
    { icon: ShieldCheck, number: "100%", label: "Commitment to Quality", sub: "High Quality Workmanship & Safety" },
    { icon: BadgeCheck, number: "100%", label: "Transparent Pricing", sub: "Free Estimates - Clear Scope of Work" },
    { icon: Sparkles, number: "5-Year", label: "Written Master Warranty", sub: "Total Craftsmanship & Structural Protection" },
  ];
  const marqueeItems = [...stats, ...stats];

  return (
    <section
      id="stats"
      aria-label="Company Performance Statistics"
      className="relative border-y border-primary/20 bg-gradient-to-b from-background via-secondary/20 to-background dark:via-card/25 backdrop-blur-2xl overflow-hidden select-none py-4 sm:py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-background via-background/90 to-transparent z-10" />
      <div className="flex w-max flex-nowrap items-center gap-3 sm:gap-5 animate-marquee hover-pause py-1">
        {marqueeItems.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={`${stat.label}-${i}`}
              className="group relative shrink-0 flex items-center gap-3 sm:gap-4 rounded-2xl border border-primary/20 bg-card/90 hover:bg-card dark:bg-card/65 dark:hover:bg-card/90 px-3.5 sm:px-6 py-2.5 sm:py-4 backdrop-blur-xl hover:shadow-[0_10px_35px_-8px_rgba(163,126,58,0.3)] hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
            >
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
              <div className="relative flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 text-primary group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="font-display text-xl sm:text-[28px] font-extrabold tracking-tight gradient-text-gold leading-none">{stat.number}</span>
                  <span className="text-[11px] sm:text-[13px] font-bold text-foreground tracking-tight whitespace-nowrap">{stat.label}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground whitespace-nowrap">{stat.sub}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
