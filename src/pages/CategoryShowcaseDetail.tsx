import { Link, useParams } from "react-router-dom";
import { categoryShowcaseById } from "../assets/categoryShowcase";

export function CategoryShowcaseDetail() {
  const { categoryId } = useParams();
  const item = categoryId ? categoryShowcaseById[categoryId] : undefined;

  if (!item) {
    return (
      <main className="bg-[whitesmoke] min-h-[70vh] flex items-center justify-center px-4">
        <section className="max-w-xl w-full bg-white border border-gray-200 rounded-xl p-8 text-center">
          <h1 className="text-3xl font-black text-gray-800">Category Not Found</h1>
          <p className="text-gray-600 mt-3">
            This watch category detail is not available right now.
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
          <img src={item.image} alt={item.title} className="h-[360px] md:h-[520px] w-full object-contain" />
        </div>

        <section className="text-gray-800">
          <p className="text-sm tracking-[0.14em] uppercase text-gray-500">Category Showcase</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-heading">{item.title}</h1>
          <p className="mt-3 text-sm md:text-base text-sky-700 font-semibold">{item.tagline}</p>
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
            <p className="text-gray-700 font-semibold mb-2">Collection Note</p>
            <p className="text-sm text-gray-600">{item.collectionNote}</p>
          </div>

          <div className="mt-4 bg-white border border-gray-200 rounded-lg px-4 py-4">
            <p className="text-gray-700 font-semibold mb-2">Highlights</p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              {item.highlights.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
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

          <div className="mt-6 flex items-center gap-4">
            <Link to="/shop" className="text-sm text-sky-600 hover:text-sky-700 font-semibold">
              Browse Shop
            </Link>
            <Link to="/" className="text-sm text-sky-600 hover:text-sky-700 font-semibold">
              Back to Home
            </Link>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-4 md:px-8 mt-10">
        <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
          <p className="text-sm tracking-[0.14em] uppercase text-gray-500 mb-4">
            Watches In This Category
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {item.relatedWatches.map((watch) => (
              <Link
                key={watch.title}
                to={watch.to}
                className="group border border-zinc-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-52 bg-zinc-100 overflow-hidden">
                  <img
                    src={watch.image}
                    alt={watch.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm tracking-[0.08em] text-zinc-900">{watch.title}</p>
                  <p className="text-xs text-zinc-500 mt-1">{watch.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
