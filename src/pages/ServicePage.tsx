import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { getServiceBySlug } from "@/data/servicesData";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceContent from "@/components/service/ServiceContent";
import ServiceInterlinking from "@/components/service/ServiceInterlinking";
import ServiceSchema from "@/components/service/ServiceSchema";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <NotFound />;

  return (
    <Layout>
      <ServiceHero service={service} />
      <ServiceContent service={service} />
      <ServiceInterlinking service={service} />

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="glass rounded-2xl p-10 md:p-16 glow-primary">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get <span className="text-gradient">Started</span>?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free SEO audit and discover how {service.title.toLowerCase()} can transform your online presence.
            </p>
            <Link to="/free-seo-audit">
              <Button size="lg" className="glow-primary">
                Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ServiceSchema service={service} />
    </Layout>
  );
};

export default ServicePage;
