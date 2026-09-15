import { ArrowRight, Award, Layers, ShieldCheck, Sparkles, UserCheck, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";

export function Welcome() {
  const points = [
    {
      icon: UserCheck,
      title: "Dedicated Project Manager",
      desc: "One single superintendent coordinating architects, master trades, and daily schedule milestones.",
    },
    {
      icon: Wind,
      title: "Active HEPA & Clean Site Protocol",
      desc: "Zipped magnetic airlocks and continuous commercial filtration to keep your home dust-free.",
    },
    {
      icon: Layers,
      title: "Photorealistic 3D Pre-Construction",
      desc: "Exacting 3D walkthroughs before a single hammer swings, eliminating surprises and change orders.",
    },
    {
      icon: ShieldCheck,
      title: "5-Year Written Craftsmanship Warranty",
      desc: "Comprehensive written guarantee backing all cabinetry, framing, electrical, and finish work.",
    },
  ];

  return (
    <section 
      id="about"
      className="relative mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10 overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <div className="grid gap-12 sm:gap-14 lg:gap-16 lg:grid-cols-[2fr_3fr] items-center">
        
        {/* Left: Layered Architectural Photography (40% width) */}
        <div className="relative animate-fade-up">
          {/* Ambient warm backlight */}
          <div className="pointer-events-none absolute -top-8 -left-8 w-72 h-72 bg-primary/10 rounded-full blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-10 -right-6 w-80 h-80 bg-primary/8 rounded-full blur-[130px]" />

          {/* Main Hero Photo Frame with Beveled Edge */}
          <div className="relative rounded-[28px] p-2 bg-gradient-to-b from-primary/30 via-border/20 to-primary/15 shadow-[0_20px_50px_-20px_rgba(45,35,25,0.15)] dark:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.7)]">
            <div className="relative rounded-[22px] overflow-hidden">
              <img 
                src={images.craft} 
                alt="Master craftsman and architect inspecting interior finish details" 
                className="h-[380px] sm:h-[490px] lg:h-[540px] w-full object-cover object-center transition-transform duration-700 hover:scale-105" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              {/* Bottom Inset Caption Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-background/90 dark:bg-card/90 backdrop-blur-md border border-primary/25 shadow-lg">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] sm:text-[11.5px] font-bold text-foreground leading-tight">Master Guild Standard</span>
                    <span className="block text-[9.5px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">Uncompromising Quality</span>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10.5px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                  <Sparkles className="w-3 h-3" /> 100% In-House
                </span>
              </div>
            </div>
          </div>

          {/* Floating Luxury Detail Badge (Bottom Right) */}
          <div className="absolute -bottom-4 right-1 xs:right-0 sm:-right-3 glass-card p-3 xs:p-3.5 sm:p-5 rounded-xl xs:rounded-2xl border border-primary/30 max-w-[175px] xs:max-w-[200px] sm:max-w-[240px] shadow-[0_15px_35px_-5px_rgba(45,35,25,0.12)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-float">
            <div className="flex items-center gap-1.5 text-primary text-[10px] font-extrabold uppercase tracking-[0.16em] mb-1">
              <Award className="w-3.5 h-3.5" /> Proven Track Record
            </div>
            <strong className="block font-display text-xl xs:text-2xl sm:text-3xl font-extrabold gradient-text-gold leading-none">
              1,200+
            </strong>
            <p className="text-[10.5px] xs:text-xs font-bold text-foreground mt-1 leading-snug">
              Bespoke Homes Handcrafted
            </p>
            <p className="text-[9.5px] xs:text-[10.5px] text-muted-foreground mt-1 leading-relaxed hidden xs:block">
              Zero compromises on structural integrity, craftsmanship, or finish longevity.
            </p>
          </div>
        </div>

        {/* Right: Narrative & Pillars of Excellence (60% width) */}
        <div className="space-y-6 animate-fade-up">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> The Progress Difference
          </div>

          {/* Headline */}
          <h2 className="font-display text-2xl xs:text-[28px] sm:text-4xl lg:text-[44px] font-extrabold text-foreground leading-[1.14] tracking-tight">
            Craftsmanship You Can See.<br />
            <span className="gradient-text-gold">Integrity You Can Trust.</span>
          </h2>

          {/* Narrative description */}
          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
            Since 2014, Progress Interior Designs has served as the premier choice for discerning homeowners seeking transformational home improvements. We believe true luxury lies not merely in exotic materials, but in flawless execution, white-glove dust control, and absolute pricing transparency.
          </p>

          {/* 4 Pillars of Excellence */}
          <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div 
                  key={p.title} 
                  className="group relative p-3.5 sm:p-4 rounded-2xl border border-primary/20 bg-card/85 hover:bg-card dark:bg-card/60 dark:hover:bg-card/85 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(45,35,25,0.05)] hover:shadow-[0_8px_25px_-5px_rgba(163,126,58,0.22)] hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300 shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors leading-tight">
                      {p.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2.5">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Dual CTAs matching hero style */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <Button asChild className="bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-11 px-7 rounded-full font-bold text-xs sm:text-[13px] tracking-normal justify-center w-full sm:w-auto">
              <a href="#why-choose-us">
                Read Our Story <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-11 px-6 rounded-full border-border/60 hover:bg-muted text-foreground font-bold text-xs sm:text-[13px] tracking-normal justify-center w-full sm:w-auto">
              <a href="#estimate">Schedule Consultation</a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
