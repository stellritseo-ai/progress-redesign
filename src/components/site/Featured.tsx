import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";

export function Featured() {
  const [position, setPosition] = useState(50);
  
  return (
    <section className="bg-background border-b border-border/30 relative overflow-hidden" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2 items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Before & After
            </span>
            <h2 className="mt-4 font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              From Dated Interior to<br />
              <span className="gradient-text-gold">Architectural Sanctuary.</span>
            </h2>
          </div>
          
          <div className="lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Westlake Hills Residence • Living Space Infill
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Drag the interactive slider below to reveal how our structural carpentry and architectural finish work elevated this dark, compartmentalized space into a luminous great room.
            </p>
          </div>
        </div>
        
        {/* Comparison Interactive Slider Container */}
        <div className="relative h-[60vw] max-h-[640px] min-h-[380px] overflow-hidden rounded-3xl select-none group border border-border/40 shadow-2xl">
          {/* Before Image (Background) */}
          <img 
            src={images.beforeLiving} 
            alt="Living space prior to architectural renovation" 
            className="absolute inset-0 size-full object-cover filter grayscale-[25%]" 
            loading="lazy" 
          />
          
          {/* After Image (Clipped Overlay) */}
          <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
            <img 
              src={images.afterLiving} 
              alt="Completed luxury modern living room renovation" 
              className="h-full max-w-none object-cover" 
              style={{ width: "calc(100vw - 40px)", maxWidth: "1400px" }} 
              loading="lazy" 
            />
          </div>
          
          {/* Slider Handle Divider */}
          <div className="absolute inset-y-0 w-[3px] bg-primary shadow-[0_0_20px_rgba(194,168,120,0.9)]" style={{ left: `${position}%` }}>
            <div className="absolute left-1/2 top-1/2 flex h-14 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-background/90 backdrop-blur-md border border-primary text-primary shadow-glow transition-transform duration-300 group-hover:scale-110">
              <span className="font-mono font-bold text-xs tracking-tighter">◀ ▶</span>
            </div>
          </div>
          
          {/* Native range input for accessible drag */}
          <input 
            aria-label="Compare before and after renovation" 
            type="range" 
            min="5" 
            max="95" 
            value={position} 
            onChange={(e) => setPosition(Number(e.target.value))} 
            className="absolute inset-0 size-full cursor-ew-resize opacity-0 z-20" 
          />
          
          {/* Floating Badges */}
          <span className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary z-10 pointer-events-none border border-primary/30 shadow-lg">
            ✓ After Renovation
          </span>
          <span className="absolute bottom-6 right-6 glass-card px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground z-10 pointer-events-none border border-border/40 shadow-lg">
            Before
          </span>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex items-center justify-end">
          <Button asChild variant="outline" className="border-border/50 hover:bg-muted rounded-full px-6 h-11 text-xs font-bold">
            <a href="#portfolio">
              Explore Full Portfolio Archive <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
