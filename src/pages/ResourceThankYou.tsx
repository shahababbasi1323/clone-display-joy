import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Download, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";

const ResourceThankYou = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "Your Resource";
  const downloadUrl = searchParams.get("url") || "";

  useSeoMeta({
    title: "Thank You — Your Resource is Ready | Shahab Abbasi",
    description: "Your free SEO resource is ready to download. Check your email for a copy too!",
    canonical: "https://shahababbasi.com/free-seo-resources/thank-you",
  });

  return (
    <Layout>
      <section className="relative overflow-hidden py-20 md:py-32 px-4 min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,40%,6%)] via-[hsl(220,35%,10%)] to-[hsl(220,40%,6%)]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="container mx-auto relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 mx-auto">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Thank You! 🎉
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              <strong className="text-foreground">{title}</strong> is ready for you.
            </p>
            <p className="text-muted-foreground mb-8 flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" /> We've also sent a copy to your email.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              {downloadUrl && (
                <Button
                  onClick={() => window.open(downloadUrl, "_blank")}
                  size="lg"
                  className="glow-accent bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Download className="h-4 w-4 mr-2" /> Download PDF
                </Button>
              )}
              <Link to="/free-seo-resources">
                <Button size="lg" variant="outline">
                  Browse All Resources <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="glass rounded-2xl p-8 text-left">
              <h2 className="text-xl font-bold mb-4 text-center">What's Next?</h2>
              <div className="space-y-4">
                {[
                  { text: "Check your email for the PDF download link", icon: "📧" },
                  { text: "Apply the strategies to your website today", icon: "🚀" },
                  { text: "Get a free personalized SEO audit of your site", icon: "🔍", link: "/free-seo-audit" },
                  { text: "Explore our professional SEO services", icon: "💼", link: "/services" },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl shrink-0">{step.icon}</span>
                    <div>
                      {step.link ? (
                        <Link to={step.link} className="font-medium hover:text-primary transition-colors underline underline-offset-2">
                          {step.text}
                        </Link>
                      ) : (
                        <span className="font-medium">{step.text}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourceThankYou;
