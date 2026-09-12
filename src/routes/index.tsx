import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Progress Interior Designs | Home Renovation" },
    { name: "description", content: "Premium home improvement, remodeling, foundation, flooring, painting and renovation services backed by 11+ years of experience." },
    { property: "og:title", content: "Progress Interior Designs | Home Renovation" },
    { property: "og:description", content: "Professional craftsmanship for complete home renovations and improvements." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }] }),
  component: HomePage,
});