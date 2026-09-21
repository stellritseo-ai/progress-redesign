
import { Link } from "@tanstack/react-router";
import { 
  ArrowRight,
  CalendarCheck,
  Camera, 
  CheckCircle2, 
  FileCheck, 
  Hammer, 
  Lock,
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Process() {
  const steps = [
    {
      step: "01",
      title: "In-Home Scan & Consultation",
      tag: "Phase 1: Discovery",
      icon: Camera,
      desc: "We perform an in-depth on-site walkthrough, listening to your lifestyle goals and capturing high-precision laser measurements of every architectural element.",
      deliverable: "Spatial laser assessment & preliminary scope overview",
    },
    {
      step: "02",
      title: "Architectural 3D & Fixed Quote",
      tag: "Phase 2: Blueprint",
      icon: FileCheck,
      desc: "Our design team creates 3D photorealistic renderings and curates material finishes, providing a line-by-line fixed-price proposal with zero ambiguity.",
      deliverable: "Complete 3D visual walkthrough & binding cost agreement",
    },
    {
      step: "03",
      title: "Master Craftsmanship Execution",
      tag: "Phase 3: Build",
      icon: Hammer,
      desc: "Experienced tradesmen execute the build under strict clean-site protocols (HEPA air scrubbers and floor shielding), with daily digital progress updates sent to your phone.",
      deliverable: "Dedicated project superintendent & daily milestone tracking",
    },
    {
      step: "04",
      title: "White-Glove Handover & Warranty",
      tag: "Phase 4: Perfection",
      icon: ShieldCheck,
      desc: "A meticulous 150-point quality audit, comprehensive post-construction cleaning, and in-person walkthrough followed by activation of your 5-year craftsmanship warranty.",
      deliverable: "Move-in ready space & 5-year written warranty certificate",
    },
  ];

  return (
    <section 
      id="process" 
      className="bg-background py-[60px] border-b border-border/30 relative overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Decorative gradient lines and ambient light */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Proven Methodology
          </span>
          <h2 className="mt-3.5 font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-foreground leading-[1.14] tracking-tight">
            From Initial Vision to<br />
            <span className="gradient-text-gold">Flawless Final Handover.</span>
          </h2>
          <p className="mt-3.5 text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
            We eliminated contractor friction through a structured 4-phase delivery system engineered for total price certainty, punctuality, and museum-grade execution.
          </p>
        </div>

        {/* Steps Grid with Architectural Progression Beam */}
        <div className="relative">
          {/* Connecting Architectural Progression Beam (Desktop) */}
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/15 via-primary/45 to-primary/15 pointer-events-none z-0" />

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="group relative p-5 sm:p-7 rounded-2xl sm:rounded-[26px] bg-card/90 dark:bg-card/60 border border-border/40 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_45px_-12px_rgba(163,126,58,0.22)] dark:hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] flex flex-col justify-between before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 overflow-hidden"
                >
                  {/* Step Header: Numeric Badge & Phase Pill */}
                  <div>
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <div className="relative flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/35 text-primary font-mono font-black text-base shadow-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(163,126,58,0.45)] transition-all duration-300">
                        {s.step}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.14em] text-primary bg-primary/10 border border-primary/25 px-2.5 sm:px-3 py-1 rounded-full">
                        {s.tag}
                      </span>
                    </div>

                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mb-3.5 sm:mb-4 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>

                    <h3 className="font-display text-[16px] sm:text-[18px] font-bold text-foreground group-hover:text-primary transition-colors leading-snug sm:min-h-[46px] flex items-center">
                      {s.title}
                    </h3>

                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed sm:min-h-[60px]">
                      {s.desc}
                    </p>
                  </div>

                  {/* Milestone Deliverable Box */}
                  <div className="mt-5 sm:mt-6 pt-4 border-t border-border/25">
                    <div className="p-3 rounded-xl bg-primary/[0.04] dark:bg-primary/[0.08] border border-primary/20 flex flex-col gap-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" /> Phase Deliverable
                      </span>
                      <p className="text-[11px] sm:text-[11.5px] font-semibold text-foreground/90 leading-tight">
                        {s.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ultra-Sleek Architectural Assurance Bar */}
        <div className="mt-10 sm:mt-12 relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-card/90 dark:bg-card/70 border border-primary/30 backdrop-blur-xl shadow-[0_12px_35px_-10px_rgba(45,35,25,0.08)] dark:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7)] flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 w-full lg:w-auto flex-1">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <CalendarCheck className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-foreground">Guaranteed Timeline</span>
                <span className="block text-[11px] text-muted-foreground">Contractual completion dates</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <Lock className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-foreground">Fixed Price Lock</span>
                <span className="block text-[11px] text-muted-foreground">Zero unexpected change orders</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-foreground">5-Year Warranty</span>
                <span className="block text-[11px] text-muted-foreground">Written craftsmanship coverage</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <Button asChild className="bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-11 px-7 rounded-full font-bold text-xs w-full sm:w-auto justify-center">
              <Link to="/contact">
                Begin Phase 1 Discovery <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
