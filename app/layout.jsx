import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "How to Check Transmission Fluid",
    template: "%s | Transmission Fluid Check",
  },
  description:
    "Professional, practical guides for checking transmission fluid level, condition, and service signals.",
  alternates: {
    canonical: "/",
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
  return (
    <html lang="en">
      <body>
        <main className="page-wrap">{children}</main>
      </body>
    </html>
  );
}
