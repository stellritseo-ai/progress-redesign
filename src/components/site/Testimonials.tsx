import { BadgeCheck, MessageSquare, Quote, ShieldCheck, Sparkles, Star } from "lucide-react";

export interface Review {
  name: string;
  location: string;
  role: string;
  rating: number;
  initials: string;
  avatarColor: string;
  service: string;
  text: string;
  response?: string;
}

export const reviewsData: Review[] = [
  {
    name: "Elena & Marcus Vance",
    location: "Westlake Hills",
    role: "Estate Homeowners",
    rating: 5,
    initials: "EV",
    avatarColor: "#A37E3A",
    service: "Full Kitchen & Main Floor Reconfiguration",
    text: "Progress completely transformed our dark 1990s kitchen into an open-concept masterpiece. The attention to detail in the custom rift-sawn oak cabinetry and waterfall quartz island was astonishing. Their daily HEPA clean protocol meant our children lived in the home during the entire build with zero dust issues.",
    response: "Thank you Elena & Marcus! It was an absolute pleasure bringing your culinary vision to life.",
  },
  {
    name: "Dr. Arthur Sterling",
    location: "Oakridge Estates",
    role: "Private Residence",
    rating: 5,
    initials: "AS",
    avatarColor: "#8C7355",
    service: "Master Spa Bathroom Transformation",
    text: "From our first meeting, their transparency stood out. The line-by-line fixed-price proposal was adhered to down to the penny. The curbless steam shower and heated limestone floors feel like a five-star Zurich hotel. Truly master craftsmen.",
    response: "We are thrilled that your master retreat provides that daily resort experience, Dr. Sterling.",
  },
  {
    name: "Clara & David Thorne",
    location: "Highland Park",
    role: "Residential Clients",
    rating: 5,
    initials: "CD",
    avatarColor: "#5A6B7C",
    service: "Foundation Repair & Structural Engineering",
    text: "We noticed hairline cracks and uneven doors in our 1920s Tudor home. Progress’s structural team engineered steel piers and stabilized our foundation with surgical precision. Their 20-year structural warranty gave us complete peace of mind.",
    response: "Preserving the structural heritage of classic homes is a true passion for our engineering crew.",
  },
  {
    name: "Julian Mercer",
    location: "Country Club Heights",
    role: "Homeowner",
    rating: 5,
    initials: "JM",
    avatarColor: "#4B5563",
    service: "Custom Architectural Millwork & Hardwood",
    text: "The artisan herringbone white oak and custom coffered library ceilings are the first things guests comment on when they walk in. The project superintendent was on site every single morning at 7:30 AM without fail.",
  },
  {
    name: "Victoria & James Montgomery",
    location: "Westlake Hills",
    role: "Estate Renovation",
    rating: 5,
    initials: "VM",
    avatarColor: "#7A6248",
    service: "Architectural Great Room & Steel Infill",
    text: "Removing three load-bearing walls in a two-story home seemed impossible until Progress took charge. Their structural team installed 36-foot concealed steel flitch beams with zero ceiling drop, opening up panoramic hill country views.",
  },
  {
    name: "Harrison Brooks",
    location: "Stonebridge Crossing",
    role: "Commercial & Residential Investor",
    rating: 5,
    initials: "HB",
    avatarColor: "#3F4E5A",
    service: "Whole-Home Architectural Renovation",
    text: "I’ve worked with dozens of general contractors over the past 20 years. Progress is the only team that delivered on time, perfectly within contract budget, and with Level 5 finish quality throughout every room.",
  },
  {
    name: "Rachel & Thomas Lin",
    location: "River Oaks",
    role: "Homeowner",
    rating: 5,
    initials: "RL",
    avatarColor: "#A37E3A",
    service: "Subterranean Wine Bar & Lounge Suite",
    text: "They converted 1,100 square feet of cold concrete into a warm, acoustic-isolated home theater, wine bar, and guest suite. Outstanding communication throughout and delivered four full days ahead of schedule.",
  },
  {
    name: "Genevieve & Robert Caldwell",
    location: "Forest Glen",
    role: "Culinary Residence",
    rating: 5,
    initials: "GC",
    avatarColor: "#6B583E",
    service: "Modern European Chef's Kitchen",
    text: "The integrated panel cabinetry and mitred quartz waterfall island are flawless. What impressed us most was their bespoke project dashboard—daily photographic updates kept us totally informed while traveling abroad.",
    response: "It was our absolute privilege to craft a culinary space worthy of your entertaining lifestyle!",
  },
  {
    name: "Siddharth & Ananya Patel",
    location: "Oakridge Estates",
    role: "Master Suite Project",
    rating: 5,
    initials: "SP",
    avatarColor: "#5C6B73",
    service: "Master En-Suite & Walk-In Dressing Room",
    text: "Progress designed custom floor-to-ceiling smoked walnut wardrobes with internal sensor lighting and a dual floating marble vanity. It elevated our daily routine to the standard of a luxury boutique hotel.",
  },
  {
    name: "Jonathan & Evelyn Ward",
    location: "Country Club Heights",
    role: "Historic Homeowners",
    rating: 5,
    initials: "JW",
    avatarColor: "#4A5859",
    service: "Historic Restoration & Sunroom Addition",
    text: "Restoring an 85-year-old exterior brick facade while adding an 850 sq ft modern rear sunroom required incredible sensitivity. Progress matched the vintage masonry seamlessly while integrating high-efficiency thermal glazing.",
  },
  {
    name: "Dr. Melissa Chen",
    location: "Highland Park",
    role: "Spa Sanctuary Remodel",
    rating: 5,
    initials: "MC",
    avatarColor: "#8C7355",
    service: "Minimalist Japanese Hinoki Soaking Bath",
    text: "Their tile and waterproofing crew are perfectionists. The seamless curbless transition, recessed ambient lighting, and freestanding soaking tub created the exact serene sanctuary I had envisioned for years.",
  },
  {
    name: "William & Diane Kincaid",
    location: "Westlake Hills",
    role: "Outdoor Living Expansion",
    rating: 5,
    initials: "WK",
    avatarColor: "#62574A",
    service: "Covered Veranda & Outdoor Kitchen Suite",
    text: "Progress built an all-weather covered loggia with infrared heaters, motorized phantom screens, and a built-in outdoor kitchen. The craftsmanship is flawless and we practically live on our patio year-round now.",
  },
];

