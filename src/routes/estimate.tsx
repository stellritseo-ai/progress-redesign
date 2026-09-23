import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { EstimateDedicated } from "@/components/site/EstimateDedicated";

export const Route = createFileRoute("/estimate")({
  head: () => ({
    meta: [
      { 
        title: "Free Renovation Estimate & 3D Consultation | Progress Interior Designs" 
      },
      {
        name: "description",
        content: "Plan your luxury renovation with zero guesswork. Configure your project parameters for an immediate scope estimate, then schedule your complimentary in-home 3D consultation."
      },
      {
        name: "keywords",
        content: "renovation cost calculator, home remodel estimate, kitchen remodel cost Kansas City, bathroom remodel quote, fixed price contractor"
      },
      { 
        property: "og:title", 
        content: "Free Renovation Estimate & 3D Plan | Progress Interior Designs" 
      },
      { 
        property: "og:description", 
        content: "Interactive renovation scope estimator with guaranteed line-item pricing and complimentary 3D schematic scan." 
      },
      { property: "og:url", content: "https://www.progressinteriordesigns.com/estimate" },
      { property: "og:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Free Renovation Estimate | Progress Interior Designs" },
      { name: "twitter:description", content: "Interactive project calculator & complimentary 3D consultation." },
      { name: "twitter:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.progressinteriordesigns.com/estimate" }]
  }),
  component: () => (
    <SiteLayout overlay={false}>
      <EstimateDedicated />
    </SiteLayout>
  )
});
