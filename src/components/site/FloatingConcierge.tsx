import { useState } from "react";
import { 
  CheckCircle2, 
  Clock, 
  MessageCircle, 
  Phone, 
  Send, 
  Sparkles, 
  X,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { submitLeadRequest } from "@/lib/send-lead";

export function FloatingConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Kitchen Remodel");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }

    setLoading(true);
    try {
      const res = await submitLeadRequest({
        sourceForm: "Floating Concierge Widget",
        name: name.trim(),
        phone: phone.trim(),
        service,
        notes: message.trim(),
      });

      if (res.success) {
        setSubmitted(true);
        toast.success("Callback request sent! A project manager will call you shortly.");
        setTimeout(() => {
          setSubmitted(false);
          setIsOpen(false);
          setName("");
          setPhone("");
          setMessage("");
        }, 2500);
      } else {
        toast.error(res.error || "Failed to send request. Please call us directly.");
      }
    } catch {
      toast.error("Failed to send request. Please call (816) 462-3599 directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] select-none">
      
      {/* Concierge Popover Window */}
      {isOpen && (
        <div className="mb-3 sm:mb-4 w-[calc(100vw-32px)] max-w-[360px] sm:w-[380px] max-h-[85vh] overflow-y-auto glass-dropdown rounded-2xl sm:rounded-3xl border border-primary/40 shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-foreground">
          
          {/* Header */}
          <div className="bg-primary/15 border-b border-primary/20 p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-primary/25 border border-primary/40 flex items-center justify-center text-primary font-display font-black shadow-glow">
                P
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-background rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-foreground">
                  Master Craftsman Concierge
                </h4>
                <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  ● Available for consultations
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-5 space-y-3.5 sm:space-y-4">
            
            {/* Quick Call Box */}
            <a
              href="tel:8164623599"
              className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-foreground">
                    Call Directly for Immediate Needs
                  </span>
                  <span className="block text-[11px] text-primary font-mono font-bold">
                    (816) 462-3599
                  </span>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-primary group-hover:translate-x-1 transition-transform">
                Call Now →
              </span>
            </a>

            <div className="relative flex items-center justify-center my-2">
              <span className="absolute inset-x-0 h-px bg-border/30" />
              <span className="relative bg-card px-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Or Send Fast Request
              </span>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h5 className="font-display text-base font-bold text-foreground">
                  Consultation Logged!
                </h5>
                <p className="text-xs text-muted-foreground">
                  We are reviewing your request and will follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name *"
                    className="h-10 bg-background border-border/50 focus:border-primary text-xs rounded-xl text-foreground"
                  />
                </div>

                <div>
                  <Input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number *"
                    className="h-10 bg-background border-border/50 focus:border-primary text-xs rounded-xl text-foreground"
                  />
                </div>

                <div>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-10 px-3 bg-background border border-border/50 focus:border-primary text-xs rounded-xl text-foreground"
                  >
                    <option value="Kitchen Remodel">Kitchen Remodel</option>
                    <option value="Master Bathroom">Master Bathroom</option>
                    <option value="Whole-Home Renovation">Whole-Home Renovation</option>
                    <option value="Foundation Repair">Foundation Repair</option>
                    <option value="Flooring & Millwork">Flooring & Millwork</option>
                    <option value="Basement Finishing">Basement Finishing</option>
                  </select>
                </div>

                <div>
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Brief description or preferred date..."
                    className="h-10 bg-background border-border/50 focus:border-primary text-xs rounded-xl text-foreground"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground btn-glow hover:bg-primary/90 h-10 rounded-xl font-bold text-xs"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 mr-1.5" /> Request Quick Call Back
                    </>
                  )}
                </Button>
              </form>
            )}

            <div className="pt-1 text-center flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
              <Clock className="w-3 h-3 text-primary" />
              <span>Response guarantee: &lt; 15 mins during business hours</span>
            </div>

          </div>
        </div>
      )}

      {/* Floating Toggle Button (Like Brown's FloatingChat) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 bg-gradient-to-r from-primary to-[#A38656] text-primary-foreground px-4 py-3 rounded-full shadow-2xl btn-glow hover:scale-105 active:scale-95 transition-all duration-300 border border-primary/40 font-bold"
        aria-label="Open consultation widget"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
        </span>
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          Instant Estimate & Support
        </span>
      </button>

    </div>
  );
}
