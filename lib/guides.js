const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const mainGuide = {
  slug: "",
  path: "/",
  title: "How to Check Transmission Fluid (Step-by-Step Guide)",
  h1: "How to Check Transmission Fluid Safely and Correctly",
  metaDescription:
    "Learn how to check transmission fluid step by step, including dipstick method, no-dipstick setups, fluid color checks, and when to top up.",
  intro:
    "Checking transmission fluid is one of the fastest ways to protect your gearbox from expensive wear. This guide shows a practical inspection workflow you can follow at home, even if your vehicle has no traditional dipstick.",
  heroImage: "/images/hero-transmission-fluid-check.png",
  heroAlt:
    "Mechanic checking automatic transmission fluid level with dipstick in a clean engine bay",
  lastUpdated: "2026-03-05",
  readingTime: "8 min read",
  steps: [
    {
      id: 1,
      title: "Park level, warm the car, and secure the area",
      body:
        "Park on level ground, engage the parking brake, and let the engine reach normal operating temperature. Most automatics are measured warm and idling, but always confirm your manufacturer procedure first.",
      image: "/images/step-1-warm-up-and-safety.png",
      alt: "Vehicle parked on level ground with hood open for safe fluid inspection",
    },
    {
      id: 2,
      title: "Locate the transmission dipstick or service port",
      body:
        "If your transmission has a dipstick, it is usually near the firewall side of the engine bay. If there is no dipstick, use the designated service/fill/check port procedure for your model.",
      image: "/images/step-2-locate-dipstick-or-port.png",
      alt: "Close view showing transmission dipstick handle and surrounding engine components",
    },
    {
      id: 3,
      title: "Read level and condition, not only level",
      body:
        "Pull, wipe, reinsert, and pull again for an accurate reading. The level should fall within the marked hot range. Healthy fluid is usually clear and red or amber depending on fluid type.",
      image: "/images/step-3-read-level-and-condition.png",
      alt: "Dipstick with fluid film being checked for level, color, and cleanliness",
    },
    {
      id: 4,
      title: "Use color and smell as early warning signals",
      body:
        "Dark brown fluid, burnt smell, or visible debris can indicate overheating or wear. If you notice these signs, schedule a transmission inspection instead of only topping up.",
      image: "/images/step-4-fluid-color-chart.png",
      alt: "Transmission fluid color comparison chart from healthy to degraded condition",
    },
    {
      id: 5,
      title: "Top up in small increments only when needed",
      body:
        "Use the exact fluid specification from your owner manual. Add small amounts, then recheck. Overfilling can cause aeration, shifting issues, and heat problems.",
      image: "/images/step-5-top-up-with-funnel.png",
      alt: "Small funnel adding transmission fluid carefully into dipstick tube",
    },
  ],
  faq: [
    {
      q: "Should I check transmission fluid hot or cold?",
      a: "Most automatic transmissions are checked warm with the engine idling. Some vehicles have specific cold-check procedures. Follow your owner manual for the exact method.",
    },
    {
      q: "Can I drive with low transmission fluid?",
      a: "Driving with low fluid can quickly increase heat and internal wear. If fluid is below minimum, top up with the correct spec and investigate leaks promptly.",
    },
    {
      q: "What color should transmission fluid be?",
      a: "Healthy fluid is typically clear red, pink, or amber depending on fluid chemistry. Very dark fluid, burnt smell, or metallic particles are warning signs.",
    },
    {
      q: "How often should transmission fluid be checked?",
      a: "A practical interval is every 1 to 2 months, before long trips, and whenever you notice delayed shifts, slipping, or unusual transmission behavior.",
    },
  ],
  relatedSlugs: [
    "how-to-check-transmission-fluid-without-dipstick",
    "how-to-check-cvt-transmission-fluid",
    "check-transmission-fluid-hot-or-cold",
    "transmission-fluid-color-chart",
    "automatic-vs-manual-transmission-fluid-check",
  ],
};

