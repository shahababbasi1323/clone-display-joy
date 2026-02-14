import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";

const TermsOfService = () => {
  useSeoMeta({
    title: "Terms of Service - Shahab Abbasi SEO Services",
    description: "Read the terms of service for Shahab Abbasi SEO services. Understand our service terms, payment policies, and client responsibilities.",
    canonical: "https://shahababbasi.com/terms-of-service",
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
            <p><strong className="text-foreground">Effective Date:</strong> January 1, 2026</p>
            <p>
              These Terms of Service ("Terms") govern your use of shahababbasi.com and any SEO services provided by Shahab Abbasi ("we," "us," or "our"). By accessing our website or engaging our services, you agree to these Terms.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Services</h2>
            <p>We provide search engine optimization (SEO) and related digital marketing services. Specific deliverables, timelines, and pricing are outlined in individual service agreements or proposals provided to each client.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. No Guarantee of Rankings</h2>
            <p>While we employ industry best practices to improve your website's search visibility, we cannot and do not guarantee specific search engine rankings, traffic volumes, or business outcomes. Search engine algorithms are outside our control and subject to change.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate information and timely access to necessary accounts and resources</li>
              <li>Review and approve content, strategies, and changes in a timely manner</li>
              <li>Ensure website hosting and domain management remain active</li>
              <li>Not engage in black-hat SEO practices that could harm the campaign</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Payment Terms</h2>
            <p>Payment terms are specified in individual service agreements. Generally, monthly retainers are due at the beginning of each billing period. Late payments may result in service suspension.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Intellectual Property</h2>
            <p>Content created as part of our services (blog posts, meta descriptions, etc.) becomes the client's property upon full payment. Our proprietary tools, processes, and methodologies remain our intellectual property.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Confidentiality</h2>
            <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This includes business strategies, analytics data, and client information.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">7. Free Tools & Resources</h2>
            <p>Our free SEO tools and downloadable resources are provided "as is" for informational purposes. We make no warranties regarding the accuracy, completeness, or suitability of these tools for any particular purpose.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services or website.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">9. Termination</h2>
            <p>Either party may terminate the service agreement with 30 days written notice. Upon termination, the client is responsible for payment of all services rendered up to the termination date.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">10. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be resolved through amicable negotiation, and if necessary, through the courts of Islamabad.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">11. Contact</h2>
            <p>
              For questions about these Terms, contact us at:<br />
              <strong className="text-foreground">Email:</strong> contact@shahababbasi.com<br />
              <strong className="text-foreground">Phone:</strong> +92 304 1316771
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">12. Changes</h2>
            <p>We reserve the right to update these Terms at any time. Continued use of our website or services after changes constitutes acceptance of the updated Terms.</p>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://shahababbasi.com/" },
              { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://shahababbasi.com/terms-of-service" },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default TermsOfService;
