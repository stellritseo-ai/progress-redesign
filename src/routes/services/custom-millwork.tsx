import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceDedicated } from "@/components/site/ServiceDedicated";
import { servicesDataMap } from "@/data/servicesData";

const data = servicesDataMap["custom-millwork"]!;
const canonicalUrl = "https://www.progressinteriordesigns.com/services/custom-millwork";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Architectural Millwork, Custom Cabinetry & Finish Carpentry",
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

export const Route = createFileRoute("/services/custom-millwork")({
  head: () => ({
    meta: [
      { title: `${data.title} | Progress Interior Designs` },
      { name: "description", content: data.heroSubheadline },
      {
        name: "keywords",
        content:
          "custom architectural millwork Kansas City, built-in bookshelves, bespoke cabinetry, coffered ceiling, wainscoting finish carpentry",
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
