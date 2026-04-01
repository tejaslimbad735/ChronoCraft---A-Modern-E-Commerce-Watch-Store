import { Heart, Trash } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux/";
import { addProduct } from "../store/cartSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import products from "../assets/products";
import { toggleFavorite } from "../store/favoritesSlice";
import { RootState } from "../store";

type WatchDetail = {
  summary: string;
  movement: string;
  caseSize: string;
  strap: string;
  waterResistance: string;
  features: string[];
};

const watchDetailsById: Record<string, WatchDetail> = {
  "1": {
    summary:
      "A pilot-inspired chronograph with a bold dial layout and premium finishing for everyday luxury wear.",
    movement: "Automatic Chronograph",
    caseSize: "43 mm",
    strap: "Stainless Steel Bracelet",
    waterResistance: "100 m",
    features: ["Date Display", "Tachymeter Scale", "Sapphire Crystal"],
  },
  "2": {
    summary:
      "A clean and versatile sports-luxury watch with strong wrist presence and comfortable all-day styling.",
    movement: "Swiss Quartz",
    caseSize: "41 mm",
    strap: "Brushed Steel Bracelet",
    waterResistance: "200 m",
    features: ["Date Window", "Luminous Hands", "Scratch Resistant Glass"],
  },
  "3": {
    summary:
      "A performance-led chronograph design known for precision timing and a timeless motorsport aesthetic.",
    movement: "Manual-Wind Chronograph",
    caseSize: "42 mm",
    strap: "Steel Bracelet",
    waterResistance: "50 m",
    features: ["Chronograph", "Tachymeter Bezel", "Heritage Dial Design"],
  },
  "4": {
    summary:
      "A minimal urban watch that balances elegant proportions with practical daily usability.",
    movement: "Quartz",
    caseSize: "40 mm",
    strap: "Leather Strap",
    waterResistance: "30 m",
    features: ["Slim Case", "Lightweight Build", "Classic 3-Hand Layout"],
  },
  "5": {
    summary:
      "A rugged and refined sports watch built for reliability, comfort, and clear legibility.",
    movement: "Automatic",
    caseSize: "42 mm",
    strap: "Stainless Steel Bracelet",
    waterResistance: "100 m",
    features: ["Day-Date Display", "Luminescent Markers", "Shock Resistant Build"],
  },
  "6": {
    summary:
      "An iconic high-precision chronograph with premium construction and striking race-inspired details.",
    movement: "Automatic Chronograph",
    caseSize: "40 mm",
    strap: "Oyster Steel Bracelet",
    waterResistance: "100 m",
    features: ["Ceramic Bezel", "Chronograph Counters", "Screw-Down Crown"],
  },
  "7": {
    summary:
      "A modern classic featuring long power reserve performance and a dress-sport silhouette.",
    movement: "Automatic (80h Power Reserve)",
    caseSize: "41 mm",
    strap: "Steel Bracelet",
    waterResistance: "100 m",
    features: ["Power Reserve", "Date Display", "Anti-Reflective Crystal"],
  },
  "8": {
    summary:
      "A polished Swiss-made watch with understated detailing and dependable timekeeping.",
    movement: "Automatic",
    caseSize: "39 mm",
    strap: "Steel Bracelet",
    waterResistance: "30 m",
    features: ["Date Window", "Sunburst Dial", "Elegant Slim Profile"],
  },
};

export const ProductInfo = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state: RootState) => state.favorites);
  const { productId } = useParams();
  const product = products.find((item) => productId === item.id);
  const watchDetails = productId ? watchDetailsById[productId] : undefined;

  const navigate = useNavigate();

  if (!product) {
    return (
      <main className="bg-[whitesmoke] min-h-[70vh] flex items-center justify-center px-4">
        <section className="max-w-xl w-full bg-white border border-gray-200 rounded-xl p-8 text-center">
          <h1 className="text-3xl font-black text-gray-800">Watch Not Found</h1>
          <p className="text-gray-600 mt-3">
            We could not find this product. Please return to the product list.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-5 py-2"
          >
            Back to Products
          </Link>
        </section>
      </main>
    );
  }

  const isFavorite = favoriteItems.includes(product.id);

  return (
    <main className="bg-[whitesmoke] min-h-[80vh] py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-8 text-gray-800 md:flex md:items-start md:gap-10">
        <img
          src={product.url}
          alt={product.title}
          className="h-[360px] md:h-[520px] w-full md:w-[45%] object-contain bg-white border border-gray-200 rounded-xl p-4"
        />

        <section className="mt-8 md:mt-0 md:w-[55%]">
          <button
            type="button"
            onClick={() => dispatch(toggleFavorite(product.id))}
            className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white hover:border-sky-400"
            aria-label={isFavorite ? "Delete selected watch" : "Save favorite"}
          >
            {isFavorite ? (
              <Trash size={20} className="text-red-500" />
            ) : (
              <Heart size={20} className="text-gray-700" />
            )}
          </button>
          <p className="text-3xl md:text-5xl font-heading">{product.title}</p>
          <p className="text-2xl md:text-3xl mt-3 font-semibold">
            ${product.price.toLocaleString()}
          </p>

          <p className="font-normal text-sm md:text-base pt-4 text-gray-600 leading-6">
            {watchDetails?.summary ||
              "A refined timepiece designed for daily wear, combining modern style with dependable performance."}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Movement</p>
              <p className="font-semibold">{watchDetails?.movement || "Quartz"}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Case Size</p>
              <p className="font-semibold">{watchDetails?.caseSize || "40 mm"}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Strap</p>
              <p className="font-semibold">{watchDetails?.strap || "Steel Bracelet"}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Water Resistance</p>
              <p className="font-semibold">
                {watchDetails?.waterResistance || "50 m"}
              </p>
            </div>
          </div>

          <div className="mt-5 bg-white border border-gray-200 rounded-lg px-4 py-4">
            <p className="text-gray-700 font-semibold mb-2">Key Features</p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              {(watchDetails?.features || ["Premium build quality", "Reliable movement"]).map(
                (feature) => (
                  <li key={feature}>{feature}</li>
                )
              )}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-sky-400 to-sky-800 group-hover:from-sky-400 group-hover:to-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-600">
              <button
                className="relative font-heading px-4 md:px-8 py-1 md:py-2.5 text-xl md:text-2xl text-black transition-all ease-in duration-75 bg-[whitesmoke] dark:bg-zinc-800 rounded-md group-hover:bg-opacity-0 hover:text-white"
                onClick={() => {
                  dispatch(addProduct(product));
                }}
              >
                Add To Cart
              </button>
            </div>
            <button
              className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-lg md:text-xl font-heading text-white hover:bg-black"
              onClick={() => {
                dispatch(addProduct(product));
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
          </div>
          <div>
            <Link to="/shop" className="text-sky-600 hover:text-sky-700 text-sm font-medium">
              Back to Products
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
