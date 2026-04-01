import { Link, useParams } from "react-router-dom";

type ShowcaseItem = {
  title: string;
  image: string;
  category: string;
  summary: string;
  styleNotes: string;
  movementType: string;
  idealFor: string;
  highlights: string[];
};

const collectionItems: ShowcaseItem[] = Array.from({ length: 8 }, (_, index) => ({
  title: `COLLECTION ${index + 1}`,
  image: `/print${index + 1}.jpg`,
  category: "Collection",
  summary:
    "A curated design from the Collection lineup focused on wearable elegance and balanced styling for daily and occasion use.",
  styleNotes:
    "Clean dial styling with polished accents and a versatile profile that pairs well with formals and smart-casual wear.",
  movementType: "Precision Quartz",
  idealFor: "Daily styling, office outfits, and gifting",
  highlights: ["Refined dial work", "Comfort-focused fit", "Balanced case proportions"],
}));

const movementItems: Record<string, ShowcaseItem> = {
  "movement-automatic": {
    title: "AUTOMATIC",
    image: "/movement-1.jpg",
    category: "Movement In Time",
    summary:
      "Self-winding movement powered by wrist motion, combining engineering craft with no daily battery dependency.",
    styleNotes: "Mechanical soul with exhibition-style dial aesthetic.",
    movementType: "Automatic",
    idealFor: "Enthusiasts who prefer mechanical craftsmanship",
    highlights: ["Rotor-driven winding", "Smooth seconds sweep", "Craft-focused construction"],
  },
  "movement-chronograph": {
    title: "CHRONOGRAPH",
    image: "/movement-2.jpg",
    category: "Movement In Time",
    summary:
      "Stopwatch-capable movement design with multi-subdial functionality and sport-performance styling.",
    styleNotes: "Instrument-inspired dial with technical detailing.",
    movementType: "Chronograph",
    idealFor: "Sporty styling and timing utility",
    highlights: ["Elapsed-time tracking", "Sub-dial layout", "Performance visual language"],
  },
  "movement-mechanical": {
    title: "MECHANICAL",
    image: "/movement-3.jpg",
    category: "Movement In Time",
    summary:
      "Manual-wind inspired movement category centered on traditional watchmaking components and visible mechanics.",
    styleNotes: "Open-work design with strong mechanical character.",
    movementType: "Mechanical (Hand-Wind Inspired)",
    idealFor: "Collectors and traditional watch lovers",
    highlights: ["Gear visibility", "Traditional movement architecture", "Vintage-inspired experience"],
  },
  "movement-quartz": {
    title: "QUARTZ",
    image: "/movement-4.jpg",
    category: "Movement In Time",
    summary:
      "Battery-powered movement known for dependable accuracy, low maintenance, and everyday convenience.",
    styleNotes: "Clean layout optimized for consistent daily use.",
    movementType: "Quartz",
    idealFor: "Reliable daily wear and minimal upkeep",
    highlights: ["High accuracy", "Low maintenance", "Long battery life"],
  },
  "movement-smart": {
    title: "SMART",
    image: "/movement-5.jpg",
    category: "Movement In Time",
    summary:
      "Connected smartwatch movement focused on health metrics, notifications, and activity-first daily life.",
    styleNotes: "Digital interface with modern connected features.",
    movementType: "Smart Connected System",
    idealFor: "Fitness, notifications, and active routines",
    highlights: ["Health tracking", "Smart notifications", "Custom watch faces"],
  },
};

const brandItems: ShowcaseItem[] = Array.from({ length: 12 }, (_, index) => ({
  title: `BRAND ${index + 1}`,
  image: `/brand-${index + 1}.jpg`,
  category: "Shop By Brands",
  summary:
    "A brand-focused showcase watch card with a premium visual identity and a style-first product direction.",
  styleNotes:
    "Distinctive case and dial language designed to stand out while staying comfortable for regular wear.",
  movementType: "Quartz / Automatic (Varies by model)",
  idealFor: "Brand-conscious buyers and premium gifting",
  highlights: ["Signature design language", "Strong wrist presence", "Everyday-ready build"],
}));

const showcaseDetails: Record<string, ShowcaseItem> = {
  ...Object.fromEntries(
    collectionItems.map((item, index) => [`collection:collection-${index + 1}`, item]),
  ),
  ...Object.fromEntries(
    Object.entries(movementItems).map(([id, item]) => [`movement:${id}`, item]),
  ),
  ...Object.fromEntries(
    brandItems.map((item, index) => [`brands:brand-${index + 1}`, item]),
  ),
};

export function ShowcaseDetail() {
  const { section, itemId } = useParams();
  const key = `${section || ""}:${itemId || ""}`;
  const item = showcaseDetails[key];

  if (!item) {
    return (
      <main className="bg-[whitesmoke] min-h-[70vh] flex items-center justify-center px-4">
        <section className="max-w-xl w-full bg-white border border-gray-200 rounded-xl p-8 text-center">
          <h1 className="text-3xl font-black text-gray-800">Detail Not Found</h1>
          <p className="text-gray-600 mt-3">
            This watch detail is not available right now.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-5 py-2"
          >
            Back to Home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[whitesmoke] min-h-[80vh] py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-center">
          <img src={item.image} alt={item.title} className="h-[360px] md:h-[500px] w-full object-contain" />
        </div>
        <section className="text-gray-800">
          <p className="text-sm tracking-[0.14em] uppercase text-gray-500">{item.category}</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-heading">{item.title}</h1>
          <p className="mt-4 text-gray-600 leading-6">{item.summary}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Movement Type</p>
              <p className="font-semibold">{item.movementType}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Ideal For</p>
              <p className="font-semibold">{item.idealFor}</p>
            </div>
          </div>

          <div className="mt-4 bg-white border border-gray-200 rounded-lg px-4 py-4">
            <p className="text-gray-700 font-semibold mb-2">Style Notes</p>
            <p className="text-sm text-gray-600">{item.styleNotes}</p>
          </div>

          <div className="mt-4 bg-white border border-gray-200 rounded-lg px-4 py-4">
            <p className="text-gray-700 font-semibold mb-2">Highlights</p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              {item.highlights.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <Link to="/" className="text-sky-600 hover:text-sky-700 text-sm font-semibold">
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
