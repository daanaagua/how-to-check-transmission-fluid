import Link from "next/link";

export default function NotFound() {
  return (
    <section className="content-card not-found">
      <h1>Guide not found</h1>
      <p>That page does not exist. You can continue with the main guide below.</p>
      <Link href="/">Go to main transmission fluid guide</Link>
    </section>
  );
}
