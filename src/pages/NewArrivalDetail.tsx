import { Link, useParams } from "react-router-dom";
import { newArrivals } from "../assets/newArrivals";

export function NewArrivalDetail() {
  const { arrivalId } = useParams();
  const item = newArrivals.find((arrival) => arrival.id === arrivalId);

  if (!item) {
    return (
      <main className="bg-[whitesmoke] min-h-[70vh] flex items-center justify-center px-4">
        <section className="max-w-xl w-full bg-white border border-gray-200 rounded-xl p-8 text-center">
          <h1 className="text-3xl font-black text-gray-800">Arrival Not Found</h1>
          <p className="text-gray-600 mt-3">
            This new-arrival product detail is not available right now.
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
          <img
            src={item.image}
            alt={item.title}
            className="h-[360px] md:h-[500px] w-full object-contain"
          />
        </div>

        <section className="text-gray-800">
          <p className="text-sm tracking-[0.14em] uppercase text-gray-500">New Arrival</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-heading">{item.title}</h1>
          <p className="mt-3 text-sm md:text-base text-sky-700 font-semibold">{item.tagline}</p>
          <p className="mt-4 text-gray-600 leading-6">{item.summary}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Category</p>
              <p className="font-semibold">{item.category}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Movement</p>
              <p className="font-semibold">{item.movement}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Case Size</p>
              <p className="font-semibold">{item.caseSize}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-gray-500">Power</p>
              <p className="font-semibold">{item.batteryOrPower}</p>
            </div>
          </div>

          <div className="mt-4 bg-white border border-gray-200 rounded-lg px-4 py-4">
            <p className="text-gray-700 font-semibold mb-2">Ideal For</p>
            <p className="text-sm text-gray-600">{item.idealFor}</p>
          </div>

          <div className="mt-4 bg-white border border-gray-200 rounded-lg px-4 py-4">
            <p className="text-gray-700 font-semibold mb-2">Highlights</p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <Link
              to="/shop"
              className="inline-block bg-zinc-900 hover:bg-black text-white text-sm font-semibold rounded-lg px-5 py-2"
            >
              View All Watches
            </Link>
            <Link to="/" className="text-sky-600 hover:text-sky-700 text-sm font-semibold">
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

