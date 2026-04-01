import { Heart, Trash } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { menWatches } from "../assets/menWatches";
import { toggleFavorite } from "../store/favoritesSlice";
import { addProduct } from "../store/cartSlice";
import { RootState } from "../store";

function formatInr(price: number) {
  return `Rs ${price.toLocaleString()}`;
}

export function MenProductDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteItems = useSelector((state: RootState) => state.favorites);
  const { menId } = useParams();
  const item = menWatches.find((watch) => watch.id === menId);

  if (!item) {
    return (
      <main className="bg-[whitesmoke] min-h-[70vh] flex items-center justify-center px-4">
        <section className="max-w-xl w-full bg-white border border-gray-200 rounded-xl p-8 text-center">
          <h1 className="text-3xl font-black text-gray-800">Product Not Found</h1>
          <p className="text-gray-600 mt-3">
            This men watch detail is not available right now.
          </p>
          <Link
            to="/shop#men"
            className="inline-block mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-5 py-2"
          >
            Back to Men
          </Link>
        </section>
      </main>
    );
  }

  const isFavorite = favoriteItems.includes(item.id);
  const cartProduct = {
    id: item.id,
    title: item.title,
    price: item.price,
    quantity: 0,
    url: item.image,
  };

  return (
    <main className="bg-[whitesmoke] min-h-[80vh] py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-center">
          <img src={item.image} alt={item.title} className="h-[360px] md:h-[520px] w-full object-contain" />
        </div>

        <section className="text-gray-800">
          <button
            type="button"
            onClick={() => dispatch(toggleFavorite(item.id))}
            className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white hover:border-sky-400"
            aria-label={isFavorite ? "Delete selected watch" : "Save favorite"}
          >
            {isFavorite ? (
              <Trash size={20} className="text-red-500" />
            ) : (
              <Heart size={20} className="text-gray-700" />
            )}
          </button>
          <p className="text-sm tracking-[0.14em] uppercase text-gray-500">Men Watch</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-heading">{item.title}</h1>
          <p className="mt-3 text-xl md:text-2xl font-semibold">{formatInr(item.price)}</p>
          <p className="mt-3 text-sm text-zinc-500">Product Code: {item.code}</p>
          <p className="mt-4 text-gray-600 leading-6">{item.summary}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Brand</p>
              <p className="font-semibold">{item.brand}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Movement</p>
              <p className="font-semibold">{item.movement}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Strap</p>
              <p className="font-semibold">{item.strap}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Water Resistance</p>
              <p className="font-semibold">{item.waterResistance}</p>
            </div>
          </div>

          <div className="mt-4 bg-white border border-gray-200 rounded-lg px-4 py-4">
            <p className="text-gray-700 font-semibold mb-2">Dial & Availability</p>
            <p className="text-sm text-gray-600">Dial Color: {item.dialColor}</p>
            <p className="text-sm text-red-600 font-medium mt-1">Only {item.stockLeft} pieces left</p>
          </div>

          <div className="mt-4 bg-white border border-gray-200 rounded-lg px-4 py-4">
            <p className="text-gray-700 font-semibold mb-2">Detail Source</p>
            <p className="text-sm text-gray-600">{item.sourceLabel}</p>
            {item.sourceUrl && (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 text-sm text-sky-600 hover:text-sky-700"
              >
                Open source page
              </a>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => dispatch(addProduct(cartProduct))}
              className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-600"
            >
              Add To Cart
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(addProduct(cartProduct));
                navigate("/cart");
              }}
              className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-black"
            >
              Buy Now
            </button>
            <Link to="/trending" className="text-sm text-sky-600 hover:text-sky-700 font-semibold">
              View Trending Watches
            </Link>
            <Link to="/shop#men" className="text-sm text-sky-600 hover:text-sky-700 font-semibold">
              Back to Men
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
