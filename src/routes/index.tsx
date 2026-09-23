import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero, Stats } from "@/components/site/Hero";
import { Welcome } from "@/components/site/Welcome";
import { Services } from "@/components/site/Services";
import { Estimate } from "@/components/site/Estimate";
import { Process } from "@/components/site/Process";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Featured } from "@/components/site/Featured";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { FAQ } from "@/components/site/FAQ";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a typical luxury renovation project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A chef's kitchen remodel typically spans 3–5 weeks, a master spa bathroom takes 2–4 weeks, and whole-home architectural transformations run 8–14 weeks with clear critical-path milestones.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free estimates and transparent pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide a complimentary, itemized 3D estimate before starting any work. Pricing is based on the specific scope of work with transparent fixed pricing and no hidden costs.",
      },
    },
    {
      "@type": "Question",
      name: "Can our family comfortably live in the home during the renovation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, over 85% of our residential clients remain living in their homes. We use hospital-grade HEPA negative-air scrubbers, magnetic zipper dust barriers, and daily site clean protocols.",
      },
    },
    {
      "@type": "Question",
      name: "What warranties do you offer on renovations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All load-bearing structural modifications and foundation underpinning work are backed by our industry-leading 20-Year Transferable Structural Warranty.",
      },
    },
    {
      "@type": "Question",
      name: "What areas and neighborhoods do you service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Headquartered in Grandview, MO 64030, our coverage encompasses Greater Kansas City, Grandview, Overland Park, Lee's Summit, Leawood, Prairie Village, and surrounding communities.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Progress Interior Designs | Luxury Architectural Renovation & Contracting" },
      {
        name: "description",
        content: "High-end residential and commercial renovations, luxury kitchen & bath transformations, foundation repair, and architectural millwork in Kansas City. Family-owned with 11+ years of master craftsmanship.",
      },
      {
        name: "keywords",
        content: "luxury kitchen remodeling, bathroom renovation, foundation repair, hardwood flooring, basement finishing, architectural millwork, general contractor Kansas City, Grandview MO contractor",
      },
      { property: "og:title", content: "Progress Interior Designs | Luxury Architectural Renovation & Contracting" },
      { property: "og:description", content: "Master craftsmanship, transparent fixed pricing, and white-glove execution for discerning homeowners in Greater Kansas City." },
      { property: "og:url", content: "https://www.progressinteriordesigns.com/" },
      { property: "og:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Progress Interior Designs | Luxury Architectural Renovation" },
      { name: "twitter:description", content: "Master craftsmanship and transparent fixed pricing for luxury home renovations in Greater Kansas City." },
      { name: "twitter:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://www.progressinteriordesigns.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout overlay={false}>
      <Hero />
      <Stats />
      <Welcome />
      <Services />
      <Process />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Estimate />
      {/* <Featured /> */}
      <EmergencyCTA />
      <FAQ />
    </SiteLayout>
  );
}