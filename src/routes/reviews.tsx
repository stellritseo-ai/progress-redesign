import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ReviewsDedicated } from "@/components/site/ReviewsDedicated";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { 
        title: "Client Reviews & Testimonials | Progress Interior Designs - 5.0 Star Rated" 
      },
      {
        name: "description",
        content: "We don't just build beautiful spaces; we build lasting relationships. Read firsthand accounts from discerning homeowners who trusted Progress Interior Designs with their most valuable investment."
      },
      { 
        property: "og:title", 
        content: "Client Reviews | Progress Interior Designs - Validated By Homeowners" 
      },
      { 
        property: "og:description", 
        content: "5.0-star rated craftsmanship, transparent pricing, and 1,200+ completed transformations across Dallas, Plano, Frisco, McKinney, Allen & Richardson." 
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [{ rel: "canonical", href: "/reviews" }]
  }),
  component: () => (
    <SiteLayout overlay={false}>
      <ReviewsDedicated />
    </SiteLayout>
  )
});