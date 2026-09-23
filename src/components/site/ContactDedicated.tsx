import { useState, type FormEvent } from "react";
import { 
  AlertTriangle,
  ArrowRight, 
  BadgeCheck, 
  Building2, 
  Check, 
  CheckCircle2, 
  ChevronDown, 
  Clock, 
  HelpCircle, 
  Layers, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Phone, 
  PhoneCall, 
  ShieldAlert, 
  ShieldCheck, 
  Sparkles,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { submitLeadRequest } from "@/lib/send-lead";

export function ContactDedicated() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    projectType: "Kitchen Remodel",
    budgetRange: "Comprehensive Room Renovation",
    details: "",
    hearAbout: "Google",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }

    setLoading(true);
    try {
      const res = await submitLeadRequest({
        sourceForm: "Dedicated Contact Page",
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        service: formData.projectType,
        budget: formData.budgetRange,
        hearAbout: formData.hearAbout,
        notes: formData.details,
      });

      if (res.success) {
        setSubmitted(true);
        toast.success("Proposal request received! Our team will contact you shortly.");
      } else {
        toast.error(res.error || "Failed to submit request. Please call us directly.");
      }
    } catch {
      toast.error("An error occurred. Please call us at (816) 462-3599.");
    } finally {
      setLoading(false);
    }
  };

  const expectationSteps = [
    {
      step: "01",
      duration: "15 Minutes",
      title: "Initial Discovery Call",
      desc: "We will briefly discuss your project goals, timeline, and budget to ensure we are the right fit for your needs.",
      icon: PhoneCall,
    },
    {
      step: "02",
      duration: "On-Site Visit",
      title: "In-Home Consultation & Assessment",
      desc: "One of our senior project managers will visit your home to assess the existing structure, take measurements, and discuss design possibilities.",
      icon: Building2,
    },
    {
      step: "03",
      duration: "Design & Quote",
      title: "Architectural 3D & Fixed Quote",
      desc: "We will present a detailed 3D rendering of your proposed space alongside a transparent, line-item fixed quote. No hidden fees. No surprises.",
      icon: Layers,
    },
  ];

  const faqs = [
    {
      q: "Do you charge for the initial consultation?",
      a: "We offer a complimentary initial discovery call. In-depth, on-site design consultations and 3D renderings may require a nominal retainer fee, which is credited toward your project upon signing.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Absolutely. Progress Interior Designs is fully licensed and carries comprehensive general liability and workers' compensation insurance for your complete protection.",
    },
    {
      q: "Do you handle permits?",
      a: "Yes. We manage the entire permitting and inspection process with your local municipality to ensure all work is up to code.",
    },
    {
      q: "What is your warranty policy?",
      a: "We stand behind our work with a 5-Year Written Craftsmanship Warranty on all labor and installation.",
    },
  ];

  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 border-b border-border/30">
        {/* Atmospheric ambient blooms */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-primary/[0.09] rounded-full blur-[160px]" />
        <div className="pointer-events-none absolute top-1/3 -right-24 w-[450px] h-[450px] bg-primary/[0.05] rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[300px] bg-amber-500/[0.03] rounded-full blur-[150px]" />

        {/* Background grid pattern */}
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
              <span>Contact Progress Interior Designs • Direct Concierge</span>
            </div>

            {/* Headline - matching landing page scale */}
            <h1 className="font-display font-extrabold leading-[1.12] tracking-tight text-foreground text-[26px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Let’s Discuss Your Next{" "}
              <span className="block mt-1 sm:mt-1.5 gradient-text-gold">
                Architectural Transformation.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-normal pt-1">
              Whether you are planning a minor remodel or a full structural renovation, our team is ready to provide expert guidance, transparent pricing, and uncompromising craftsmanship. Reach out today to schedule your in-home consultation.
            </p>

            {/* Trust highlights ribbon */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-semibold text-muted-foreground">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">24-Hour Business Response</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">Licensed & Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/20 backdrop-blur-md shadow-sm">
                <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground">5-Year Written Warranty</span>
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
      {/* 2. GET IN TOUCH: DIRECT CHANNELS & PROPOSAL FORM */}
      {/* ========================================================================= */}
      <section id="contact-form" className="relative py-16 sm:py-24 lg:py-28 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column: Direct Contact Channels (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </div>
                <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                  Direct Contact <br />
                  <span className="gradient-text-gold">Channels</span>
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We know your time is valuable. To ensure we provide you with the most accurate information and dedicated attention, please use the contact methods below.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-4 pt-2">
                
                {/* 1. Phone & Text */}
                <div className="p-5 rounded-2xl bg-card/85 dark:bg-card/50 border border-primary/25 shadow-sm hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">Phone & Text</span>
                      <a 
                        href="tel:8164623599" 
                        className="block font-display text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors"
                      >
                        (816) 462-3359
                      </a>
                      <p className="text-xs text-muted-foreground pt-0.5">
                        Available Monday – Friday: <span className="text-foreground font-semibold">8:00 AM – 6:00 PM</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Saturday: <span className="text-primary font-semibold">By Appointment Only</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Email */}
                <div className="p-5 rounded-2xl bg-card/85 dark:bg-card/50 border border-primary/25 shadow-sm hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">Official Email</span>
                      <a 
                        href="mailto:info@progressinteriordesigns.com" 
                        className="block font-display text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors truncate"
                      >
                        info@progressinteriordesigns.com
                      </a>
                      <p className="text-xs text-muted-foreground pt-0.5">
                        For general inquiries, proposal requests, and warranty support.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Service Area */}
                <div className="p-5 rounded-2xl bg-card/85 dark:bg-card/50 border border-primary/25 shadow-sm hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">Service Area</span>
                      <p className="text-xs text-muted-foreground">
                        We proudly serve discerning homeowners across the metro area, including:
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {["Dallas", "Plano", "Frisco", "McKinney", "Allen", "Richardson"].map((c) => (
                          <span key={c} className="text-[11px] font-semibold text-foreground bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-md">
                            {c}
                          </span>
                        ))}
                      </div>
                      <p className="text-[11px] text-muted-foreground/80 italic pt-1">
                        Note: Please contact us to confirm service availability for your specific zip code.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Corporate Office & Showroom */}
                <div className="p-5 rounded-2xl bg-card/85 dark:bg-card/50 border border-primary/25 shadow-sm hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary">Corporate Office & Showroom</span>
                      <p className="font-display text-sm font-bold text-foreground">
                        Grandview & Greater Dallas Metro
                      </p>
                      <p className="text-xs text-muted-foreground pt-0.5">
                        Consultations are by appointment only to ensure dedicated one-on-one time with our design team.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Proposal Request / Consultation Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-card/90 dark:bg-card/60 border border-primary/30 shadow-xl backdrop-blur-xl relative overflow-hidden">
                {/* Subtle luminous corner blur */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

                <div className="mb-6 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Direct Request
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    Request a Formal Proposal or Schedule a Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Complete the form below to initiate your project review.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 px-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mx-auto shadow-glow">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="font-display text-2xl font-bold text-foreground">
                      Request Successfully Received
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-foreground">{formData.fullName || "valued client"}</strong>. A dedicated Project Manager has received your inquiry for your <strong className="text-foreground">{formData.projectType}</strong> project and will respond within 24 business hours.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Button 
                        onClick={() => setSubmitted(false)} 
                        variant="outline" 
                        className="rounded-full text-xs font-bold h-10 px-6 border-border/60"
                      >
                        Submit Another Request
                      </Button>
                      <Button asChild className="rounded-full text-xs font-bold h-10 px-6 bg-primary text-primary-foreground btn-glow">
                        <a href="tel:8164623599">Call Direct: (816) 462-3359</a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Row 1: Full Name & Phone Number */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <label className="block space-y-1.5">
                        <span className="text-xs font-bold text-foreground">
                          Full Name <span className="text-primary">*</span>
                        </span>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Robert Vance"
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
                          placeholder="e.g. (816) 555-0199"
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
                          placeholder="robert@example.com"
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
                          placeholder="e.g. Plano, TX (or full address)"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </label>
                    </div>

                    {/* Row 3: Project Type & Estimated Budget Range */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <label className="block space-y-1.5">
                        <span className="text-xs font-bold text-foreground">
                          Project Type
                        </span>
                        <div className="relative">
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer pr-10"
                          >
                            <option value="Kitchen Remodel">Kitchen Remodel</option>
                            <option value="Bathroom Remodel">Bathroom Remodel</option>
                            <option value="Whole Home Renovation">Whole Home Renovation</option>
                            <option value="Structural Repair/Foundation">Structural Repair/Foundation</option>
                            <option value="Home Addition">Home Addition</option>
                            <option value="Basement Finishing">Basement Finishing</option>
                            <option value="Custom Carpentry">Custom Carpentry</option>
                            <option value="Other">Other</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        </div>
                      </label>

                      <label className="block space-y-1.5">
                        <span className="text-xs font-bold text-foreground">
                          Estimated Project Scope
                        </span>
                        <div className="relative">
                          <select
                            value={formData.budgetRange}
                            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                            className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer pr-10"
                          >
                            <option value="Targeted Single-Room Refresh">Targeted Single-Room Refresh</option>
                            <option value="Comprehensive Room Renovation">Comprehensive Room Renovation</option>
                            <option value="Multi-Room / Full Home Scope">Multi-Room / Full Home Scope</option>
                            <option value="Master Architectural Estate Transformation">Master Architectural Estate Transformation</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        </div>
                      </label>
                    </div>

                    {/* Row 4: Project Details Textarea */}
                    <label className="block space-y-1.5">
                      <span className="text-xs font-bold text-foreground">
                        Project Details
                      </span>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your vision, timeline, and any specific requirements..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      />
                    </label>

                    {/* Row 5: How Did You Hear About Us? */}
                    <label className="block space-y-1.5">
                      <span className="text-xs font-bold text-foreground">
                        How did you hear about us?
                      </span>
                      <input
                        type="text"
                        placeholder="Google, Referral, Social Media, etc."
                        value={formData.hearAbout}
                        onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                        className="w-full rounded-xl bg-background/80 border border-border/60 px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </label>

                    {/* Submit CTA */}
                    <div className="pt-2 space-y-2.5">
                      <Button
                        type="submit"
                        disabled={loading}
                        size="lg"
                        className="w-full bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-12 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            <span>SUBMITTING REQUEST...</span>
                          </>
                        ) : (
                          <>
                            <span>SUBMIT REQUEST</span>
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                        By submitting this form, you agree to our privacy policy. We will never share your information. A Project Manager will respond within 24 business hours.
                      </p>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT TO EXPECT WHEN YOU CONTACT US */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-secondary/30 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Clock className="w-3.5 h-3.5" />
              <span>Project Clarity</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              What to Expect When You Contact Us
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              We believe in a structured, transparent process from the very first phone call. Here is what happens after you reach out:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {expectationSteps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card/80 dark:bg-card/50 hover:bg-card border border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-extrabold text-primary/70 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        Step {item.step}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
                        {item.duration}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-border/30 flex items-center gap-2 text-[11px] font-bold text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Structured Handshake</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. URGENT STRUCTURAL NEEDS BANNER */}
      {/* ========================================================================= */}
      <section className="relative py-14 sm:py-16 border-b border-border/25 bg-amber-500/[0.04] dark:bg-amber-500/[0.06]">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-card/90 dark:bg-card/75 border-2 border-amber-500/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-500 shrink-0">
                <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-500">
                    Priority Dispatch
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Urgent Structural Needs?
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  Do you have a foundation issue, water damage, or a structural emergency? We offer priority scheduling for structural assessments and emergency repairs. Please call us directly and mention <strong className="text-foreground">"Urgent Structural Assessment"</strong> to speak with a team member immediately.
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto shrink-0 bg-amber-500 hover:bg-amber-600 text-black font-extrabold h-12 sm:h-13 px-8 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-lg">
              <a href="tel:8164623599" className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>CALL NOW: (816) 462-3359</span>
              </a>
            </Button>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 border-b border-border/25">
        <div className="mx-auto max-w-[1440px] px-4 xs:px-5 sm:px-8 lg:px-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Inquiries</span>
            </div>
            <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-foreground leading-tight">
              Frequently Asked Questions <br />
              <span className="gradient-text-gold">Before Contacting Us</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              Quick answers to help you prepare for your initial consultation.
            </p>
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
      {/* 6. FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-background via-secondary/40 to-background">
        {/* Glow blooms */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.12] rounded-full blur-[160px]" />

        <div className="relative mx-auto max-w-[1280px] px-4 xs:px-5 sm:px-8 lg:px-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Elevate Your Residence</span>
          </div>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-[44px] font-extrabold text-foreground tracking-tight leading-[1.14]">
            Let’s Build Something <br className="hidden sm:inline" />
            <span className="gradient-text-gold">Enduring.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Your home is your most significant investment. Let us help you protect and elevate it. Fill out the form above or call us today to start your journey toward a flawless renovation.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="w-full sm:w-auto bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-11 sm:h-12 px-7 rounded-full font-bold text-xs sm:text-[13px] cursor-pointer"
            >
              REQUEST A CONSULTATION →
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-7 rounded-full border-border/70 hover:bg-muted text-foreground font-bold text-xs sm:text-[13px]">
              <a href="tel:8164623599" className="inline-flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>CALL (816) 462-3359</span>
              </a>
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
