import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  CheckCircle2, 
  Hammer, 
  Home, 
  Layers, 
  Paintbrush, 
  Phone,
  Ruler, 
  ShieldCheck, 
  Sparkles, 
  Wrench 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";

export interface ServiceItem {
  id: string;
  category: "all" | "remodel" | "structural" | "finish";
  icon: any;
  title: string;
  categoryLabel: string;
  desc: string;
  features: string[];
  image: string;
  to: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "kitchen",
    category: "remodel",
    icon: Sparkles,
    title: "Kitchen Remodeling & Custom Cabinetry",
    categoryLabel: "Signature Discipline",
    desc: "Bespoke chef's kitchens engineered for culinary passion and entertaining, featuring custom solid wood cabinetry, waterfall quartz islands, and integrated panel-ready appliances.",
    features: ["Custom Solid Wood Cabinetry", "Waterfall Quartz & Marble Islands", "Integrated Panel Appliances"],
    image: images.kitchen,
    to: "/services/kitchen-remodeling",
  },
  {
    id: "bathroom",
    category: "remodel",
    icon: Home,
    title: "Luxury Bathroom & Spa Transformations",
    categoryLabel: "Master Suite Spa",
    desc: "Turn your daily routine into a five-star spa escape with curbless walk-in steam showers, freestanding soaking tubs, radiant heated tile floors, and custom floating vanities.",
    features: ["Curbless Steam Shower Enclosures", "Radiant Heated Tile Flooring", "Designer Fixtures & Floating Vanities"],
    image: images.bathroom,
    to: "/services/bathroom-remodeling",
  },
  {
    id: "structural",
    category: "structural",
    icon: Hammer,
    title: "Foundation Repair & Structural Engineering",
    categoryLabel: "Engineered Core",
    desc: "Protect your property's foundational integrity with engineered steel piering, helical piles, foundation leveling, carbon-fiber crack reinforcement, and load-bearing beam removal.",
    features: ["Engineered Steel Piering & Piles", "Load-Bearing Wall Removal", "Certified Lifetime Structural Warranty"],
    image: images.foundation,
    to: "/services/foundation-repair",
  },
  {
    id: "flooring",
    category: "finish",
    icon: Wrench,
    title: "Hardwood, Tile & Architectural Flooring",
    categoryLabel: "Architectural Surface",
    desc: "Flawless installation of wide-plank French oak, intricate herringbone patterns, large-format porcelain tile, and durable luxury vinyl plank with acoustical underlayment.",
    features: ["Wide-Plank French White Oak", "Custom Herringbone Patterns", "Precision Subfloor Leveling"],
    image: images.flooring,
    to: "/services/flooring",
  },
  {
    id: "whole-home",
    category: "remodel",
    icon: Ruler,
    title: "Whole-Home Renovation & Reconfiguration",
    categoryLabel: "Turnkey Renovation",
    desc: "Reimagine every square foot. We orchestrate comprehensive whole-home renovations, removing walls to create seamless open-concept living spaces filled with natural light.",
    features: ["Open-Concept Space Reconfiguration", "Full MEP Modernization & Code", "Full Architectural & City Permitting"],
    image: images.architectural,
    to: "/services/whole-home-renovation",
  },
  {
    id: "basement",
    category: "structural",
    icon: Layers,
    title: "Basement Finishing & Entertainment Suites",
    categoryLabel: "Subterranean Luxury",
    desc: "Transform unused subterranean square footage into luxurious in-law suites, state-of-the-art home theaters, climate-controlled wine cellars, and wet bars.",
    features: ["Sub-Floor Hydro-Thermal Barrier", "Climate-Controlled Wine Cellars", "Egress Windows & Custom Wet Bars"],
    image: images.basement,
    to: "/services/basement-finishing",
  },
  {
    id: "millwork",
    category: "finish",
    icon: Sparkles,
    title: "Custom Architectural Millwork & Built-Ins",
    categoryLabel: "Master Joinery",
    desc: "Handcrafted interior millwork including coffered ceilings, fireplace surrounds, floating bookcases, wainscoting, and hidden door entries built by master carpenters.",
    features: ["Coffered & Architectural Ceilings", "Floor-to-Ceiling Library Suites", "Hidden Flush Doors & Paneling"],
    image: images.millwork,
    to: "/services/custom-millwork",
  },
  {
    id: "painting",
    category: "finish",
    icon: Paintbrush,
    title: "Designer Drywall & Precision Painting",
    categoryLabel: "Museum Quality",
    desc: "Level 5 smooth drywall finish, laser-straight edge work, and zero-VOC designer paint applications using premium Benjamin Moore and Sherwin-Williams formulations.",
    features: ["Level 5 Smooth Drywall Standard", "Commercial Dust Air Filtration", "Zero-VOC Eco-Friendly Formulations"],
    image: images.painting,
    to: "/services/drywall-painting",
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "remodel" | "structural" | "finish">("all");

  const categories = [
    { id: "all", label: "All Disciplines", count: servicesData.length },
    { id: "remodel", label: "Kitchen & Bath", count: servicesData.filter(s => s.category === "remodel").length },
    { id: "structural", label: "Structural & Core", count: servicesData.filter(s => s.category === "structural").length },
    { id: "finish", label: "Finish & Millwork", count: servicesData.filter(s => s.category === "finish").length },
  ];

  const filtered = activeTab === "all" 
    ? servicesData 
    : servicesData.filter((s) => s.category === activeTab);

  return (
    <section 
      id="services" 
      className="relative bg-secondary/35 py-[60px] border-y border-border/30 overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-primary/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Architectural Disciplines
            </span>
            <h2 className="mt-3.5 font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-foreground leading-[1.14] tracking-tight">
              Master-Grade Renovation.<br />
              <span className="gradient-text-gold">Engineered to Endure.</span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every discipline is executed in-house by experienced tradesmen and dedicated project superintendents — backed by transparent pricing and 5-year written craftsmanship warranties.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-card/85 dark:bg-card/60 p-1.5 rounded-2xl sm:rounded-full border border-primary/25 backdrop-blur-xl shadow-sm">
            {categories.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[0_4px_16px_-3px_rgba(163,126,58,0.45)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                    isActive 
                      ? "bg-primary-foreground/20 text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-[26px] overflow-hidden bg-card/90 dark:bg-card/60 border border-border/40 hover:border-primary/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(163,126,58,0.22)] dark:hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] flex flex-col justify-between select-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-20"
              >
                {/* Background Image Container with Vignette */}
                <Link to={item.to} className="block relative h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card dark:from-[#1F232B] via-black/25 to-black/10 z-10" />

                  {/* Top Floating Glass Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20">
                    <div className="w-10 h-10 rounded-xl bg-background/90 dark:bg-card/90 backdrop-blur-md border border-primary/30 text-primary flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-4.5 h-4.5" />
                    </div>

                    <span className="bg-background/90 dark:bg-card/90 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-extrabold uppercase tracking-[0.14em] px-3 py-1 rounded-full shadow-sm">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Micro Trust Chip */}
                  <div className="absolute bottom-2.5 left-4 z-20 flex items-center gap-1.5 text-[10.5px] font-bold text-foreground/90 dark:text-white/95">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>In-House Master Trades</span>
                  </div>
                </Link>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-[17px] font-bold text-foreground leading-snug group-hover:text-primary transition-colors min-h-[44px] flex items-center">
                      <Link to={item.to} className="hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3 min-h-[50px]">
                      {item.desc}
                    </p>

                    {/* Features Checklist */}
                    <ul className="mt-4 pt-3.5 border-t border-border/25 space-y-2">
                      {item.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-[11.5px] text-foreground/85 font-medium leading-tight">
                          <span className="h-4 w-4 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                            <CheckCircle2 className="w-2.5 h-2.5 text-primary" />
                          </span>
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-5 pt-3.5 border-t border-border/25 flex items-center justify-between">
                    <span className="text-[10.5px] font-semibold text-muted-foreground uppercase tracking-wider">
                      Turnkey Scope
                    </span>
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors group/link cursor-pointer"
                    >
                      <span>Explore Discipline</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Architectural Concierge Banner */}
        <div className="mt-14 relative rounded-3xl p-7 sm:p-9 bg-card/90 dark:bg-card/70 border border-primary/30 backdrop-blur-xl shadow-[0_15px_40px_-15px_rgba(45,35,25,0.1)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 shadow-sm">
              <Ruler className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
                  Master Architect Desk
                </span>
                <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-primary/50" />
                <span className="hidden sm:inline-block text-[11px] text-muted-foreground font-semibold">
                  Fixed-Price Contracts
                </span>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                Have a Custom Architectural Plan in Mind?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We partner with your designated architect or provide end-to-end 3D design and engineering in-house.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 shrink-0 w-full lg:w-auto">
            <Button asChild size="lg" className="bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-11 px-7 rounded-full font-bold text-xs justify-center w-full sm:w-auto">
              <Link to="/estimate">
                Request On-Site Inspection <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 px-6 rounded-full border-border/60 hover:bg-muted text-foreground font-bold text-xs justify-center w-full sm:w-auto">
              <a href="tel:8164623599">
                <Phone className="mr-2 w-3.5 h-3.5 text-primary" /> (816) 462-3599
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}

