export type NewArrival = {
  id: string;
  title: string;
  image: string;
  category: string;
  tagline: string;
  summary: string;
  movement: string;
  caseSize: string;
  batteryOrPower: string;
  idealFor: string;
  features: string[];
};

export const newArrivals: NewArrival[] = [
  {
    id: "arrive-1",
    title: "EDGE FUMAGE",
    image: "/new-arrival-1.jpg",
    category: "Titan Edge",
    tagline: "Ultra-slim statement with a smoked dial aesthetic.",
    summary:
      "Edge Fumage combines a minimalist form with premium monochrome styling. It is designed for users who prefer an elegant watch with modern character.",
    movement: "Quartz",
    caseSize: "39 mm",
    batteryOrPower: "Up to 2 years battery life",
    idealFor: "Office and evening smart-casual looks",
    features: ["Slim profile", "Smoked-dial finish", "Lightweight all-day comfort"],
  },
  {
    id: "arrive-2",
    title: "TITAN AUTOMATIC",
    image: "/new-arrival-2.jpg",
    category: "Titan Automatic",
    tagline: "Mechanical craftsmanship with open-heart styling.",
    summary:
      "Titan Automatic is built for enthusiasts who appreciate movement artistry. The design pairs polished details with versatile daily wearability.",
    movement: "Automatic Self-Winding",
    caseSize: "42 mm",
    batteryOrPower: "Powered by wrist motion",
    idealFor: "Collectors and premium gifting",
    features: ["Skeleton-inspired dial", "Stainless steel bracelet", "Exhibition-style appeal"],
  },
  {
    id: "arrive-3",
    title: "DUCATI",
    image: "/new-arrival-3.jpg",
    category: "Titan x Ducati",
    tagline: "Race-inspired chronograph attitude on the wrist.",
    summary:
      "The Ducati edition is performance-led with bold red accents and sporty detailing. It is crafted to deliver strong visual presence and timing utility.",
    movement: "Chronograph Quartz",
    caseSize: "44 mm",
    batteryOrPower: "Long-life quartz battery",
    idealFor: "Sport styling and active routines",
    features: ["Multi-layered dial", "Chronograph counters", "Performance strap design"],
  },
  {
    id: "arrive-4",
    title: "TITAN SMART CROWN COLLECTION",
    image: "/new-arrival-4.jpg",
    category: "Titan Smart",
    tagline: "Classic analog elegance meets connected intelligence.",
    summary:
      "Crown Collection blends refined analog design with smart health and notification features. It is created for users who want style and utility in one watch.",
    movement: "Smart Connected System",
    caseSize: "42 mm / 36 mm options",
    batteryOrPower: "Rechargeable smart module",
    idealFor: "Workdays, fitness tracking, and daily alerts",
    features: ["Health metrics", "Smart notifications", "Hybrid design language"],
  },
  {
    id: "arrive-5",
    title: "TITAN STELLAR",
    image: "/new-arrival-5.jpg",
    category: "Titan Stellar",
    tagline: "Celestial luxury styling with refined finishing.",
    summary:
      "Titan Stellar offers a premium look with rich dial textures and a distinct wrist presence. It is intended for buyers seeking an elevated design statement.",
    movement: "Automatic",
    caseSize: "41 mm",
    batteryOrPower: "Mechanical self-winding",
    idealFor: "Formal occasions and premium wardrobes",
    features: ["Moonphase-inspired dial", "Premium steel body", "Collector-grade styling"],
  },
  {
    id: "arrive-6",
    title: "CELESTOR 2.0",
    image: "/new-arrival-6.jpg",
    category: "Titan Smart",
    tagline: "Training-focused smartwatch with dual-band GPS.",
    summary:
      "Celestor 2.0 is engineered for active users with reliable workout and tracking features. The interface prioritizes performance metrics and fitness consistency.",
    movement: "Digital Smart Engine",
    caseSize: "46 mm",
    batteryOrPower: "Up to 7 days typical use",
    idealFor: "Sports, fitness plans, and health tracking",
    features: ["Dual-band GPS", "VO2 Max insights", "Zone-based training support"],
  },
  {
    id: "arrive-7",
    title: "WEAR YOUR STORY",
    image: "/new-arrival-7.jpg",
    category: "Titan Signature",
    tagline: "Elegant everyday expression with signature detailing.",
    summary:
      "Wear Your Story is designed to be a modern lifestyle watch that transitions from office to evening effortlessly. It focuses on clean detailing and versatile appeal.",
    movement: "Quartz",
    caseSize: "40 mm",
    batteryOrPower: "Up to 2 years battery life",
    idealFor: "Daily wear and smart-casual outfits",
    features: ["Contemporary dial design", "Comfortable bracelet fit", "Balanced case proportions"],
  },
  {
    id: "arrive-8",
    title: "XVLYS URBAN FLAIR",
    image: "/new-arrival-8.jpg",
    category: "Xylys",
    tagline: "Urban luxury design with Swiss precision influence.",
    summary:
      "Xylys Urban Flair delivers a bold aesthetic with premium accents and confident wrist presence. It targets fashion-forward users who prefer standout styling.",
    movement: "Swiss Quartz",
    caseSize: "41 mm",
    batteryOrPower: "Long-life quartz battery",
    idealFor: "Urban styling and occasion dressing",
    features: ["Swiss precision heritage", "Premium textured dial", "Statement bezel detailing"],
  },
];

