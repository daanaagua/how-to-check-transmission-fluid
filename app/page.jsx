import GuideArticle from "@/components/GuideArticle";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildHowToSchema,
  getRelatedGuides,
  mainGuide,
} from "@/lib/guides";

export const metadata = {
  title: mainGuide.title,
  description: mainGuide.metaDescription,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const relatedGuides = getRelatedGuides(mainGuide.relatedSlugs);
  const howToSchema = buildHowToSchema(mainGuide);
  const faqSchema = buildFaqSchema(mainGuide);
  const breadcrumbSchema = buildBreadcrumbSchema(mainGuide);

  return (
    <>
      <GuideArticle guide={mainGuide} relatedGuides={relatedGuides} />
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
