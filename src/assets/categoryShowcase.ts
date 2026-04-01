export type CategoryShowcase = {
  id: string;
  title: string;
  image: string;
  tagline: string;
  summary: string;
  collectionNote: string;
  movementType: string;
  idealFor: string;
  highlights: string[];
  relatedWatches: {
    title: string;
    image: string;
    to: string;
    subtitle: string;
  }[];
  sourceLabel: string;
  sourceUrl?: string;
};

export const categoryShowcases: CategoryShowcase[] = [
  {
    id: "smart-watches",
    title: "SMART WATCHES",
    image: "/movement-5.jpg",
    tagline: "Connected watches for health, fitness, and daily convenience.",
    summary:
      "Smart watches in this collection focus on activity tracking, notification support, and app-connected features in a modern wearable format.",
    collectionNote:
      "Built for active daily use with strong battery performance and quick-access health insights.",
    movementType: "Smart Connected System",
    idealFor: "Fitness users, professionals, and active everyday routines",
    highlights: ["Heart rate and wellness tracking", "Smart notifications", "Custom watch faces"],
    relatedWatches: [
      {
        title: "SMART MOVEMENT",
        image: "/movement-5.jpg",
        to: "/discover/movement/movement-smart",
        subtitle: "Connected fitness watch interface",
      },
      {
        title: "SMART CROWN",
        image: "/new-arrival-4.jpg",
        to: "/new-arrivals/arrive-4",
        subtitle: "Hybrid smart category watch",
      },
      {
        title: "CELESTOR 2.0",
        image: "/new-arrival-6.jpg",
        to: "/new-arrivals/arrive-6",
        subtitle: "Training-focused smart watch",
      },
    ],
    sourceLabel: "Generated from showcased category image and current store category setup",
  },
  {
    id: "premium-watches",
    title: "PREMIUM WATCHES",
    image: "/new-arrival-5.jpg",
    tagline: "Refined finishing and elevated watchmaking character.",
    summary:
      "Premium watches emphasize high-detail dials, polished case construction, and enhanced design language for a statement wrist presence.",
    collectionNote:
      "This category is curated for buyers who prefer premium styling and collector-leaning aesthetics.",
    movementType: "Quartz / Automatic (Model dependent)",
    idealFor: "Occasion wear, executive styling, and premium gifting",
    highlights: ["Premium dial textures", "Higher-grade case finishing", "Statement design profile"],
    relatedWatches: [
      {
        title: "TITAN STELLAR",
        image: "/new-arrival-5.jpg",
        to: "/new-arrivals/arrive-5",
        subtitle: "Premium automatic styling",
      },
      {
        title: "AUTOMATIC",
        image: "/movement-1.jpg",
        to: "/discover/movement/movement-automatic",
        subtitle: "Mechanical craftsmanship",
      },
      {
        title: "POLICE ENGINEERED",
        image: "/brand-1.jpg",
        to: "/men/men-plpewjq2110503",
        subtitle: "Designer premium profile",
      },
    ],
    sourceLabel: "Generated from showcased category image and current store category setup",
  },
  {
    id: "watches",
    title: "WATCHES",
    image: "/new-arrival-2.jpg",
    tagline: "Core watch collection with styles across use cases.",
    summary:
      "General watches category combines classic analog, contemporary styling, and practical daily wear options across price points.",
    collectionNote:
      "Balanced mix of formal, casual, and versatile watches for wide style preference.",
    movementType: "Quartz / Automatic / Chronograph",
    idealFor: "Everyday wear, office styling, and casual weekends",
    highlights: ["Wide style variety", "Everyday durability", "Multiple movement choices"],
    relatedWatches: [
      {
        title: "MEN WATCHES",
        image: "/new-arrival-2.jpg",
        to: "/shop#men",
        subtitle: "Explore men watch catalog",
      },
      {
        title: "WOMEN WATCHES",
        image: "/print3.jpg",
        to: "/shop#women",
        subtitle: "Explore women watch catalog",
      },
      {
        title: "NEW ARRIVALS",
        image: "/new-arrival-8.jpg",
        to: "/new-arrivals/arrive-8",
        subtitle: "Latest watch additions",
      },
    ],
    sourceLabel: "Generated from showcased category image and current store category setup",
  },
  {
    id: "international-brands",
    title: "INTERNATIONAL BRANDS",
    image: "/brand-1.jpg",
    tagline: "Global brand identities with distinct design signatures.",
    summary:
      "International brand watches highlight global styling cues, modern engineering, and cross-market design trends in one category.",
    collectionNote:
      "Best suited for customers seeking imported design language and brand-specific aesthetics.",
    movementType: "Quartz / Automatic (Brand dependent)",
    idealFor: "Brand-focused buyers and international style preferences",
    highlights: ["Global brand styling", "Distinctive case and dial language", "Collector-friendly appeal"],
    relatedWatches: [
      {
        title: "INTERNATIONAL BRAND 1",
        image: "/brand-1.jpg",
        to: "/discover/brands/brand-1",
        subtitle: "Global design signature",
      },
      {
        title: "INTERNATIONAL BRAND 2",
        image: "/brand-2.jpg",
        to: "/discover/brands/brand-2",
        subtitle: "Imported style identity",
      },
      {
        title: "INTERNATIONAL BRAND 3",
        image: "/brand-3.jpg",
        to: "/discover/brands/brand-3",
        subtitle: "Premium global lineup",
      },
    ],
    sourceLabel: "Generated from showcased category image and current store category setup",
  },
  {
    id: "our-brands",
    title: "OUR BRANDS",
    image: "/brand-7.jpg",
    tagline: "Signature in-house brands tailored for local market taste.",
    summary:
      "Our brands category includes in-house collections designed for value, style coverage, and reliable day-to-day performance.",
    collectionNote:
      "Focused on accessible design with dependable build quality across segments.",
    movementType: "Quartz-led lineup with selective premium variants",
    idealFor: "Everyday buyers, first-time watch users, and gifting",
    highlights: ["Value-led assortment", "Reliable daily use", "Strong category coverage"],
    relatedWatches: [
      {
        title: "OUR BRAND 7",
        image: "/brand-7.jpg",
        to: "/discover/brands/brand-7",
        subtitle: "Signature in-house watch line",
      },
      {
        title: "OUR BRAND 8",
        image: "/brand-8.jpg",
        to: "/discover/brands/brand-8",
        subtitle: "Everyday dependable design",
      },
      {
        title: "OUR BRAND 9",
        image: "/brand-9.jpg",
        to: "/discover/brands/brand-9",
        subtitle: "Value and style balance",
      },
    ],
    sourceLabel: "Generated from showcased category image and current store category setup",
  },
  {
    id: "gifting",
    title: "GIFTING",
    image: "/new-arrival-7.jpg",
    tagline: "Watch selections curated for gifting moments.",
    summary:
      "Gifting watches prioritize presentation, versatile styling, and broad appeal suitable for birthdays, anniversaries, and festive occasions.",
    collectionNote:
      "Designed to simplify gift selection with elegant styles that fit multiple personal tastes.",
    movementType: "Quartz / Smart (Model dependent)",
    idealFor: "Festive gifting, birthdays, and special occasions",
    highlights: ["Occasion-ready styling", "Gift-friendly designs", "Balanced unisex options"],
    relatedWatches: [
      {
        title: "WEAR YOUR STORY",
        image: "/new-arrival-7.jpg",
        to: "/new-arrivals/arrive-7",
        subtitle: "Versatile gifting favorite",
      },
      {
        title: "RAGA COLLECTION",
        image: "/print1.jpg",
        to: "/discover/collection/collection-1",
        subtitle: "Elegant gifting option",
      },
      {
        title: "SMART GIFT PICK",
        image: "/new-arrival-4.jpg",
        to: "/new-arrivals/arrive-4",
        subtitle: "Tech-forward gift watch",
      },
    ],
    sourceLabel: "Generated from showcased category image and current store category setup",
  },
  {
    id: "sale",
    title: "SALE",
    image: "/new-arrival-3.jpg",
    tagline: "Limited-time offers across trending watch styles.",
    summary:
      "Sale watches feature discounted selections from multiple categories while retaining style and functionality for value-driven buyers.",
    collectionNote:
      "A rotating assortment where availability and pricing can change quickly based on campaigns.",
    movementType: "Quartz / Chronograph / Smart (Model dependent)",
    idealFor: "Value deals, seasonal shopping, and upgrade purchases",
    highlights: ["Promotional pricing", "Mixed category picks", "Time-limited availability"],
    relatedWatches: [
      {
        title: "DUCATI DEAL",
        image: "/new-arrival-3.jpg",
        to: "/new-arrivals/arrive-3",
        subtitle: "Performance style on offer",
      },
      {
        title: "URBAN FLAIR OFFER",
        image: "/new-arrival-8.jpg",
        to: "/new-arrivals/arrive-8",
        subtitle: "Premium look with promo pricing",
      },
      {
        title: "OCTANE SALE PICK",
        image: "/movement-2.jpg",
        to: "/men/men-38159sm02",
        subtitle: "Chronograph value deal",
      },
    ],
    sourceLabel: "Generated from showcased category image and current store category setup",
  },
];

export const categoryShowcaseById: Record<string, CategoryShowcase> = Object.fromEntries(
  categoryShowcases.map((item) => [item.id, item]),
);
