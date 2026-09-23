import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Award, 
  BadgeCheck, 
  ChevronDown, 
  FileText, 
  HardHat, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { allServicesList } from "@/data/servicesData";

export function ServicesOverviewDedicated() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const generalFaqs = [
    {
      q: "Can Progress handle multiple renovation disciplines simultaneously?",
      a: "Yes. In fact, comprehensive multi-discipline renovations (such as a simultaneous kitchen remodel, master bath transformation, and whole-house flooring) are our specialty. Having one general contractor coordinate all trades eliminates scheduling gaps, reduces total downtime, and ensures cohesive design."
    },
    {
      q: "Do you handle city building permits in Dallas, Plano, and Frisco?",
      a: "Yes. We manage all architectural drawings, structural engineering stamps, city permit submittals, and coordinate all municipal inspections required for electrical, plumbing, mechanical, and structural framing."
    },
    {
      q: "How does your 100% Fixed-Price Guarantee work?",
      a: "Before breaking ground, every material, fixture, plumbing rough-in, and labor hour is cataloged into an itemized contract. Unless you choose to add scope during construction, the price we quote is the exact price you pay—guaranteed."
    },
    {
      q: "What warranty covers your renovation work?",
      a: "Every project executed by Progress Interior Designs is backed by our comprehensive 5-Year Written Craftsmanship Warranty, in addition to manufacturer warranties on materials, cabinetry hardware, and appliances."
    },
    {
      q: "How do we get started with our project?",
      a: "Start by scheduling a complimentary in-home consultation or configuring your project parameters on our Free Estimate page. Our Senior Project Director will meet with you to review your layout and provide an architectural 3D schematic and fixed-price proposal."
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 border-b border-border/30">
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-primary/[0.09] rounded-full blur-[160px]" />
        <div className="pointer-events-none absolute top-1/3 -right-24 w-[450px] h-[450px] bg-primary/[0.05] rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[300px] bg-amber-500/[0.03] rounded-full blur-[150px]" />

        {/* Subtle grid background */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }} 
        />

        <div className="relative mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-md animate-in fade-in duration-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span>Architectural Renovation Disciplines • Established 2014</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold leading-[1.12] tracking-tight text-foreground text-[26px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Comprehensive Renovation Disciplines.{" "}
              <span className="block mt-1 sm:mt-1.5 gradient-text-gold">
                Master Engineering & Finish.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-normal pt-1">
              From structural foundation engineering and load-bearing beam modifications to bespoke chef's kitchens and five-star spa retreats, we execute every discipline with uncompromising craftsmanship and radical transparency.
            </p>

            {/* Trust highlights ribbon */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-semibold text-muted-foreground">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">5-Year Written Warranty</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">100% Fixed-Price Bids</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <HardHat className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">Licensed & Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">Dallas, Plano, Frisco & Surrounding</span>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full text-xs sm:text-sm font-bold h-12 px-8 bg-primary text-primary-foreground btn-glow shadow-xl">
                <Link to="/contact">
                  Schedule In-Home Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-xs sm:text-sm font-bold h-12 px-7 border-border/60 hover:bg-muted/80 backdrop-blur-sm">
                <Link to="/estimate">Configure Free Estimate</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE 8 CORE DISCIPLINES GRID */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 border-b border-border/30">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Core Disciplines
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight">
              Select A Discipline To Explore
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Click any service below to view detailed scope of work, material standards, 4-phase methodology, pricing tiers, and case studies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServicesList.map((service) => (
              <Link 
                key={service.slug}
                to={`/services/${service.slug}` as any}
                className="group rounded-3xl bg-card/70 dark:bg-card/40 border border-border/40 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Image Header with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img 
                    src={service.heroImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-background/90 dark:bg-black/80 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-wider">
                    {service.categoryLabel}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {service.heroSubheadline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/20 flex items-center justify-between text-xs font-bold text-primary">
                    <span>Explore Discipline</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE PROGRESS GENERAL CONTRACTING STANDARD */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 bg-muted/20 border-b border-border/30">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              The Progress Standard
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight">
              Why Discerning Homeowners Choose Progress
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              We eliminated the chaos, hidden fees, and fragmented communication of traditional home remodeling.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-card/80 dark:bg-card/50 border border-border/40 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-foreground">
                Dedicated Project Director
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A single point of contact overseeing daily job-site velocity, quality inspections, and clear homeowner communication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/80 dark:bg-card/50 border border-border/40 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-foreground">
                100% Fixed-Price Bids
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every trade, fixture, and material is itemized before contract signing. Zero surprise change orders or hidden fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/80 dark:bg-card/50 border border-border/40 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-foreground">
                Architectural 3D & Specs
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Interactive 3D spatial models and physical material samples allow you to experience your space before breaking ground.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/80 dark:bg-card/50 border border-border/40 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-foreground">
                5-Year Written Warranty
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Comprehensive written coverage on all structural modifications, plumbing, electrical, and finish carpentry.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. GENERAL FAQS */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 border-b border-border/30">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Got Questions?
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight">
              General Renovation FAQs
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Everything you need to know about working with Progress Interior Designs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {generalFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-border/40 bg-card/60 dark:bg-card/40 transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FINAL CONVERSION CTA */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-background border-2 border-primary/40 p-8 sm:p-14 text-center space-y-6 shadow-2xl backdrop-blur-xl">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready To Begin Your Transformation?</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Let’s Build Something Enduring Together.
            </h2>

            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Schedule your complimentary in-home architectural consultation today. We review your layout, discuss material options, and deliver a guaranteed 100% fixed-price proposal with zero obligation.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full text-xs sm:text-sm font-bold h-12 px-8 bg-primary text-primary-foreground btn-glow shadow-xl">
                <Link to="/contact">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-xs sm:text-sm font-bold h-12 px-7 border-border/60 hover:bg-muted/80">
                <Link to="/estimate">Configure Free Estimate</Link>
              </Button>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>Prefer to speak directly? Call us at </span>
              <a href="tel:8164623599" className="text-foreground hover:text-primary font-bold transition-colors">
                (816) 462-3359
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
