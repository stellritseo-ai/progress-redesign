import { useState } from "react";
import { 
  ArrowRight, 
  Bath, 
  Check, 
  FileText, 
  Hammer, 
  Home, 
  Layers, 
  Lock, 
  Mail, 
  MapPin, 
  Phone, 
  Sparkles, 
  Tv, 
  User, 
  UtensilsCrossed 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Estimate() {
  const [selectedService, setSelectedService] = useState("kitchen");
  const [selectedTier, setSelectedTier] = useState("luxury");
  const [selectedScope, setSelectedScope] = useState("medium");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { id: "kitchen", label: "Chef's Kitchen", icon: UtensilsCrossed, tag: "Full Gut / Reconfiguration" },
    { id: "bath", label: "Master Spa Bath", icon: Bath, tag: "Curbless / Steam Suite" },
    { id: "whole-home", label: "Whole-Home", icon: Home, tag: "Full Architectural Remodel" },
    { id: "foundation", label: "Foundation Repair", icon: Hammer, tag: "Steel Piers / Underpinning" },
    { id: "flooring", label: "Hardwood & Tile", icon: Layers, tag: "Herringbone / Stone Slab" },
    { id: "basement", label: "Basement Suite", icon: Tv, tag: "Wine Lounge / Theater" },
  ];

  const tiers = [
    { 
      id: "standard", 
      label: "Essential Quality", 
      badge: "Turnkey Finish",
      desc: "Semi-custom cabinetry, high-grade porcelain tile, designer plumbing, and clean preparation." 
    },
    { 
      id: "luxury", 
      label: "Luxury Architectural", 
      badge: "Most Requested",
      desc: "Solid rift-sawn oak, bookmatched quartz waterfalls, heated floors, and architectural lighting." 
    },
    { 
      id: "bespoke", 
      label: "Master Bespoke", 
      badge: "Ultra-Premium",
      desc: "Concealed steel beam removal, rare exotic natural stone, smart home automation, and hand-milled woodwork." 
    },
  ];

  const scopes = [
    { id: "compact", label: "Compact Space", size: "< 200 sq ft", note: "Powder rooms, targeted galley kitchens, wine nooks" },
    { id: "medium", label: "Standard Footprint", size: "200 – 600 sq ft", note: "Full master spa retreats, expansive chef islands" },
    { id: "large", label: "Extensive Wing", size: "600+ sq ft", note: "Multi-room open plans, whole-floor transformations" },
  ];

  const activeServiceObj = services.find((s) => s.id === selectedService) ?? services[0];
  const activeTierObj = tiers.find((t) => t.id === selectedTier) ?? tiers[1];
  const activeScopeObj = scopes.find((sc) => sc.id === selectedScope) ?? scopes[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      toast.error("Please fill in your name, phone number, and email.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        `Thank you, ${name}! Your complimentary 3D consultation dossier has been scheduled. A Senior Project Architect will contact you within 24 hours.`
      );
      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setNotes("");
    }, 850);
  };

  return (
    <section 
      id="estimate" 
      className="relative bg-secondary/25 py-[60px] border-b border-border/30 overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Background ambient lighting blooms */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-primary/6 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Scope & Investment Calculator
          </span>
          <h2 className="mt-3.5 font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.18] tracking-tight">
            <span className="block">Plan Your Renovation With</span>
            <span className="block gradient-text-gold">Zero Guesswork & Guaranteed Pricing.</span>
          </h2>
          <p className="mt-3.5 text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Configure your parameters below to generate an immediate estimated scope, then request your complimentary in-home 3D schematic scan.
          </p>
        </div>

        {/* 2-Column Luxury Estimator Container */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.25fr_0.85fr] items-start">
          
          {/* Left: Interactive Multi-Step Parameter Selector */}
          <div className="space-y-6 sm:space-y-7 rounded-2xl sm:rounded-[32px] bg-card/95 dark:bg-[#1A1D24]/95 backdrop-blur-2xl p-4 xs:p-5 sm:p-8 md:p-9 border border-primary/25 shadow-[0_20px_60px_-20px_rgba(45,35,25,0.08)] dark:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.85)] relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent">
            
            {/* Step 1: Renovation Service Category */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-3.5">
                <span className="text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-mono font-bold">1</span>
                  Select Renovation Focus
                </span>
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Step 1 of 3</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {services.map((s) => {
                  const Icon = s.icon;
                  const isSelected = selectedService === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`relative p-3 xs:p-3.5 sm:p-4 rounded-xl xs:rounded-2xl border text-left transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                        isSelected
                          ? "bg-primary/15 border-primary text-foreground shadow-md shadow-primary/10 ring-1 ring-primary/40 scale-[1.01]"
                          : "bg-secondary/40 hover:bg-secondary/70 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 shadow-xs"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? "bg-primary text-primary-foreground shadow-sm" : "bg-card border border-border/50 text-primary group-hover:border-primary/40"
                        }`}>
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        {isSelected && (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px]">
                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className={`font-bold text-xs sm:text-sm leading-snug ${isSelected ? "text-foreground font-extrabold" : "text-foreground/90"}`}>
                          {s.label}
                        </p>
                        <p className="text-[9.5px] sm:text-[10px] text-muted-foreground mt-0.5 line-clamp-1">
                          {s.tag}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Quality & Architectural Specification Tier */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-3.5">
                <span className="text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-mono font-bold">2</span>
                  Architectural Specification & Material Tier
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {tiers.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTier(tier.id)}
                      className={`relative p-3.5 sm:p-4 rounded-xl xs:rounded-2xl border text-left transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                        isSelected
                          ? "bg-primary/15 border-primary text-foreground shadow-md shadow-primary/10 ring-1 ring-primary/40 scale-[1.01]"
                          : "bg-secondary/40 hover:bg-secondary/70 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 shadow-xs"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isSelected ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground border border-border/50"
                          }`}>
                            {tier.badge}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />}
                        </div>
                        <p className={`font-display font-bold text-xs sm:text-sm mt-1 ${isSelected ? "text-foreground font-extrabold" : "text-foreground/90"}`}>
                          {tier.label}
                        </p>
                        <p className="text-[10.5px] sm:text-[11px] text-muted-foreground mt-1 leading-snug">
                          {tier.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Space Scope & Square Footage */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-3.5">
                <span className="text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-mono font-bold">3</span>
                  Approximate Space Scope
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {scopes.map((sc) => {
                  const isSelected = selectedScope === sc.id;
                  return (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setSelectedScope(sc.id)}
                      className={`p-3.5 sm:p-4 rounded-xl xs:rounded-2xl border text-left transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                        isSelected
                          ? "bg-primary/15 border-primary text-foreground shadow-md shadow-primary/10 ring-1 ring-primary/40 scale-[1.01]"
                          : "bg-secondary/40 hover:bg-secondary/70 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 shadow-xs"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-mono text-xs font-extrabold text-primary">
                            {sc.size}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />}
                        </div>
                        <p className={`font-bold text-xs sm:text-sm ${isSelected ? "text-foreground font-extrabold" : "text-foreground/90"}`}>
                          {sc.label}
                        </p>
                        <p className="text-[10px] sm:text-[10.5px] text-muted-foreground mt-1 leading-snug">
                          {sc.note}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: VIP Consultation & Formal Estimate Request Form */}
          <div className="rounded-2xl sm:rounded-[32px] bg-card/95 dark:bg-[#1A1D24]/95 backdrop-blur-2xl p-5 sm:p-8 md:p-9 border border-primary/35 shadow-[0_25px_70px_-20px_rgba(163,126,58,0.18)] dark:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] space-y-5 sm:space-y-6 relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-primary/40 via-primary before:to-primary/40">
            
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-primary bg-primary/10 border border-primary/25 px-3 py-1 rounded-full mb-3">
                <Sparkles className="w-3 h-3" /> Complimentary 3D Consultation
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground tracking-tight">
                Request Formal Proposal
              </h3>
              <p className="text-xs sm:text-[13px] text-muted-foreground mt-1 leading-relaxed">
                Receive an itemized fixed-price quote and photorealistic 3D schematic scan with an executive project architect.
              </p>
            </div>

            {/* Live Configured Package Summary Chip */}
            <div className="p-3.5 rounded-2xl bg-secondary/50 border border-primary/20 space-y-0.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary block">
                Current Configuration:
              </span>
              <p className="text-xs font-bold text-foreground">
                {activeServiceObj?.label} • {activeTierObj?.label} ({activeScopeObj?.size})
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-primary" /> Full Name *
                </label>
                <Input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. William Vance"
                  className="bg-background/80 border-border/60 focus:border-primary text-xs h-11 rounded-xl text-foreground"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-primary" /> Phone Number *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(816) 462-3599"
                    className="bg-background/80 border-border/60 focus:border-primary text-xs h-11 rounded-xl text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-primary" /> Email Address *
                  </label>
                  <Input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="bg-background/80 border-border/60 focus:border-primary text-xs h-11 rounded-xl text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> Property Address / Neighborhood
                </label>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 1420 Main St, Grandview, MO 64030"
                  className="bg-background/80 border-border/60 focus:border-primary text-xs h-11 rounded-xl text-foreground"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-primary" /> Specific Project Desires or Target Timeline
                </label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Wall removal, waterfall island, specific stone preference, starting in Spring..."
                  rows={3}
                  className="bg-background/80 border-border/60 focus:border-primary text-xs rounded-xl text-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-12 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.99] transition-all"
              >
                {isSubmitting ? (
                  "Scheduling 3D Consultation..."
                ) : (
                  <>
                    Request In-Home Consultation <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="pt-2 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10.5px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-primary" /> 100% Confidential Guarantee
              </span>
              <a href="tel:8164623599" className="hover:text-primary transition-colors font-bold text-foreground">
                Prefer to call? (816) 462-3599
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
