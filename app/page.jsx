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
  keywords: [
    "how to check transmission fluid",
    "transmission fluid dipstick",
    "check transmission fluid hot or cold",
    "transmission fluid check step by step",
  ],
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
