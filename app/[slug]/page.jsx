import { notFound } from "next/navigation";
import GuideArticle from "@/components/GuideArticle";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildHowToSchema,
  getGuideBySlug,
  longTailGuides,
} from "@/lib/guides";

export function generateStaticParams() {
  return longTailGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: guide.title,
    description: guide.metaDescription,
    keywords: [
      guide.h1.toLowerCase(),
      "transmission fluid guide",
      "transmission fluid maintenance",
      "how to check transmission fluid",
    ],
    alternates: {
      canonical: guide.path,
    },
  };
}

export default function LongTailPage({ params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    notFound();
  }

  const relatedGuides = longTailGuides.filter((item) => item.slug !== guide.slug);
  const howToSchema = buildHowToSchema(guide);
  const faqSchema = buildFaqSchema(guide);
  const breadcrumbSchema = buildBreadcrumbSchema(guide);

  return (
    <>
      <GuideArticle guide={guide} relatedGuides={relatedGuides.slice(0, 4)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
