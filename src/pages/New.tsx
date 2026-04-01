import { Link } from "react-router-dom";
import { menWatches } from "../assets/menWatches";
import { womenWatches } from "../assets/womenWatches";

export function New() {
  const newWatches = [...menWatches, ...womenWatches].filter((item) => item.isNew);

  function formatInr(price: number) {
    return `Rs ${price.toLocaleString()}`;
  }

  return (
    <main className="bg-[whitesmoke] py-12">
      <div className="mx-auto max-w-[80%] mb-6">
        <h1 className="text-3xl md:text-4xl font-black text-gray-800">New Collection</h1>
        <p className="text-gray-600 mt-2">Only newly tagged watches are shown here.</p>
      </div>
      <div className="grid gap-6 mx-auto max-w-[1400px] px-4 md:px-8 sm:grid-cols-2 xl:grid-cols-4">
        {newWatches.map((watch) => (
          <Link
            key={watch.id}
            to={watch.id.startsWith("men") ? `/men/${watch.id}` : `/women/${watch.id}`}
            className="group bg-white border border-zinc-200 rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div className="relative bg-zinc-50 rounded-lg h-[270px] flex items-center justify-center overflow-hidden">
              <img
                src={watch.image}
                alt={watch.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="absolute top-2 left-2 bg-sky-500 text-white text-xs font-semibold px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <p className="mt-4 text-zinc-900 font-semibold">{watch.title}</p>
            <p className="text-sm text-zinc-500 mt-1">Code: {watch.code}</p>
            <p className="text-lg text-zinc-900 mt-2">{formatInr(watch.price)}</p>
            <p className="text-sm mt-2 text-red-600 font-medium">Only {watch.stockLeft} left</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
