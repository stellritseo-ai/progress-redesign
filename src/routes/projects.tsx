import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/components/interior-page";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Renovation Portfolio & Featured Projects | Progress Interior Designs",
      },
      {
        name: "description",
        content:
          "Explore our portfolio of luxury home transformations, architectural chef's kitchens, master spa retreats, and custom millwork across Greater Kansas City.",
      },
      {
        name: "keywords",
        content:
          "renovation portfolio, luxury home remodeling projects, kitchen before and after, bathroom remodels Kansas City, architectural contractor gallery",
      },
      {
        property: "og:title",
        content: "Renovation Portfolio & Featured Projects | Progress Interior Designs",
      },
      {
        property: "og:description",
        content:
          "Explore our curated portfolio of completed architectural renovations, chef's kitchens, and spa bathroom suites across Greater Kansas City.",
      },
      {
        property: "og:url",
        content: "https://www.progressinteriordesigns.com/projects",
      },
      {
        property: "og:image",
        content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Renovation Portfolio | Progress Interior Designs",
      },
      {
        name: "twitter:description",
        content:
          "See the difference master craftsmanship and transparent fixed pricing make in high-end home renovations.",
      },
      {
        name: "twitter:image",
        content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.progressinteriordesigns.com/projects" }],
  }),
  component: () => <InteriorPage kind="projects" />,
});