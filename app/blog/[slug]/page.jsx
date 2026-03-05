import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, buildArticleSchema, getBlogPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.path,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleSchema = buildArticleSchema(post);

  return (
    <>
      <article className="content-card blog-post">
        <p className="eyebrow">Blog Article</p>
        <h1>{post.title}</h1>
        <p className="intro">{post.description}</p>
        <div className="meta-row">
          <span>{post.readingTime}</span>
          <span>Updated {post.updatedAt}</span>
        </div>

        <Image
          src={post.heroImage}
          alt={post.heroAlt}
          width={1200}
          height={720}
          className="blog-hero"
        />

        <div className="prose-block">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </section>
          ))}
        </div>

        <p>
          <Link href="/">Back to main fluid check guide</Link>
        </p>
      </article>

      <section className="content-card">
        <h2>Related Articles</h2>
        <div className="related-grid">
          {related.map((item) => (
            <Link key={item.slug} href={item.path} className="related-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>Read article</span>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
