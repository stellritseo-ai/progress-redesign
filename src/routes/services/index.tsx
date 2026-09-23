import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServicesOverviewDedicated } from "@/components/site/ServicesOverviewDedicated";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title: "Architectural Renovation Services | Progress Interior Designs",
      },
      {
        name: "description",
        content: "Explore our 8 architectural renovation disciplines: kitchen remodeling, luxury bathrooms, whole-home transformations, foundation repair, flooring, basement finishing, and custom millwork.",
      },
      {
        name: "keywords",
        content: "home renovation services, kitchen remodeling Kansas City, bathroom renovation, foundation repair MO, hardwood flooring contractor, basement finishing",
      },
      {
        property: "og:title",
        content: "Architectural Renovation Disciplines | Progress Interior Designs",
      },
      {
        property: "og:description",
        content: "Greater Kansas City's premier architectural remodeling & general contracting firm. 11+ years of master craftsmanship.",
      },
      { property: "og:url", content: "https://www.progressinteriordesigns.com/services" },
      { property: "og:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Renovation Services | Progress Interior Designs" },
      { name: "twitter:description", content: "Comprehensive residential renovation and general contracting services in Kansas City." },
      { name: "twitter:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.progressinteriordesigns.com/services" }],
  }),
  component: () => (
    <SiteLayout overlay={false}>
      <ServicesOverviewDedicated />
    </SiteLayout>
  ),
});
