import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceDedicated } from "@/components/site/ServiceDedicated";
import { servicesDataMap } from "@/data/servicesData";

const data = servicesDataMap["drywall-painting"]!;
const canonicalUrl = "https://www.progressinteriordesigns.com/services/drywall-painting";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Level 5 Drywall Finishing & Designer Architectural Painting",
  name: `${data.title} | Progress Interior Designs`,
  description: data.heroSubheadline,
  provider: {
    "@type": "GeneralContractor",
    name: "Progress Interior Designs",
    url: "https://www.progressinteriordesigns.com",
    telephone: "+1-816-462-3599",
  },
  areaServed: {
    "@type": "City",
    name: "Kansas City",
  },
  url: canonicalUrl,
};

export const Route = createFileRoute("/services/drywall-painting")({
  head: () => ({
    meta: [
      { title: `${data.title} | Progress Interior Designs` },
      { name: "description", content: data.heroSubheadline },
      {
        name: "keywords",
        content:
          "drywall repair Kansas City, level 5 drywall finish, luxury interior painting, architectural coatings, ceiling texture removal",
      },
      { property: "og:title", content: `${data.title} | Progress Interior Designs` },
      { property: "og:description", content: data.heroSubheadline },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: data.heroImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${data.title} | Progress Interior Designs` },
      { name: "twitter:description", content: data.heroSubheadline },
      { name: "twitter:image", content: data.heroImage },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema),
      },
    ],
  }),
  component: () => (
    <SiteLayout overlay={false}>
      <ServiceDedicated data={data} />
    </SiteLayout>
  ),
});
