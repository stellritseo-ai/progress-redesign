import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Camera, 
  ChevronLeft,
  ChevronRight,
  Phone, 
  X, 
  ZoomIn 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";

export interface ProjectItem {
  id: string;
  category: "all" | "kitchen" | "bath" | "living" | "basement" | "finish";
  title: string;
  categoryLabel: string;
  location: string;
  year: string;
  scope: string;
  image: string;
}

export const portfolioProjects: ProjectItem[] = [
  {
    id: "p1",
    category: "kitchen",
    title: "The Belmont Chef's Kitchen & Island",
    categoryLabel: "Kitchen",
    location: "Highland Park, Metro Area",
    year: "2024",
    scope: "Full Gut Remodel, Calacatta Gold Quartz Waterfall, Custom Rift-Sawn Oak",
    image: images.kitchen,
  },
  {
    id: "p2",
    category: "bath",
    title: "Highland Ridge Master Spa Suite",
    categoryLabel: "Bathroom",
    location: "Oakridge Estates",
    year: "2024",
    scope: "Curbless Steam Shower, Cast-Iron Soaking Tub, Radiant Heated Floors",
    image: images.bathroom,
  },
  {
    id: "p3",
    category: "living",
    title: "Open-Concept Architectural Living Space",
    categoryLabel: "Living",
    location: "Westlake Hills",
    year: "2024",
    scope: "Load-Bearing Wall Removal, Steel Beam Infill, 10-Inch White Oak Hardwood",
    image: images.livingRoom,
  },
  {
    id: "p4",
    category: "finish",
    title: "Artisan Herringbone Oak & Custom Millwork",
    categoryLabel: "Millwork",
    location: "Country Club Heights",
    year: "2023",
    scope: "Hand-Milled Coffered Ceilings, Custom Fireplace Surround, Designer Flooring",
    image: images.millwork,
  },
  {
    id: "p5",
    category: "basement",
    title: "Subterranean Wine Bar & Lounge Suite",
    categoryLabel: "Basement",
    location: "Fox Hollow Estates",
    year: "2023",
    scope: "Full Waterproofing, Sub-Floor Insulation, Custom Bar & 4K Home Theater",
    image: images.basement,
  },
  {
    id: "p6",
    category: "kitchen",
    title: "Modern European Minimalist Kitchen",
    categoryLabel: "Kitchen",
    location: "Forest Glen",
    year: "2024",
    scope: "Integrated Panel Appliances, Concrete Quartz Surfaces, Ambient Strip Lighting",
    image: images.kitchenModern,
  },
  {
    id: "p7",
    category: "bath",
    title: "Contemporary Minimalist Wet-Room",
    categoryLabel: "Bathroom",
    location: "Stonebridge Crossing",
    year: "2024",
    scope: "Fluted Glass Partition, Floating Walnut Vanity, Zellige Handmade Tiles",
    image: images.bathroomLuxury,
  },
  {
    id: "p8",
    category: "living",
    title: "Whole-Home Exterior Addition & Great Room",
    categoryLabel: "Whole Home",
    location: "River Oaks",
    year: "2023",
    scope: "850 Sq Ft Addition, Vaulted Timber Ceilings, Foundation Underpinning",
    image: images.exteriorAddition,
  },
];

export function Gallery() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const selectedIdx = selectedProject 
    ? portfolioProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const showNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIdx === -1) return;
    const nextIdx = (selectedIdx + 1) % portfolioProjects.length;
    const nextProj = portfolioProjects[nextIdx];
    if (nextProj) setSelectedProject(nextProj);
  }, [selectedIdx]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIdx === -1) return;
    const prevIdx = (selectedIdx - 1 + portfolioProjects.length) % portfolioProjects.length;
    const prevProj = portfolioProjects[prevIdx];
    if (prevProj) setSelectedProject(prevProj);
  }, [selectedIdx]);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, showNext, showPrev]);

  return (
    <section 
      id="portfolio" 
      className="relative bg-background py-[60px] border-b border-border/30 overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Background ambient lighting blooms */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-primary/7 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            <Camera className="w-3.5 h-3.5" /> Curated Portfolio
          </span>
          <h2 className="mt-3.5 font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-foreground leading-[1.14] tracking-tight">
            Selected Transformations. <span className="gradient-text-gold">Spaces Reimagined.</span>
          </h2>
          <p className="mt-3.5 text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
            Explore our recent master transformations across the region. Click any project to inspect full-size photography.
          </p>
        </div>

        {/* Projects Image Grid — Pure Visual Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {portfolioProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl xs:rounded-2xl sm:rounded-3xl bg-card border border-border/40 hover:border-primary/60 shadow-sm hover:shadow-[0_20px_45px_-12px_rgba(163,126,58,0.25)] dark:hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 cursor-zoom-in select-none"
            >
              {/* Pure High-Resolution Image with Zoom on Hover */}
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Subtle Hover Overlay with Glass Zoom Icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 dark:bg-card/90 border border-primary/40 text-primary opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl backdrop-blur-md">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <Button asChild size="lg" className="bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-12 px-8 rounded-full font-bold text-xs sm:text-sm shadow-md justify-center w-full sm:w-auto">
            <Link to="/contact">
              Schedule Design Walkthrough <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-7 rounded-full border-border/70 hover:bg-muted text-foreground font-bold text-xs sm:text-sm shadow-sm justify-center w-full sm:w-auto">
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 w-4 h-4 text-primary" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-7 rounded-full border-border/70 hover:bg-muted text-foreground font-bold text-xs sm:text-sm shadow-sm justify-center w-full sm:w-auto">
            <a href="tel:8164623599">
              <Phone className="mr-2 w-4 h-4 text-primary" /> (816) 462-3599
            </a>
          </Button>
        </div>

        {/* Lightbox / Zoom Modal — Pure Image Showcase (No Text) */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200 select-none"
            onClick={() => setSelectedProject(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Previous Image Button */}
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>

            {/* Next Image Button */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>

            {/* Pure Image Container */}
            <div 
              className="relative max-w-5xl max-h-[88vh] flex items-center justify-center rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_30px_100px_-15px_rgba(0,0,0,0.95)] border border-white/15 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt=""
                className="max-h-[86vh] max-w-[90vw] md:max-w-5xl w-auto h-auto object-contain block rounded-2xl sm:rounded-3xl pointer-events-auto"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

