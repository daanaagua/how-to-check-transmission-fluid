export const metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for Transmission Fluid Check, including acceptable use and liability limitations.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="content-card static-page">
      <h1>Terms of Use</h1>
      <p>Last updated: 2026-03-05</p>

      <h2>Educational Content</h2>
      <p>
        Content on this website is provided for general educational purposes and does not create a
        professional mechanic-client relationship.
      </p>

      <h2>User Responsibility</h2>
      <p>
        You are responsible for using proper safety practices and following your manufacturer
        service procedures when working on any vehicle.
      </p>

      <h2>No Warranty</h2>
      <p>
        Information is provided as-is. We make reasonable efforts to keep content accurate but do
        not guarantee completeness for every vehicle model or market.
      </p>
    </section>
  );
}
