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
        content: "Whether you are planning a minor remodel or a full structural renovation, reach out to Progress Interior Designs today for expert guidance, transparent pricing, and uncompromising craftsmanship."
      },
      { 
        property: "og:title", 
        content: "Contact Progress Interior Designs | Let's Discuss Your Next Transformation" 
      },
      { 
        property: "og:description", 
        content: "Schedule your in-home consultation with Progress Interior Designs. Full-service general contracting and luxury renovations across Dallas, Plano, Frisco & surrounding areas." 
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [{ rel: "canonical", href: "/contact" }]
  }),
  component: () => (
    <SiteLayout overlay={false}>
      <ContactDedicated />
    </SiteLayout>
  )
});