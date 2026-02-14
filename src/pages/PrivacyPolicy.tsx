import Layout from "@/components/Layout";
import { useSeoMeta } from "@/hooks/useSeoMeta";

const PrivacyPolicy = () => {
  useSeoMeta({
    title: "Privacy Policy - Shahab Abbasi SEO Services",
    description: "Read the privacy policy for shahababbasi.com. Learn how we collect, use, and protect your personal information.",
    canonical: "https://shahababbasi.com/privacy-policy",
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
            <p><strong className="text-foreground">Effective Date:</strong> January 1, 2026</p>
            <p>
              Shahab Abbasi ("we," "us," or "our") operates shahababbasi.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
            <p>We may collect information that you voluntarily provide when using our website, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email address, phone number, and website URL submitted through contact forms</li>
              <li>Information provided during free SEO audit requests</li>
              <li>Email addresses submitted for resource downloads</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Automatically Collected Information</h2>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device and operating system information</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your inquiries and provide SEO services</li>
              <li>To send you requested resources and information</li>
              <li>To improve our website and services</li>
              <li>To send periodic emails (you can unsubscribe at any time)</li>
              <li>To analyze website usage through analytics tools</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Third-Party Services</h2>
            <p>We may use third-party services such as Google Analytics, Google Maps, and email marketing platforms. These services have their own privacy policies governing how they use your information.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Cookies</h2>
            <p>Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <p>
              <strong className="text-foreground">Email:</strong> contact@shahababbasi.com<br />
              <strong className="text-foreground">Location:</strong> Islamabad, Pakistan
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://shahababbasi.com/privacy-policy" },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default PrivacyPolicy;
