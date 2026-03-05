export const metadata = {
  title: "About Transmission Fluid Check",
  description:
    "Learn about our editorial approach for transmission fluid guides, maintenance education, and practical DIY safety.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="content-card static-page">
      <h1>About Us</h1>
      <p>
        Transmission Fluid Check is a focused maintenance education site built to help drivers
        inspect transmission fluid safely and consistently.
      </p>

      <h2>What We Publish</h2>
      <p>
        We publish step-by-step checks, troubleshooting references, and service planning content
        for automatic, CVT, and sealed transmission workflows.
      </p>

      <h2>Editorial Principles</h2>
      <p>
        Our content prioritizes practical accuracy, clear sequencing, and low-risk maintenance
        guidance. We recommend owner manual or OEM service procedures when vehicle-specific rules
        differ.
      </p>

      <h2>Important Note</h2>
      <p>
        This website provides educational information and is not a substitute for licensed
        mechanical diagnosis.
      </p>
    </section>
  );
}
