export const metadata = {
  title: "Contact",
  description:
    "Contact Transmission Fluid Check for editorial feedback, correction requests, and partnership inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="content-card static-page">
      <h1>Contact</h1>
      <p>
        For correction requests, content feedback, or partnership inquiries, please contact us at:
      </p>
      <p>
        <a href="mailto:hello@transmissionfluidcheck.com">hello@transmissionfluidcheck.com</a>
      </p>

      <h2>What to Include</h2>
      <p>
        If reporting a content issue, include the page URL, the exact section, and your suggested
        correction so we can review quickly.
      </p>
    </section>
  );
}
