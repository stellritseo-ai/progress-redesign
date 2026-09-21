import { Link } from "@tanstack/react-router";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Phone, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "timeline",
    number: "01",
    question: "How long does a typical luxury renovation project take?",
    answer: "Project timelines depend on square footage and custom millwork lead times. A chef's kitchen remodel typically spans 3–5 weeks, a master spa bathroom takes 2–4 weeks, and whole-home architectural transformations run 8–14 weeks. Following your complimentary 3D scan, you receive a binding critical-path schedule detailing every milestone before work commences."
  },
  {
    id: "fixed-price",
    number: "02",
    question: "Free Estimates & Transparent Pricing",
    answer: "We provide a free estimate before starting any work. Pricing is based on the specific job and scope of work. If additional work is requested or required beyond the original scope, additional charges may apply based on the nature and extent of the extra work. We will communicate any additional costs with you and obtain your approval before proceeding with the additional work."
  },
  {
    id: "live-in",
    number: "03",
    question: "Can our family comfortably live in the home during the renovation?",
    answer: "Yes, over 85% of our residential clients remain living in their homes throughout the remodel. We deploy hospital-grade HEPA negative-air scrubbers, floor-to-ceiling magnetic zipper dust barriers, and neoprene subfloor protection runners. Our crew adheres to a mandatory 4:30 PM daily site clean-and-vacuum protocol so your living areas remain pristine."
  },
  {
    id: "licenses-warranty",
    number: "04",
    question: "What warranties do you offer?",
    answer: "All load-bearing structural modifications and foundation underpinning work are backed by our industry-leading 20-Year Transferable Structural Warranty."
  },
  {
    id: "3d-design",
    number: "05",
    question: "What architectural and 3D design work happens before demolition begins?",
    answer: "Before a single hammer is swung, our architectural team produces photorealistic 3D schematic renderings, comprehensive CAD space layouts, and electrical/lighting plans. We also manage the entire municipal permitting process, HOA architectural reviews, and material procurement so construction proceeds seamlessly without delays."
  },
  {
    id: "service-areas",
    number: "06",
    question: "What areas and neighborhoods do you service?",
    answer: "Headquartered in Grandview, MO 64030, our primary service coverage encompasses the Greater Kansas City metropolitan area, including Grandview, Overland Park, Lee's Summit, Leawood, Prairie Village, South Kansas City, Brookside, and surrounding communities. For large-scale architectural additions and historic restorations, our service radius extends throughout the region."
  },
  {
    id: "unforeseen-conditions",
    number: "07",
    question: "How are unforeseen site conditions (e.g. hidden plumbing or vintage wiring) addressed?",
    answer: "During our initial audit, we utilize non-invasive thermal imaging and moisture meters to detect anomalies behind walls. If historic, unmapped concealed defects are uncovered upon demolition, work in that specific zone is paused, an engineer inspects the condition on site, and we present photogrammetric evidence with clear, pre-agreed solutions before proceeding."
  }
];

export function FAQ() {
  return (
    <section 
      id="faq" 
      className="relative bg-background py-[60px] border-b border-border/30 overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Background ambient lighting blooms */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
        
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start">
          
          {/* Left Column: Context, Trust Guarantees & Hotline Callout */}
          <div className="space-y-6 lg:sticky lg:top-28">
            
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
                <HelpCircle className="w-3.5 h-3.5" /> Client Clarity & Standards
              </span>
              
              <h2 className="mt-3.5 font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                Good Questions.<br />
                <span className="gradient-text-gold">Transparent Answers.</span>
              </h2>
              
              <p className="mt-4 text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                We believe high-end renovation demands absolute operational transparency. Here is how we protect your living environment, guarantee your contract budget, and execute to master architectural standards.
              </p>
            </div>

            {/* Core Assurances Strip */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start sm:items-center gap-2.5 text-xs font-semibold text-foreground/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
                <span>Free Estimates & Transparent Pricing</span>
              </div>
              <div className="flex items-start sm:items-center gap-2.5 text-xs font-semibold text-foreground/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
                <span>Daily HEPA Negative-Air Filtration & Clean Living Protocol</span>
              </div>
              <div className="flex items-start sm:items-center gap-2.5 text-xs font-semibold text-foreground/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
                <span>20-Year Structural Warranty</span>
              </div>
            </div>

            {/* Luxury Concierge Help Card */}
            <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-card/90 dark:bg-[#1A1D24]/90 backdrop-blur-xl border border-primary/30 shadow-lg relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/60 before:to-transparent">
              <div className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-wider text-primary mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Dedicated Consultation Desk
              </div>
              <h4 className="font-display text-base sm:text-lg font-bold text-foreground">
                Have a Specific Architectural Query?
              </h4>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                Our lead superintendents and architectural designers are available to review existing plans or conduct an on-site 3D diagnostic scan.
              </p>
              
              <div className="mt-5 space-y-3">
                <Button asChild className="w-full bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-11 rounded-full font-bold text-xs uppercase tracking-wider shadow-md">
                  <Link to="/contact">
                    Schedule Design Consultation <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Link>
                </Button>
                
                <a 
                  href="tel:8164623599" 
                  className="flex items-center justify-center gap-2 text-xs font-bold text-foreground hover:text-primary transition-colors py-1 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" /> Speak with an Architect: (816) 462-3599
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Accordion */}
          <div className="rounded-2xl sm:rounded-[32px] p-4 xs:p-5 sm:p-8 md:p-10 bg-card/95 dark:bg-[#1A1D24]/95 backdrop-blur-2xl border border-primary/25 shadow-[0_20px_60px_-20px_rgba(45,35,25,0.08)] dark:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.85)] relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id} 
                  className="border-border/30 px-2.5 sm:px-4 rounded-xl sm:rounded-2xl hover:bg-secondary/30 data-[state=open]:bg-secondary/40 transition-colors"
                >
                  <AccordionTrigger className="py-3.5 sm:py-4 text-left font-display text-[13.5px] sm:text-[15.5px] font-semibold hover:no-underline hover:text-primary data-[state=open]:text-primary transition-colors cursor-pointer flex items-center justify-between gap-3 sm:gap-4">
                    <span className="flex items-start gap-2.5 sm:gap-3">
                      <span className="font-mono text-[11px] font-bold text-primary/80 shrink-0 pt-0.5">
                        {faq.number}
                      </span>
                      <span className="leading-snug text-foreground">
                        {faq.question}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 sm:pb-6 pl-6 sm:pl-8 text-xs sm:text-[13.5px] leading-relaxed text-muted-foreground font-normal">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>

      </div>
    </section>
  );
}
