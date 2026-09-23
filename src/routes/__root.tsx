import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16 text-foreground relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-blob" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-lg w-full glass-card p-10 rounded-3xl text-center space-y-6 animate-rise">
        <div className="mx-auto flex items-center justify-center w-20 h-20 bg-primary/10 border border-primary/30 rounded-full text-primary font-black text-3xl shadow-glow">
          404
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-medium tracking-tight">
            Page Not Found
          </h1>
          <p className="mt-4 text-sm text-muted-foreground font-medium leading-relaxed">
            The space you're looking for doesn't exist or is currently under renovation. Let's get you back to the foundation:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs font-bold pt-4">
          <Link
            to="/"
            className="p-3 rounded-xl border border-border/50 hover:bg-muted hover:border-primary/50 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="p-3 rounded-xl border border-border/50 hover:bg-muted hover:border-primary/50 transition-all duration-200"
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="p-3 rounded-xl border border-border/50 hover:bg-muted hover:border-primary/50 transition-all duration-200"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="p-3 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#C2A878_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
      <div className="relative z-10 max-w-md w-full glass-card p-10 rounded-3xl text-center">
        <div className="mx-auto flex items-center justify-center w-16 h-16 bg-destructive/10 border border-destructive/30 rounded-full text-destructive font-bold text-2xl mb-6">
          !
        </div>
        <h1 className="text-2xl font-display font-medium tracking-tight text-foreground">
          Structural Error
        </h1>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Something didn't load properly on our end. You can try refreshing the page or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground btn-glow transition-all hover:bg-primary/90"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-border/50 px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-muted transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#FAF8F5" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:site_name", content: "Progress Interior Designs" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg" },
      { name: "google-site-verification", content: "7PcKJppbDoPPOrhySAkgcQoI5rtFDG_5HTHqusnMWnU" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Manrope:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
  "@id": "https://www.progressinteriordesigns.com/#organization",
  name: "Progress Interior Designs",
  legalName: "Progress Interior Designs LLC",
  url: "https://www.progressinteriordesigns.com",
  logo: "https://www.progressinteriordesigns.com/logo.png",
  image: "https://www.progressinteriordesigns.com/hero-luxury-renovation.jpg",
  description:
    "Progress Interior Designs is a luxury architectural renovation and general contracting firm based in Grandview, MO, specializing in high-end kitchen remodeling, master bathroom retreats, foundation repair, hardwood flooring, and whole-home transformations with fixed-price transparency.",
  telephone: "+1-816-462-3599",
  email: "eva@stellrit.com",
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grandview Metro",
    addressLocality: "Grandview",
    addressRegion: "MO",
    postalCode: "64030",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.8858,
    longitude: -94.533,
  },
  areaServed: [
    { "@type": "City", name: "Grandview", sameAs: "https://en.wikipedia.org/wiki/Grandview,_Missouri" },
    { "@type": "City", name: "Kansas City", sameAs: "https://en.wikipedia.org/wiki/Kansas_City,_Missouri" },
    { "@type": "City", name: "Overland Park" },
    { "@type": "City", name: "Leawood" },
    { "@type": "City", name: "Olathe" },
    { "@type": "City", name: "Lee's Summit" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "15:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "48",
    bestRating: "5",
    worstRating: "1",
  },
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
