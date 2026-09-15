import { useRef, useState } from "react";
import { 
  ArrowRight,
  Award, 
  Clock, 
  Eye, 
  FileText, 
  HardHat, 
  Pause,
  Phone, 
  Play,
  ShieldCheck, 
  Sparkles, 
  Star,
  UserCheck, 
  Volume2,
  VolumeX,
} from "lucide-react";
import heroVideo from "@/assets/heroprogress.mp4";

export function WhyChooseUs() {
  const features = [
    {
      icon: FileText,
      title: "Free Estimates & Transparent Pricing",
      desc: "We provide a free estimate before starting any work. Pricing is based on the specific job and scope of work.",
    },
    {
      icon: Sparkles,
      title: "Dust-Free HEPA Clean Protocol",
      desc: "Active HEPA negative-air scrubbers, zippered containment chambers, and heavy-duty floor rams protect your living air quality.",
    },
    {
      icon: ShieldCheck,
      title: "5-Year Craftsmanship Warranty",
      desc: "Our structural joinery, cabinetry alignment, tile adhesion, and finish work are protected by a comprehensive 5-year written warranty.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Project Superintendent",
      desc: "A single master builder oversees your site daily, coordinating vetted tradesmen, city inspections, and progress updates.",
    },
    {
      icon: Eye,
      title: "3D Photorealistic Pre-Visualization",
      desc: "Experience your new kitchen, bath, or home layout in photorealistic 3D prior to construction, confirming all material textures.",
    },
    {
      icon: Award,
      title: "Commitment to Quality",
      desc: "We maintain high standards of quality and safety in all our projects to ensure your peace of mind.",
    },
    {
      icon: Clock,
      title: "Punctual On-Time Handover",
      desc: "We enforce strict milestone scheduling and guaranteed completion windows, respecting your personal time and daily routine.",
    },
    {
      icon: HardHat,
      title: "Master Craftsmen in Every Trade",
      desc: "All basic electrical, plumbing, structural carpentry, and tile mechanics are performed by seasoned, background-checked craftsmen.",
    },
  ];

  const trustStats = [
    { value: "11+", label: "Years Experience" },
    { value: "1,200+", label: "Homes Handcrafted" },
    { value: "5-Yr", label: "Written Warranty" },
    { value: "Quality", label: "Workmanship Guarantee" },
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <section 
      id="why-choose-us" 
      className="relative bg-secondary/35 py-[60px] border-b border-border/30 overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Subtle background ambient glow */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/[0.08] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[3fr_2fr] lg:gap-14 items-center">

          {/* ── LEFT: Content (60% width) ─────────────────────────── */}
          <div className="flex flex-col order-2 lg:order-1 animate-fade-up">
            
            {/* Eyebrow Badge with Pulsing Status Dot */}
            <div className="inline-flex items-center gap-2.5 self-start px-4 py-1.5 rounded-full border border-primary/35 bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-[0.18em] mb-4 shadow-sm select-none backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              The Progress Standard
            </div>

            {/* Headline */}
            <h2 className="text-foreground font-display font-black tracking-tight leading-[1.14] text-2xl sm:text-3xl lg:text-[36px] mt-0 mb-3.5 max-w-xl">
              Why Discerning Homeowners<br />
              <span className="gradient-text-gold">
                Choose Progress Interior Designs.
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed mb-7 font-normal max-w-xl">
              Over a decade of master-grade renovation across the region — trusted by hundreds of homeowners seeking surgical craftsmanship, transparent accountability, and white-glove respect for your home.
            </p>

            {/* 8 Features Grid (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="group relative flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-card/85 dark:bg-card/50 hover:bg-card dark:hover:bg-card/85 border border-border/40 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-8px_rgba(163,126,58,0.2)] dark:hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.7)] cursor-default select-none before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-primary/40 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 overflow-hidden"
                  >
                    <span className="mt-0.5 shrink-0 h-9 w-9 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] sm:text-[13.5px] font-bold font-display text-foreground leading-snug group-hover:text-primary transition-colors duration-250 mb-0.5">
                        {f.title}
                      </p>
                      <p className="text-[11.5px] text-muted-foreground leading-relaxed font-normal">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground btn-glow hover:bg-primary/90 text-xs sm:text-[12.5px] font-bold tracking-normal h-11 px-7 rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Explore Services
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:8164623599"
                className="inline-flex items-center gap-2 bg-card/85 dark:bg-card/70 border border-border/60 hover:border-primary/40 hover:bg-muted text-foreground text-xs sm:text-[12.5px] font-bold tracking-normal h-11 px-6 rounded-full transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                Call (816) 462-3599
              </a>
            </div>

          </div>

          {/* ── RIGHT: Video Player Card (40% width) ─────────────── */}
          <div className="relative order-1 lg:order-2 lg:sticky lg:top-[100px] animate-fade-up">
            
            {/* Decorative Glow Rings */}
            <div aria-hidden className="pointer-events-none absolute -top-8 -right-8 w-72 h-72 bg-primary/15 rounded-full blur-[110px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-8 -left-8 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />

            {/* Beveled Architectural Outer Frame */}
            <div className="relative rounded-[30px] p-2 bg-gradient-to-b from-primary/35 via-border/25 to-primary/20 shadow-[0_25px_60px_-15px_rgba(45,35,25,0.18)] dark:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)]">
              <div className="relative rounded-[22px] overflow-hidden group">
                <video
                  ref={videoRef}
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[320px] sm:h-[420px] lg:h-[620px] object-cover transition-transform duration-700 ease-out"
                />

                {/* Subtle Multi-Stop Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent dark:from-background/95 dark:via-background/20 dark:to-transparent pointer-events-none" />

                {/* Top-Left Star Badge */}
                <div className="absolute top-4 left-4 z-20 bg-background/90 dark:bg-card/90 backdrop-blur-md border border-primary/35 text-primary text-[10.5px] font-extrabold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                  Master Guild Standard
                </div>

                {/* Sound Toggle Button (Top-Right) */}
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-background/85 dark:bg-card/85 backdrop-blur-md border border-primary/35 text-foreground hover:text-primary hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-primary" />
                  )}
                </button>

                {/* Center Play / Pause Button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="absolute inset-0 flex items-center justify-center z-10 group/btn cursor-pointer"
                >
                  <span
                    className={`flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary/50 bg-background/80 dark:bg-card/80 backdrop-blur-md text-primary shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ${
                      isPlaying
                        ? "opacity-0 group-hover/btn:opacity-100 scale-90 group-hover/btn:scale-100"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7 fill-current" />
                    ) : (
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    )}
                  </span>
                </button>

                {/* Bottom Trust Stats Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4 z-10">
                  <div className="bg-background/90 dark:bg-card/90 backdrop-blur-md border border-primary/30 rounded-2xl px-2 sm:px-4 py-2.5 sm:py-3 grid grid-cols-4 divide-x divide-border/40 shadow-xl">
                    {trustStats.map((s) => (
                      <div key={s.label} className="flex flex-col items-center px-1 sm:px-2 text-center">
                        <span className="font-display font-black text-xs xs:text-sm sm:text-base lg:text-[17px] text-foreground gradient-text-gold leading-tight whitespace-nowrap">
                          {s.value}
                        </span>
                        <span className="text-muted-foreground text-[8px] xs:text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider text-center leading-tight mt-0.5">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

