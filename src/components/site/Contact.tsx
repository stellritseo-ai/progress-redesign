import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { submitLeadRequest } from "@/lib/send-lead";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "Complete Renovation",
    details: "",
  });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }

    setLoading(true);
    try {
      const res = await submitLeadRequest({
        sourceForm: "General Contact Form (Homepage)",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        service: formData.service,
        notes: formData.details,
      });

      if (res.success) {
        setSent(true);
        toast.success("Request sent successfully! Our team will contact you shortly.");
      } else {
        toast.error(res.error || "Failed to send inquiry. Please call us at (816) 462-3599.");
      }
    } catch {
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-background py-24 lg:py-36 border-b border-border/20">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
            Start Your Project
          </p>
          <h2 className="text-4xl font-display font-medium leading-[1.1] md:text-5xl lg:text-6xl">
            Let's Talk About<br />
            <span className="text-muted-foreground italic">Your Next Project.</span>
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            Contact our experienced team for a comprehensive estimate, a specific project question, or a design consultation.
          </p>
          
          <div className="mt-12 space-y-6 text-sm font-medium">
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">01</span>
              <span>Premium Residential & Commercial</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">02</span>
              <span>Detailed Project Estimates</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">03</span>
              <span>24/7 Emergency Availability</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          
          {sent ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center animate-fade-up">
              <span className="grid size-20 place-items-center rounded-full bg-primary/20 border border-primary/30 text-primary shadow-glow mb-8">
                <Check className="w-8 h-8" />
              </span>
              <h3 className="text-3xl font-display font-medium">Request Received.</h3>
              <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
                Thank you for your interest. A member of our design and construction team will follow up shortly to discuss your project.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSent(false);
                  setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    address: "",
                    service: "Complete Renovation",
                    details: "",
                  });
                }}
                className="mt-6 rounded-full text-xs font-bold"
              >
                Send Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} className="relative z-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <label className="block group">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                  Name *
                </span>
                <input 
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 block w-full bg-transparent border-b border-border/50 py-3 text-base text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/30" 
                  placeholder="Enter your name"
                />
              </label>

              <label className="block group">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                  Phone *
                </span>
                <input 
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2 block w-full bg-transparent border-b border-border/50 py-3 text-base text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/30" 
                  placeholder="Enter your phone"
                />
              </label>

              <label className="block group">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                  Email
                </span>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 block w-full bg-transparent border-b border-border/50 py-3 text-base text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/30" 
                  placeholder="Enter your email"
                />
              </label>

              <label className="block group">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                  Address
                </span>
                <input 
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="mt-2 block w-full bg-transparent border-b border-border/50 py-3 text-base text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/30" 
                  placeholder="City or neighborhood"
                />
              </label>
              
              <label className="block sm:col-span-2 group">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                  Service Needed
                </span>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="mt-2 block w-full bg-transparent border-b border-border/50 py-3 text-base text-foreground outline-none transition-colors focus:border-primary appearance-none cursor-pointer"
                >
                  <option className="bg-card">Complete Renovation</option>
                  <option className="bg-card">Foundation Repair</option>
                  <option className="bg-card">Flooring Installation</option>
                  <option className="bg-card">Drywall & Painting</option>
                  <option className="bg-card">Basement Finishing</option>
                  <option className="bg-card">Handyman Service</option>
                </select>
              </label>
              
              <label className="block sm:col-span-2 group">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                  Project Details
                </span>
                <textarea 
                  rows={4} 
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="mt-2 block w-full resize-none bg-transparent border-b border-border/50 py-3 text-base text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/30" 
                  placeholder="Tell us briefly about your vision..."
                />
              </label>
              
              <Button 
                type="submit"
                disabled={loading}
                size="lg" 
                className="mt-6 sm:col-span-2 h-14 rounded-full bg-primary text-primary-foreground btn-glow hover:bg-primary/90 text-xs tracking-widest uppercase font-bold"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting Request...
                  </>
                ) : (
                  <>
                    Request a Free Estimate <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
