const womenImages = import.meta.glob("../../Women/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export type WomenWatch = {
  id: string;
  code: string;
  title: string;
  brand: string;
  price: number;
  image: string;
  stockLeft: number;
  isTrending: boolean;
  isNew: boolean;
  summary: string;
  movement: string;
  strap: string;
  waterResistance: string;
  dialColor: string;
  source: "generated";
  sourceLabel: string;
};

const movementTypes = [
  "Quartz",
  "Quartz Analog",
  "Quartz Multifunction",
  "Precision Quartz",
];

const strapTypes = [
  "Stainless Steel Bracelet",
  "Mesh Strap",
  "Metal Strap",
  "Leather Strap",
];

const waterResistanceTypes = ["30 m", "50 m", "30 m", "50 m"];

const dialColors = [
  "Rose Gold",
  "Silver",
  "Blue",
  "Black",
  "Champagne",
  "Mother of Pearl",
];

const uniqueWatches = Object.entries(womenImages)
  .map(([path, image]) => {
    const filename = path.split("/").pop() ?? "";
    const code = filename
      .replace(/\.[^.]+$/, "")
      .replace(/_1(?:\s*\(\d+\))?$/i, "")
      .trim();

    return { code, image };
  })
  .filter((item) => item.code.length > 0)
  .sort((a, b) => a.code.localeCompare(b.code))
  .filter((item, index, array) => index === array.findIndex((entry) => entry.code === item.code));

export const womenWatches: WomenWatch[] = uniqueWatches.map((item, index) => {
  const normalizedCode = item.code.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const brand = item.code.startsWith("FV") ? "Fastrack" : "Titan";
  const movement = movementTypes[index % movementTypes.length];
  const strap = strapTypes[index % strapTypes.length];
  const waterResistance = waterResistanceTypes[index % waterResistanceTypes.length];
  const dialColor = dialColors[index % dialColors.length];

  return {
    id: `women-${normalizedCode}`,
    code: item.code,
    title: `${brand} Women's ${item.code}`,
    brand,
    price: 2595 + (index % 10) * 420 + (brand === "Fastrack" ? 300 : 0),
    image: item.image,
    stockLeft: 3 + (index % 14),
    isTrending: index % 5 === 0,
    isNew: index < 4,
    summary:
      "A women-focused design with elegant dial styling and a comfortable fit, suitable for daily and occasion wear.",
    movement,
    strap,
    waterResistance,
    dialColor,
    source: "generated",
    sourceLabel: "Generated from Women folder JPG file names and images",
  };
});
