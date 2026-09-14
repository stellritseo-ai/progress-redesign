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
import { FloatingConcierge } from "@/components/site/FloatingConcierge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Progress Interior Designs | Luxury Architectural Renovation & Contracting" },
      {
        name: "description",
        content: "High-end residential and commercial renovations, luxury kitchen & bath transformations, foundation repair, and architectural millwork. Family-owned, licensed, and insured with 11+ years of master craftsmanship."
      },
      { property: "og:title", content: "Progress Interior Designs | Luxury Architectural Renovation & Contracting" },
      { property: "og:description", content: "Master craftsmanship, transparent fixed pricing, and white-glove execution for discerning homeowners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }]
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
      <FloatingConcierge />
    </SiteLayout>
  );
}