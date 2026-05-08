import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SRISRAVV TRANSCORP — Driven by Trust. Defined by Excellence." },
      { name: "description", content: "SRISRAVV TRANSCORP PRIVATE LIMITED — premium intercity AC sleeper bus services from Hyderabad." },
      { name: "author", content: "SRISRAVV TRANSCORP PRIVATE LIMITED" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "SRISRAVV TRANSCORP — Driven by Trust. Defined by Excellence." },
      { name: "twitter:title", content: "SRISRAVV TRANSCORP — Driven by Trust. Defined by Excellence." },
      { property: "og:description", content: "SRISRAVV TRANSCORP PRIVATE LIMITED — premium intercity AC sleeper bus services from Hyderabad." },
      { name: "twitter:description", content: "SRISRAVV TRANSCORP PRIVATE LIMITED — premium intercity AC sleeper bus services from Hyderabad." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/39a14910-1f0a-4b77-9af3-db8be4a2a150/id-preview-7b468df5--d6f61c4f-8a6f-4016-a949-f9c8a851e901.lovable.app-1777171389381.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/39a14910-1f0a-4b77-9af3-db8be4a2a150/id-preview-7b468df5--d6f61c4f-8a6f-4016-a949-f9c8a851e901.lovable.app-1777171389381.png" },
      { property: "og:url", content: "https://srisravvtranscorp.com/" },
      // Add your Google Search Console verification tag here
      // { name: "google-site-verification", content: "YOUR_VERIFICATION_CODE_HERE" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600&family=Cinzel:wght@500;600;700;800&display=swap" },
      { rel: "canonical", href: "https://srisravvtranscorp.com/" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
