import { Trash } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import products from "../assets/products";
import { menWatches } from "../assets/menWatches";
import { womenWatches } from "../assets/womenWatches";
import { newArrivals } from "../assets/newArrivals";
import { RootState } from "../store";
import { toggleFavorite } from "../store/favoritesSlice";

export function Favorites() {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state: RootState) => state.favorites);

  const favoritesCatalog = [
    ...products.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.url,
      priceLabel: `$${item.price}`,
      to: `/shop/${item.id}`,
    })),
    ...menWatches.map((watch) => ({
      id: watch.id,
      title: watch.title,
      image: watch.image,
      priceLabel: `Rs ${watch.price.toLocaleString()}`,
      to: `/men/${watch.id}`,
    })),
    ...womenWatches.map((watch) => ({
      id: watch.id,
      title: watch.title,
      image: watch.image,
      priceLabel: `Rs ${watch.price.toLocaleString()}`,
      to: `/women/${watch.id}`,
    })),
    ...newArrivals.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      priceLabel: item.category,
      to: `/new-arrivals/${item.id}`,
    })),
  ];

  const favoriteProducts = favoritesCatalog.filter((item) => favoriteItems.includes(item.id));

  return (
    <main className="bg-[whitesmoke] py-10 px-4 md:px-8">
      <section className="mx-auto max-w-[1200px]">
        <h1 className="text-3xl md:text-4xl font-black text-gray-800">Favorite Watches</h1>
        <p className="mt-2 text-gray-600">
          Watches you selected with the heart icon are shown here.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] mt-8">
        {favoriteProducts.length === 0 ? (
          <p className="text-gray-600 text-lg">No favorite watches yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {favoriteProducts.map((item) => (
              <Link
                to={item.to}
                key={item.id}
                className="group relative bg-white border border-zinc-200 rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    dispatch(toggleFavorite(item.id));
                  }}
                  className="absolute top-6 right-6 z-10 bg-white/95 rounded-full h-10 w-10 flex items-center justify-center border border-red-200 hover:border-red-400"
                  aria-label="Delete selected watch"
                >
                  <Trash size={18} className="text-red-500" />
                </button>
                <div className="bg-zinc-50 rounded-lg h-[270px] flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 text-zinc-900 font-semibold">{item.title}</p>
                <p className="text-lg text-zinc-900 mt-2">{item.priceLabel}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
