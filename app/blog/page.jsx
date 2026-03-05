import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Transmission Maintenance Blog",
  description:
    "Actionable transmission maintenance articles covering fluid checks, service timing, and early warning signs.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <section className="content-card">
      <h1>Transmission Maintenance Blog</h1>
      <p className="intro">
        Practical articles that support DIY inspections and better service decisions.
      </p>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.slug} className="blog-card">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              width={1000}
              height={620}
              className="blog-thumb"
            />
            <div className="blog-card-body">
              <h2>
                <Link href={post.path}>{post.title}</Link>
              </h2>
              <p>{post.description}</p>
              <div className="meta-row">
                <span>{post.readingTime}</span>
                <span>{post.updatedAt}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
