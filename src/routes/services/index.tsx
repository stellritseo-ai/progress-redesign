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
        property: "og:title",
        content: "Architectural Renovation Disciplines | Progress Interior Designs",
      },
      {
        property: "og:description",
        content: "Dallas, Plano, Frisco & Collin County's premier architectural remodeling & general contracting firm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <SiteLayout overlay={false}>
      <ServicesOverviewDedicated />
    </SiteLayout>
  ),
});