export const longTailGuides = [
  {
    slug: "how-to-check-transmission-fluid-without-dipstick",
    path: "/how-to-check-transmission-fluid-without-dipstick",
    title: "How to Check Transmission Fluid Without a Dipstick",
    h1: "How to Check Transmission Fluid Without a Dipstick",
    metaDescription:
      "No dipstick? Learn the safe process to check transmission fluid using service plugs and temperature windows on sealed transmissions.",
    intro:
      "Many modern transmissions are marketed as sealed units and no longer include a dipstick. You can still check fluid level through the service-check procedure.",
    heroImage: "/images/lt-sealed-transmission-check.png",
    heroAlt: "Sealed transmission service port inspection by technician",
    lastUpdated: "2026-03-05",
    readingTime: "6 min read",
    steps: [
      {
        id: 1,
        title: "Confirm the exact temperature window",
        body:
          "Sealed transmissions rely on fluid expansion in a specific temperature range. Read your service manual before opening check plugs.",
        image: "/images/lt-sealed-transmission-check.png",
        alt: "Transmission temperature check before fluid level verification",
      },
      {
        id: 2,
        title: "Access the check and fill plugs",
        body:
          "Raise and support the vehicle safely, then locate the designated check plug and fill plug. Never remove random case bolts.",
        image: "/images/lt-sealed-transmission-check.png",
        alt: "Underbody view of transmission check plug and fill plug locations",
      },
      {
        id: 3,
        title: "Interpret fluid behavior at the check port",
        body:
          "A slight controlled dribble often indicates correct level; no flow can indicate low fluid. Follow OEM procedure for your unit.",
        image: "/images/lt-sealed-transmission-check.png",
        alt: "Transmission check plug with correct fluid trickle indication",
      },
    ],
    faq: [
      {
        q: "Why do some transmissions have no dipstick?",
        a: "Manufacturers use sealed designs to reduce contamination and enforce specific service procedures tied to fluid temperature.",
      },
    ],
  },
  {
    slug: "how-to-check-cvt-transmission-fluid",
    path: "/how-to-check-cvt-transmission-fluid",
    title: "How to Check CVT Transmission Fluid",
    h1: "How to Check CVT Transmission Fluid the Right Way",
    metaDescription:
      "Step-by-step CVT fluid check guide with temperature range, correct CVT fluid specs, and warning signs you should not ignore.",
    intro:
      "CVT transmissions are sensitive to fluid type and level. Use the correct CVT fluid and avoid generic automatic transmission fluid unless explicitly approved.",
    heroImage: "/images/lt-cvt-inspection.png",
    heroAlt: "CVT transmission service inspection in modern workshop",
    lastUpdated: "2026-03-05",
    readingTime: "6 min read",
    steps: [
      {
        id: 1,
        title: "Use only the correct CVT fluid spec",
        body:
          "CVT pulleys and belts depend on specific friction behavior. Mixing incorrect fluid can lead to slipping and accelerated wear.",
        image: "/images/lt-cvt-inspection.png",
        alt: "CVT-specific transmission fluid containers with specification labels",
      },
      {
        id: 2,
        title: "Measure fluid in the specified temperature range",
        body:
          "Follow the manufacturer-defined range and sequence (engine state, gear cycling, and level verification).",
        image: "/images/lt-cvt-inspection.png",
        alt: "Scan tool monitoring transmission temperature during CVT fluid check",
      },
      {
        id: 3,
        title: "Watch for shudder, whine, or delayed response",
        body:
          "These symptoms can signal fluid condition issues or mechanical wear. Address quickly to prevent expensive CVT repairs.",
        image: "/images/lt-cvt-inspection.png",
        alt: "Dashboard and workshop context representing CVT warning symptoms",
      },
    ],
    faq: [
      {
        q: "Can I use regular ATF in a CVT?",
        a: "In most vehicles, no. Use only the exact fluid listed by the manufacturer for that CVT model.",
      },
    ],
  },
  {
    slug: "check-transmission-fluid-hot-or-cold",
    path: "/check-transmission-fluid-hot-or-cold",
    title: "Should You Check Transmission Fluid Hot or Cold?",
    h1: "Check Transmission Fluid Hot or Cold?",
    metaDescription:
      "Understand when to check transmission fluid hot or cold, why temperature matters, and how wrong timing causes bad readings.",
    intro:
      "Fluid expands with heat, so the wrong temperature can produce misleading readings. This page helps you choose the right check condition.",
    heroImage: "/images/lt-hot-vs-cold.png",
    heroAlt: "Comparison of hot vs cold transmission fluid check scenario",
    lastUpdated: "2026-03-05",
    readingTime: "5 min read",
    steps: [
      {
        id: 1,
        title: "Understand thermal expansion impact",
        body:
          "Cold checks can read low and hot checks can read high if performed outside the intended range.",
        image: "/images/lt-hot-vs-cold.png",
        alt: "Graphic style comparison of fluid expansion at different temperatures",
      },
      {
        id: 2,
        title: "Follow your dipstick markings",
        body:
          "Some dipsticks include separate cold and hot ranges. Use the matching range for current operating condition.",
        image: "/images/lt-hot-vs-cold.png",
        alt: "Transmission dipstick showing hot and cold level markers",
      },
      {
        id: 3,
        title: "Use consistent routine for reliable trends",
        body:
          "Checking at similar temperature each time gives you consistent data to spot leaks or gradual fluid loss.",
        image: "/images/lt-hot-vs-cold.png",
        alt: "Routine maintenance checklist beside vehicle engine bay",
      },
    ],
    faq: [
      {
        q: "Why does my reading change after driving?",
        a: "Fluid level appears higher after driving because fluid volume increases with temperature and circulation.",
      },
    ],
  },
  {
    slug: "transmission-fluid-color-chart",
    path: "/transmission-fluid-color-chart",
    title: "Transmission Fluid Color Chart and What It Means",
    h1: "Transmission Fluid Color Chart: Healthy vs Warning Signs",
    metaDescription:
      "Use this transmission fluid color chart to identify healthy fluid, oxidation, overheating, and contamination early.",
    intro:
      "Fluid color and odor help you detect trouble before hard shifting and gearbox damage become severe.",
    heroImage: "/images/step-4-fluid-color-chart.png",
    heroAlt: "Transmission fluid color samples from bright red to dark brown",
    lastUpdated: "2026-03-05",
    readingTime: "5 min read",
    steps: [
      {
        id: 1,
        title: "Bright red or clear amber",
        body:
          "Typically indicates fresh or healthy fluid. Verify level and continue routine maintenance intervals.",
        image: "/images/step-4-fluid-color-chart.png",
        alt: "Healthy transmission fluid sample with clear red appearance",
      },
      {
        id: 2,
        title: "Brown or darkened fluid",
        body:
          "Can indicate oxidation or excess heat cycles. Consider service interval review and filter inspection.",
        image: "/images/step-4-fluid-color-chart.png",
        alt: "Darkened transmission fluid sample indicating wear and oxidation",
      },
      {
        id: 3,
        title: "Burnt smell or metallic particles",
        body:
          "This is a high-priority warning. Seek professional diagnosis to avoid progressive internal damage.",
        image: "/images/step-4-fluid-color-chart.png",
        alt: "Transmission fluid sample with burnt condition and visible particles",
      },
    ],
    faq: [
      {
        q: "Is dark fluid always bad?",
        a: "Not always immediately critical, but dark fluid plus burnt odor, debris, or shifting issues should be checked soon.",
      },
    ],
  },
  {
    slug: "automatic-vs-manual-transmission-fluid-check",
    path: "/automatic-vs-manual-transmission-fluid-check",
    title: "Automatic vs Manual Transmission Fluid Check",
    h1: "Automatic vs Manual Transmission Fluid Check Guide",
    metaDescription:
      "Compare automatic vs manual transmission fluid check methods, service intervals, and common mistakes to avoid.",
    intro:
      "Automatic and manual transmissions use different check points and service logic. This guide covers the key differences.",
    heroImage: "/images/lt-automatic-vs-manual.png",
    heroAlt: "Automatic and manual transmission comparison in workshop",
    lastUpdated: "2026-03-05",
    readingTime: "7 min read",
    steps: [
      {
        id: 1,
        title: "Automatic checks focus on level and condition",
        body:
          "Automatics often use dipstick or controlled check-port methods with temperature-dependent readings.",
        image: "/images/lt-automatic-vs-manual.png",
        alt: "Automatic transmission fluid check with dipstick and warm engine",
      },
      {
        id: 2,
        title: "Manual checks commonly use fill hole reference",
        body:
          "Manual gearboxes are often checked through a side fill plug; fluid should be near the bottom of the port.",
        image: "/images/lt-automatic-vs-manual.png",
        alt: "Manual transmission fill plug inspection under vehicle",
      },
      {
        id: 3,
        title: "Do not mix fluid types between systems",
        body:
          "Use the exact lubricant specification for each transmission type to maintain synchronizer and clutch behavior.",
        image: "/images/lt-automatic-vs-manual.png",
        alt: "Different labeled transmission fluids for automatic and manual gearboxes",
      },
    ],
    faq: [
      {
        q: "Is manual transmission fluid lifetime fluid?",
        a: "Some manufacturers market it that way, but service intervals still matter for long-term wear control.",
      },
    ],
  },
];

export const guideBySlug = longTailGuides.reduce((acc, guide) => {
  acc[guide.slug] = guide;
  return acc;
}, {});

export function getGuideBySlug(slug) {
  return guideBySlug[slug] || null;
}

export function getRelatedGuides(slugs = []) {
  return slugs.map((slug) => guideBySlug[slug]).filter(Boolean);
}

export function buildHowToSchema(guide) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.h1,
    description: guide.metaDescription,
    image: [new URL(guide.heroImage, SITE_URL).toString()],
    step: guide.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
      image: new URL(step.image, SITE_URL).toString(),
    })),
  };
}

export function buildFaqSchema(guide) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildBreadcrumbSchema(guide) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ];

  if (guide.path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: guide.h1,
      item: new URL(guide.path, SITE_URL).toString(),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export const siteUrl = SITE_URL;
