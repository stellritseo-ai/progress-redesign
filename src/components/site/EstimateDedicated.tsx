import { useState, type FormEvent } from "react";
import { 
  ArrowRight, 
  Award, 
  BadgeCheck, 
  Calculator, 
  Check, 
  CheckCircle2, 
  ChevronDown, 
  Clock, 
  FileText, 
  Hammer, 
  HelpCircle, 
  Home, 
  Layers, 
  Mail, 
  MapPin, 
  Paintbrush, 
  Phone, 
  Ruler, 
  ShieldCheck, 
  Sparkles, 
  Upload, 
  UtensilsCrossed, 
  Wrench, 
  Bath,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { submitLeadRequest } from "@/lib/send-lead";

export function EstimateDedicated() {
  const [loading, setLoading] = useState(false);
  // Step 1: Selected Renovation Types (Multi-select)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([
    "Kitchen Remodeling & Custom Cabinetry",
  ]);

  // Step 2: Tier
  const [selectedTier, setSelectedTier] = useState<"essential" | "luxury" | "bespoke">("luxury");

  // Step 3: Space Size
  const [selectedSize, setSelectedSize] = useState<"small" | "medium" | "large" | "whole">("medium");

  // Step 4: Form state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    budgetRange: "Full Room Renovation",
    timeline: "1–3 Months",
    details: "",
    inspirationLink: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const renovationTypes = [
    { id: "kitchen", label: "Kitchen Remodeling & Custom Cabinetry", icon: UtensilsCrossed },
    { id: "bath", label: "Luxury Bathroom & Spa Transformation", icon: Bath },
    { id: "foundation", label: "Foundation Repair & Structural Engineering", icon: Hammer },
    { id: "flooring", label: "Hardwood, Tile & Architectural Flooring", icon: Layers },
    { id: "whole-home", label: "Whole-Home Renovation & Reconfiguration", icon: Home },
    { id: "basement", label: "Basement Finishing & Entertainment Suite", icon: Wrench },
    { id: "millwork", label: "Custom Architectural Millwork & Built-Ins", icon: Ruler },
    { id: "painting", label: "Designer Drywall & Precision Painting", icon: Paintbrush },
    { id: "addition", label: "Home Addition / Square Footage Expansion", icon: BuildingIcon },
  ];

  function BuildingIcon(props: any) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01"/>
        <path d="M16 6h.01"/>
        <path d="M8 10h.01"/>
        <path d="M16 10h.01"/>
        <path d="M8 14h.01"/>
        <path d="M16 14h.01"/>
      </svg>
    );
  }

  const toggleType = (label: string) => {
    if (selectedTypes.includes(label)) {
      if (selectedTypes.length > 1) {
        setSelectedTypes(selectedTypes.filter((t) => t !== label));
      }
    } else {
      setSelectedTypes([...selectedTypes, label]);
    }
  };

  const tiers = [
    {
      id: "essential" as const,
      label: "Essential Quality",
      level: "Tier I",
      desc: "Durable, builder-grade materials with quality craftsmanship. Perfect for rental properties or targeted refresh updates.",
      badge: "Value Focus",
    },
    {
      id: "luxury" as const,
      label: "Luxury Architectural",
      level: "Tier II",
      desc: "Our most popular tier. Semi-custom cabinetry, natural stone surfaces, designer fixtures, and premium finishes.",
      badge: "Most Popular",
    },
    {
      id: "bespoke" as const,
      label: "Master Bespoke",
      level: "Tier III",
      desc: "Fully custom millwork, imported materials, smart-home integration, and engineered structural modifications.",
      badge: "Ultra-Premium",
    },
  ];

  const sizes = [
    { id: "small" as const, label: "Small", sub: "Under 100 sq. ft.", example: "Powder room, pantry, targeted area" },
    { id: "medium" as const, label: "Medium", sub: "100 – 300 sq. ft.", example: "Full kitchen, master bath, home office" },
    { id: "large" as const, label: "Large", sub: "300 – 600 sq. ft.", example: "Kitchen + living combo, primary suite" },
    { id: "whole" as const, label: "Whole Home", sub: "600+ sq. ft.", example: "Multi-room remodel, full home addition" },
  ];



  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      toast.error("Please provide your name and phone number.");
      return;
    }

    setLoading(true);
    try {
      const selectedTierObj = tiers.find((t) => t.id === selectedTier);
      const selectedSizeObj = sizes.find((s) => s.id === selectedSize);

      const res = await submitLeadRequest({
        sourceForm: "Dedicated Estimate Page",
        name: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        address: formData.address.trim(),
        service: selectedTypes.join(", "),
        tier: `${selectedTierObj?.label} (${selectedTierObj?.level})`,
        scope: `${formData.budgetRange} | ${selectedSizeObj?.label} (${selectedSizeObj?.sub})`,
        timeline: formData.timeline,
        notes: [
          formData.details ? `Details: ${formData.details}` : "",
          formData.inspirationLink ? `Inspiration: ${formData.inspirationLink}` : "",
        ].filter(Boolean).join("\n"),
      });

      if (res.success) {
        setSubmitted(true);
        toast.success("Formal proposal request received! A Senior Project Manager will reach out within 24 hours.");
      } else {
        toast.error(res.error || "Failed to submit request. Please call us at (816) 462-3599.");
      }
    } catch {
      toast.error("Failed to submit request. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToEstimator = () => {
    const el = document.getElementById("estimator-tool");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const includedItems = [
    {
      item: "Line-Item Fixed Pricing",
      desc: "Every material, labor hour, and permit fee is itemized. No hidden costs.",
      icon: FileText,
    },
    {
      item: "Architectural 3D Schematic",
      desc: "A visual walkthrough of your proposed space before construction begins.",
      icon: Layers,
    },
    {
      item: "Structural Feasibility Review",
      desc: "Assessment of load-bearing walls, plumbing, and electrical capacity.",
      icon: Hammer,
    },
    {
      item: "Material & Finish Selection Guidance",
      desc: "Access to our vendor network and designer recommendations.",
      icon: Sparkles,
    },
    {
      item: "Detailed Project Timeline",
      desc: "A phase-by-phase schedule so you know exactly what to expect and when.",
      icon: Clock,
    },
    {
      item: "5-Year Warranty Documentation",
      desc: "Full written warranty terms provided upfront.",
      icon: ShieldCheck,
    },
  ];

  const whyOffer = [
    {
      title: "Eliminate Anxiety",
      desc: "You will know your investment range before committing to anything.",
      icon: ShieldCheck,
    },
    {
      title: "Build Trust",
      desc: "We show you our process, our professionalism, and our attention to detail from the very first interaction.",
      icon: Award,
    },
    {
      title: "Ensure Alignment",
      desc: "We only take on projects where we are confident we can exceed your expectations.",
      icon: CheckCircle2,
    },
  ];

  const faqs = [
    {
      q: "Is the estimate truly free?",
      a: "Yes. The initial consultation, estimate range, and 3D schematic review are provided at no cost and with zero obligation to proceed.",
    },
    {
      q: "How accurate is the estimate?",
      a: "Our estimates are based on 1,200+ completed projects and real-time material costs. Once we conduct the in-home assessment, your fixed-price quote is locked in—meaning the price we quote is the price you pay.",
    },
    {
      q: "How long does it take to receive my estimate?",
      a: "You will receive your initial estimate range instantly after submitting the form. Your formal, fixed-price proposal is typically delivered within 3–5 business days following your in-home consultation.",
    },
    {
      q: "Do you charge for the in-home consultation?",
      a: "The initial discovery call and estimate are complimentary. For extensive design work requiring multiple revisions and full architectural blueprints, a nominal retainer may apply—which is fully credited toward your project upon signing.",
    },
    {
      q: "What if my project is outside your service area?",
      a: "We proudly serve Dallas, Plano, Frisco, McKinney, Allen, and Richardson. If you are unsure whether we service your zip code, please call us at (816) 462-3359 to confirm.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 border-b border-border/30">
        {/* Atmospheric ambient lighting */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-primary/[0.09] rounded-full blur-[160px]" />
        <div className="pointer-events-none absolute top-1/3 -right-24 w-[450px] h-[450px] bg-primary/[0.05] rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[300px] bg-amber-500/[0.03] rounded-full blur-[150px]" />

        {/* Background grid */}
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
              <span>Get Your Free Estimate • Guaranteed Fixed Pricing</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold leading-[1.12] tracking-tight text-foreground text-[26px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Plan Your Renovation With{" "}
              <span className="block mt-1 sm:mt-1.5 gradient-text-gold">
                Zero Guesswork & Guaranteed Pricing.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-normal pt-1">
              Stop wondering what your dream renovation will cost. Configure your project parameters below to generate an accurate estimate range, then request your complimentary in-home consultation and architectural 3D schematic plan.
            </p>

            {/* Trust highlights ribbon */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-semibold text-muted-foreground">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <FileText className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">Line-Item Fixed Pricing</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">100% Free & No Obligation</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <Calculator className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">Instant Transparent Range</span>
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
      {/* 2. HOW OUR FREE ESTIMATE PROCESS WORKS */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-border/25 bg-secondary/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Clock className="w-3.5 h-3.5" />
              <span>Transparent Delivery</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              How Our Free Estimate Process Works
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              We believe a "free estimate" should actually be valuable—not a vague number scribbled on a business card. Here is what you receive at no cost and with zero obligation:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Step 1: Configure Your Project",
                desc: "Use our interactive scope selector below to tell us what you're planning. Choose your rooms, finishes, and structural needs.",
                icon: Calculator,
              },
              {
                step: "02",
                title: "Step 2: Receive Your Estimate Range",
                desc: "Instantly see a transparent investment range based on 11+ years of real project data—not guesswork.",
                icon: Layers,
              },
              {
                step: "03",
                title: "Step 3: Request Your Formal Proposal",
                desc: "Submit your details, and a dedicated Project Manager will contact you within 24 business hours to schedule your complimentary in-home consultation and 3D schematic review.",
                icon: FileText,
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-card/85 dark:bg-card/50 hover:bg-card border border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-extrabold text-primary/70 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        Phase {s.step}
                      </span>
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {s.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-border/30 flex items-center gap-2 text-[11px] font-bold text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Zero Cost & Obligation</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE SCOPE & INVESTMENT ESTIMATOR */}
      {/* ========================================================================= */}
      <section id="estimator-tool" className="relative py-16 sm:py-24 lg:py-28 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Scope & Investment Estimator</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              Configure Your Custom Project
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Select your disciplines, material tier, and square footage to preview your estimated investment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            
            {/* STEP 1: Select Renovation Type */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card/85 dark:bg-card/50 border border-primary/25 shadow-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border/25">
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">
                    Step 1 of 4
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                    Select Your Renovation Type <span className="text-xs text-muted-foreground font-normal">(Check all that apply)</span>
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                  {selectedTypes.length} Selected
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {renovationTypes.map((item) => {
                  const Icon = item.icon;
                  const isChecked = selectedTypes.includes(item.label);
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => toggleType(item.label)}
                      className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                        isChecked 
                          ? "bg-primary/15 border-primary text-foreground shadow-sm" 
                          : "bg-background/60 hover:bg-background border-border/40 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked ? "bg-primary border-primary text-primary-foreground" : "border-border/60 bg-card"
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block text-xs font-bold leading-snug">
                          {item.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Architectural Specification & Material Tier */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card/85 dark:bg-card/50 border border-primary/25 shadow-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border/25">
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">
                    Step 2 of 4
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                    Architectural Specification & Material Tier
                  </h3>
                  <p className="text-xs text-muted-foreground">Select the finish level that best matches your vision.</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {tiers.map((t) => {
                  const isSelected = selectedTier === t.id;
                  return (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setSelectedTier(t.id)}
                      className={`p-5 rounded-2xl border text-left flex flex-col justify-between space-y-3 transition-all cursor-pointer ${
                        isSelected 
                          ? "bg-primary/15 border-primary shadow-md ring-1 ring-primary" 
                          : "bg-background/60 hover:bg-background border-border/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                          {t.level}
                        </span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                          {t.badge}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-display text-base font-bold text-foreground">
                          {t.label}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {t.desc}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-primary">
                        <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"}`}>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <span>{isSelected ? "Selected Tier" : "Select Tier"}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: Approximate Space Size */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card/85 dark:bg-card/50 border border-primary/25 shadow-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border/25">
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">
                    Step 3 of 4
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                    Approximate Space Size
                  </h3>
                </div>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                {sizes.map((sz) => {
                  const isSelected = selectedSize === sz.id;
                  return (
                    <button
                      type="button"
                      key={sz.id}
                      onClick={() => setSelectedSize(sz.id)}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between space-y-2 transition-all cursor-pointer ${
                        isSelected 
                          ? "bg-primary/15 border-primary shadow-sm ring-1 ring-primary" 
                          : "bg-background/60 hover:bg-background border-border/40"
                      }`}
                    >
                      <div>
                        <span className="block font-display text-sm font-bold text-foreground">
                          {sz.label}
                        </span>
                        <span className="block text-xs font-semibold text-primary mt-0.5">
                          {sz.sub}
                        </span>
                        <p className="text-[11px] text-muted-foreground mt-1 leading-tight">
                          {sz.example}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                        <span className={`w-3 h-3 rounded-full border flex items-center justify-center ${isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"}`}>
                          {isSelected && <span className="w-1 h-1 rounded-full bg-white" />}
                        </span>
                        <span>{isSelected ? "Selected" : "Select"}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>


            {/* STEP 4: Request Formal Proposal (Form) */}
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-card/90 dark:bg-card/60 border border-primary/30 shadow-xl backdrop-blur-xl relative overflow-hidden">
              <div className="mb-6 space-y-1 pb-3 border-b border-border/25">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">
                  Step 4 of 4
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Request Your Formal Proposal
                </h3>
                <p className="text-xs text-muted-foreground">
                  Lock in your project parameters and schedule your complimentary in-home 3D consultation.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mx-auto shadow-glow">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-foreground">
                    Proposal Request Received
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-foreground">{formData.fullName || "valued homeowner"}</strong>! Your custom scope dossier has been routed to our Senior Project Manager. We will reach out within 24 business hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button 
                      onClick={() => setSubmitted(false)} 
                      variant="outline" 
                      className="rounded-full text-xs font-bold h-10 px-6 border-border/60"
                    >
                      Configure Another Estimate
                    </Button>
                    <Button asChild className="rounded-full text-xs font-bold h-10 px-6 bg-primary text-primary-foreground btn-glow">
                      <a href="tel:8164623599">Call Direct: (816) 462-3359</a>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: Full Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block space-y-1.5">
                      <span className="text-xs font-bold text-foreground">
                        Full Name <span className="text-primary">*</span>
                      </span>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Katherine Miller"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </label>

                    <label className="block space-y-1.5">
                      <span className="text-xs font-bold text-foreground">
                        Phone Number <span className="text-primary">*</span>
                      </span>
                      <input
                        required
                        type="tel"
                        placeholder="e.g. (816) 555-0188"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </label>
                  </div>

                  {/* Row 2: Email & Project Address / City */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block space-y-1.5">
                      <span className="text-xs font-bold text-foreground">
                        Email Address <span className="text-primary">*</span>
                      </span>
                      <input
                        required
                        type="email"
                        placeholder="katherine@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </label>

                    <label className="block space-y-1.5">
                      <span className="text-xs font-bold text-foreground">
                        Project Address / City <span className="text-primary">*</span>
                      </span>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Frisco, TX (or full address)"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </label>
                  </div>

                  {/* Row 3: Estimated Project Scope & Timeline */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block space-y-1.5">
                      <span className="text-xs font-bold text-foreground">
                        Project Scope Level
                      </span>
                      <div className="relative">
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer pr-10"
                        >
                          <option value="Targeted Refresh">Targeted Refresh</option>
                          <option value="Full Room Renovation">Full Room Renovation</option>
                          <option value="Multi-Room / Whole Home">Multi-Room / Whole Home</option>
                          <option value="Master Architectural Estate">Master Architectural Estate</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      </div>
                    </label>

                    <label className="block space-y-1.5">
                      <span className="text-xs font-bold text-foreground">
                        Project Timeline
                      </span>
                      <div className="relative">
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer pr-10"
                        >
                          <option value="ASAP">ASAP</option>
                          <option value="1–3 Months">1–3 Months</option>
                          <option value="3–6 Months">3–6 Months</option>
                          <option value="Just Planning">Just Planning</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      </div>
                    </label>
                  </div>

                  {/* Row 4: Project Details */}
                  <label className="block space-y-1.5">
                    <span className="text-xs font-bold text-foreground">
                      Project Details
                    </span>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your vision, must-haves, and any structural concerns..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    />
                  </label>

                  {/* Row 5: Upload Inspiration Photos */}
                  <label className="block space-y-1.5">
                    <span className="text-xs font-bold text-foreground flex items-center justify-between">
                      <span>Upload Inspiration Photos / Boards</span>
                      <span className="text-muted-foreground text-[11px] font-normal">Optional</span>
                    </span>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Paste Pinterest link, Houzz ideabook, or Cloud photo link..."
                        value={formData.inspirationLink}
                        onChange={(e) => setFormData({ ...formData, inspirationLink: e.target.value })}
                        className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                  </label>

                  {/* Submit Button */}
                  <div className="pt-3 space-y-2.5">
                    <Button
                      type="submit"
                      disabled={loading}
                      size="lg"
                      className="w-full bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-12 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          <span>SENDING YOUR REQUEST...</span>
                        </>
                      ) : (
                        <>
                          <span>REQUEST MY FORMAL PROPOSAL</span>
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                      By submitting, you agree to our privacy policy. A Project Manager will respond within 24 business hours. No spam. No pressure. No obligation.
                    </p>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT'S INCLUDED IN YOUR FREE ESTIMATE */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-secondary/30 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>Complete Deliverables</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              What's Included in Your Free Estimate
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Unlike other contractors who provide a verbal ballpark, your Progress Interior Designs estimate includes:
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl bg-card/90 dark:bg-card/60 border border-primary/30 shadow-xl overflow-hidden backdrop-blur-md">
            <div className="hidden sm:grid grid-cols-12 bg-primary/10 border-b border-primary/25 p-4 text-xs font-bold uppercase tracking-wider text-primary">
              <div className="col-span-4">Included</div>
              <div className="col-span-8">Description</div>
            </div>

            <div className="divide-y divide-border/30">
              {includedItems.map((row) => {
                const Icon = row.icon;
                return (
                  <div 
                    key={row.item} 
                    className="p-5 sm:p-6 grid sm:grid-cols-12 gap-3 sm:gap-6 items-center hover:bg-muted/40 transition-colors"
                  >
                    <div className="sm:col-span-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-display text-sm sm:text-base font-bold text-foreground">
                        {row.item}
                      </span>
                    </div>

                    <div className="sm:col-span-8">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {row.desc}
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
      {/* 5. WHY WE OFFER FREE ESTIMATES */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              Why We Offer Free Estimates
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              We believe that informed homeowners make the best decisions. Our free estimate process is designed to:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {whyOffer.map((w) => {
              const Icon = w.icon;
              return (
                <div 
                  key={w.title}
                  className="p-7 rounded-3xl bg-card/85 dark:bg-card/50 border border-primary/25 shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                      {w.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-secondary/30 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              Frequently Asked Questions <br />
              <span className="gradient-text-gold">About Estimates</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-card/85 dark:bg-card/50 border border-primary/20 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-muted/40 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-foreground">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/20 animate-in fade-in duration-200">
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
      {/* 7. PREFER TO SPEAK DIRECTLY & FINAL CTA */}
      {/* ========================================================================= */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-background via-secondary/40 to-background">
        {/* Glow blooms */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.12] rounded-full blur-[160px]" />

        <div className="relative mx-auto max-w-[1280px] px-4 xs:px-5 sm:px-8 lg:px-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Superintendent Line</span>
          </div>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-[44px] font-extrabold text-foreground tracking-tight leading-[1.14]">
            Ready to Build Something <br className="hidden sm:inline" />
            <span className="gradient-text-gold">Enduring?</span>
          </h2>

          <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Your dream renovation starts with a single step. Get your free estimate today and discover why 99.4% of our clients rate us 5 stars.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
            <Button 
              onClick={scrollToEstimator}
              size="lg" 
              className="w-full sm:w-auto bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-11 sm:h-12 px-7 rounded-full font-bold text-xs sm:text-[13px] cursor-pointer"
            >
              GET MY FREE ESTIMATE NOW →
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-7 rounded-full border-border/70 hover:bg-muted text-foreground font-bold text-xs sm:text-[13px]">
              <a href="tel:8164623599" className="inline-flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>CALL: (816) 462-3359</span>
              </a>
            </Button>
          </div>

          {/* Direct channels footer line */}
          <div className="pt-6 border-t border-border/20 max-w-lg mx-auto flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <a href="tel:8164623599" className="hover:text-primary transition-colors flex items-center gap-1.5 font-bold text-foreground">
              <Phone className="w-3.5 h-3.5 text-primary" /> (816) 462-3359
            </a>
            <span>•</span>
            <a href="mailto:info@progressinteriordesigns.com" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-primary" /> info@progressinteriordesigns.com
            </a>
            <span>•</span>
            <span>Mon–Fri: 8AM–6PM</span>
          </div>

        </div>
      </section>

    </div>
  );
}
