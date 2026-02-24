import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Mail, Phone, MessageCircle, ArrowRight, Zap, Percent } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const DISMISS_KEY = "welcome_popup_dismissed";

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed) return;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 30) {
        setOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dismiss = () => {
    setOpen(false);
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMsg = message.trim();

    if (!trimmedEmail) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: trimmedEmail.split("@")[0],
        email: trimmedEmail,
        phone: trimmedPhone || null,
        message: trimmedMsg || null,
        source: "welcome-popup",
      });
      if (error) throw error;
      toast.success("🎉 Discount claimed! We'll reach out shortly.");
      dismiss();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md rounded-2xl border border-[hsl(142,70%,45%)]/20 bg-[hsl(210,60%,8%)]/95 backdrop-blur-xl p-6 pt-8 shadow-2xl shadow-[hsl(142,70%,45%)]/10 text-white overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
          >
            {/* Close */}
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)]/15 border border-[hsl(142,70%,45%)]/30 flex items-center justify-center">
                <Gift className="h-7 w-7 text-[hsl(142,70%,45%)]" />
              </div>
            </div>

            {/* Badge */}
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(142,70%,45%)]/15 border border-[hsl(142,70%,45%)]/30 text-[hsl(142,70%,45%)] text-sm font-semibold">
                <Percent className="h-3.5 w-3.5" /> 25% OFF
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-center text-2xl font-bold mb-1">
              🎉 Special Welcome Offer!
            </h2>
            <p className="text-center text-[hsl(142,70%,45%)] font-semibold mb-1">
              Get 25% Off Your First Project
            </p>
            <p className="text-center text-white/60 text-sm mb-1">
              New clients only – Limited time!
            </p>
            <p className="text-center text-sm mb-5 flex items-center justify-center gap-1 text-amber-400">
              <Zap className="h-3.5 w-3.5" /> Offer expires soon!
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                <Mail className="h-4 w-4 text-white/40 shrink-0" />
                <input
                  type="email"
                  required
                  maxLength={255}
                  placeholder="Your email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-white placeholder:text-white/40 text-sm outline-none"
                />
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                <Phone className="h-4 w-4 text-white/40 shrink-0" />
                <input
                  type="tel"
                  maxLength={20}
                  placeholder="WhatsApp number (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent text-white placeholder:text-white/40 text-sm outline-none"
                />
              </div>
              <textarea
                maxLength={500}
                rows={3}
                placeholder="Briefly describe your problem or goal..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 text-sm outline-none resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white font-semibold py-3.5 transition-colors disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Claim Your Discount"}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>

            {/* WhatsApp shortcut */}
            <div className="mt-4 text-center">
              <p className="text-white/40 text-xs mb-2">Or get instant response via</p>
              <a
                href="https://wa.me/923041316771?text=Hi%2C%20I%27m%20interested%20in%20the%2025%25%20off%20welcome%20offer!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
