import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { EstimateDedicated } from "@/components/site/EstimateDedicated";

export const Route = createFileRoute("/estimate")({
  head: () => ({
    meta: [
      { 
        title: "Get Your Free Estimate | Progress Interior Designs - Guaranteed Fixed Pricing" 
      },
      {
        name: "description",
        content: "Stop wondering what your dream renovation will cost. Configure your project parameters to generate an accurate estimate range, then request your complimentary in-home consultation and architectural 3D schematic plan."
      },
      { 
        property: "og:title", 
        content: "Get Your Free Renovation Estimate | Progress Interior Designs" 
      },
      { 
        property: "og:description", 
        content: "Interactive scope & investment estimator. Transparent pricing, 3D schematics, and zero guesswork for Dallas, Plano, Frisco & surrounding homeowners." 
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [{ rel: "canonical", href: "/estimate" }]
  }),
  component: () => (
    <SiteLayout overlay={false}>
      <EstimateDedicated />
    </SiteLayout>
  )
});
