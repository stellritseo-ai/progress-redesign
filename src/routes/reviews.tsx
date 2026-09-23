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
        content: "Read verified 5.0-star reviews and firsthand testimonials from discerning Kansas City homeowners who trusted Progress Interior Designs for luxury renovations."
      },
      {
        name: "keywords",
        content: "Progress Interior Designs reviews, contractor testimonials Kansas City, 5-star home remodeling reviews, Grandview contractor ratings"
      },
      { 
        property: "og:title", 
        content: "Client Reviews | Progress Interior Designs - 5.0 Star Rated Contractor" 
      },
      { 
        property: "og:description", 
        content: "5.0-star rated craftsmanship, transparent pricing, and 1,200+ completed home transformations across Greater Kansas City." 
      },
      { property: "og:url", content: "https://www.progressinteriordesigns.com/reviews" },
      { property: "og:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Client Reviews & Ratings | Progress Interior Designs" },
      { name: "twitter:description", content: "5.0-star verified client testimonials for luxury renovations in Kansas City." },
      { name: "twitter:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.progressinteriordesigns.com/reviews" }]
  }),
  component: () => (
    <SiteLayout overlay={false}>
      <ReviewsDedicated />
    </SiteLayout>
  )
});