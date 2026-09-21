import { Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Award, 
  BadgeCheck, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  FileText, 
  Home, 
  Layers, 
  MapPin, 
  MessageSquare, 
  Phone, 
  Quote, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  ThumbsUp, 
  UserCheck, 
  Users 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReviewsDedicated() {
  const stats = [
    {
      metric: "5.0",
      label: "Star Average Rating",
      sub: "Across Google & Houzz",
      icon: Star,
      highlight: true,
    },
    {
      metric: "11+",
      label: "Years of Master Experience",
      sub: "Established 2014",
      icon: Award,
      highlight: false,
    },
    {
      metric: "1,200+",
      label: "Completed Transformations",
      sub: "Dallas Metro & Beyond",
      icon: Home,
      highlight: false,
    },
    {
      metric: "99.4%",
      label: "Verified Satisfaction",
      sub: "Client Audit Score",
      icon: BadgeCheck,
      highlight: false,
    },
  ];

  const reviews = [
    {
      id: 1,
      quoteHeadline: "They transformed our dark 1980s kitchen into a light-filled, modern masterpiece.",
      project: "Kitchen Remodeling & Custom Cabinetry",
      location: "Plano, TX",
      content: "Progress Interior Designs completely exceeded our expectations. From the initial 3D rendering to the final walkthrough, the process was seamless. They provided a fixed-price quote and stuck to it—no hidden fees, no surprises. The dedicated project manager was on-site daily, ensuring the crew was respectful and the site was clean. We finally have the heart of our home back.",
      author: "Monica & Travis V.",
      role: "Verified Client",
      tag: "Signature Kitchen",
    },
    {
      id: 2,
      quoteHeadline: "From our first meeting, their transparency stood out.",
      project: "Whole Home Renovation",
      location: "Frisco, TX",
      content: "We interviewed several contractors before choosing Progress. The difference was night and day. They didn't just hand us a vague estimate; they provided a line-item proposal and a detailed 3D architectural plan. The crew arrived on time every day, and the craftsmanship is impeccable. Our home feels brand new, and the 5-year warranty gives us total peace of mind.",
      author: "Dr. Arthur Sterling",
      role: "Verified Client",
      tag: "Full Renovation",
    },
    {
      id: 3,
      quoteHeadline: "They handled the structural repairs and the cosmetic upgrades with equal expertise.",
      project: "Foundation Repair & Structural Engineering",
      location: "McKinney, TX",
      content: "We had significant foundation issues that required expert structural engineering. Progress Interior Designs handled the entire permitting process and coordinated the repairs flawlessly. They didn't just patch the problem; they fixed it and then made our home beautiful again. Their team was professional, communicative, and incredibly skilled.",
      author: "Clara & David Thorne",
      role: "Verified Client",
      tag: "Structural Engineering",
    },
    {
      id: 4,
      quoteHeadline: "A stress-free, white-glove experience from start to finish.",
      project: "Luxury Bathroom & Spa Transformation",
      location: "Allen, TX",
      content: "I was dreading the idea of a bathroom remodel, but Progress made it effortless. The design team helped me select materials that fit my budget, and the construction team executed the plan perfectly. The daily updates and online portal kept me informed every step of the way. I highly recommend them for anyone seeking a true luxury experience.",
      author: "Genevieve & Robert Caldwell",
      role: "Verified Client",
      tag: "Master Suite Spa",
    },
    {
      id: 5,
      quoteHeadline: "The most professional contractors we have ever hired.",
      project: "Basement Finishing & Entertainment Suite",
      location: "Richardson, TX",
      content: "We hired Progress to finish our basement and create a home theater. The attention to detail was extraordinary—from the custom acoustic paneling to the hidden wiring. They treated our home with respect, laying down protective floor coverings and cleaning up every single day. The final result is a space we use every day.",
      author: "Siddharth & Ananya Patel",
      role: "Verified Client",
      tag: "Entertainment Suite",
    },
  ];

  const comparisonRows = [
    {
      appreciate: "Transparent Pricing",
      deliver: "We provide fixed-price, line-item proposals. The price we quote is the price you pay.",
      icon: FileText,
    },
    {
      appreciate: "Dedicated Management",
      deliver: "A single Project Manager oversees your entire project from start to finish.",
      icon: UserCheck,
    },
    {
      appreciate: "Architectural Precision",
      deliver: "We use advanced 3D CAD software to show you the final result before we begin.",
      icon: Layers,
    },
    {
      appreciate: "On-Time Delivery",
      deliver: "We respect your schedule. Our crews arrive on time and work efficiently to minimize disruption.",
      icon: Clock,
    },
    {
      appreciate: "Clean Job Sites",
      deliver: "We maintain a clean, organized workspace daily to protect your home and air quality.",
      icon: Sparkles,
    },
    {
      appreciate: "5-Year Warranty",
      deliver: "We stand behind our craftsmanship with a written 5-year warranty on all labor.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 border-b border-border/30">
        {/* Ambient atmospheric lighting */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-primary/[0.09] rounded-full blur-[160px]" />
        <div className="pointer-events-none absolute top-1/3 -right-24 w-[450px] h-[450px] bg-primary/[0.05] rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[300px] bg-amber-500/[0.03] rounded-full blur-[150px]" />

        {/* Background grid pattern */}
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
              <span>Client Reviews & Testimonials • 5.0 Star Rated</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold leading-[1.12] tracking-tight text-foreground text-[26px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Trust Earned On Every Project.{" "}
              <span className="block mt-1 sm:mt-1.5 gradient-text-gold">
                Validated By Homeowners.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-normal pt-1">
              We don't just build beautiful spaces; we build lasting relationships. Read firsthand accounts from discerning homeowners who trusted Progress Interior Designs with their most valuable investment.
            </p>

            {/* Trust rating ribbon */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-muted-foreground">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-foreground font-bold">5.0 Star Average</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">100% Authentic Homeowner Testimonials</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">Plano, Frisco, McKinney, Allen & Dallas</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR TRACK RECORD BY THE NUMBERS */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-border/25 bg-secondary/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Performance</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              Our Track Record by the Numbers
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              We let our results speak for themselves. Here is a snapshot of our commitment to excellence:
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    s.highlight 
                      ? "bg-card/90 dark:bg-card/70 border-primary/40 shadow-lg shadow-primary/10 hover:border-primary" 
                      : "bg-card/80 dark:bg-card/50 border-primary/20 hover:border-primary/40 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10.5px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      Verified
                    </span>
                  </div>

                  <div>
                    <strong className="block font-display text-3xl sm:text-4xl font-extrabold gradient-text-gold">
                      {s.metric}
                    </strong>
                    <h3 className="font-display text-sm sm:text-base font-bold text-foreground mt-1">
                      {s.label}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {s.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-11 sm:h-12 px-7 rounded-full font-bold text-xs sm:text-[13px]"
            >
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <span>READ OUR VERIFIED REVIEWS ON GOOGLE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED CLIENT EXPERIENCES */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Real Homeowner Stories</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              Featured Client Experiences
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Read how our transparent process and master craftsmanship brought peace of mind to homeowners across North Texas.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card/85 dark:bg-card/55 hover:bg-card border border-primary/25 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Top Row: Stars + Project Tag + Location */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-border/25">
                  <div className="flex items-center gap-1.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-foreground ml-1">5.0</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-md border border-primary/20">
                      {r.project}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      {r.location}
                    </span>
                  </div>
                </div>

                {/* Quote Headline */}
                <div className="relative mb-3">
                  <Quote className="absolute -top-1 -left-2 w-7 h-7 text-primary/10 pointer-events-none" />
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {r.quoteHeadline}
                  </h3>
                </div>

                {/* Body Story */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                  "{r.content}"
                </p>

                {/* Author Signature */}
                <div className="mt-5 pt-3 border-t border-border/25 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <strong className="text-foreground font-bold">{r.author}</strong>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-primary font-semibold">{r.role}</span>
                  </div>

                  <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Verified Project Handover
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY HOMEOWNERS CHOOSE PROGRESS INTERIOR DESIGNS */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-secondary/30 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Core Distinction</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              Why Homeowners Choose <br />
              <span className="gradient-text-gold">Progress Interior Designs</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Our reviews consistently highlight the core values that set us apart from typical contractors:
            </p>
          </div>

          {/* Desktop Matrix Table / Mobile Cards */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-card/90 dark:bg-card/60 border border-primary/30 shadow-xl overflow-hidden backdrop-blur-md">
            
            {/* Table Header (Hidden on small screens) */}
            <div className="hidden sm:grid grid-cols-12 bg-primary/10 border-b border-primary/25 p-4 text-xs font-bold uppercase tracking-wider text-primary">
              <div className="col-span-4">What Clients Appreciate</div>
              <div className="col-span-8">How We Deliver</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-border/30">
              {comparisonRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div 
                    key={row.appreciate} 
                    className="p-5 sm:p-6 grid sm:grid-cols-12 gap-3 sm:gap-6 items-center hover:bg-muted/40 transition-colors"
                  >
                    <div className="sm:col-span-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-display text-sm sm:text-base font-bold text-foreground">
                        {row.appreciate}
                      </span>
                    </div>

                    <div className="sm:col-span-8">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {row.deliver}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SHARE YOUR EXPERIENCE */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-20 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto p-7 sm:p-10 rounded-3xl bg-card/85 dark:bg-card/50 border border-primary/30 shadow-lg text-center space-y-5">
            
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mx-auto">
              <ThumbsUp className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-[10.5px] font-bold uppercase tracking-widest text-primary">
                Your Voice Matters
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                Share Your Experience
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Have we recently completed a project in your home? We would be honored to hear your feedback. Your reviews help us continue to improve and help other homeowners make informed decisions.
              </p>
            </div>

            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-11 sm:h-12 px-8 rounded-full font-bold text-xs sm:text-[13px] uppercase tracking-wider"
              >
                <a 
                  href="https://www.google.com/maps" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <span>LEAVE A REVIEW</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. READY TO START YOUR OWN TRANSFORMATION? (FINAL CTA) */}
      {/* ========================================================================= */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-background via-secondary/40 to-background">
        {/* Glow blooms */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.12] rounded-full blur-[160px]" />

        <div className="relative mx-auto max-w-[1280px] px-4 xs:px-5 sm:px-8 lg:px-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Satisfied Clients</span>
          </div>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-[44px] font-extrabold text-foreground tracking-tight leading-[1.14]">
            Ready to Start Your Own <br className="hidden sm:inline" />
            <span className="gradient-text-gold">Transformation?</span>
          </h2>

          <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Join the hundreds of satisfied homeowners who have trusted Progress Interior Designs with their architectural renovations.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-11 sm:h-12 px-7 rounded-full font-bold text-xs sm:text-[13px]">
              <Link to="/contact">SCHEDULE YOUR FREE CONSULTATION →</Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-7 rounded-full border-border/70 hover:bg-muted text-foreground font-bold text-xs sm:text-[13px]">
              <a href="tel:8164623599" className="inline-flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>CALL: (816) 462-3359</span>
              </a>
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
