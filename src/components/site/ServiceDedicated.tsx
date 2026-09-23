import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Award, 
  BadgeCheck, 
  Check, 
  CheckCircle2, 
  ChevronDown, 
  Clock, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ServiceDetailData } from "@/data/servicesData";
import { allServicesList } from "@/data/servicesData";

export function ServiceDedicated({ data }: { data: ServiceDetailData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const siblingServices = allServicesList.filter((s) => s.slug !== data.slug);

  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 border-b border-border/30">
        {/* Ambient lighting blobs */}
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
              <span>{data.categoryLabel} • Dallas & DFW Metroplex</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold leading-[1.12] tracking-tight text-foreground text-[26px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px]">
              {data.title.split("&")[0]}
              {data.title.includes("&") && (
                <span className="block mt-1 sm:mt-1.5 gradient-text-gold">
                  & {data.title.split("&")[1]}
                </span>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-normal pt-1">
              {data.heroSubheadline}
            </p>

            {/* Trust highlights ribbon */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-semibold text-muted-foreground">
              {data.trustPills.map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm hover:border-primary/40 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-foreground">{pill.label}</span>
                  </div>
                );
              })}
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
              <a 
                href="tel:8164623599" 
                className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors py-2 px-3"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>Call Direct: (816) 462-3359</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OVERVIEW & THE PROGRESS ARCHITECTURAL STANDARD */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 border-b border-border/30">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  The Progress Standard
                </span>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight leading-tight">
                  Engineering Precision. <br className="hidden sm:inline" />
                  <span className="gradient-text-gold">Uncompromising Execution.</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base font-medium text-foreground/90 leading-relaxed">
                {data.overviewLead}
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {data.overviewStory.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* 4 Pillars of Excellence */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {data.pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-5 rounded-2xl bg-card/60 dark:bg-card/40 border border-border/40 hover:border-primary/30 transition-all space-y-2 shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display text-sm font-bold text-foreground">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Showcase Image */}
                <div className="relative rounded-3xl overflow-hidden border border-primary/30 shadow-2xl bg-card aspect-[4/5] group">
                  <img 
                    src={data.heroImage} 
                    alt={data.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Lower Caption */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-background/90 dark:bg-black/80 backdrop-blur-md border border-primary/30 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Signature Execution
                    </span>
                    <p className="font-display text-xs sm:text-sm font-bold text-foreground line-clamp-2">
                      {data.tagline}
                    </p>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-card/95 border border-primary/30 shadow-xl backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-base font-extrabold gradient-text-gold leading-none">
                      11+ Years
                    </div>
                    <div className="text-[10px] text-muted-foreground font-semibold mt-0.5">
                      Master Craftsmanship
                    </div>
                  </div>
                </div>

                {/* Floating Warranty Badge */}
                <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-card/95 border border-primary/30 shadow-xl backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-base font-extrabold gradient-text-gold leading-none">
                      5-Year
                    </div>
                    <div className="text-[10px] text-muted-foreground font-semibold mt-0.5">
                      Written Warranty
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COMPREHENSIVE SCOPE OF WORK & CAPABILITIES */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-muted/20 border-b border-border/30">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Full Spectrum Capabilities
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight">
              {data.scopeTitle}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {data.scopeSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.scopeItems.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-card/80 dark:bg-card/50 border border-border/40 hover:border-primary/30 transition-all space-y-3 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.category}</span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-foreground leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Turnkey Included</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CURATED MATERIAL & FINISH STANDARDS */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 border-b border-border/30">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              The Material Palette
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight">
              {data.materialsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {data.materialsSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.materials.map((mat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-card/60 dark:bg-card/40 border border-border/40 hover:border-primary/30 transition-all space-y-2.5 shadow-sm"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  {mat.grade}
                </span>
                <h4 className="font-display text-sm font-bold text-foreground leading-snug">
                  {mat.name}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {mat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PROVEN 4-PHASE EXECUTION ROADMAP */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-muted/20 border-b border-border/30">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Proven Methodology
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight">
              From Concept To Handover. <br className="hidden sm:inline" />
              <span className="gradient-text-gold">Zero Guesswork.</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Every project follows our systematic 4-phase delivery protocol with guaranteed milestone accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.phases.map((phase) => (
              <div 
                key={phase.number}
                className="p-6 rounded-2xl bg-card/80 dark:bg-card/50 border border-border/40 hover:border-primary/30 transition-all space-y-4 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-border/30">
                    <span className="font-mono text-2xl font-black text-primary/70">
                      {phase.number}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                      <Clock className="w-3 h-3 text-primary" />
                      {phase.timeline}
                    </span>
                  </div>

                  <h4 className="font-display text-base font-bold text-foreground">
                    {phase.title}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {phase.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/20 space-y-1.5">
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-primary">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1 text-[11px] text-muted-foreground">
                    {phase.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-primary shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PROJECT SCOPE & SPECIFICATION TIERS */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 border-b border-border/30">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Tailored Solutions
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight">
              Project Scope & Specification Tiers
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Every home has unique architectural requirements. We provide 100% guaranteed fixed-price proposals tailored to your exact scope, structural requirements, and finish selections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.tiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between relative ${
                  tier.badge === "Most Requested" || tier.badge === "Most Popular"
                    ? "bg-card/90 dark:bg-card/60 border-primary/50 shadow-xl ring-1 ring-primary/40"
                    : "bg-card/50 border-border/40 shadow-sm"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[10.5px] font-bold uppercase tracking-wider shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {tier.name}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>{tier.scope}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {tier.desc}
                  </p>

                  <div className="pt-4 border-t border-border/25 space-y-2">
                    <p className="text-[10.5px] font-bold uppercase tracking-wider text-primary">
                      What's Included:
                    </p>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <Button asChild className="w-full rounded-full text-xs font-bold h-11 bg-primary text-primary-foreground btn-glow">
                    <Link to="/contact">
                      Request Proposal For This Scope
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FEATURED CASE STUDY SPOTLIGHT */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 bg-muted/20 border-b border-border/30">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-4xl mx-auto rounded-3xl bg-card/90 dark:bg-card/60 border border-primary/30 p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/30">
                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                  <MapPin className="w-4 h-4" />
                  <span>{data.caseStudy.neighborhood}, {data.caseStudy.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Completed in {data.caseStudy.timeline}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  "{data.caseStudy.headline}"
                </h3>
                <p className="text-xs sm:text-sm md:text-base italic text-muted-foreground leading-relaxed">
                  "{data.caseStudy.quote}"
                </p>
                <p className="text-xs font-bold text-foreground">
                  — {data.caseStudy.author}
                </p>
              </div>

              {/* Case study stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border/25">
                {data.caseStudy.stats.map((st, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-background/60 border border-border/40 text-center">
                    <div className="font-display text-base sm:text-lg font-bold gradient-text-gold">
                      {st.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground font-semibold mt-0.5">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. TRADE-SPECIFIC FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 border-b border-border/30">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Got Questions?
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Clear answers regarding timelines, living arrangements, permits, and warranty coverage for this service.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {data.faqs.map((faq, idx) => {
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
      {/* 9. EXPLORE SIBLING DISCIPLINES */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-20 bg-muted/20 border-b border-border/30">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Explore More
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                Other Renovation Disciplines
              </h3>
            </div>
            <Button asChild variant="outline" className="rounded-full text-xs font-bold h-10 px-5 border-border/60">
              <Link to="/services">
                View All Services <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {siblingServices.slice(0, 4).map((sibling) => (
              <Link
                key={sibling.slug}
                to={`/services/${sibling.slug}` as any}
                className="group p-4 rounded-2xl bg-card/60 dark:bg-card/40 border border-border/40 hover:border-primary/40 transition-all space-y-2 block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  {sibling.categoryLabel}
                </span>
                <p className="font-display text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {sibling.title}
                </p>
                <span className="text-[11px] font-semibold text-primary inline-flex items-center gap-1 group-hover:underline pt-1">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FINAL CONVERSION CTA BANNER */}
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
