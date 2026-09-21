import { 
  Sparkles, 
  Home, 
  Ruler, 
  Hammer, 
  Wrench, 
  Layers, 
  Paintbrush, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Award,
  BadgeCheck,
  Building,
  Maximize2,
  Sliders,
  Flame,
  Droplets,
  HardHat,
  Compass
} from "lucide-react";
import { images } from "@/lib/images";

export interface ServiceTier {
  name: string;
  scope: string;
  badge?: string;
  desc: string;
  features: string[];
}

export interface ServicePhase {
  number: string;
  title: string;
  timeline: string;
  desc: string;
  deliverables: string[];
}

export interface ServicePillar {
  title: string;
  desc: string;
  icon: any;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetailData {
  id: string;
  slug: string;
  title: string;
  navTitle: string;
  categoryLabel: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  secondaryImage: string;
  trustPills: { label: string; icon: any }[];
  overviewLead: string;
  overviewStory: string[];
  pillars: ServicePillar[];
  scopeTitle: string;
  scopeSubtitle: string;
  scopeItems: { category: string; title: string; desc: string }[];
  materialsTitle: string;
  materialsSubtitle: string;
  materials: { name: string; grade: string; desc: string }[];
  tiers: ServiceTier[];
  phases: ServicePhase[];
  caseStudy: {
    location: string;
    neighborhood: string;
    timeline: string;
    headline: string;
    quote: string;
    author: string;
    stats: { label: string; value: string }[];
  };
  faqs: ServiceFAQ[];
}

export const servicesDataMap: Record<string, ServiceDetailData> = {
  "kitchen-remodeling": {
    id: "kitchen",
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling & Custom Cabinetry",
    navTitle: "Kitchen Remodeling",
    categoryLabel: "Signature Discipline",
    tagline: "Architectural Kitchen Transformations",
    heroHeadline: "Culinary Precision. Bespoke Joinery. Engineered For Entertaining.",
    heroSubheadline: "From custom floor-to-ceiling solid maple cabinetry and book-matched waterfall quartz islands to integrated panel-ready refrigeration, we build kitchens that serve as the architectural heart of your home.",
    heroImage: images.kitchen,
    secondaryImage: images.kitchenModern,
    trustPills: [
      { label: "100% Custom Benchmade Cabinets", icon: Award },
      { label: "5-Year Written Warranty", icon: ShieldCheck },
      { label: "Guaranteed Fixed-Price Bids", icon: BadgeCheck },
      { label: "Full MEP & Structural Permitting", icon: HardHat },
    ],
    overviewLead: "The modern kitchen is no longer a secluded utility room—it is the epicenter of daily family life and luxury entertaining.",
    overviewStory: [
      "At Progress Interior Designs, our kitchen remodels balance high-performance culinary functionality with exquisite architectural aesthetics. Whether you require removing a load-bearing wall to create a sweeping 30-foot open-concept living zone or engineering a dedicated scullery kitchen with concealed pantry access, our master tradesmen execute every detail with zero guesswork.",
      "We design and fabricate all cabinetry in-house, selecting furniture-grade hardwoods, heavy-duty soft-close Blum hardware, and durable multi-coat polyurethane finishes that resist moisture, heat, and everyday wear for decades."
    ],
    pillars: [
      {
        title: "Bespoke In-House Cabinetry",
        desc: "3/4-inch solid plywood box construction, solid maple dovetail drawers, full-extension soft-close slides, and custom interior pullouts tailored to your cookware.",
        icon: Sparkles,
      },
      {
        title: "Architectural Stone & Islands",
        desc: "Precision CNC mitering, book-matched veining, seamless waterfall edges, and undermount sinks installed in Cambria, Caesarstone, and natural Italian marble.",
        icon: Maximize2,
      },
      {
        title: "Structural Wall Removal",
        desc: "In-house licensed structural engineering for load-bearing wall removals, installing flush steel or LVL beams to unify your kitchen and living areas.",
        icon: Hammer,
      },
      {
        title: "Appliance & MEP Integration",
        desc: "Dedicated 240V circuits, high-CFM makeup air ductwork for 48” professional ranges, and flush panel installations for Sub-Zero, Wolf, and Thermador.",
        icon: Sliders,
      },
    ],
    scopeTitle: "Comprehensive Kitchen Scope of Work",
    scopeSubtitle: "Every trade, every permit, every fixture managed under one dedicated project director.",
    scopeItems: [
      { category: "Demolition & Prep", title: "Dust-Controlled Surgical Demolition", desc: "Negative-air HEPA scrubbers, zip-wall plastic barriers, and complete floor protection throughout the home." },
      { category: "Structural & Framing", title: "Beam Installation & Ceiling Elevation", desc: "Load-bearing partition removals, flush beam recessing, and drywall framing for architectural coffered or tray ceilings." },
      { category: "Plumbing Rough-In", title: "Reconfigured Water & Gas Lines", desc: "PEX water supply lines, pot-filler rough-ins, undermount prep sinks, and high-flow natural gas lines for commercial cooktops." },
      { category: "Electrical & Lighting", title: "Layered Architectural Lighting", desc: "Under-cabinet LED channel lighting, recessed 3000K warm downlights, statement island pendants, and dedicated appliance circuits." },
      { category: "Custom Cabinetry", title: "Full-Height Custom Joinery", desc: "Floor-to-ceiling pantry walls, spice pullouts, trash recycling centers, appliance garages, and custom island panels." },
      { category: "Surfaces & Tile", title: "Countertops & Full-Height Backsplash", desc: "Quartz and quartzite slab fabrication, laser-leveled installation, and hand-tiled mosaic or full-slab quartz splash." },
      { category: "Ventilation", title: "High-CFM Exterior Range Hood Ducting", desc: "Rigid metal ducting with exterior damper venting and integrated make-up air systems compliant with local DFW codes." },
      { category: "Finishes", title: "Trim, Hardware & Designer Paint", desc: "Crown molding, cabinet hardware installation, touchless faucets, and Level 5 finish painting." },
    ],
    materialsTitle: "Curated Material & Finish Standards",
    materialsSubtitle: "We never use builder-grade particle board or fragile veneers. Only proven, high-end materials.",
    materials: [
      { name: "Solid Hardwood & Furniture Plywood", grade: "Cabinetry Core", desc: "3/4” Baltic birch or maple plywood boxes with zero formaldehyde off-gassing." },
      { name: "Blum Movento / Legrabox", grade: "Hardware Standard", desc: "Austrian engineered concealed soft-close runners rated for 100,000 open/close cycles." },
      { name: "Cambria & Silestone Quartz", grade: "Countertop Surfaces", desc: "Non-porous, stain-resistant, scratch-proof engineered stone with lifetime warranties." },
      { name: "Waterstone & Kohler Artifacts", grade: "Plumbing Fixtures", desc: "Solid brass faucets and undermount sound-insulated 16-gauge stainless steel or composite granite sinks." },
    ],
    tiers: [
      {
        name: "Essential Renovation",
        scope: "Targeted Kitchen Refresh",
        badge: "Targeted Refresh",
        desc: "Preserves existing plumbing locations while updating cabinetry, quartz countertops, tile backsplash, and designer hardware.",
        features: ["Semi-custom solid wood cabinets", "Premium quartz countertops (Level 2)", "Designer subway or ceramic tile backsplash", "Undermount sink & professional faucet", "Updated LED recessed lighting"],
      },
      {
        name: "Luxury Architectural",
        scope: "Comprehensive Architectural Remodel",
        badge: "Most Requested",
        desc: "Full layout reconfiguration, custom island enlargement, full-height custom cabinetry, professional appliance integration, and lighting overhaul.",
        features: ["Fully custom benchmade cabinetry to ceiling", "Waterfall quartz or quartzite island", "Reconfigured plumbing & gas lines", "Under-cabinet & toe-kick accent lighting", "Commercial hood venting & appliance installation", "5-Year craftsmanship warranty"],
      },
      {
        name: "Master Bespoke",
        scope: "Master Bespoke Estate Kitchen",
        badge: "Ultra-Premium",
        desc: "Structural wall removals, hidden scullery/butler’s pantry, exotic book-matched stone slabs, automated smart cabinetry, and high-end luxury appliances.",
        features: ["Structural load-bearing wall removal & steel beam", "Integrated butler’s pantry / hidden prep kitchen", "Book-matched natural marble or Taj Mahal quartzite", "Sub-Zero & Wolf integrated appliance package", "Custom wine storage display & coffee bar", "Full architectural 3D rendering package"],
      },
    ],
    phases: [
      {
        number: "01",
        title: "Architectural Discovery & 3D Spatial Planning",
        timeline: "Week 1–2",
        desc: "We perform laser measurements of your current kitchen, analyze structural constraints, and create interactive 3D renderings to explore layout options.",
        deliverables: ["Detailed 3D layout schematics", "Cabinetry elevation drawings", "Comprehensive scope questionnaire"],
      },
      {
        number: "02",
        title: "Material Selection & Guaranteed Fixed Bid",
        timeline: "Week 3–4",
        desc: "You visit our material showrooms or work with our designer to finalize cabinet door styles, quartz slabs, tile, hardware, and plumbing. Every line item is locked into a fixed-price contract.",
        deliverables: ["Physical material mood board", "Line-item fixed-price proposal", "Guaranteed construction schedule"],
      },
      {
        number: "03",
        title: "Dust-Controlled Craftsmanship & Inspections",
        timeline: "Week 5–10",
        desc: "Our master tradesmen manage demolition, MEP rough-ins, structural work, city inspections, cabinet installation, stone fabrication, and tile setting.",
        deliverables: ["Weekly photo & milestone updates", "Passed city municipal inspections", "Surgical dust containment"],
      },
      {
        number: "04",
        title: "White-Glove Handover & 5-Year Warranty",
        timeline: "Week 11",
        desc: "A meticulous multi-point punch list review, professional deep cleaning of all surfaces and cabinet interiors, and delivery of your 5-year written warranty.",
        deliverables: ["Detailed owner's manual & care guides", "5-Year written warranty certificate", "Final celebratory walk-through"],
      },
    ],
    caseStudy: {
      location: "Plano, TX",
      neighborhood: "Willow Bend",
      timeline: "7 Weeks",
      headline: "From Confined 1990s Oak to an Open-Concept Chef's Dream",
      quote: "Progress transformed our dark, boxed-in kitchen into a breathtaking culinary showcase. The waterfall island comfortably seats six, and the custom pantry organization eliminated all clutter. Their fixed bid didn't deviate by a single dollar.",
      author: "David & Allison H. — Willow Bend Homeowners",
      stats: [
        { label: "Square Footage", value: "480 sq ft" },
        { label: "Island Dimensions", value: "11 ft x 5 ft" },
        { label: "Cabinet Storage", value: "+65% Increase" },
        { label: "Client Satisfaction", value: "100% On-Time" },
      ],
    },
    faqs: [
      {
        q: "Can I remain in my home during a kitchen remodel?",
        a: "Yes. Over 80% of our clients stay in their homes. We establish a temporary kitchenette with your refrigerator, microwave, and coffee maker in an adjacent room, and isolate the construction zone using negative-air HEPA scrubbers and sealed zipper barriers."
      },
      {
        q: "How long does a full kitchen renovation take?",
        a: "A typical full kitchen remodel takes 6 to 9 weeks from the day demolition begins. Projects requiring major structural wall removal or custom specialty imported slabs may take 8 to 11 weeks. We provide a guaranteed schedule before breaking ground."
      },
      {
        q: "Do you handle city building permits in Dallas, Plano, and Frisco?",
        a: "Yes. We handle all architectural drawings, structural engineering stamps, permit applications, and coordinate every city inspection required for electrical, plumbing, mechanical, and framing."
      },
      {
        q: "Are your cabinetry prices competitive with big-box store cabinets?",
        a: "Our custom solid-wood cabinets are comparable in price to semi-custom big-box store offerings, but provide dramatically superior 3/4” hardwood plywood construction, custom sizing to 1/16th of an inch (no awkward filler strips), and commercial-grade finishes."
      },
      {
        q: "What warranty do you provide on kitchen renovations?",
        a: "We back all of our kitchen craftsmanship with a comprehensive 5-Year Written Warranty, alongside manufacturer warranties on hardware, plumbing fixtures, and quartz slabs."
      },
    ],
  },

  "bathroom-remodeling": {
    id: "bathroom",
    slug: "bathroom-remodeling",
    title: "Luxury Bathroom & Spa Transformations",
    navTitle: "Bathroom Remodeling",
    categoryLabel: "Master Suite Spa",
    tagline: "Private Sanctuary & Wellness Spaces",
    heroHeadline: "Curbless Showers. Radiant Heat. Five-Star Spa Serenity.",
    heroSubheadline: "Transform your master bathroom into a rejuvenating personal retreat with zero-threshold walk-in steam showers, sculptural freestanding soaking tubs, radiant heated tile flooring, and custom floating vanities.",
    heroImage: images.bathroomLuxury,
    secondaryImage: images.bathroom,
    trustPills: [
      { label: "Schluter Waterproofing Certified", icon: Droplets },
      { label: "Curbless Zero-Threshold Showers", icon: Maximize2 },
      { label: "5-Year Written Craftsmanship Warranty", icon: ShieldCheck },
      { label: "Licensed Master Plumbers & Electricians", icon: HardHat },
    ],
    overviewLead: "Your bathroom should be an oasis of calm—a private sanctuary designed for daily renewal, tactile luxury, and effortless function.",
    overviewStory: [
      "At Progress Interior Designs, we engineer bathrooms from the subfloor up with relentless attention to waterproofing, drainage slope, and ventilation. We exclusively employ certified membrane systems like Schluter-Kerdi to ensure 100% leak-proof performance for life.",
      "From frameless 3/8-inch architectural glass enclosures and thermostatic shower valves with body sprays to floating white oak vanities with undermount LED lighting, our designs blend sleek modern aesthetics with timeless comfort."
    ],
    pillars: [
      {
        title: "Schluter-Certified Waterproofing",
        desc: "Complete vapor and moisture barrier systems with flood testing before tile installation. Zero moisture migration behind shower walls or subfloors.",
        icon: Droplets,
      },
      {
        title: "Curbless Linear Drain Showers",
        desc: "Sleek zero-threshold walk-in showers with integrated linear trench drains, book-matched marble or porcelain slabs, and recessed niches.",
        icon: Maximize2,
      },
      {
        title: "Radiant Floor Heating",
        desc: "Programmable in-floor electric heating cables installed under tile with digital Wi-Fi thermostats for barefoot warmth during brisk mornings.",
        icon: Flame,
      },
      {
        title: "Custom Floating Vanities",
        desc: "Furniture-grade vanities with mitered quartz drop aprons, undermount sinks, anti-fog LED mirrors, and concealed interior outlets.",
        icon: Sparkles,
      },
    ],
    scopeTitle: "Complete Master Bathroom Scope",
    scopeSubtitle: "Engineered for lifetime leak-proof durability and uncompromising spa aesthetics.",
    scopeItems: [
      { category: "Demolition & Prep", title: "Subfloor & Wall Strip Down", desc: "Complete removal of outdated tubs, fiberglass enclosures, and drywall to inspect framing and subfloor integrity." },
      { category: "Waterproofing", title: "Full Schluter Membrane & Flood Test", desc: "Kerdi waterproof membrane on all wet walls and pan, with mandatory 24-hour standing water flood inspection." },
      { category: "Plumbing", title: "Thermostatic Valves & Body Jets", desc: "Rough-in for multi-function thermostatic valves, rain showerheads, hand sprayers, and freestanding tub fillers." },
      { category: "Electrical & HVAC", title: "Silent Exhaust & Heated Floors", desc: "Ultra-quiet Panasonic WhisperWarm exhaust fans (under 0.3 sones) and Schluter DITRA-HEAT in-floor wiring." },
      { category: "Tile & Stone", title: "Large-Format Tile & Mitered Niches", desc: "Precision setting of 24”x48” porcelain or natural marble tiles with epoxy grout and pencil-mitered shampoo niches." },
      { category: "Architectural Glass", title: "10mm Frameless Glass Enclosures", desc: "Custom-tempered heavy glass doors and panels with EnduroShield protective water-repellent coating." },
      { category: "Custom Vanities", title: "Custom Millwork & Quartz Tops", desc: "Bespoke double or single vanities with soft-close U-shaped plumbing drawers and quartz countertops." },
      { category: "Luxury Accents", title: "Heated Towel Warmers & Mirrors", desc: "Hardwired stainless steel towel warmers, backlit LED vanity mirrors with defoggers, and designer hardware." },
    ],
    materialsTitle: "Premium Wet-Area Materials",
    materialsSubtitle: "Moisture-impervious materials crafted for longevity and effortless maintenance.",
    materials: [
      { name: "Schluter-Systems (Kerdi & Ditra)", grade: "Waterproofing Standard", desc: "The gold standard in bonded waterproofing membranes with uncoupling crack isolation." },
      { name: "Porcelain & Italian Marble", grade: "Surfaces & Flooring", desc: "Rectified, non-slip textured floor tiles and polished wall slabs resistant to thermal shock." },
      { name: "Brizo & Kohler Purist", grade: "Plumbing Fixtures", desc: "Solid brass thermostatic rough-in valves, pressure-balanced rain heads, and handheld wands." },
      { name: "Victoria + Albert Volcanic Limestone", grade: "Soaking Tubs", desc: "Naturally warm-to-touch freestanding bathtubs that retain heat significantly longer than acrylic." },
    ],
    tiers: [
      {
        name: "Guest / Powder Bath",
        scope: "Secondary & Powder Bath Update",
        badge: "Secondary Bath",
        desc: "Upgraded designer tile, custom vanity, new Kohler toilet, designer mirror, modern lighting, and frameless glass slider.",
        features: ["Schluter waterproof tub/shower surround", "Custom 48” vanity with quartz top", "Designer porcelain tile flooring & shower walls", "Kohler or Moen plumbing fixtures", "Frameless glass sliding door"],
      },
      {
        name: "Luxury Master Suite",
        scope: "Master Suite Spa Transformation",
        badge: "Most Popular",
        desc: "Curbless walk-in shower with rain head and handheld, freestanding soaking tub, custom double vanity, and heated tile floors.",
        features: ["Zero-threshold curbless shower with linear drain", "Freestanding soaking tub & floor-mount filler", "Custom dual-sink floating or furniture vanity", "Programmable radiant in-floor heating", "10mm frameless glass enclosure", "5-Year craftsmanship warranty"],
      },
      {
        name: "Master Wellness Spa",
        scope: "Master Wellness Spa Retreat",
        badge: "Bespoke Retreat",
        desc: "Integrated steam shower with aroma therapy, chromotherapy lighting, book-matched slab walls, private water closet, and custom dressing vanity.",
        features: ["Fully enclosed steam shower with digital controls", "Book-matched natural marble or quartz slab walls", "Custom white oak his-and-hers vanity suites", "Automated smart bidet toilet (Toto Neorest)", "Heated benches, niches, and floor zones", "Full 3D architectural rendering"],
      },
    ],
    phases: [
      {
        number: "01",
        title: "Spatial Optimization & Plumbing Design",
        timeline: "Week 1–2",
        desc: "We analyze drain run slopes, evaluate window placements for natural illumination, and plan vanity storage configurations in 3D.",
        deliverables: ["3D bathroom layout visualization", "Plumbing fixture specification book", "Tile layout schematics"],
      },
      {
        number: "02",
        title: "Fixture Selection & Fixed Proposal",
        timeline: "Week 3",
        desc: "Select your soaking tub, shower valve trims, quartz vanity tops, and tile selections. Receive a detailed line-item fixed quote.",
        deliverables: ["Curated sample box", "Fixed-price contract", "Targeted milestone schedule"],
      },
      {
        number: "03",
        title: "Waterproofing, Rough-In & Tile Setting",
        timeline: "Week 4–7",
        desc: "Tear out to studs, reconfigure plumbing, install Schluter membrane, conduct flood test, and meticulously set tile with laser alignment.",
        deliverables: ["24-Hour flood test verification", "City plumbing & electrical sign-off", "Laser-leveled tile setting"],
      },
      {
        number: "04",
        title: "Glass Installation & Final Turnover",
        timeline: "Week 8",
        desc: "Custom laser-measured glass installation, fixture trim out, sealing, deep sanitization, and delivery of your 5-year warranty.",
        deliverables: ["Multi-point punch list completion", "Care instructions for stone and glass", "5-Year written warranty certificate"],
      },
    ],
    caseStudy: {
      location: "Frisco, TX",
      neighborhood: "Starwood",
      timeline: "5 Weeks",
      headline: "A Master Suite Bathroom Transformed Into a 5-Star Spa",
      quote: "Progress converted our dated brass-and-acrylic master bath into an unbelievable haven. The curbless shower with the rain head and heated floors feels like staying at the Four Seasons every single day.",
      author: "Marcus & Elena V. — Starwood Homeowners",
      stats: [
        { label: "Shower Footprint", value: "7 ft x 5 ft" },
        { label: "Tub Model", value: "Freestanding Resin" },
        { label: "Floor Heat", value: "Schluter DITRA" },
        { label: "Completion Time", value: "5.5 Weeks" },
      ],
    },
    faqs: [
      {
        q: "What makes a curbless walk-in shower leak-proof?",
        a: "A curbless shower requires precise structural modification. We gently recess the subfloor framing or utilize specialized pre-sloped trays, paired with a continuous Schluter-Kerdi waterproof membrane that ties seamlessly from the shower pan across the entire bathroom floor."
      },
      {
        q: "How long does a master bathroom remodel typically take?",
        a: "A typical master bathroom renovation requires 4 to 6 weeks. High-end spa projects involving steam generators, slab walls, or extensive structural wall movements take approximately 6 to 8 weeks."
      },
      {
        q: "Do radiant heated floors use a lot of electricity?",
        a: "No. Modern electric radiant systems use approximately the same energy as three standard light bulbs. With programmable digital Wi-Fi thermostats, you can set them to warm up 30 minutes before your morning routine and automatically turn off afterward."
      },
      {
        q: "Can you eliminate our bulky garden tub and expand the shower?",
        a: "Yes. In fact, that is our single most popular request in Dallas and Frisco. We remove the bulky 1990s jetted deck tub, open up the floor plan, expand the shower footprint, and place an elegant freestanding soaking tub in its place."
      },
      {
        q: "What warranty do you offer on shower waterproofing?",
        a: "We provide our own 5-Year Written Craftsmanship Warranty on all labor and installations, and because we use certified Schluter components, your installation is backed by comprehensive manufacturer warranty protection."
      },
    ],
  },

  "whole-home-renovation": {
    id: "whole-home",
    slug: "whole-home-renovation",
    title: "Whole-Home Architectural Renovations",
    navTitle: "Whole-Home Renovation",
    categoryLabel: "Turnkey Renovation",
    tagline: "Comprehensive Residential Transformations",
    heroHeadline: "Reimagine Every Square Foot. Cohesive Architectural Elegance.",
    heroSubheadline: "Complete interior reconfigurations, load-bearing wall removals, unified flooring, updated MEP infrastructure, and master suite expansions executed under a single, accountable project director.",
    heroImage: images.architectural,
    secondaryImage: images.livingRoom,
    trustPills: [
      { label: "Turnkey General Contracting", icon: Building },
      { label: "Licensed Architectural & MEP Engineering", icon: HardHat },
      { label: "Single Point of Accountability", icon: ShieldCheck },
      { label: "100% Fixed-Price Line Item Bid", icon: BadgeCheck },
    ],
    overviewLead: "A whole-home renovation is the ultimate realization of your property’s potential—bridging historical charm or dated layouts with modern flow, natural light, and engineering integrity.",
    overviewStory: [
      "Instead of dealing with piecemeal updates from disconnected contractors, a comprehensive whole-home renovation unifies your architectural language from the front entryway to the back patio. We eliminate claustrophobic compartmentalized rooms, raise ceilings where possible, replace aged plumbing and electrical panels, and create harmonious design continuity.",
      "With Progress Interior Designs, you get an experienced project executive dedicated exclusively to your residence, ensuring that framing, structural steel, rough-ins, drywall, and finish carpentry progress on an uncompromising schedule."
    ],
    pillars: [
      {
        title: "Open-Concept Reconfiguration",
        desc: "Removing structural walls, integrating hidden steel beams, and establishing grand sightlines between kitchens, dining rooms, and expansive living areas.",
        icon: Maximize2,
      },
      {
        title: "Complete MEP Modernization",
        desc: "Replacing outdated galvanized plumbing with PEX, upgrading electrical panels to 200A/400A, and balancing multi-zone HVAC ductwork.",
        icon: Sliders,
      },
      {
        title: "Unified Finish Language",
        desc: "Cohesive wide-plank hardwood flooring, uniform trim and door packages, designer paint palettes, and architectural lighting throughout.",
        icon: Sparkles,
      },
      {
        title: "Dedicated On-Site Superintendent",
        desc: "A single senior superintendent on your job site every day, maintaining schedule velocity, cleanliness, and strict quality assurance.",
        icon: HardHat,
      },
    ],
    scopeTitle: "Full-Scale Renovation Capabilities",
    scopeSubtitle: "A complete turnkey scope covering all trades from structural engineering to final white-glove styling.",
    scopeItems: [
      { category: "Design & Permitting", title: "Architectural Plans & Municipal Approvals", desc: "Full architectural CAD drawings, structural engineer wet stamps, and complete city permitting in Dallas/Fort Worth." },
      { category: "Selective Demolition", title: "Whole-House Dust-Controlled Demo", desc: "Systematic room-by-room strip down with air filtration, dumpster logistics, and structural shoring." },
      { category: "Structural Engineering", title: "Load-Bearing Wall Removal & Beams", desc: "Engineered LVL and steel beam installations to open up floor plans and span wide architectural openings." },
      { category: "Infrastructure", title: "Electrical, Plumbing & HVAC Overhaul", desc: "Upgraded 200A electrical service, whole-home rewiring, modern PEX manifolds, and balanced duct distribution." },
      { category: "Envelope & Insulation", title: "Soundproofing & Thermal Efficiency", desc: "Rockwool safe-and-sound acoustic insulation in interior partitions and spray foam insulation in attics/exterior walls." },
      { category: "Drywall & Ceilings", title: "Level 5 Smooth Wall Standard", desc: "Laser-straight drywall finishing, seamless ceiling transitions, and elimination of outdated heavy acoustic textures." },
      { category: "Doors, Windows & Trim", title: "Interior Architecture & Joinery", desc: "Solid-core 8-foot interior doors, contemporary baseboards, casing, and energy-efficient window replacements." },
      { category: "Finishes & Turnkey", title: "Kitchen, Bathrooms, Flooring & Paint", desc: "Integrated installation of new kitchen, all bathrooms, continuous flooring, and multi-tone designer painting." },
    ],
    materialsTitle: "Architectural Building Standards",
    materialsSubtitle: "High-performance materials engineered to outlast decades of family living.",
    materials: [
      { name: "Engineered Steel & LVL Headers", grade: "Structural Core", desc: "High-load architectural steel flitch plates and laminated veneer lumber for wide wall spans." },
      { name: "PEX-A (Uponor) Plumbing", grade: "Water Distribution", desc: "Expandable cross-linked polyethylene piping resistant to freezing, pinhole leaks, and mineral scale." },
      { name: "Square D QO Electrical Panels", grade: "Electrical Infrastructure", desc: "Commercial-grade breaker panels with whole-home surge protection and arc-fault breakers." },
      { name: "Solid Core Shaker / Flush Doors", grade: "Interior Millwork", desc: "Heavy acoustic-dampening interior doors paired with Baldwin or Emtek architectural hardware." },
    ],
    tiers: [
      {
        name: "Main-Floor Reconfiguration",
        scope: "Main-Floor Architectural Reconfiguration",
        badge: "Core Living Area",
        desc: "Focuses on the public living areas: open-concept kitchen, dining, living room, powder room, continuous flooring, and lighting overhaul.",
        features: ["Kitchen & powder room full remodel", "Load-bearing wall removal (up to 20 ft)", "Continuous wide-plank hardwood or LVP", "Level 5 drywall & designer paint", "Upgraded LED architectural lighting"],
      },
      {
        name: "Comprehensive Full Home",
        scope: "Comprehensive Full-Home Renovation",
        badge: "Complete Interior",
        desc: "Complete interior overhaul of a 2,500–4,000 sq ft home: kitchen, master bath, guest baths, all bedrooms, electrical, plumbing, and doors.",
        features: ["Complete kitchen & 3+ bathroom renovations", "Multiple structural wall removals & beam recesses", "Whole-house plumbing and electrical update", "New interior doors, baseboards, and casing", "Continuous hardwood flooring throughout", "5-Year comprehensive craftsmanship warranty"],
      },
      {
        name: "Bespoke Estate Transformation",
        scope: "Bespoke Estate Transformation",
        badge: "Luxury Estate",
        desc: "Architectural estate transformation including structural additions, custom smart home automation, high-end imported finishes, and exterior facade integration.",
        features: ["Floor plan reconfiguration & square footage additions", "Bespoke cabinetry in kitchen, baths, and closets", "Lutron smart lighting & motorized shades", "High-performance exterior doors and window package", "Dedicated project superintendent on-site daily", "Full interior designer collaboration"],
      },
    ],
    phases: [
      {
        number: "01",
        title: "Feasibility, 3D Architectural Design & Engineering",
        timeline: "Month 1",
        desc: "Comprehensive laser measurement of the entire residence, structural load analysis by licensed engineers, and full 3D interior architecture modeling.",
        deliverables: ["Full architectural drawing set", "Structural engineering stamped plans", "Complete city permit submission package"],
      },
      {
        number: "02",
        title: "Guaranteed Fixed-Price Contract & Procurement",
        timeline: "Month 2",
        desc: "Complete material cataloging—all tile, stone, cabinetry, fixtures, and flooring are finalized and ordered before demolition to eliminate construction delays.",
        deliverables: ["Fixed-price guaranteed contract", "Detailed procurement log", "Critical-path construction timeline"],
      },
      {
        number: "03",
        title: "Structural Execution, MEP Rough-Ins & Drywall",
        timeline: "Month 3–5",
        desc: "Systematic demolition, temporary shoring, beam installation, rough-in of all plumbing/electrical/HVAC, city inspections, insulation, and Level 5 drywall.",
        deliverables: ["Weekly superintendent milestone briefings", "Signed city inspection cards", "Clean site protocols"],
      },
      {
        number: "04",
        title: "Master Finish Carpentry & White-Glove Handover",
        timeline: "Month 6",
        desc: "Cabinetry installation, stone fabrication, hardwood installation, tile setting, fixture trim out, paint, punch list, and full professional deep clean.",
        deliverables: ["Zero-punch-list sign-off", "Operation manuals & warranty binders", "5-Year written warranty certificate"],
      },
    ],
    caseStudy: {
      location: "Dallas, TX",
      neighborhood: "Preston Hollow",
      timeline: "14 Weeks",
      headline: "A Complete 1970s Ranch Transformed Into Modern Luxury",
      quote: "Progress took a choppy, dark 3,800 sq ft 1970s ranch and turned it into an open, light-filled masterpiece. Having one team coordinate the structural beams, new plumbing, kitchen, and 4 bathrooms made what could have been a nightmare completely seamless.",
      author: "Robert & Cynthia K. — Preston Hollow Homeowners",
      stats: [
        { label: "Total Area", value: "3,850 sq ft" },
        { label: "Walls Removed", value: "4 Structural" },
        { label: "Bathrooms", value: "4 Remodeled" },
        { label: "Timeline", value: "14 Weeks Flat" },
      ],
    },
    faqs: [
      {
        q: "Can we live in the house during a whole-home renovation?",
        a: "For full whole-home renovations involving all bathrooms, kitchen, and major structural reconfigurations, we generally recommend renting temporary housing for 2–3 months during the heavy demolition, MEP rough-in, and drywall phases. If phased living is required, we can isolate zones."
      },
      {
        q: "How do you prevent massive budget overruns on large renovations?",
        a: "We prevent overruns through our radical upfront engineering. Before we begin demolition, every wall opening has structural engineering calculations, and all materials, fixtures, and finishes are specified in writing with guaranteed fixed-price line items."
      },
      {
        q: "Do you handle the city building permits in Dallas, Plano, and Frisco?",
        a: "Yes. We manage all paperwork, architectural drawings, structural engineer reviews, city submittals, and schedule every municipal inspection from framing through final occupancy."
      },
      {
        q: "How long does a whole-home renovation usually take?",
        a: "A comprehensive interior renovation of a 2,500 to 4,000 sq ft home typically requires 12 to 16 weeks of active construction once permits are approved and materials are delivered."
      },
      {
        q: "What warranty comes with a whole-home renovation?",
        a: "Every whole-home renovation by Progress Interior Designs comes with our comprehensive 5-Year Written Craftsmanship Warranty, covering all structural modifications, plumbing, electrical, and finish carpentry."
      },
    ],
  },

  "foundation-repair": {
    id: "structural",
    slug: "foundation-repair",
    title: "Foundation Repair & Structural Engineering",
    navTitle: "Foundation Repair",
    categoryLabel: "Engineered Core",
    tagline: "Structural Integrity & Stabilization",
    heroHeadline: "Protect Your Property's Core. Engineered Structural Precision.",
    heroSubheadline: "North Texas expansive clay soils demand engineering-grade stabilization. We specialize in steel piering, foundation leveling, load-bearing beam modifications, and lifetime structural peace of mind.",
    heroImage: images.foundation,
    secondaryImage: images.craft,
    trustPills: [
      { label: "Licensed Structural Engineer Stamped", icon: HardHat },
      { label: "Hydraulic Steel Pier Systems", icon: Hammer },
      { label: "Transferable Lifetime Warranty", icon: ShieldCheck },
      { label: "DFW Clay Soil Stabilization Experts", icon: BadgeCheck },
    ],
    overviewLead: "In North Texas, a home’s beauty is only as reliable as the foundation beneath it.",
    overviewStory: [
      "The volatile, high-plasticity clay soils of Dallas, Plano, Frisco, and Collin County expand dramatically when wet and contract violently during summer droughts. This movement causes drywall cracks, sticking doors, uneven floors, and compromised structural integrity.",
      "Progress Interior Designs approaches foundation repair from a rigorous engineering perspective. Rather than guessing, we partner with independent licensed structural engineers to conduct elevation surveys, determine exact soil strata depth, and install heavy-wall steel piers driven down to true load-bearing bedrock."
    ],
    pillars: [
      {
        title: "Heavy-Duty Steel Piering",
        desc: "Interlocking galvanized steel pier sections driven hydraulically to bedrock or refusal (up to 35+ feet deep) for permanent settlement prevention.",
        icon: Hammer,
      },
      {
        title: "Load-Bearing Wall Removal",
        desc: "Calculating tributary roof and floor loads, sizing steel wide-flange or LVL beams, and transferring loads cleanly to reinforced footings.",
        icon: Maximize2,
      },
      {
        title: "Foundation Leveling & Elevation",
        desc: "Using calibrated hydraulic manifolds to raise settled foundations back to original engineered elevation without damaging plumbing or framing.",
        icon: Sliders,
      },
      {
        title: "Under-Slab Plumbing Assessment",
        desc: "Static pressure testing and camera line inspections before and after leveling to ensure sanitary sewer pipes remain intact.",
        icon: Droplets,
      },
    ],
    scopeTitle: "Comprehensive Structural & Foundation Capabilities",
    scopeSubtitle: "Certified engineering solutions to restore and protect your home's structural integrity.",
    scopeItems: [
      { category: "Diagnostic", title: "Laser Elevation Survey & Soil Analysis", desc: "Full floor elevation mapping with zip levels to record settlement variances down to 1/10th of an inch." },
      { category: "Engineering", title: "Stamped Structural Engineering Plan", desc: "Independent PE-stamped drawings outlining pier locations, depth requirements, and load calculations." },
      { category: "Excavation", title: "Hand-Dug Exterior & Interior Access", desc: "Careful excavation around foundation perimeter, preserving landscaping and exterior concrete where possible." },
      { category: "Pier Installation", title: "Hydraulic Steel Pier Driving", desc: "Driving 2-7/8” heavy-wall galvanized steel piers down to solid bedrock using high-tonnage hydraulic rams." },
      { category: "Hydraulic Lift", title: "Synchronized Elevation Recovery", desc: "Simultaneous multi-cylinder hydraulic lifting to gently restore the foundation to level tolerances." },
      { category: "Locking & Backfill", title: "Steel Bracket Locking & Compaction", desc: "Bolting heavy steel brackets, torquing lock nuts, backfilling excavations, and tamping soil to 95% compaction." },
      { category: "Plumbing Verification", title: "Pre & Post Static Plumbing Testing", desc: "Testing water and sewer lines before and after lift to verify zero pipe fractures occurred." },
      { category: "Cosmetic Restoration", title: "Mortar, Brick & Drywall Repairs", desc: "Tuck-pointing cracked exterior brick mortar joints and repairing interior settlement drywall stress cracks." },
    ],
    materialsTitle: "Engineered Stabilization Hardware",
    materialsSubtitle: "Commercial-grade steel and polymer systems built to withstand North Texas clay movement.",
    materials: [
      { name: "Double-Walled Galvanized Steel Piers", grade: "Structural Piering", desc: "High-yield steel tubing driven to true bedrock, impervious to soil moisture fluctuations." },
      { name: "Heavy-Gauge Carbon Steel Brackets", grade: "Foundation Support", desc: "Precision-welded 1/2” steel saddle brackets designed to support up to 50,000 lbs per pier." },
      { name: "High-Density Polyurethane Foam", grade: "Void Fill & Slab Jacking", desc: "Hydro-insensitive expanding foam injected beneath slabs to fill subterranean voids left by lifting." },
      { name: "Carbon Fiber Kevlar Straps", grade: "Basement / Stem Wall", desc: "Tensile reinforcement straps bonded to concrete walls to permanently halt inward bowing." },
    ],
    tiers: [
      {
        name: "Targeted Corner / Wall Repair",
        scope: "Targeted Settlement Stabilization",
        badge: "Minor Settlement",
        desc: "Stabilizes a single dropped corner or settling exterior wall with 6 to 12 exterior steel piers and minor elevation recovery.",
        features: ["6–12 Hydraulic steel piers", "Laser elevation survey", "Pre & post plumbing static test", "Backfill and landscape preservation", "Transferable lifetime warranty"],
      },
      {
        name: "Full Perimeter Stabilization",
        scope: "Full Perimeter Engineered Stabilization",
        badge: "Most Common",
        desc: "Stabilizes multiple sides or entire perimeter of a home experiencing differential settlement in DFW expansive clay.",
        features: ["15–26 Heavy-wall steel piers to bedrock", "Independent PE structural engineering stamp", "Complete hydraulic manifold synchronized lift", "Full plumbing camera inspection", "Transferable lifetime warranty"],
      },
      {
        name: "Whole-Slab & Interior Piering",
        scope: "Whole-Slab & Interior Piering",
        badge: "Major Structural",
        desc: "Interior and exterior steel piering combined with under-slab polyurethane void filling and structural beam reinforcement.",
        features: ["Interior breakout and interior steel piers", "Perimeter steel piers to bedrock", "Polyurethane void-fill foam injection", "Under-slab plumbing replacement if broken", "Complete cosmetic drywall and brick restoration"],
      },
    ],
    phases: [
      {
        number: "01",
        title: "Elevation Survey & Independent PE Inspection",
        timeline: "Day 1–3",
        desc: "We perform a computerized elevation survey of your foundation and commission an independent licensed structural engineer to stamp the repair plan.",
        deliverables: ["Elevation contour map", "Independent engineer’s report", "Itemized pier layout plan"],
      },
      {
        number: "02",
        title: "Plumbing Testing & Municipal Permitting",
        timeline: "Day 4–7",
        desc: "We conduct pre-lift static plumbing tests to establish baseline plumbing health and pull all required city permits.",
        deliverables: ["Plumbing diagnostic certificate", "City building permit", "Utility location markouts (811)"],
      },
      {
        number: "03",
        title: "Excavation, Steel Pier Driving & Elevation",
        timeline: "Day 8–12",
        desc: "Access holes are dug, steel piers are driven to bedrock refusal, and our synchronized hydraulic manifold lifts the foundation to level tolerances.",
        deliverables: ["Drive pressure logs verifying bedrock contact", "Post-lift elevation verification", "Steel bracket lock-down"],
      },
      {
        number: "04",
        title: "Post-Plumbing Verification & Lifetime Warranty",
        timeline: "Day 13–14",
        desc: "A final plumbing test ensures pipes are sound, excavations are backfilled and cleaned, and your transferable lifetime warranty is issued.",
        deliverables: ["Passing post-lift plumbing certificate", "Site restoration sign-off", "Transferable Lifetime Warranty Certificate"],
      },
    ],
    caseStudy: {
      location: "McKinney, TX",
      neighborhood: "Stonebridge Ranch",
      timeline: "6 Days",
      headline: "Stabilizing a Severely Dropped Foundation in McKinney Clay",
      quote: "Our back corner had dropped 2.8 inches, causing large diagonal cracks across our kitchen walls and sticking patio doors. Progress installed 14 steel piers down to bedrock and brought the home back to level in less than a week. Incredible professionalism.",
      author: "Gregory & Susan T. — McKinney Homeowners",
      stats: [
        { label: "Piers Installed", value: "14 Steel" },
        { label: "Depth to Bedrock", value: "28 Feet" },
        { label: "Elevation Restored", value: "2.8 Inches" },
        { label: "Warranty", value: "Lifetime" },
      ],
    },
    faqs: [
      {
        q: "What is the difference between concrete pressed pilings and steel piers?",
        a: "Concrete pressed pilings are friction-based and typically only penetrate 8–15 feet into active, moisture-sensitive clay. Steel piers are heavy-gauge galvanized pipes driven up to 30–40+ feet deep until they hit impenetrable bedrock. Steel piers provide permanent, non-shifting stability."
      },
      {
        q: "Will foundation repair ruin my interior flooring or landscaping?",
        a: "Whenever possible, we install piers from the exterior perimeter to avoid touching interior floors. When landscaping must be temporarily disturbed, our team carefully digs around shrubs, preserves sod, and replants everything upon completion."
      },
      {
        q: "Can plumbing break when the foundation is raised?",
        a: "Lifting a foundation can place stress on older cast-iron or PVC pipes. That is why Progress always conducts certified static plumbing tests both before and immediately after the lift to verify line integrity."
      },
      {
        q: "Is your foundation warranty transferable if I sell my home?",
        a: "Yes. Our lifetime structural warranty on steel piers is 100% transferable to the next homeowner at no cost, which adds significant appraisal value when selling."
      },
      {
        q: "How do I know if my foundation issues are serious?",
        a: "Common warning signs include doors that stick or swing open on their own, stair-step cracks in exterior brick mortar, diagonal drywall cracks above door frames, and gaps between walls and ceiling crown molding."
      },
    ],
  },

  "flooring": {
    id: "flooring",
    slug: "flooring",
    title: "Hardwood, Stone & Designer Flooring",
    navTitle: "Flooring & Surfaces",
    categoryLabel: "Architectural Surface",
    tagline: "Master Hardwood & Precision Tile Installation",
    heroHeadline: "Handcrafted White Oak. Herringbone Artistry. Flawless Foundations.",
    heroSubheadline: "From European wide-plank French white oak and complex chevron patterns to large-format porcelain tile and architectural stone, we deliver laser-leveled subfloors and museum-quality finish execution.",
    heroImage: images.flooring,
    secondaryImage: images.detail,
    trustPills: [
      { label: "Laser-Leveled Subfloor Guarantee", icon: Compass },
      { label: "NWFA Certified Installation Standards", icon: Award },
      { label: "Custom Stains & On-Site Finishing", icon: Paintbrush },
      { label: "5-Year Written Warranty", icon: ShieldCheck },
    ],
    overviewLead: "Flooring is the architectural canvas upon which every other interior design decision rests.",
    overviewStory: [
      "A stunning floor is only as durable as the subfloor beneath it. At Progress Interior Designs, we invest as much care into grinding concrete high spots, patching subfloor depressions, and applying moisture barriers as we do into the visible finish layer.",
      "Whether you desire 8-inch wide-plank European white oak with a matte reactive stain, intricate custom herringbone borders, or 24”x48” continuous Italian porcelain tile with 1/16” grout lines, our master floor layers execute every threshold, flush register, and transition with microscopic precision."
    ],
    pillars: [
      {
        title: "Laser Subfloor Preparation",
        desc: "Diamond grinding of concrete slabs, self-leveling underlayment pours, and moisture barrier epoxies to ensure total flatness to 1/8” over 10 feet.",
        icon: Compass,
      },
      {
        title: "Handcrafted Patterns & Borders",
        desc: "Custom herringbone, chevron, parquet, and feature borders hand-milled and scribed to walls and fireplace hearths.",
        icon: Sparkles,
      },
      {
        title: "Acoustic Sound & Moisture Barriers",
        desc: "Commercial sound-dampening underlayment and high-performance moisture mitigation membranes to prevent cupping and buckling.",
        icon: ShieldCheck,
      },
      {
        title: "Flush Architectural Transitions",
        desc: "Custom-milled flush wood base registers, zero-transition threshold reducers, and seamless transitions between hardwood and tile.",
        icon: Ruler,
      },
    ],
    scopeTitle: "Comprehensive Flooring Installation Scope",
    scopeSubtitle: "Turnkey removal, prep, leveling, installation, and custom finishing under one roof.",
    scopeItems: [
      { category: "Demolition", title: "Existing Floor & Tack Strip Removal", desc: "Dust-controlled removal of old tile, carpet, hardwood, and mastic down to bare concrete or plywood." },
      { category: "Subfloor Prep", title: "Diamond Grinding & Leveling", desc: "Grinding high spots, filling voids with self-leveling cementitious compounds, and testing concrete moisture emissions." },
      { category: "Moisture Protection", title: "Vapor Barrier & Epoxy Priming", desc: "Roll-applied moisture mitigation epoxy (Bostik or Wakol) preventing vapor transmission up to 100% RH." },
      { category: "Hardwood Installation", title: "Glue-Assist & Full-Spread Adhesion", desc: "Full-trowel urethane adhesive with sound and moisture barrier properties, eliminating squeaks and movement." },
      { category: "Tile & Stone", title: "Large-Format Tile Setting", desc: "Using mechanical leveling clips to guarantee zero lippage across 24”x48” and 30”x30” porcelain slabs." },
      { category: "Custom Staining", title: "On-Site Custom Stain Samples", desc: "Applying 3–5 custom stain formulas directly onto your installed wood for evaluation under your home's natural light." },
      { category: "Protective Finishing", title: "Bona Commercial Polyurethane", desc: "Three coats of commercial-grade waterborne polyurethane (Bona Traffic HD) for ultra-durable matte or satin finishes." },
      { category: "Millwork & Trim", title: "Baseboards, Shoe Mold & Registers", desc: "Installing matching shoe molding, tall baseboards, and custom flush-mount wooden HVAC floor vents." },
    ],
    materialsTitle: "Curated Hardwood & Stone Partners",
    materialsSubtitle: "We partner exclusively with reputable mills and stone quarries producing ethical, sustainable materials.",
    materials: [
      { name: "European French White Oak", grade: "Engineered & Solid", desc: "Slow-grown Baltic oak with 4mm–6mm dry-sawn wear layers for multiple lifetime refinishes." },
      { name: "Bona Traffic HD & Mega One", grade: "Finish System", desc: "Zero-VOC, non-yellowing commercial polyurethane with unmatched scuff and chemical resistance." },
      { name: "Large-Format Italian Porcelain", grade: "Tile & Stone", desc: "High-density, rectified porcelain slabs resistant to scratching, staining, and moisture." },
      { name: "Bostik GreenForce / Pro-Cure", grade: "Adhesive Standard", desc: "Elastomeric wood flooring adhesive providing lifetime moisture vapor protection and sound reduction." },
    ],
    tiers: [
      {
        name: "Luxury Vinyl Plank (LVP)",
        scope: "Waterproof Rigid Core LVP",
        badge: "Waterproof & Durable",
        desc: "Commercial 20mil+ wear layer rigid core LVP with integrated acoustic pad. 100% waterproof for active families with pets.",
        features: ["Subfloor prep & minor leveling", "Commercial 20mil wear layer LVP", "Moisture barrier underlayment", "Quarter round / shoe mold installation", "5-Year craftsmanship warranty"],
      },
      {
        name: "Engineered European White Oak",
        scope: "Engineered European White Oak",
        badge: "Most Popular",
        desc: "7” to 9.5” wide-plank European white oak with wire-brushed texture, UV-cured oil or matte urethane finish, full-spread adhesive.",
        features: ["Complete laser subfloor leveling", "Full-spread elastomeric adhesive with moisture barrier", "Wide-plank 7.5” to 9.5” European oak", "Flush wooden HVAC registers", "5-Year craftsmanship warranty"],
      },
      {
        name: "Solid Hardwood / Herringbone",
        scope: "Solid Hardwood & Herringbone",
        badge: "Master Craft",
        desc: "Solid white oak or walnut installed in custom herringbone or chevron patterns, sanded on-site, custom-stained, and sealed with Bona Traffic HD.",
        features: ["Laser-scribed herringbone or chevron layout", "On-site custom stain color matching", "3 Coats of Bona Traffic HD commercial finish", "Custom milled feature borders & thresholds", "Full 3D floor plan layout review"],
      },
    ],
    phases: [
      {
        number: "01",
        title: "Subfloor Moisture Testing & Laser Survey",
        timeline: "Week 1",
        desc: "We measure slab relative humidity (RH), inspect subfloor deflection, and calculate self-leveling requirements across all rooms.",
        deliverables: ["Subfloor RH moisture report", "Laser flatness contour map", "Accurate square footage takeoff"],
      },
      {
        number: "02",
        title: "Material Acclimation & Prep",
        timeline: "Week 2",
        desc: "Hardwood is delivered to your conditioned home 5–7 days prior to installation to acclimate to internal temperature and humidity.",
        deliverables: ["Moisture meter log", "Diamond grinding & leveling completion", "Adhesive and underlayment staging"],
      },
      {
        number: "03",
        title: "Precision Layout & Installation",
        timeline: "Week 3–4",
        desc: "Our master floor layers establish sightlines, snap laser gridlines, and install planks or tiles with expansion gaps and full-spread adhesive.",
        deliverables: ["Daily progress photos", "Surgical dust containment", "Passed lippage inspection"],
      },
      {
        number: "04",
        title: "Finishing, Trim & Protection",
        timeline: "Week 5",
        desc: "Application of on-site custom stain, commercial polyurethane coats, baseboards, shoe molding, and breathable floor protection for turnover.",
        deliverables: ["Care and maintenance cleaning kit", "Flush register installation", "5-Year written warranty certificate"],
      },
    ],
    caseStudy: {
      location: "Allen, TX",
      neighborhood: "Twin Creeks",
      timeline: "9 Days",
      headline: "2,400 Sq Ft of Seamless European White Oak Across 2 Floors",
      quote: "We replaced a patchwork of carpet and chipped tile with 8-inch French white oak throughout our entire first floor and staircases. Progress leveled our concrete slab so thoroughly that walking on the floors feels like solid stone.",
      author: "Brian & Stephanie M. — Allen Homeowners",
      stats: [
        { label: "Total Area", value: "2,400 sq ft" },
        { label: "Plank Width", value: "8.5 Inches" },
        { label: "Subfloor Level", value: "100% Laser True" },
        { label: "Finish", value: "Bona Traffic HD" },
      ],
    },
    faqs: [
      {
        q: "Why is subfloor preparation so critical for wide-plank wood?",
        a: "Wide planks (over 7 inches) are wider and have less flexibility than narrow strip flooring. If a concrete slab has even a 1/4-inch dip, the plank will flex, causing hollow sounds, popping, and eventual tongue-and-groove failure. We grind high spots and pour self-leveling cement to guarantee a flat foundation."
      },
      {
        q: "How long does hardwood need to acclimate before installation?",
        a: "We require solid and engineered wood to acclimate inside your conditioned home for 5 to 7 days. We use digital pinless moisture meters to verify that the wood's moisture content is within 2–4% of the subfloor before opening boxes."
      },
      {
        q: "What finish is best for homes with dogs and active children?",
        a: "We recommend a wire-brushed European white oak finished with commercial-grade waterborne polyurethane (Bona Traffic HD). The subtle wire-brushed grain masks micro-scratches, while the dual-component finish provides maximum chemical and claw resistance."
      },
      {
        q: "Can you install hardwood on a concrete slab in Texas?",
        a: "Yes. In Texas, slab-on-grade foundations are standard. We use specialized elastomeric urethane adhesives that double as a 100% moisture vapor barrier, bonding the engineered wood directly to the concrete permanently."
      },
      {
        q: "What warranty do you provide on flooring?",
        a: "We provide our 5-Year Written Craftsmanship Warranty on all installations, subfloor leveling, and transitions, alongside lifetime manufacturer warranties on select hardwood and tile collections."
      },
    ],
  },

  "basement-finishing": {
    id: "basement",
    slug: "basement-finishing",
    title: "Basement Finishing & Entertainment Suites",
    navTitle: "Basement Finishing",
    categoryLabel: "Subterranean Luxury",
    tagline: "Subterranean Architecture & Entertainment Spaces",
    heroHeadline: "Home Theaters. Wine Cellars. Private Lounges & Guest Suites.",
    heroSubheadline: "Transform unused lower-level square footage into an architectural masterpiece. We engineer climate-controlled subterranean living with full moisture barriers, custom wet bars, acoustic media rooms, and in-law suites.",
    heroImage: images.basement,
    secondaryImage: images.craft,
    trustPills: [
      { label: "Hydro-Thermal Moisture Protection", icon: Droplets },
      { label: "Acoustic Sound Isolation Engineering", icon: Sliders },
      { label: "Egress Windows & Municipal Permitting", icon: HardHat },
      { label: "5-Year Written Craftsmanship Warranty", icon: ShieldCheck },
    ],
    overviewLead: "A finished lower level offers the highest square-footage value enhancement in residential real estate.",
    overviewStory: [
      "Subterranean spaces present unique engineering demands that standard above-ground remodeling cannot address: subterranean moisture vapor transmission, inadequate ceiling clearance, mechanical obstructions, and egress code compliance.",
      "At Progress Interior Designs, we engineer your lower level from the foundation walls inward. We install continuous closed-cell thermal barriers, subfloor dimple drainage mats, and quiet acoustic insulation before crafting custom home theaters, illuminated walk-in wine cellars, wet bars, and private spa bathrooms."
    ],
    pillars: [
      {
        title: "Hydro-Thermal Vapor Barriers",
        desc: "Closed-cell spray foam and Delta-FL subfloor membranes that prevent moisture, mold, and radon intrusion permanently.",
        icon: Droplets,
      },
      {
        title: "Acoustic Media Isolation",
        desc: "Resilient sound channels, double 5/8” drywall with Green Glue, and Rockwool acoustic batts to keep home theater audio isolated.",
        icon: Sliders,
      },
      {
        title: "Custom Wet Bars & Cellars",
        desc: "Custom bar cabinetry with kegerators, ice makers, quartz counters, glass wine enclosures, and climate-controlled refrigeration.",
        icon: Sparkles,
      },
      {
        title: "Egress Windows & Full Code Safety",
        desc: "Diamond core-drilling, reinforced concrete well installation, and code-compliant egress windows for safe lower-level bedrooms.",
        icon: HardHat,
      },
    ],
    scopeTitle: "Complete Subterranean Scope of Work",
    scopeSubtitle: "Everything from waterproofing and concrete cutting to luxury custom finishes.",
    scopeItems: [
      { category: "Waterproofing", title: "Subterranean Wall & Floor Membrane", desc: "Applying moisture barrier coatings and continuous closed-cell rigid foam to isolate concrete from framing." },
      { category: "Structural & Egress", title: "Concrete Cutting & Egress Wells", desc: "Saw cutting concrete foundation walls to install Rockwell egress window wells with code-compliant ladders." },
      { category: "HVAC & Mechanical", title: "Dedicated Dehumidification & Mini-Splits", desc: "Installing high-efficiency dedicated multi-zone mini-split heat pumps and whole-basement dehumidifiers." },
      { category: "Plumbing", title: "Sewage Ejector Pit & Bath Rough-In", desc: "Trenching concrete slabs for sewage ejector pumps, full bathroom rough-ins, and wet bar water supply." },
      { category: "Electrical & Audio", title: "Home Theater Pre-Wire & 4K Lighting", desc: "Conduit runs for 7.2.4 Dolby Atmos audio, projector mounts, hidden HDMI cabling, and smart scene lighting." },
      { category: "Framing & Sound", title: "Decoupled Acoustic Framing", desc: "Framing walls with acoustic isolation clips and installing Rockwool Safe'n'Sound in ceiling joists." },
      { category: "Cabinetry & Bar", title: "Custom Wet Bar & Wine Display", desc: "Building custom bar islands with beverage centers, dishwasher drawers, and LED-illuminated bottle displays." },
      { category: "Finishes", title: "Luxury Waterproof Flooring & Doors", desc: "Installing commercial LVP or heated tile, solid core acoustic doors, and Level 5 paint finishes." },
    ],
    materialsTitle: "Subterranean-Grade Materials",
    materialsSubtitle: "Inorganic, moisture-resistant building products designed specifically for lower levels.",
    materials: [
      { name: "Closed-Cell Spray Foam Insulation", grade: "Thermal & Vapor", desc: "Provides high R-value (R-7/inch) while functioning as a continuous class II vapor retarder." },
      { name: "Delta-FL Subfloor Membrane", grade: "Flooring Base", desc: "High-density dimpled polyethylene sheet allowing concrete beneath to breathe while keeping floors warm and dry." },
      { name: "Rockwool Safe'n'Sound", grade: "Acoustic Insulation", desc: "Fire-resistant, hydrophobic stone wool that absorbs low-frequency bass and sound transmission." },
      { name: "Mold-Resistant Purple Drywall", grade: "Wall Board", desc: "Specially formulated moisture- and mold-resistant gypsum board for subterranean environments." },
    ],
    tiers: [
      {
        name: "Open Recreation & Gym",
        scope: "Open Recreation & Fitness Suite",
        badge: "Recreational Suite",
        desc: "Finishes open basement space into an expansive family media room, home gym, and powder bath with durable waterproof flooring.",
        features: ["Moisture vapor barrier & spray foam", "Open-concept drywall & LED can lighting", "Luxury vinyl plank flooring throughout", "Half bath (powder room) installation", "5-Year craftsmanship warranty"],
      },
      {
        name: "Entertainment Lounge & Bar",
        scope: "Entertainment Lounge & Custom Bar",
        badge: "Most Popular",
        desc: "Adds a custom wet bar with quartz countertops, full luxury bathroom, dedicated home theater room with acoustic isolation, and guest bedroom.",
        features: ["Custom wet bar with beverage cooler & sink", "Full 3-piece bathroom with walk-in shower", "Egress window installation for legal bedroom", "Acoustic soundproofing in theater ceiling", "Dedicated mini-split or zoned HVAC integration"],
      },
      {
        name: "Master Executive Retreat",
        scope: "Master Executive Lower-Level Retreat",
        badge: "Luxury Estate",
        desc: "Bespoke home theater with tiered seating, glass climate-controlled wine cellar, full in-law apartment suite with kitchen, and private sauna.",
        features: ["Custom tiered cinema with 7.2.4 Atmos audio", "Frameless glass walk-in wine cellar room", "Full secondary kitchen / in-law suite", "Custom sauna or steam shower suite", "Full architectural 3D rendering package"],
      },
    ],
    phases: [
      {
        number: "01",
        title: "Moisture Assessment & Architectural 3D Plan",
        timeline: "Week 1–2",
        desc: "We perform concrete moisture readings, inspect foundation walls, plan egress locations, and design 3D layouts for the space.",
        deliverables: ["Moisture test report", "3D architectural floor plan", "City permit application set"],
      },
      {
        number: "02",
        title: "Concrete Cutting, Waterproofing & Framing",
        timeline: "Week 3–5",
        desc: "Egress window cutting, subfloor trenching for plumbing, application of vapor barriers, spray foam, and decoupled framing.",
        deliverables: ["Concrete cut inspection", "Vapor barrier sign-off", "Framing milestone review"],
      },
      {
        number: "03",
        title: "MEP Rough-In & Acoustic Insulation",
        timeline: "Week 6–8",
        desc: "Plumbing ejector pump installation, electrical wiring, home theater conduit, HVAC mini-split, and acoustic sound insulation.",
        deliverables: ["City rough-in inspection approval", "Sound isolation verification", "Drywall installation"],
      },
      {
        number: "04",
        title: "Custom Bar, Finishes & Final Turnover",
        timeline: "Week 9–11",
        desc: "Custom bar cabinetry installation, quartz tops, flooring, doors, trim, lighting fixtures, painting, and white-glove turnover.",
        deliverables: ["Equipment commissioning", "Punch list completion", "5-Year written warranty certificate"],
      },
    ],
    caseStudy: {
      location: "Dallas, TX",
      neighborhood: "Lakewood",
      timeline: "8 Weeks",
      headline: "1,600 Sq Ft Basement Turned Into a Speakeasy & Theater",
      quote: "We had an unfinished, echoing basement with concrete walls. Progress turned it into a breathtaking speakeasy with a walnut wet bar, a 120-inch 4K theater room, and a gorgeous guest suite. It feels like a private club right under our home.",
      author: "Jonathan & Claire D. — Lakewood Homeowners",
      stats: [
        { label: "Finished Space", value: "1,650 sq ft" },
        { label: "Bar Material", value: "Black Walnut & Quartz" },
        { label: "Theater Screen", value: "120-Inch 4K" },
        { label: "Moisture Level", value: "0.0% Vapor Drive" },
      ],
    },
    faqs: [
      {
        q: "How do you ensure a finished basement won't smell musty?",
        a: "A musty smell is caused by moisture migrating through concrete and feeding organic materials. We prevent this by installing closed-cell foam barriers directly on concrete walls, using inorganic dimple underlayments on floors, and integrating whole-space dehumidifiers."
      },
      {
        q: "Is an egress window required in a finished basement?",
        a: "If your finished basement includes a bedroom or sleeping area, local building codes strictly require a code-compliant egress window or exterior door for emergency exit. We handle the concrete cutting, window well, and ladder installation."
      },
      {
        q: "Can you add a full bathroom if our sewer line is above the basement floor?",
        a: "Yes. We install engineered sewage ejector pump systems beneath the slab, which grind and pump wastewater up into your home’s main sewer line cleanly and quietly."
      },
      {
        q: "How long does it take to finish a typical basement?",
        a: "A typical 1,000 to 1,500 sq ft basement finishing project takes approximately 7 to 10 weeks from permit issuance to final walkthrough."
      },
      {
        q: "What warranty do you provide on basement finishes?",
        a: "All of our basement finishing work is backed by our 5-Year Written Craftsmanship Warranty, covering all framing, waterproofing, plumbing, electrical, and cabinetry."
      },
    ],
  },

  "custom-millwork": {
    id: "millwork",
    slug: "custom-millwork",
    title: "Custom Architectural Millwork & Built-Ins",
    navTitle: "Architectural Millwork",
    categoryLabel: "Master Joinery",
    tagline: "Handcrafted Woodwork & Bespoke Architectural Elements",
    heroHeadline: "Bespoke Built-Ins. Coffered Ceilings. Master Finish Carpentry.",
    heroSubheadline: "From floor-to-ceiling library suites and floating fireplace media walls to hidden flush doors and authentic coffered ceilings, our master cabinetmakers create architectural statements tailored to your home.",
    heroImage: images.millwork,
    secondaryImage: images.livingRoom,
    trustPills: [
      { label: "Master Cabinetmakers & Joiners", icon: Award },
      { label: "Furniture-Grade Hardwoods", icon: Sparkles },
      { label: "Zero-Reveal Hidden Door Systems", icon: Maximize2 },
      { label: "5-Year Written Warranty", icon: ShieldCheck },
    ],
    overviewLead: "True architectural luxury is distinguished by the craftsmanship of its millwork.",
    overviewStory: [
      "Stock trim and flat-pack built-ins cannot capture the grandeur of a bespoke residence. At Progress Interior Designs, our master carpenters approach every fireplace mantel, wall panel, and ceiling detail as a work of fine furniture.",
      "We select kiln-dried hardwoods like American black walnut, quartersawn white oak, and hard maple, milling custom profiles that integrate seamlessly with your home's unique dimensions. From secret book-case doors on heavy pivot hinges to LED-lit floating display shelving, our joinery defines refinement."
    ],
    pillars: [
      {
        title: "Floor-to-Ceiling Built-Ins",
        desc: "Custom library shelving, home office credenzas, and media walls with concealed wire management and integrated LED channel lighting.",
        icon: Sparkles,
      },
      {
        title: "Coffered & Beam Ceilings",
        desc: "Precision-milled box beams, tongue-and-groove white oak ceilings, and deep-relief coffered grid work that elevate room proportions.",
        icon: Maximize2,
      },
      {
        title: "Fireplace Surround Architecture",
        desc: "Floor-to-ceiling quartz or porcelain slab hearth surrounds framed by custom fluted oak or painted architectural millwork.",
        icon: Flame,
      },
      {
        title: "Secret Doors & Flush Panels",
        desc: "Concealed pivot-hinge bookcase doors, flush wall paneling systems, and invisible touch-latch storage solutions.",
        icon: Ruler,
      },
    ],
    scopeTitle: "Custom Millwork & Carpentry Scope",
    scopeSubtitle: "Handcrafted in our shop and installed with laser-guided precision.",
    scopeItems: [
      { category: "Design", title: "3D Elevation & Joinery Shop Drawings", desc: "Detailed CAD elevation drawings illustrating every reveal, molding profile, and hardware placement." },
      { category: "Material Prep", title: "Kiln-Dried Hardwood Selection", desc: "Selecting hand-matched grain hardwood boards with moisture content stabilized between 6–8%." },
      { category: "Media Walls", title: "Fireplace & Entertainment Millwork", desc: "Custom media consoles with slatted acoustic wood panels, floating shelves, and recessed TV mounts." },
      { category: "Library Suites", title: "Home Office & Study Built-Ins", desc: "Integrated executive desks, filing drawers, adjustable display shelving, and LED shelf lighting." },
      { category: "Ceilings", title: "Architectural Beam & Coffered Work", desc: "Handcrafted box beams with custom stain finishes and mitered returns scribed to drywall." },
      { category: "Wall Paneling", title: "Wainscoting & Slat Paneling", desc: "Custom board-and-batten, fluted tambour panels, and traditional raised-panel wainscoting." },
      { category: "Closet Suites", title: "Walk-In Master Dressing Rooms", desc: "Custom boutique wardrobes with glass-front display cabinets, velvet jewelry trays, and integrated lighting." },
      { category: "Finishing", title: "Shop-Sprayed Polyurethane Finish", desc: "Flawless multi-coat catalyzed polyurethane sprayed in a dust-free booth before on-site installation." },
    ],
    materialsTitle: "Furniture-Grade Hardwoods & Veneers",
    materialsSubtitle: "Sustainably sourced, hand-selected hardwoods chosen for structural stability and rich grain.",
    materials: [
      { name: "American Black Walnut & White Oak", grade: "Hardwood Standard", desc: "Kiln-dried premium select hardwood with exceptional tensile strength and timeless grain character." },
      { name: "Baltic Birch Multi-Ply Plywood", grade: "Cabinet Core", desc: "Void-free 13-ply core providing unmatched screw-holding power and warp resistance." },
      { name: "Sugatsune & Tectus Concealed Hinges", grade: "Hardware", desc: "Heavy-duty 3D-adjustable concealed architectural hinges capable of supporting 300+ lb doors." },
      { name: "Catalyzed Urethane Spray Finishes", grade: "Surface Coating", desc: "Commercial furniture finish resistant to heat, alcohol, UV fading, and fingernail scratches." },
    ],
    tiers: [
      {
        name: "Fireplace & Media Wall",
        scope: "Fireplace & Media Architectural Feature",
        badge: "Living Room Feature",
        desc: "Custom floor-to-ceiling fireplace surround with built-in lower cabinets, floating hardwood shelving, and integrated lighting.",
        features: ["3D elevation drawings", "Solid hardwood floating shelves", "Built-in lower storage cabinets with soft-close doors", "Concealed wiring & TV cable management", "Shop-applied satin finish"],
      },
      {
        name: "Executive Study / Library",
        scope: "Executive Study & Full Library Suite",
        badge: "Most Popular",
        desc: "Complete home office or library transformation: floor-to-ceiling bookcases, custom executive desk, integrated LED lighting, and decorative trim.",
        features: ["Full room floor-to-ceiling built-ins", "Integrated LED vertical lighting channels", "Custom hardwood executive desk with drawers", "Solid wood crown molding & base trim", "5-Year craftsmanship warranty"],
      },
      {
        name: "Whole-Home Architectural Package",
        scope: "Whole-Home Architectural Joinery Package",
        badge: "Bespoke Estate",
        desc: "Bespoke millwork package throughout: master dressing room, coffered ceilings, hidden pivot doors, fluted wall paneling, and custom wine display.",
        features: ["Coffered ceilings in living and dining rooms", "Concealed secret pivot bookcase door", "Custom boutique master walk-in closet", "Architectural tambour & wainscoting", "Full 3D modeling and physical sample boards"],
      },
    ],
    phases: [
      {
        number: "01",
        title: "Spatial Measurement & 3D Shop Drawings",
        timeline: "Week 1–2",
        desc: "We perform laser measurements of your walls, design 3D elevation drawings, and specify wood species and hardware.",
        deliverables: ["Detailed 3D CAD elevations", "Wood species & stain sample physical box", "Comprehensive hardware schedule"],
      },
      {
        number: "02",
        title: "Shop Fabrication & Prefinishing",
        timeline: "Week 3–5",
        desc: "Our master carpenters build all cabinetry and millwork in our climate-controlled shop, applying multi-coat finishes in our spray booth.",
        deliverables: ["Shop fabrication photo updates", "Pre-finish quality check", "Delivery logistics coordination"],
      },
      {
        number: "03",
        title: "Laser-Guided On-Site Installation",
        timeline: "Week 6–7",
        desc: "Our installation crew scribes and anchors all units to wall studs, integrates LED electrical wiring, and aligns doors to 1/32” reveals.",
        deliverables: ["Precision laser alignment", "Concealed electrical hookup", "Clean site protocols"],
      },
      {
        number: "04",
        title: "Detailing, Hardware & Final Turnover",
        timeline: "Week 8",
        desc: "Final adjustments to soft-close hinges, touch-up detailing, installation of designer pulls, and delivery of your 5-year warranty.",
        deliverables: ["Smooth-action verification", "Care kit for fine hardwoods", "5-Year written warranty certificate"],
      },
    ],
    caseStudy: {
      location: "Plano, TX",
      neighborhood: "Kings Gate",
      timeline: "4 Weeks",
      headline: "A Two-Story Library & Secret Wine Room Door in White Oak",
      quote: "The craftsmanship Progress delivered is on another level. The floor-to-ceiling rift-sawn white oak library with the integrated ladder looks like it belongs in an architectural magazine, and the secret pivot door to our wine room never fails to stun guests.",
      author: "Charles & Victoria S. — Kings Gate Homeowners",
      stats: [
        { label: "Ceiling Height", value: "18 Feet" },
        { label: "Wood Species", value: "Rift White Oak" },
        { label: "Hidden Door", value: "350 lb Pivot" },
        { label: "Lighting", value: "3000K LED Integrated" },
      ],
    },
    faqs: [
      {
        q: "What is the difference between custom millwork and semi-custom cabinets?",
        a: "Semi-custom cabinets are built in modular 3-inch increments, requiring wide filler strips when meeting your walls. Custom millwork is hand-scribed precisely to your walls, ceiling, and floor down to 1/16th of an inch, creating a seamless furniture appearance."
      },
      {
        q: "Do you spray paint or stain the millwork in my home?",
        a: "Whenever possible, we build and apply our high-durability catalyzed finishes in our climate-controlled spray booth before bringing the units to your home. On-site work is limited to precision installation, scribing, and minor touch-ups, preventing odor and dust in your living space."
      },
      {
        q: "How do you hide cords and cables in media built-ins?",
        a: "We engineer dedicated internal wire chase conduits, removable magnetic access panels, and ventilated equipment bays so that all game consoles, audio receivers, and cable boxes remain hidden while staying cool."
      },
      {
        q: "Can you match our existing home trim or crown molding?",
        a: "Yes. Our shop can create custom knives to replicate historic or existing crown molding, baseboards, and casing profiles so that your new built-ins integrate seamlessly with your home's existing architecture."
      },
      {
        q: "What warranty do you offer on custom millwork?",
        a: "We provide our 5-Year Written Craftsmanship Warranty covering all structural joinery, drawer slides, hinges, and finish durability."
      },
    ],
  },

  "drywall-painting": {
    id: "painting",
    slug: "drywall-painting",
    title: "Designer Drywall & Precision Painting",
    navTitle: "Drywall & Painting",
    categoryLabel: "Museum Quality",
    tagline: "Level 5 Drywall & Fine Architectural Finishes",
    heroHeadline: "Level 5 Smooth Walls. Razor-Straight Lines. Flawless Pigment.",
    heroSubheadline: "Say goodbye to heavy outdated orange peel and knockdown textures. We specialize in transforming interior walls into ultra-smooth Level 5 surfaces, paired with zero-VOC designer paint applications from Benjamin Moore and Sherwin-Williams.",
    heroImage: images.painting,
    secondaryImage: images.beforeLiving,
    trustPills: [
      { label: "Level 5 Smooth Wall Standard", icon: Award },
      { label: "Commercial Air Filtration & Dust Shield", icon: Droplets },
      { label: "Zero-VOC Eco-Friendly Formulations", icon: ShieldCheck },
      { label: "5-Year Written Craftsmanship Warranty", icon: BadgeCheck },
    ],
    overviewLead: "Flawless painting begins long before a brush touches the wall—it begins with the perfection of the substrate.",
    overviewStory: [
      "In modern luxury design, heavy textured walls are an immediate indicator of outdated builder construction. A true Level 5 finish requires a full skim coat of compound across every square inch of drywall, followed by mechanical dustless sanding to produce a mirror-flat, uniform surface.",
      "At Progress Interior Designs, our master finishers treat paint as an architectural coating. We use commercial HEPA air scrubbers, protect all floors and furniture with medical-grade plastic containment, and spray or micro-roll premium formulations that highlight your home's natural light without lap marks or roller stipple."
    ],
    pillars: [
      {
        title: "Level 5 Full Skim Coat",
        desc: "Complete skim coating of walls and ceilings to eliminate texture variations, seam telegraphing, and light distortion.",
        icon: Award,
      },
      {
        title: "Dustless Sanding Systems",
        desc: "HEPA-filtered orbital sanders attached directly to vacuum extraction units, capturing 99.7% of airborne drywall dust.",
        icon: Droplets,
      },
      {
        title: "Fine Spray Finishes",
        desc: "Airless and HVLP fine-finish spraying of cabinets, trim, and doors for a smooth-as-glass factory enamel feel.",
        icon: Sparkles,
      },
      {
        title: "Zero-VOC Designer Paints",
        desc: "Premium low- and zero-VOC formulations from Benjamin Moore Aura and Sherwin-Williams Emerald for pure indoor air quality.",
        icon: ShieldCheck,
      },
    ],
    scopeTitle: "Comprehensive Drywall & Painting Scope",
    scopeSubtitle: "Museum-quality wall and ceiling restoration for discerning homeowners.",
    scopeItems: [
      { category: "Protection", title: "Complete Plastic & Floor Shielding", desc: "Heavy Ram Board floor protection, taped seams, and plastic poly sheeting over all furniture and light fixtures." },
      { category: "Texture Removal", title: "Acoustic Popcorn & Texture Stripping", desc: "Safe removal of outdated popcorn ceilings and heavy knockdown wall textures down to bare drywall." },
      { category: "Level 5 Skim", title: "Full-Surface Joint Compound Skim", desc: "Applying 2–3 thin, uniform coats of specialized skim compound across the entire wall surface." },
      { category: "Dustless Sanding", title: "Planex HEPA Vacuum Sanding", desc: "Machine sanding with integrated vacuum extraction, ensuring zero dust settles in your HVAC ducts." },
      { category: "Priming", title: "High-Build PVA & Stain-Block Primer", desc: "Application of premium high-build primer to equalize porosity between joint compound and drywall paper." },
      { category: "Fine Enamels", title: "Trim, Doors & Crown Molding", desc: "Filling nail holes, caulking seams with elastomeric sealant, and spraying urethane enamel on all trim." },
      { category: "Wall Coating", title: "Two Coats of Premium Designer Paint", desc: "Precision cutting-in and rolling with microfiber sleeves to ensure 100% uniform color depth." },
      { category: "Clean Up", title: "Full Site De-Masking & Detailing", desc: "Removing all plastic containment, vacuuming edges, and conducting a laser light inspection for perfection." },
    ],
    materialsTitle: "Premium Paint & Drywall Compounds",
    materialsSubtitle: "Commercial-grade coatings engineered for colorfastness, washability, and clean air.",
    materials: [
      { name: "Benjamin Moore Aura / Emerald Urethane", grade: "Top Coat Standard", desc: "Self-priming 100% acrylic paints with proprietary color lock technology for scrubbable, rich finishes." },
      { name: "USG Sheetrock Plus 3 Compound", grade: "Joint Compound", desc: "Lightweight, low-shrinkage joint compound providing superior bond and feathering." },
      { name: "Insl-x Stix / Zinsser BIN", grade: "Specialty Primers", desc: "High-adhesion bonding primers for slick surfaces, water stains, and raw wood tannins." },
      { name: "DAP Extreme Stretch Sealant", grade: "Caulking Standard", desc: "Elastomeric sealant that expands and contracts up to 600% without cracking along trim." },
    ],
    tiers: [
      {
        name: "Interior Refresh Painting",
        scope: "Designer Interior Refresh Painting",
        badge: "Color Update",
        desc: "Repainting walls, baseboards, and doors in existing textured homes with premium Benjamin Moore paint.",
        features: ["Full furniture & floor masking", "Minor drywall patch & nail hole fill", "2 Coats of premium designer wall paint", "Trim & door enamel refresh", "Full clean up & walk-through"],
      },
      {
        name: "Level 5 Smooth Wall Conversion",
        scope: "Level 5 Smooth Wall Conversion",
        badge: "Most Requested",
        desc: "Full texture removal, Level 5 full skim coat, dustless sanding, and 2 coats of designer paint across main living areas.",
        features: ["Complete orange peel / knockdown texture removal", "Level 5 skim coat across all walls and ceilings", "Dustless HEPA vacuum sanding", "High-build primer & 2 coats of Benjamin Moore Aura", "5-Year craftsmanship warranty"],
      },
      {
        name: "Whole-Home Museum Finish",
        scope: "Whole-Home Museum-Quality Finish",
        badge: "Estate Level",
        desc: "Complete architectural drywall and paint overhaul: Level 5 walls throughout, spray enamel on all cabinetry and trim, and designer accent finishes.",
        features: ["Whole-house Level 5 smooth wall transformation", "Shop/spray enamel finish on all doors, trim, and built-ins", "High-performance air scrubbers running 24/7", "Custom Venetian plaster or limewash accent wall", "Dedicated paint superintendent on-site"],
      },
    ],
    phases: [
      {
        number: "01",
        title: "Site Protection & Color Consultation",
        timeline: "Day 1",
        desc: "We completely seal the work area with plastic barriers and Ram Board, and assist with sample test swatches under your home's lighting.",
        deliverables: ["Full room containment setup", "Large format color swatches on walls", "Milestone timeline confirmation"],
      },
      {
        number: "02",
        title: "Texture Removal & Level 5 Skim",
        timeline: "Day 2–5",
        desc: "Skimming walls with compound, smoothing imperfections, and repairing settlement cracks with fiberglass mesh tape.",
        deliverables: ["Uniform skim coat coverage", "Crack reinforcement check", "First inspection sign-off"],
      },
      {
        number: "03",
        title: "Dustless Sanding & High-Build Primer",
        timeline: "Day 6–8",
        desc: "Using Planex orbital vacuum sanders, we sand surfaces flat, vacuum dust, and spray high-build primer to seal the substrate.",
        deliverables: ["99.7% dust containment verification", "High-build primer application", "Raking light defect check"],
      },
      {
        number: "04",
        title: "Fine Finish Paint & White-Glove Handover",
        timeline: "Day 9–11",
        desc: "Two coats of premium paint applied with laser-sharp cut lines, de-masking, detailed clean up, and delivery of your 5-year warranty.",
        deliverables: ["Razor-straight cut-line inspection", "Touch-up paint kit with labeled jars", "5-Year written warranty certificate"],
      },
    ],
    caseStudy: {
      location: "Richardson, TX",
      neighborhood: "Canyon Creek",
      timeline: "7 Days",
      headline: "Transforming 1980s Orange Peel into Mirror-Smooth Modern Walls",
      quote: "Our home had heavy 1980s orange peel that made our modern art look terrible. Progress skim-coated every wall in our living room and foyer to Level 5. The walls are so smooth and flat they look like marble. We couldn't believe how clean they kept the house.",
      author: "Edward & Pamela R. — Richardson Homeowners",
      stats: [
        { label: "Wall Area", value: "3,200 sq ft" },
        { label: "Finish Level", value: "Level 5 Smooth" },
        { label: "Paint Brand", value: "Benjamin Moore Aura" },
        { label: "Dust Containment", value: "99.7% HEPA Clean" },
      ],
    },
    faqs: [
      {
        q: "What is a Level 5 drywall finish and why is it superior?",
        a: "In standard drywall (Level 4), only the seams and screw holes receive compound, leaving raw paper on the rest of the board. Under natural sunlight, the difference in porosity causes visible flashing and texture bumps. A Level 5 finish applies a skim coat over 100% of the wall, creating a completely flat, non-flashing surface ideal for modern lighting."
      },
      {
        q: "How dusty does the texture removal and sanding process get?",
        a: "We use professional dustless sanding machines attached to HEPA filtration vacuums that extract 99.7% of dust at the point of contact. We also seal off non-work areas with zippered plastic walls and run commercial air scrubbers to keep your home's air clean."
      },
      {
        q: "What paint brands do you recommend?",
        a: "We exclusively recommend premium lines from Benjamin Moore (Aura, Regal Select) and Sherwin-Williams (Emerald, Emerald Urethane). These formulations feature superior pigment concentration, stain resistance, and washability."
      },
      {
        q: "Can you remove popcorn ceilings that contain asbestos?",
        a: "For homes built before 1980, we take a small sample to be tested by a certified laboratory before touching the ceiling. If asbestos is present, a licensed abatement team must safely remediate it before we apply our smooth Level 5 finish."
      },
      {
        q: "What warranty do you provide on painting and drywall?",
        a: "We back all of our drywall skim coating and painting with our 5-Year Written Craftsmanship Warranty, guaranteeing that our paint will not peel, bubble, or flake under normal interior conditions."
      },
    ],
  },
};

export const allServicesList = Object.values(servicesDataMap);
