import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AboutDedicated } from "@/components/site/AboutDedicated";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { 
        title: "About Us | Progress Interior Designs - Master Craftsmanship Since 2014" 
      },
      {
        name: "description",
        content: "For over 11 years, Progress Interior Designs has been the premier choice for discerning Kansas City homeowners seeking expert craftsmanship, transparent fixed pricing, and architectural integrity."
      },
      {
        name: "keywords",
        content: "about Progress Interior Designs, general contractor Grandview MO, luxury remodelers Kansas City, family owned contractor, architectural renovation team"
      },
      { 
        property: "og:title", 
        content: "About Progress Interior Designs | Architectural Elegance & Master Craftsmanship" 
      },
      { 
        property: "og:description", 
        content: "Family-owned and operated with 11+ years of master craftsmanship, 20-year structural warranties, and transparent fixed pricing." 
      },
      { property: "og:url", content: "https://www.progressinteriordesigns.com/about" },
      { property: "og:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Progress Interior Designs" },
      { name: "twitter:description", content: "11+ years of luxury renovation craftsmanship and transparent fixed pricing in Greater Kansas City." },
      { name: "twitter:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.progressinteriordesigns.com/about" }]
  }),
  component: () => (
    <SiteLayout overlay={false}>
      <AboutDedicated />
    </SiteLayout>
  )
});