import img10011NM02 from "../../Men/10011NM02_1.jpg";
import img10028KM02 from "../../Men/10028KM02_1.jpg";
import img10028KL02 from "../../Men/10028KL02_1.jpg";
import img10028WL01 from "../../Men/10028WL01_1.jpg";
import img38160SL02 from "../../Men/38160SL02_1.jpg";
import img38159SM02 from "../../Men/38159SM02_1.jpg";
import img77156SM01 from "../../Men/77156SM01_1.jpg";
import img90110WL02 from "../../Men/90110WL02_1.jpg";
import img1805NM02 from "../../Men/1805NM02_1.jpg";
import img1806SL14 from "../../Men/1806SL14_1.jpg";
import img1639SM01 from "../../Men/1639SM01_1.jpg";
import imgPLPEWJQ2110503 from "../../Men/PLPEWJQ2110503_1.jpg";

export type MenWatch = {
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
  source: "fetched" | "generated";
  sourceLabel: string;
  sourceUrl?: string;
};

export const menWatches: MenWatch[] = [
  {
    id: "men-10011nm02",
    code: "10011NM02",
    title: "Titan Neo Black Dial",
    brand: "Titan",
    price: 3595,
    image: img10011NM02,
    stockLeft: 6,
    isTrending: true,
    isNew: true,
    summary:
      "A clean black-dial analog design for daily office wear with a balanced modern look.",
    movement: "Quartz",
    strap: "Metal Bracelet",
    waterResistance: "30 m",
    dialColor: "Black",
    source: "generated",
    sourceLabel: "Generated from product photo and model code",
  },
  {
    id: "men-10028km02",
    code: "10028KM02",
    title: "Titan Karishma Silver-Tone",
    brand: "Titan",
    price: 2895,
    image: img10028KM02,
    stockLeft: 12,
    isTrending: false,
    isNew: false,
    summary:
      "A practical round-case analog watch with minimalist markers and comfortable wrist fit.",
    movement: "Quartz",
    strap: "Metal Strap",
    waterResistance: "30 m",
    dialColor: "Silver",
    source: "generated",
    sourceLabel: "Generated from product photo and model code",
  },
  {
    id: "men-10028kl02",
    code: "10028KL02",
    title: "Titan Karishma Leather Classic",
    brand: "Titan",
    price: 2795,
    image: img10028KL02,
    stockLeft: 9,
    isTrending: false,
    isNew: false,
    summary:
      "Classic leather-strap styling with a refined dial layout suited for formal outfits.",
    movement: "Quartz",
    strap: "Leather Strap",
    waterResistance: "30 m",
    dialColor: "Ivory",
    source: "generated",
    sourceLabel: "Generated from product photo and model code",
  },
  {
    id: "men-10028wl01",
    code: "10028WL01",
    title: "Titan White Dial Essential",
    brand: "Titan",
    price: 2995,
    image: img10028WL01,
    stockLeft: 8,
    isTrending: false,
    isNew: false,
    summary:
      "A neat white-dial watch tuned for smart-casual and everyday city use.",
    movement: "Quartz",
    strap: "Leather Strap",
    waterResistance: "30 m",
    dialColor: "White",
    source: "generated",
    sourceLabel: "Generated from product photo and model code",
  },
  {
    id: "men-38160sl02",
    code: "38160SL02",
    title: "Titan Regalia Slim Profile",
    brand: "Titan",
    price: 4295,
    image: img38160SL02,
    stockLeft: 4,
    isTrending: true,
    isNew: true,
    summary:
      "A slim and elegant profile with polished finishing for premium daily styling.",
    movement: "Quartz",
    strap: "Stainless Steel Bracelet",
    waterResistance: "50 m",
    dialColor: "Blue",
    source: "generated",
    sourceLabel: "Generated from product photo and model code",
  },
  {
    id: "men-38159sm02",
    code: "38159SM02",
    title: "Titan Octane Urban Steel",
    brand: "Titan",
    price: 5495,
    image: img38159SM02,
    stockLeft: 5,
    isTrending: true,
    isNew: false,
    summary:
      "Sporty dial detailing and robust case design for high-energy weekend styling.",
    movement: "Quartz Chronograph",
    strap: "Steel Bracelet",
    waterResistance: "50 m",
    dialColor: "Navy Blue",
    source: "generated",
    sourceLabel: "Generated from product photo and model code",
  },
  {
    id: "men-77156sm01",
    code: "77156SM01",
    title: "Sonata Wedding Quartz Analog Blue Dial",
    brand: "Sonata",
    price: 1995,
    image: img77156SM01,
    stockLeft: 15,
    isTrending: true,
    isNew: false,
    summary:
      "Blue-dial dress watch with stainless steel strap designed for wedding and occasion wear.",
    movement: "Quartz",
    strap: "Stainless Steel Strap",
    waterResistance: "30 m",
    dialColor: "Blue",
    source: "fetched",
    sourceLabel: "Fetched from Titan product specification",
    sourceUrl:
      "https://www.titan.co.in/product/sonata-wedding-quartz-analog-blue-dial-watch-for-men-with-silver-stainless-steel-strap-77156sm01.html",
  },
  {
    id: "men-90110wl02",
    code: "90110WL02",
    title: "Titan Workwear Brown Leather",
    brand: "Titan",
    price: 3295,
    image: img90110WL02,
    stockLeft: 7,
    isTrending: false,
    isNew: false,
    summary:
      "An office-first analog watch with strong readability and clean date-window styling.",
    movement: "Quartz",
    strap: "Brown Leather Strap",
    waterResistance: "30 m",
    dialColor: "Champagne",
    source: "generated",
    sourceLabel: "Generated from product photo and model code",
  },
  {
    id: "men-1805nm02",
    code: "1805NM02",
    title: "Titan Metropolitan Black Steel",
    brand: "Titan",
    price: 6195,
    image: img1805NM02,
    stockLeft: 3,
    isTrending: true,
    isNew: true,
    summary:
      "Premium black-steel aesthetic with a strong wrist presence and minimalist dial balance.",
    movement: "Quartz",
    strap: "Stainless Steel Bracelet",
    waterResistance: "50 m",
    dialColor: "Black",
    source: "generated",
    sourceLabel: "Generated from product photo and model code",
  },
  {
    id: "men-1806sl14",
    code: "1806SL14",
    title: "Titan Multifunction Silver Dial",
    brand: "Titan",
    price: 6795,
    image: img1806SL14,
    stockLeft: 2,
    isTrending: true,
    isNew: false,
    summary:
      "A multifunction-style case with premium detailing for statement formal outfits.",
    movement: "Quartz Multifunction",
    strap: "Steel Bracelet",
    waterResistance: "50 m",
    dialColor: "Silver",
    source: "generated",
    sourceLabel: "Generated from product photo and model code",
  },
  {
    id: "men-1639sm01",
    code: "1639SM01",
    title: "Titan Classic Day-Date",
    brand: "Titan",
    price: 3895,
    image: img1639SM01,
    stockLeft: 10,
    isTrending: false,
    isNew: false,
    summary:
      "A balanced day-date analog with comfortable bracelet design for everyday use.",
    movement: "Quartz",
    strap: "Metal Bracelet",
    waterResistance: "30 m",
    dialColor: "Sunray Silver",
    source: "generated",
    sourceLabel: "Generated from product photo and model code",
  },
  {
    id: "men-plpewjq2110503",
    code: "PLPEWJQ2110503",
    title: "Police Engineered Black Quartz",
    brand: "Police",
    price: 11995,
    image: imgPLPEWJQ2110503,
    stockLeft: 5,
    isTrending: true,
    isNew: true,
    summary:
      "A bold designer profile with industrial detailing and oversized contemporary styling.",
    movement: "Quartz",
    strap: "Premium Leather Strap",
    waterResistance: "50 m",
    dialColor: "Matte Black",
    source: "generated",
    sourceLabel: "Generated from product photo and model code",
  },
];
