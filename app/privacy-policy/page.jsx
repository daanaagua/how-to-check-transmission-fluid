export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Transmission Fluid Check, including analytics data handling and contact privacy commitments.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="content-card static-page">
      <h1>Privacy Policy</h1>
      <p>Last updated: 2026-03-05</p>

      <h2>Information We Collect</h2>
      <p>
        We may collect basic analytics data such as page views, referral sources, and device
        category to improve website quality.
      </p>

      <h2>How We Use Data</h2>
      <p>
        Data is used for traffic measurement, content improvement, and site reliability monitoring.
        We do not sell personal data.
      </p>

      <h2>Cookies</h2>
      <p>
        This site may use cookies for performance analytics and session-level functionality. You can
        manage cookie preferences through your browser settings.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, use the contact page. We review requests and respond in a reasonable
        timeframe.
      </p>
    </section>
  );
}
