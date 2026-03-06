import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.checktransmissionfluid.help";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "How to Check Transmission Fluid",
    template: "%s | Transmission Fluid Check",
  },
  description:
    "Professional, practical guides for checking transmission fluid level, condition, and service signals.",
  keywords: [
    "how to check transmission fluid",
    "check transmission fluid",
    "transmission fluid level",
    "automatic transmission fluid",
    "cvt transmission fluid",
    "transmission maintenance",
    "transmission fluid color chart",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Transmission Fluid Check",
    title: "How to Check Transmission Fluid",
    description:
      "Step-by-step transmission fluid checks with clear visuals, safety notes, and long-tail maintenance guides.",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Check Transmission Fluid",
    description:
      "Step-by-step transmission fluid checks with clear visuals and practical maintenance advice.",
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Transmission Fluid Check",
    url: siteUrl,
    sameAs: [],
  };

  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D81NDQ6MTK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D81NDQ6MTK');
          `}
        </Script>
        <div className="site-shell">
          <header className="site-header">
            <div className="site-header-inner">
              <Link href="/" className="brand-link">
                Transmission Fluid Check
              </Link>
              <nav className="top-nav" aria-label="Primary">
                <Link href="/">Guide</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
          </header>

          <main className="page-wrap">{children}</main>

          <footer className="site-footer">
            <div className="site-footer-inner">
              <p>Maintenance education for transmission fluid checks.</p>
              <nav aria-label="Footer">
                <Link href="/about">About</Link>
                <Link href="/privacy-policy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/blog">Blog</Link>
              </nav>
            </div>
          </footer>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
