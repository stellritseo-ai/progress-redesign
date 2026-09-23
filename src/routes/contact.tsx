import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactDedicated } from "@/components/site/ContactDedicated";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { 
        title: "Contact Us | Progress Interior Designs - In-Home Consultations & Estimates" 
      },
      {
        name: "description",
        content: "Schedule your in-home consultation with Progress Interior Designs in Greater Kansas City. Master craftsmanship, transparent fixed pricing, and 24/7 availability."
      },
      {
        name: "keywords",
        content: "contact Progress Interior Designs, renovation estimate Kansas City, contractor consultation Grandview MO, home remodel quote"
      },
      { 
        property: "og:title", 
        content: "Contact Progress Interior Designs | Consultation & Estimation" 
      },
      { 
        property: "og:description", 
        content: "Connect directly with our master craftsmen and project architects to plan your luxury home renovation." 
      },
      { property: "og:url", content: "https://www.progressinteriordesigns.com/contact" },
      { property: "og:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Progress Interior Designs" },
      { name: "twitter:description", content: "Schedule an architectural consultation or request a project estimate." },
      { name: "twitter:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.progressinteriordesigns.com/contact" }]
  }),
  component: () => (
    <SiteLayout overlay={false}>
      <ContactDedicated />
    </SiteLayout>
  )
});