import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

const getWhatsAppMessage = (pathname: string): string => {
  const path = pathname.toLowerCase();

  if (path === "/" || path === "") {
    return "Hi Shahab, I visited your website and I'm interested in your digital marketing services. Can we discuss?";
  }
  if (path === "/free-seo-audit") {
    return "Hi Shahab, I'd like to request a free SEO audit for my website. Can you help?";
  }
  if (path === "/pricing") {
    return "Hi Shahab, I'm looking at your pricing plans. Can you help me choose the right package?";
  }
  if (path === "/contact") {
    return "Hi Shahab, I'd like to get in touch regarding a project. Can we chat?";
  }
  if (path.startsWith("/services")) {
    const service = pathname.split("/services/")[1]?.replace(/-/g, " ");
    return service
      ? `Hi Shahab, I'm interested in your ${service} service. Can we discuss my needs?`
      : "Hi Shahab, I'm exploring your SEO services. Can you help me find the right one?";
  }
  if (path.startsWith("/ppc")) {
    const service = pathname.split("/ppc/")[1]?.replace(/-/g, " ");
    return service
      ? `Hi Shahab, I'm interested in your ${service} service. Can we discuss?`
      : "Hi Shahab, I'm looking at your PPC advertising services. Can we talk?";
  }
  if (path.startsWith("/tools")) {
    return "Hi Shahab, I've been using your free SEO tools and I'd like professional help with my SEO. Can we discuss?";
  }
  if (path.startsWith("/blog")) {
    return "Hi Shahab, I read your blog and I'm interested in your digital marketing expertise. Can we chat?";
  }
  if (path.startsWith("/industries")) {
    const industry = pathname.split("/industries/")[1]?.replace(/-/g, " ");
    return industry
      ? `Hi Shahab, I'm in the ${industry} industry and need SEO help. Can we discuss?`
      : "Hi Shahab, I'm looking for industry-specific SEO services. Can you help?";
  }
  if (path === "/free-seo-resources") {
    return "Hi Shahab, I downloaded your free SEO resources and want to take my SEO further. Can we talk?";
  }
  if (path === "/about") {
    return "Hi Shahab, I learned about your agency and I'm interested in working together. Can we chat?";
  }
  if (path === "/testimonials") {
    return "Hi Shahab, I've seen your client results and I'd like similar success for my business. Can we discuss?";
  }
  // Location pages (top-level slugs)
  if (path.startsWith("/locations") || /^\/[a-z-]+$/.test(path)) {
    return "Hi Shahab, I'm looking for local SEO services in my area. Can we discuss?";
  }

  return "Hi Shahab, I'm interested in your digital marketing services. Can we discuss?";
};

const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const message = useMemo(() => getWhatsAppMessage(pathname), [pathname]);
  const href = `https://wa.me/923041316771?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg hover:bg-[hsl(142,70%,40%)] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
};

export default WhatsAppButton;
