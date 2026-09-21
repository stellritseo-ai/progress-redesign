import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/heroprogress.mp4";

export function EmergencyCTA() {
  return (
    <section 
      id="emergency"
      className="relative bg-black py-[60px] text-white overflow-hidden border-b border-border/30"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Background Video with Cinematic Dark Gradient Tint */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center scale-105 opacity-80"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/heroprogress.mp4" type="video/mp4" />
        </video>
        {/* Cinematic multi-stop gradient overlays to ensure text is 100% readable and pristine */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>

      {/* Ambient background lighting blooms */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[130px] pointer-events-none z-[1]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        
        {/* Luxury Framed Glass Card */}
        <div className="relative rounded-2xl sm:rounded-[36px] p-5 xs:p-6 sm:p-10 lg:p-14 bg-black/40 dark:bg-black/55 border border-primary/35 backdrop-blur-xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.9)] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/80 before:to-transparent">
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            
            {/* Left Content Area */}
            <div className="max-w-2xl space-y-4">
              
              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/60 backdrop-blur-md px-3.5 sm:px-4 py-1.5 text-[10.5px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-[0.18em] text-primary shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="truncate">Direct Superintendent Dispatch Active</span>
              </div>

              {/* Heading */}
              <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.15] tracking-tight">
                Urgent Structural Need or<br />
                <span className="gradient-text-gold">Ready to Schedule an On-Site Audit?</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Connect directly with our master builders and structural engineering team. No call centers, no gatekeepers—speak to a project director immediately or book a priority 3D laser scan.
              </p>

              {/* Guarantees Row */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-2 text-xs font-semibold text-zinc-200">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-primary shrink-0" />
                  15-Minute Direct Callback
                </span>
                <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-primary/50" />
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                  Master Quality Contractors
                </span>
                <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-primary/50" />
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                  Complimentary 3D Consultation
                </span>
              </div>

            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center gap-4 shrink-0">
              
              <Button 
                asChild 
                size="lg" 
                className="h-14 px-8 rounded-full bg-primary text-primary-foreground btn-glow hover:bg-primary/90 font-bold text-sm shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all justify-center cursor-pointer"
              >
                <a href="tel:8164623599" className="flex items-center justify-center gap-2.5">
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>Call (816) 462-3599</span>
                </a>
              </Button>

              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 rounded-full bg-black/40 hover:bg-black/60 border-white/20 hover:border-primary/60 text-white backdrop-blur-md font-bold text-sm justify-center shadow-lg transition-all cursor-pointer"
              >
                <Link to="/estimate" className="flex items-center justify-center gap-2">
                  <span>Schedule Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
