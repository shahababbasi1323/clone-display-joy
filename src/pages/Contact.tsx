import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", website: "", service: "", message: "" });
  const { toast } = useToast();

  useSeoMeta({
    title: "Contact Shahab Abbasi - Free SEO Consultation",
    description: "Get in touch with Shahab Abbasi for a free SEO consultation. Based in Islamabad, serving clients in UAE, UK, USA, Canada and worldwide.",
    canonical: "https://shahababbasi.com/contact",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      company: form.website || null,
      message: [form.service && `Service: ${form.service}`, form.message].filter(Boolean).join("\n"),
      source: "contact_form",
    });
    if (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } else {
      setSubmitted(true);
      // Fire-and-forget email notification
      supabase.functions.invoke("notify-lead", {
        body: { name: form.name, email: form.email, phone: form.phone, website: form.website, service: form.service, message: form.message, source: "contact_form" },
      }).catch(console.error);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <section className="section-padding pb-10">
        <div className="container mx-auto max-w-5xl">
          <PageBreadcrumbs items={[{ label: "Contact" }]} className="mb-8" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Talk SEO</span>
            </h1>
            <p className="text-lg text-muted-foreground">Get in touch for a free consultation about your SEO goals.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
                { icon: Phone, label: "Call Us", value: "Tap to Call", href: "tel:+923041316771" },
                { icon: Mail, label: "Email", value: "contact@shahababbasi.com", href: "mailto:contact@shahababbasi.com" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-5 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/923041316771"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 flex items-center gap-4 hover:border-accent/30 transition-colors group block"
              >
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Chat on WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
                </div>
              </a>

              {/* Calendly CTA */}
              <a
                href="https://calendly.com/shahababbasi"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group block"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Schedule a Call</p>
                  <p className="text-sm text-muted-foreground">Book a free 30-min consultation</p>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="glass rounded-xl p-10 text-center">
                  <div className="text-4xl mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-xl p-6 md:p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Name *</label>
                     <Input placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <Input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone</label>
                      <Input placeholder="+1 234 567 890" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Website</label>
                      <Input placeholder="https://yourwebsite.com" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Service Interested In</label>
                    <select className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      <option value="">Select a service</option>
                      <option>Technical SEO</option>
                      <option>On-Page SEO</option>
                      <option>Local SEO</option>
                      <option>E-commerce SEO</option>
                      <option>GEO Optimization</option>
                      <option>Link Building</option>
                      <option>SEO Audit</option>
                      <option>SEO Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message *</label>
                    <Textarea placeholder="Tell me about your project and goals..." rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full glow-primary" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="section-padding pt-10">
        <div className="container mx-auto max-w-5xl">
          <div className="glass rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.32051984927!2d72.92887385!3d33.6162440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3b26f9de!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shahab Abbasi Location - Islamabad, Pakistan"
            />
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Shahab Abbasi",
              url: "https://shahababbasi.com/contact",
              mainEntity: {
                "@type": "LocalBusiness",
                name: "Shahab Abbasi SEO Services",
                telephone: "+923041316771",
                email: "contact@shahababbasi.com",
                address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressRegion: "ICT", addressCountry: "PK" },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
                { "@type": "ListItem", position: 2, name: "Contact", item: "https://shahababbasi.com/contact" },
              ],
            },
          ]),
        }}
      />
    </Layout>
  );
};

export default Contact;
