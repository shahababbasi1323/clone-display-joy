import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Mail, Phone, MessageCircle, ArrowRight, Zap, Percent, Star, Sparkles, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Floating particles
const PARTICLE_COUNT = 14;
const generateParticles = () =>
  Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
    type: i % 3, // 0=circle, 1=star, 2=diamond
  }));

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const particles = useMemo(() => generateParticles(), []);

  useEffect(() => {
    // Don't show popup on /tools pages
    if (window.location.pathname.startsWith("/tools")) return;

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
    setTimeout(() => setSubmitted(false), 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMsg = message.trim();

    const trimmedName = name.trim();
    if (!trimmedName) {
      toast.error("Please enter your name.");
      return;
    }
    if (!trimmedEmail) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone || null,
        message: trimmedMsg || null,
        source: "welcome-popup",
      });
      if (error) throw error;

      await supabase.functions.invoke("notify-lead", {
        body: {
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone || null,
          message: trimmedMsg || "Welcome popup - 25% discount claim",
          source: "welcome-popup",
        },
      });

      setSubmitted(true);
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
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-[420px] rounded-3xl border border-primary/15 bg-gradient-to-b from-card via-card to-card/90 backdrop-blur-2xl shadow-[0_25px_60px_-15px_hsl(var(--primary)/0.25)] text-card-foreground overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Top accent gradient bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary" />

            {/* Floating particles */}
            {particles.map((p) => (
              <motion.div
                key={`p-${p.id}`}
                className="absolute pointer-events-none"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                  borderRadius: p.type === 2 ? "1px" : "50%",
                  transform: p.type === 2 ? "rotate(45deg)" : undefined,
                  background: p.type === 0
                    ? "hsl(var(--accent) / 0.7)"
                    : p.type === 1
                    ? "hsl(var(--primary) / 0.6)"
                    : "hsl(45, 100%, 65%)",
                  boxShadow: `0 0 ${p.size * 3}px ${
                    p.type === 0 ? "hsl(var(--accent) / 0.4)" : "hsl(var(--primary) / 0.3)"
                  }`,
                }}
                animate={{
                  y: [0, -15, 0, 10, 0],
                  x: [0, 8, -5, 3, 0],
                  opacity: [0.3, 0.9, 0.5, 0.8, 0.3],
                  scale: [0.8, 1.3, 1, 1.2, 0.8],
                }}
                transition={{
                  delay: p.delay,
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Content */}
            <div className="relative z-10 p-6 pt-5">
              {/* Close */}
              <button
                onClick={dismiss}
                className="absolute top-3 right-3 p-1.5 rounded-full text-muted-foreground/60 hover:text-foreground hover:bg-muted/80 transition-all z-20"
                aria-label="Close popup"
              >
                <X className="h-4 w-4" />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Icon with glow */}
                    <div className="flex justify-center mb-4">
                      <motion.div
                        className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/25 flex items-center justify-center"
                        animate={{ rotate: [0, 3, -3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Gift className="h-8 w-8 text-accent" />
                        <div className="absolute -top-1 -right-1">
                          <Sparkles className="h-4 w-4 text-amber-400" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Badge */}
                    <div className="flex justify-center mb-3">
                      <motion.span
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/15 to-primary/15 border border-accent/20 text-accent text-xs font-bold tracking-wider uppercase"
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Percent className="h-3 w-3" /> 25% OFF
                      </motion.span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-center text-xl font-extrabold mb-0.5 tracking-tight">
                      Special Welcome Offer! 🎉
                    </h2>
                    <p className="text-center text-accent font-semibold text-sm mb-0.5">
                      Get 25% Off Your First Project
                    </p>
                    <p className="text-center text-muted-foreground text-xs mb-0.5">
                      New clients only – Limited time!
                    </p>
                    <p className="text-center text-xs mb-4 flex items-center justify-center gap-1 text-amber-500 dark:text-amber-400">
                      <Zap className="h-3 w-3" /> Offer expires soon!
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-2.5">
                      <div className="group flex items-center gap-2.5 rounded-xl bg-muted/40 border border-border/80 hover:border-primary/40 focus-within:border-primary/60 focus-within:bg-muted/60 px-3.5 py-2.5 transition-all">
                        <span className="text-muted-foreground group-focus-within:text-primary shrink-0 transition-colors text-sm">👤</span>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          placeholder="Your name *"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/60 text-sm outline-none"
                        />
                      </div>
                      <div className="group flex items-center gap-2.5 rounded-xl bg-muted/40 border border-border/80 hover:border-primary/40 focus-within:border-primary/60 focus-within:bg-muted/60 px-3.5 py-2.5 transition-all">
                        <Mail className="h-4 w-4 text-muted-foreground group-focus-within:text-primary shrink-0 transition-colors" />
                        <input
                          type="email"
                          required
                          maxLength={255}
                          placeholder="Your email *"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/60 text-sm outline-none"
                        />
                      </div>
                      <div className="group flex items-center gap-2.5 rounded-xl bg-muted/40 border border-border/80 hover:border-primary/40 focus-within:border-primary/60 focus-within:bg-muted/60 px-3.5 py-2.5 transition-all">
                        <Phone className="h-4 w-4 text-muted-foreground group-focus-within:text-primary shrink-0 transition-colors" />
                        <input
                          type="tel"
                          maxLength={20}
                          placeholder="WhatsApp number (optional)"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/60 text-sm outline-none"
                        />
                      </div>
                      <textarea
                        maxLength={500}
                        rows={2}
                        placeholder="Briefly describe your problem or goal..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-xl bg-muted/40 border border-border/80 hover:border-primary/40 focus:border-primary/60 focus:bg-muted/60 px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/60 text-sm outline-none resize-none transition-all"
                      />

                      <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent/85 text-accent-foreground font-bold py-3 text-sm transition-all disabled:opacity-60 shadow-lg shadow-accent/20 hover:shadow-accent/30"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {loading ? (
                          <motion.div
                            className="h-4 w-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <>
                            Claim Your Discount
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mt-4 mb-3">
                      <div className="flex-1 h-px bg-border/60" />
                      <span className="text-muted-foreground/50 text-[10px] uppercase tracking-widest">or</span>
                      <div className="flex-1 h-px bg-border/60" />
                    </div>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/923041316771?text=Hi%2C%20I%27m%20interested%20in%20the%2025%25%20off%20welcome%20offer!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-border/80 bg-muted/30 hover:bg-muted/60 text-foreground text-sm font-medium transition-all"
                    >
                      <MessageCircle className="h-4 w-4 text-green-500" /> Chat on WhatsApp
                    </a>

                    {/* Trust signals */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
                        <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                        <span>Trusted by 100+ clients</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
                        <CheckCircle2 className="h-3 w-3 text-accent" />
                        <span>No spam, ever</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* Success State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 20 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.15 }}
                    >
                      <CheckCircle2 className="h-10 w-10 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">You're In! 🎉</h3>
                    <p className="text-accent font-semibold text-lg mb-1">WELCOME25</p>
                    <p className="text-muted-foreground text-sm mb-1">
                      Your 25% discount code has been sent to
                    </p>
                    <p className="text-foreground font-medium text-sm mb-4">{email}</p>
                    <p className="text-muted-foreground/60 text-xs mb-5">
                      Check your inbox (and spam folder) for the code & next steps.
                    </p>
                    <div className="flex gap-2">
                      <a
                        href="https://wa.me/923041316771?text=Hi%20Shahab%2C%20I%20have%20the%20WELCOME25%20discount%20code!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border/80 bg-muted/30 hover:bg-muted/60 text-foreground text-sm font-medium transition-all"
                      >
                        <MessageCircle className="h-4 w-4 text-green-500" /> WhatsApp
                      </a>
                      <button
                        onClick={dismiss}
                        className="flex-1 py-2.5 rounded-xl bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
                      >
                        Continue Browsing
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
