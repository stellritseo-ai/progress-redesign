import { Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Award, 
  BadgeCheck, 
  CheckCircle2, 
  Clock, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Star 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SitePage } from "@/components/site/SiteLayout";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Estimate } from "@/components/site/Estimate";
import { FAQ } from "@/components/site/FAQ";
import { images } from "@/lib/images";

type Kind = "about" | "services" | "projects" | "reviews" | "contact";

const pageData = {
  about: { 
    eyebrow: "Established 2014 • 11+ Years of Mastery", 
    title: "Built On Skill. Guided By Integrity.", 
    image: images.craft 
  },
  services: { 
    eyebrow: "Comprehensive Disciplines", 
    title: "One Master Team. Every Refined Detail.", 
    image: images.kitchen 
  },
  projects: { 
    eyebrow: "Selected Portfolio Works", 
    title: "Enduring Spaces Made Extraordinary.", 
    image: images.livingRoom 
  },
  reviews: { 
    eyebrow: "5.0-Star Client Satisfaction", 
    title: "Trust Earned On Every Single Home.", 
    image: images.bathroom 
  },
  contact: { 
    eyebrow: "Start A Conversation", 
    title: "Let's Bring Your Architectural Vision To Life.", 
    image: images.hero 
  },
} as const;

export function InteriorPage({ kind }: { kind: Kind }) {
  const data = pageData[kind];
  return (
    <>
      <SitePage {...data}>
        {kind === "about" ? (
          <AboutContent />
        ) : kind === "services" ? (
          <ServicesContent />
        ) : kind === "projects" ? (
          <ProjectsContent />
        ) : kind === "reviews" ? (
          <ReviewsContent />
        ) : (
          <ContactContent />
        )}
      </SitePage>
    </>
  );
}

function AboutContent() {
  const values = [
    {
      title: "Family-Owned Accountability",
      desc: "We are not a bloated franchise. Our founders and senior superintendents walk every job site personally, ensuring our family name remains synonymous with perfection.",
    },
    {
      title: "Uncompromising Fixed Pricing",
      desc: "Our line-by-line proposals reflect true real-world costs. We do not underbid to win work and hit you with change orders later.",
    },
    {
      title: "Clean Site & Living Protection",
      desc: "Remodeling shouldn't disrupt your health. We deploy zippered air containment barriers and HEPA scrubbers daily to maintain pristine air quality.",
    },
    {
      title: "Master Tradesmen",
      desc: "Every mechanical, structural, and finish detail is executed by certified tradesmen possessing decades of specialized tenure.",
    },
  ];

  return (
    <div className="bg-background">
      {/* Narrative Section */}
      <section className="py-24 lg:py-32 border-b border-border/20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Our Story & Philosophy
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                A Decade of Architectural Dedication.
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Founded in 2014, Progress Interior Designs emerged with a singular purpose: to rescue homeowners from contractor stress through transparent communication, predictable scheduling, and museum-grade finish quality.
                </p>
                <p>
                  Over the past 11+ years, we have grown from a boutique architectural millwork shop into a premier general contracting firm specializing in luxury kitchens, spa bathrooms, whole-home reconfigurations, and structural foundation restoration.
                </p>
                <p>
                  Every home we enter is treated with profound respect. We understand that we are not merely building structures; we are crafting the sanctuary in which your family creates memories.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-12 px-7 rounded-full font-bold text-xs">
                  <Link to="/contact">Request Free 3D Consultation →</Link>
                </Button>
                <a href="tel:8164623599" className="text-xs font-bold text-foreground hover:text-primary flex items-center gap-2 py-2 px-4 rounded-full border border-border/40">
                  <Phone className="w-3.5 h-3.5 text-primary" /> (816) 462-3599
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-border/40 shadow-2xl">
                <img
                  src={images.detail}
                  alt="Architectural detail in a luxury home"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border border-primary/30 max-w-xs shadow-2xl hidden sm:block">
                <p className="text-primary text-xs font-bold uppercase tracking-widest">Commitment to Quality</p>
                <strong className="block font-display text-2xl font-bold text-foreground mt-1">Master Workmanship</strong>
                <p className="text-[11px] text-muted-foreground mt-1">High Quality Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-24 bg-secondary/35 border-b border-border/30">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-display text-3xl font-extrabold text-foreground">
              The Four Pillars of Our Craft
            </h3>
            <p className="text-xs text-muted-foreground mt-2">
              Our non-negotiable promises to every client we serve.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((val) => (
              <div key={val.title} className="p-8 rounded-3xl glass-card border border-border/40 space-y-3">
                <div className="flex items-center gap-2.5 text-primary font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{val.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ServicesContent() {
  return (
    <div>
      <Services />
      <FAQ />
    </div>
  );
}

function ProjectsContent() {
  return (
    <div>
      <Gallery />
      <section className="py-20 bg-secondary/35 text-center border-t border-border/30">
        <div className="max-w-2xl mx-auto px-5 space-y-4">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Inspired by What You See?
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Schedule an on-site consultation to explore materials, 3D renderings, and transparent project estimates.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground btn-glow h-12 px-8 rounded-full font-bold text-xs">
            <Link to="/contact">Discuss Your Space Today →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ReviewsContent() {
  return (
    <div>
      <Testimonials />
      <section className="py-20 bg-background text-center border-t border-border/20">
        <div className="max-w-xl mx-auto px-5 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Join 1,200+ Delighted Homeowners</span>
          <h3 className="font-display text-3xl font-bold text-foreground">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xs text-muted-foreground">
            Get in touch today for an honest, fixed-price consultation.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground btn-glow h-12 px-8 rounded-full font-bold text-xs">
            <Link to="/contact">Request Your Free 3D Estimate →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ContactContent() {
  return (
    <div>
      <Estimate />
      
      {/* Contact Details Bar */}
      <section className="py-20 bg-secondary/35 border-t border-border/30">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            <div className="p-6 rounded-2xl glass-card border border-border/30 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-foreground">Direct Telephone</h4>
              <p className="text-xs text-muted-foreground">Speak directly with our superintendent</p>
              <a href="tel:8164623599" className="text-sm font-bold text-primary block pt-1 hover:underline">
                (816) 462-3599
              </a>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-border/30 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-foreground">Email Communications</h4>
              <p className="text-xs text-muted-foreground">Send plans, blueprints & inquiries</p>
              <a href="mailto:pid.2014.d@gmail.com" className="text-xs font-bold text-primary block pt-1 hover:underline truncate">
                pid.2014.d@gmail.com
              </a>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-border/30 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-foreground">Operating Schedule</h4>
              <p className="text-xs text-muted-foreground">Monday – Saturday</p>
              <p className="text-xs font-bold text-foreground">7:30 AM – 6:30 PM</p>
              <p className="text-[11px] text-primary font-bold">24/7 Emergency Support</p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-border/30 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-foreground">Location & Radius</h4>
              <p className="text-xs font-bold text-foreground">Grandview, MO 64030</p>
              <p className="text-xs text-muted-foreground">Greater KC Metro & Surrounding</p>
              <p className="text-[11px] text-muted-foreground">Master Quality</p>
            </div>

          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}