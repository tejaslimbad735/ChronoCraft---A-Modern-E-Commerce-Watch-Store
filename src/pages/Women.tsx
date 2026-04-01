import { Link } from "react-router-dom";
import { womenWatches } from "../assets/womenWatches";
import { Heart, Trash } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import { RootState } from "../store";

function formatInr(price: number) {
  return `Rs ${price.toLocaleString()}`;
}

export function Women() {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state: RootState) => state.favorites);
  const totalUnitsLeft = womenWatches.reduce((total, watch) => total + watch.stockLeft, 0);

  return (
    <main className="bg-[whitesmoke] py-12">
      <section className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm tracking-[0.2em] text-zinc-500">WOMEN COLLECTION</p>
            <h1 className="font-heading text-3xl md:text-5xl text-zinc-900 mt-2">Watches For Women</h1>
          </div>
          <div className="bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm md:text-base text-zinc-700">
            Products: <span className="font-semibold">{womenWatches.length}</span> | Units left:{" "}
            <span className="font-semibold">{totalUnitsLeft}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {womenWatches.map((watch) => (
            <Link
              to={`/women/${watch.id}`}
              key={watch.id}
              className="group bg-white border border-zinc-200 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="relative bg-zinc-50 rounded-lg h-[270px] flex items-center justify-center overflow-hidden">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch(toggleFavorite(watch.id));
                  }}
                  className="absolute top-2 right-2 z-10 bg-white/90 rounded-full h-9 w-9 flex items-center justify-center border border-gray-300 hover:border-sky-400"
                  aria-label={
                    favoriteItems.includes(watch.id)
                      ? "Delete selected watch"
                      : "Save favorite"
                  }
                >
                  {favoriteItems.includes(watch.id) ? (
                    <Trash size={18} className="text-red-500" />
                  ) : (
                    <Heart size={20} weight="regular" className="text-gray-700" />
                  )}
                </button>
                <img
                  src={watch.image}
                  alt={watch.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {watch.isTrending && (
                  <span className="absolute top-2 left-2 bg-amber-400 text-zinc-900 text-xs font-semibold px-2 py-1 rounded">
                    TRENDING
                  </span>
                )}
                {watch.isNew && (
                  <span className="absolute top-12 left-2 bg-sky-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>
              <p className="mt-4 text-zinc-900 font-semibold">{watch.title}</p>
              <p className="text-sm text-zinc-500 mt-1">Code: {watch.code}</p>
              <p className="text-lg text-zinc-900 mt-2">{formatInr(watch.price)}</p>
              <p className="text-sm mt-2 text-red-600 font-medium">Only {watch.stockLeft} left</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
