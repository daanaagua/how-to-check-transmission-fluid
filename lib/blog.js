const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const blogPosts = [
  {
    slug: "check-transmission-fluid-without-common-mistakes",
    path: "/blog/check-transmission-fluid-without-common-mistakes",
    title: "How to Check Transmission Fluid Without Common Mistakes",
    description:
      "Avoid the most common transmission fluid checking mistakes, including wrong temperature, wrong fluid type, and incorrect level reading.",
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    readingTime: "5 min read",
    heroImage: "/images/step-3-read-level-and-condition.png",
    heroAlt: "Close-up transmission dipstick reading in an engine bay",
    sections: [
      {
        heading: "Mistake 1: Checking at the wrong temperature",
        paragraphs: [
          "Transmission fluid expands when hot. If you check at the wrong temperature window, the reading can look low or high even when the level is actually correct.",
          "Start by confirming your manufacturer procedure. Most automatic transmissions require warm fluid and engine idle, but not all units follow identical steps.",
        ],
      },
      {
        heading: "Mistake 2: Reading the dipstick only once",
        paragraphs: [
          "A single pull can mislead you because splashed fluid and tube drag affect the first reading. Use the pull-wipe-reinsert-pull workflow every time.",
          "Also inspect color and smell while checking level. A correct level with burnt odor still indicates service risk.",
        ],
      },
      {
        heading: "Mistake 3: Topping up too quickly",
        paragraphs: [
          "Overfilling transmission fluid can cause foaming and unstable hydraulic pressure. Add in small increments and recheck after each addition.",
          "Use only the exact fluid specification from your owner manual or service data.",
        ],
      },
    ],
  },
  {
    slug: "warning-signs-transmission-fluid-needs-service",
    path: "/blog/warning-signs-transmission-fluid-needs-service",
    title: "Warning Signs Your Transmission Fluid Needs Service",
    description:
      "Learn the early warning signs of transmission fluid problems before they become expensive gearbox damage.",
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    readingTime: "4 min read",
    heroImage: "/images/step-4-fluid-color-chart.png",
    heroAlt: "Transmission fluid condition comparison samples",
    sections: [
      {
        heading: "Delayed gear engagement",
        paragraphs: [
          "If drive or reverse engages with a delay, fluid condition or hydraulic pressure may be compromised.",
          "Check fluid level and condition early to prevent progressive clutch wear.",
        ],
      },
      {
        heading: "Burnt smell and dark fluid",
        paragraphs: [
          "Darkened fluid with burnt odor often means repeated heat stress. Heat is one of the fastest ways to shorten transmission life.",
          "Do not ignore this signal even if the vehicle still shifts.",
        ],
      },
      {
        heading: "Shudder, slip, or flare on shifts",
        paragraphs: [
          "Inconsistent shift feel can point to low fluid, degraded additives, or internal wear.",
          "A fluid inspection is a low-cost first diagnostic step before deeper mechanical work.",
        ],
      },
    ],
  },
  {
    slug: "transmission-fluid-service-interval-by-driving-style",
    path: "/blog/transmission-fluid-service-interval-by-driving-style",
    title: "Transmission Fluid Service Interval by Driving Style",
    description:
      "How city driving, towing, heat, and stop-and-go traffic change transmission fluid service intervals.",
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    readingTime: "6 min read",
    heroImage: "/images/step-1-warm-up-and-safety.png",
    heroAlt: "Vehicle prepared for maintenance service inspection",
    sections: [
      {
        heading: "Normal driving vs severe driving",
        paragraphs: [
          "Manufacturers usually provide two schedules: normal and severe. Many drivers unintentionally meet severe criteria due to short trips, heat, or traffic.",
          "If your usage is mostly urban stop-and-go, use the severe schedule as your baseline.",
        ],
      },
      {
        heading: "Towing and high-load usage",
        paragraphs: [
          "Frequent towing and climbing increase transmission temperature and oxidation rate. Fluid degrades faster under thermal load.",
          "Shortening the service interval can reduce long-term wear and shift instability.",
        ],
      },
      {
        heading: "A practical owner routine",
        paragraphs: [
          "Check fluid condition every 1-2 months and before long trips. Log color, odor, and level trends in one note.",
          "Trend tracking helps catch leaks and performance drift before repair costs escalate.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function buildArticleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    image: [new URL(post.heroImage, SITE_URL).toString()],
    author: {
      "@type": "Organization",
      name: "Transmission Fluid Check",
    },
    publisher: {
      "@type": "Organization",
      name: "Transmission Fluid Check",
    },
    mainEntityOfPage: new URL(post.path, SITE_URL).toString(),
  };
}

export const blogSiteUrl = SITE_URL;
