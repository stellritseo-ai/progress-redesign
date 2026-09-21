import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AboutDedicated } from "@/components/site/AboutDedicated";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { 
        title: "About Us | Progress Interior Designs - Architectural Elegance & Uncompromising Precision" 
      },
      {
        name: "description",
        content: "For over a decade, Progress Interior Designs has been the premier choice for discerning homeowners seeking to transform their living spaces through expert craftsmanship, transparent pricing, and architectural integrity."
      },
      { 
        property: "og:title", 
        content: "About Progress Interior Designs | Architectural Elegance & Precision" 
      },
      { 
        property: "og:description", 
        content: "For over a decade, Progress Interior Designs has been the premier choice for discerning homeowners seeking expert craftsmanship, transparent pricing, and architectural integrity." 
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [{ rel: "canonical", href: "/about" }]
  }),
  component: () => (
    <SiteLayout overlay={false}>
      <AboutDedicated />
    </SiteLayout>
  )
});