export const row1Reviews = reviewsData.slice(0, 6);
export const row2Reviews = reviewsData.slice(6, 12);

function TestimonialCard({ rev }: { rev: Review }) {
  return (
    <div className="w-[290px] xs:w-[330px] sm:w-[420px] shrink-0 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-card/95 dark:bg-[#1A1D24]/95 backdrop-blur-xl border border-primary/20 hover:border-primary/50 shadow-[0_10px_30px_-15px_rgba(45,35,25,0.06)] dark:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_-12px_rgba(163,126,58,0.22)] dark:hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] transition-all duration-300 flex flex-col justify-between select-none">
      <div>
        {/* Top Row: Stars + Verified Badge */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div className="flex gap-1 text-amber-400">
            {[...Array(rev.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>

          <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-primary bg-primary/10 border border-primary/25 px-2.5 py-0.5 rounded-full shadow-xs shrink-0">
            <BadgeCheck className="w-3.5 h-3.5" /> Verified Homeowner
          </span>
        </div>

        {/* Service Tag */}
        <div className="mb-3.5">
          <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-lg inline-block line-clamp-1">
            {rev.service}
          </span>
        </div>

        {/* Quote text */}
        <div className="relative">
          <Quote className="w-5 h-5 text-primary/30 mb-2 fill-primary/20" />
          <p className="text-xs sm:text-[13px] text-foreground/90 leading-relaxed font-normal">
            "{rev.text}"
          </p>
        </div>

        {/* Contractor Response (if present) */}
        {rev.response && (
          <div className="mt-3.5 p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-primary mb-0.5 flex items-center gap-1">
              <MessageSquare className="w-3 h-3" /> Progress Team Response
            </p>
            <p className="text-muted-foreground text-[11px] leading-relaxed italic">
              "{rev.response}"
            </p>
          </div>
        )}
      </div>

      {/* Author Footer */}
      <div className="mt-5 pt-3.5 border-t border-border/25 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground font-display font-extrabold text-xs shadow-md shrink-0 ring-2 ring-primary/25"
            style={{ backgroundColor: rev.avatarColor }}
          >
            {rev.initials}
          </div>
          <div className="min-w-0">
            <p className="font-display font-bold text-sm text-foreground leading-tight truncate">
              {rev.name}
            </p>
            <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
              {rev.location} • {rev.role}
            </p>
          </div>
        </div>
        <span className="shrink-0 text-[10px] font-extrabold uppercase tracking-wider text-primary/90 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">
          5.0 ★
        </span>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section 
      id="reviews" 
      className="relative bg-secondary/35 py-[60px] border-b border-border/30 overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Background ambient lighting blooms */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        
        {/* Section Header & Aggregate Score Card */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
              <Star className="w-3.5 h-3.5 fill-current" /> Verified Client Experiences
            </span>
            <h2 className="mt-3.5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] tracking-tight">
              Trust Earned On Every Project.<br />
              <span className="gradient-text-gold">Validated By Homeowners.</span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              Read authentic feedback from discerning homeowners across the metro area whose residences we have honored and transformed.
            </p>
          </div>

          {/* Aggregate Score Card */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-card/90 dark:bg-card/70 border border-primary/30 backdrop-blur-xl flex items-center gap-4 sm:gap-6 shadow-xl shrink-0">
            <div className="text-center shrink-0">
              <strong className="block font-display text-3xl sm:text-5xl font-extrabold gradient-text-gold">
                5.0
              </strong>
              <div className="flex gap-1 text-amber-400 mt-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="border-l border-border/40 pl-4 sm:pl-6 space-y-0.5 sm:space-y-1">
              <p className="text-xs font-extrabold text-foreground uppercase tracking-wider">
                120+ Verified Reviews
              </p>
              <p className="text-[10.5px] sm:text-[11px] text-muted-foreground font-medium">
                Google Reviews & Houzz Best of Design
              </p>
              <div className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-primary pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Client Recommended</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Full-bleed Infinite Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden mt-4">
        {/* Side feathering gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 md:w-52 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 md:w-52 bg-gradient-to-l from-background via-background/80 to-transparent z-20" />

        {/* ROW 1: Scrolling Right to Left */}
        <div className="flex w-max gap-5 sm:gap-6 animate-marquee hover-pause py-2">
          {/* 4 concatenated cycles ensure 100% gapless loop on all screen sizes up to 5K */}
          {[...row1Reviews, ...row1Reviews, ...row1Reviews, ...row1Reviews].map((rev, idx) => (
            <TestimonialCard key={`r1-${idx}`} rev={rev} />
          ))}
        </div>

        {/* ROW 2: Scrolling Left to Right */}
        <div className="flex w-max gap-5 sm:gap-6 animate-marquee-reverse hover-pause py-2 mt-2 sm:mt-3">
          {/* 4 concatenated cycles ensure 100% gapless loop on all screen sizes up to 5K */}
          {[...row2Reviews, ...row2Reviews, ...row2Reviews, ...row2Reviews].map((rev, idx) => (
            <TestimonialCard key={`r2-${idx}`} rev={rev} />
          ))}
        </div>
      </div>

      {/* Trust Guarantee Strip */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 mt-12">
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-semibold text-muted-foreground border-t border-border/30 pt-6">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Fixed-Price Contract Guarantee
          </span>
          <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-primary/40" />
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Daily HEPA Clean Protocol
          </span>
          <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-primary/40" />
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Dedicated On-Site Superintendent
          </span>
          <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-primary/40" />
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> 20-Year Structural Warranty
          </span>
        </div>
      </div>
    </section>
  );
}
