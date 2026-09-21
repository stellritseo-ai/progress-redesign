import { Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Award, 
  BadgeCheck, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileText, 
  HardHat, 
  Layers, 
  MapPin, 
  Phone, 
  Quote, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Wrench,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import heroVideo from "@/assets/heroprogress.mp4";

export function AboutDedicated() {
  const differences = [
    {
      step: "01",
      icon: Users,
      title: "Dedicated Project Management",
      desc: "You will never wonder who is in charge. Every project is assigned a dedicated Project Manager who oversees the entire lifecycle. From the initial 3D rendering to the final walkthrough, your manager ensures that timelines are met, budgets are respected, and quality is never compromised.",
      highlight: "Single Point of Contact",
    },
    {
      step: "02",
      icon: FileText,
      title: "Fixed-Price, Transparent Bidding",
      desc: "We eliminate the anxiety of \"surprise costs.\" Our detailed, line-item proposals guarantee a fixed price. You will never receive a surprise bill for work you didn't authorize. We believe in honest pricing from day one.",
      highlight: "Zero Surprise Invoices",
    },
    {
      step: "03",
      icon: Layers,
      title: "Architectural 3D & Fixed Quote",
      desc: "Before we swing a hammer, we show you the future. Utilizing advanced 3D CAD software, we provide a full visual walkthrough of your proposed space. This allows you to make design decisions with confidence before construction begins.",
      highlight: "Visual Precision First",
    },
    {
      step: "04",
      icon: HardHat,
      title: "One Dedicated Team, Every Trade",
      desc: "We do not sub-contract your project to the lowest bidder. We utilize our own vetted, in-house crews for demolition, framing, electrical, plumbing, and finishing. This ensures consistent quality and seamless communication across all trades.",
      highlight: "Vetted In-House Master Trades",
    },
  ];

  const methodology = [
    {
      phase: "Phase 1",
      number: "01",
      title: "Discovery & Consultation",
      desc: "We begin with an in-depth in-home consultation. We listen to your needs, assess the structural feasibility of your vision, and discuss your budget.",
      details: ["In-home structural evaluation", "Budget & vision alignment", "Feasibility analysis"],
    },
    {
      phase: "Phase 2",
      number: "02",
      title: "Architectural 3D & Fixed Quote",
      desc: "Our design team creates a 3D architectural model. We refine this with you until it’s perfect, then lock in a fixed-price proposal.",
      details: ["Photorealistic 3D rendering", "Material selection guide", "Guaranteed fixed proposal"],
    },
    {
      phase: "Phase 3",
      number: "03",
      title: "Master Craftsmanship",
      desc: "Our dedicated construction team executes the plan with precision. We handle all permits, inspections, and site protection, ensuring a clean and safe environment.",
      details: ["Permits & inspections handled", "Commercial HEPA dust control", "Dedicated site superintendent"],
    },
    {
      phase: "Phase 4",
      number: "04",
      title: "White-Glove Handover",
      desc: "We don’t just finish; we perfect. We conduct a rigorous quality control inspection, clean the site thoroughly, and provide a 5-year written craftsmanship warranty.",
      details: ["Exacting punch list review", "Deep post-construction cleaning", "5-year warranty certificate"],
    },
  ];

  const commitments = [
    {
      icon: ShieldCheck,
      title: "5-Year Craftsmanship Warranty",
      desc: "We stand behind our work long after the paint dries. Every structural, mechanical, and finish detail is protected under our comprehensive written guarantee.",
      badge: "Written Guarantee",
    },
    {
      icon: BadgeCheck,
      title: "Licensed & Insured",
      desc: "Full compliance with all state and local regulations for your complete protection, backed by multi-million dollar liability and worker coverage.",
      badge: "100% Verified",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      desc: "We respect your time. Our scheduling is structured to minimize disruption to your daily life, with clear weekly milestones and dependable completion targets.",
      badge: "Disciplined Schedule",
    },
    {
      icon: Sparkles,
      title: "Clean Sites",
      desc: "We maintain a clean, organized job site daily, protecting your furniture and air quality with sealed dust barriers and active HEPA filtration.",
      badge: "HEPA Dust Defense",
    },
  ];

  const serviceAreas = [
    { name: "Dallas", description: "Highland Park, Preston Hollow, Lakewood & Greater Dallas" },
    { name: "Plano", description: "West Plano, Willow Bend, Kings Ridge & Gleneagles" },
    { name: "Frisco", description: "Stonebriar, Chapel Creek, Newman Village & Starwood" },
    { name: "McKinney", description: "Adriatica, Stonebridge Ranch & Craig Ranch" },
    { name: "Allen", description: "Twin Creeks, StarCreek & Montgomery Farm" },
    { name: "Richardson", description: "Canyon Creek, Prairie Creek & Reserve at Spring Creek" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER SECTION WITH BACKGROUND VIDEO */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 border-b border-border/30">
        {/* Background Video */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto" 
            className="h-full w-full object-cover object-center opacity-40 dark:opacity-30 scale-105 transition-transform duration-1000"
          >
            <source src={heroVideo} type="video/mp4" />
            <source src="/heroprogress.mp4" type="video/mp4" />
          </video>
          {/* Dual luxury gradient overlays for crisp readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background dark:from-background/95 dark:via-background/85 dark:to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90 dark:from-background/95 dark:via-transparent dark:to-background/95" />
        </div>

        {/* Ambient atmospheric lighting */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-primary/[0.10] rounded-full blur-[160px] z-0" />
        <div className="pointer-events-none absolute top-1/3 -right-24 w-[450px] h-[450px] bg-primary/[0.06] rounded-full blur-[140px] z-0" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[300px] bg-amber-500/[0.04] rounded-full blur-[150px] z-0" />

        {/* Subtle background grid pattern */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05] z-0" 
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }} 
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-md animate-in fade-in duration-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span>About Progress Interior Designs • Established 2014</span>
            </div>

            {/* Headline - Tuned to match landing page scale */}
            <h1 className="font-display font-extrabold leading-[1.12] tracking-tight text-foreground text-[26px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Architectural Elegance.{" "}
              <span className="block mt-1 sm:mt-1.5 gradient-text-gold">
                Uncompromising Precision.
              </span>
              <span className="block mt-1 sm:mt-1.5 text-foreground">
                Built on Trust.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-normal pt-1">
              For over a decade, Progress Interior Designs has been the premier choice for discerning homeowners seeking to transform their living spaces through expert craftsmanship, transparent pricing, and architectural integrity.
            </p>

            {/* Trust highlights ribbon */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-semibold text-muted-foreground">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <Award className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">5-Year Written Warranty</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">100% Fixed-Price Bids</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">Dallas, Plano, Frisco & Surrounding</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR STORY SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left: Narrative Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Heritage & Philosophy</span>
              </div>

              <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-[1.16]">
                Our Story: <br />
                <span className="gradient-text-gold">Craftsmanship You Can See.</span><br />
                Integrity You Can Trust.
              </h2>

              <div className="space-y-4 text-muted-foreground text-xs sm:text-sm md:text-[15px] leading-relaxed">
                <p>
                  Founded in 2014, Progress Interior Designs was born from a simple observation: the home renovation industry was broken. Homeowners were forced to choose between high-end design and reliable execution. They faced hidden fees, missed deadlines, and a lack of communication.
                </p>

                <div className="py-1">
                  <p className="font-display text-lg sm:text-xl font-bold text-foreground italic border-l-4 border-primary pl-4 py-1">
                    We decided to change that.
                  </p>
                </div>

                <p>
                  We built Progress Interior Designs on a foundation of radical transparency and engineering-grade precision. We believe that true luxury isn’t just found in exotic materials or fancy fixtures; it is found in the details you don’t see—the structural integrity, the seamless project management, and the peace of mind that comes from knowing your home is in expert hands.
                </p>

                <p>
                  Today, we are proud to be a full-service, licensed, and insured general contracting firm specializing in comprehensive home transformations, from foundation repairs to final architectural finishes.
                </p>
              </div>

              {/* Founder quote box */}
              <div className="relative p-5 sm:p-6 rounded-2xl bg-card/75 border border-primary/25 shadow-md backdrop-blur-md">
                <Quote className="absolute top-4 right-5 w-7 h-7 text-primary/15" />
                <p className="text-xs sm:text-sm italic text-foreground leading-relaxed pr-6">
                  "True luxury isn’t just found in exotic materials or fancy fixtures; it is found in the details you don’t see—the structural integrity, the seamless project management, and the peace of mind that comes from knowing your home is in expert hands."
                </p>
                <div className="mt-3.5 pt-3 border-t border-border/30 flex items-center justify-between">
                  <div>
                    <strong className="block text-xs font-bold text-foreground">Progress Interior Designs Leadership</strong>
                    <span className="text-[11px] text-primary font-semibold">Master Guild Standard • Since 2014</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                    Est. 2014
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Button asChild size="lg" className="bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-11 px-6 rounded-full font-bold text-xs sm:text-[13px]">
                  <Link to="/contact">Schedule In-Home Consultation →</Link>
                </Button>
                <a 
                  href="tel:8164623599" 
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-foreground hover:text-primary transition-colors py-2.5 px-4 rounded-full border border-border/60 hover:border-primary/40 bg-card/60"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>Direct: (816) 462-3359</span>
                </a>
              </div>
            </div>

            {/* Right: Architectural Imagery Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              {/* Backlight glow */}
              <div className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-primary/15 via-transparent to-primary/10 rounded-3xl blur-2xl" />

              {/* Main Photo Frame */}
              <div className="relative rounded-[26px] p-2 bg-gradient-to-b from-primary/30 via-border/30 to-primary/20 shadow-xl">
                <div className="relative rounded-[20px] overflow-hidden">
                  <img
                    src={images.craft}
                    alt="Master craftsman and architect inspecting precision architectural detail"
                    className="w-full h-[400px] sm:h-[480px] object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

                  {/* Image overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-xl bg-card/90 dark:bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Master Guild Certification</span>
                        <h3 className="font-display text-xs sm:text-sm font-bold text-foreground">Museum-Grade Architectural Finishes</h3>
                      </div>
                      <span className="text-xs font-mono font-bold text-primary bg-primary/15 px-2.5 py-1 rounded-md border border-primary/25">
                        11+ Yrs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Trust Badge */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 p-3.5 rounded-2xl glass-card border border-primary/30 shadow-xl max-w-[190px] hidden sm:block animate-float">
                <div className="flex items-center gap-1.5 text-primary text-[10px] font-bold uppercase tracking-wider mb-1">
                  <Award className="w-3.5 h-3.5" /> Established 2014
                </div>
                <strong className="block font-display text-xl sm:text-2xl font-extrabold gradient-text-gold">
                  1,200+
                </strong>
                <p className="text-[10.5px] font-semibold text-foreground leading-tight mt-0.5">
                  Spaces Engineered to Endure
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY WE ARE DIFFERENT: THE PROGRESS STANDARD */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-secondary/30 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Progress Standard</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              Why We Are Different
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              We don’t just remodel homes; we engineer them to endure. Our process is designed to remove the stress from renovation.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:gap-7">
            {differences.map((diff) => {
              const Icon = diff.icon;
              return (
                <div 
                  key={diff.title}
                  className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card/80 dark:bg-card/50 hover:bg-card dark:hover:bg-card/80 border border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-[0_12px_35px_-8px_rgba(163,126,58,0.22)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-md flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[11px] font-extrabold text-primary/70 bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                        Pillar {diff.step}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {diff.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-border/30 flex items-center gap-2 text-[11px] font-bold text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{diff.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR PROVEN METHODOLOGY: FROM VISION TO REALITY */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineered For Total Project Clarity</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              Our Proven Methodology: <br />
              <span className="gradient-text-gold">From Vision to Reality</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Our 4-phase system is engineered for total project clarity:
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
            {methodology.map((m) => (
              <div 
                key={m.phase}
                className="group relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-card/75 hover:bg-card border border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">
                      {m.phase}
                    </span>
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-primary/30 group-hover:text-primary transition-colors">
                      {m.number}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-border/30 space-y-1.5">
                  {m.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-[10.5px] sm:text-[11px] text-muted-foreground">
                      <Check className="w-3 h-3 text-primary shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR COMMITMENT TO YOU */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-secondary/35 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Unwavering Principles</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              Our Commitment to You
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              When you choose Progress Interior Designs, you aren't just hiring a contractor; you are partnering with a team that treats your home like our own.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:gap-7">
            {commitments.map((c) => {
              const Icon = c.icon;
              return (
                <div 
                  key={c.title}
                  className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-card/85 dark:bg-card/50 border border-primary/25 shadow-md flex flex-col justify-between space-y-3.5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10.5px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 shrink-0">
                      {c.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1.5">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SERVICE AREAS SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <MapPin className="w-3.5 h-3.5" />
              <span>Where We Build</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              Service Areas
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              We proudly serve homeowners across Dallas, Plano, Frisco, McKinney, Allen, and Richardson.
            </p>
          </div>

          <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <div 
                key={area.name}
                className="p-5 sm:p-5.5 rounded-2xl bg-card/75 border border-primary/20 hover:border-primary/50 hover:bg-card shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-3.5 group"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-3.5 sm:p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center max-w-2xl mx-auto">
            <p className="text-xs text-foreground font-medium">
              Don't see your specific neighborhood? Contact us at{" "}
              <a href="tel:8164623599" className="font-bold text-primary hover:underline">
                (816) 462-3359
              </a>{" "}
              to verify project availability in your area.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HIGH CONVERSION CTA SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-background via-secondary/40 to-background">
        {/* Glow blooms */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.12] rounded-full blur-[160px]" />

        <div className="relative mx-auto max-w-[1280px] px-4 xs:px-5 sm:px-8 lg:px-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transform Your Sanctuary</span>
          </div>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-[44px] font-extrabold text-foreground tracking-tight leading-[1.14]">
            Let’s Build Something <br className="hidden sm:inline" />
            <span className="gradient-text-gold">Enduring Together</span>
          </h2>

          <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Whether you are dreaming of a modern kitchen remodel, a luxurious spa bathroom, a structural foundation repair, or a full home addition, Progress Interior Designs has the expertise to bring your vision to life.
          </p>

          <p className="font-display text-base sm:text-lg font-bold text-foreground">
            Ready to experience the Progress difference?
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-11 sm:h-12 px-7 rounded-full font-bold text-xs sm:text-[13px]">
              <Link to="/contact">Schedule Your Free Consultation Today →</Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-7 rounded-full border-border/70 hover:bg-muted text-foreground font-bold text-xs sm:text-[13px]">
              <Link to="/projects">View Our Portfolio</Link>
            </Button>

            <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-5 rounded-full text-foreground hover:text-primary font-bold text-xs sm:text-[13px] border border-border/40 hover:border-primary/40">
              <a href="tel:8164623599" className="inline-flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>Contact Us: (816) 462-3359</span>
              </a>
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
