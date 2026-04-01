import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { newArrivals } from "../assets/newArrivals";
import { Heart } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import { RootState } from "../store";

const collectionCards = Array.from({ length: 8 }, (_, index) => ({
  id: `collection-${index + 1}`,
  title: `COLLECTION ${index + 1}`,
  image: `/print${index + 1}.jpg`,
}));

const movementHeroCard = {
  id: "movement-automatic",
  title: "AUTOMATIC",
  image: "/movement-1.jpg",
};

const movementSecondaryCards = [
  { id: "movement-mechanical", title: "MECHANICAL", image: "/movement-3.jpg" },
  { id: "movement-quartz", title: "QUARTZ", image: "/movement-4.jpg" },
  { id: "movement-chronograph", title: "CHRONOGRAPH", image: "/movement-2.jpg" },
  { id: "movement-smart", title: "SMART", image: "/movement-5.jpg" },
];

const brandCards = Array.from({ length: 12 }, (_, index) => ({
  id: `brand-${index + 1}`,
  title: `BRAND ${index + 1}`,
  image: `/brand-${index + 1}.jpg`,
}));

const sectionHeadingClass =
  "font-body tracking-[0.24em] text-zinc-900 text-2xl md:text-5xl";

export function Home() {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state: RootState) => state.favorites);
  const newArrivalsRef = useRef<HTMLDivElement | null>(null);

  function scrollNewArrivals(direction: "left" | "right") {
    if (!newArrivalsRef.current) return;
    const amount = direction === "left" ? -360 : 360;
    newArrivalsRef.current.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div className="bg-[whitesmoke]">
      <section className="relative min-h-[80vh] pt-12 px-6 md:px-12 bg-zinc-800">
        <div className="flex flex-col-reverse md:flex-row justify-center align-middle items-center px-4">
          <div className="font-heading text-white text-4xl md:text-6xl lg:text-8xl">
            Don't waste
            <span className="text-sky-400 block mb-4"> your time </span>
            <Button path="shop">Buy it</Button>
          </div>
          <img
            src="/homewatch.png"
            alt="Home watch"
            className="h-[340px] md:h-[450px] lg:h-[600px] w-auto object-contain"
          />
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-14">
        <div className="flex items-center justify-between mb-10">
          <h2 className={sectionHeadingClass}>NEW ARRIVALS</h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Scroll new arrivals left"
              onClick={() => scrollNewArrivals("left")}
              className="h-11 w-11 rounded-full border border-zinc-400 bg-white text-zinc-900 text-2xl leading-none hover:bg-zinc-100"
            >
              &#8249;
            </button>
            <button
              type="button"
              aria-label="Scroll new arrivals right"
              onClick={() => scrollNewArrivals("right")}
              className="h-11 w-11 rounded-full border border-zinc-400 bg-white text-zinc-900 text-2xl leading-none hover:bg-zinc-100"
            >
              &#8250;
            </button>
          </div>
        </div>

        <div
          ref={newArrivalsRef}
          className="overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-5 min-w-max">
            {newArrivals.map((item) => (
              <Link
                to={`/new-arrivals/${item.id}`}
                key={item.id}
                className="group relative w-[280px] md:w-[340px] bg-white border border-gray-200 rounded-sm p-4 shrink-0"
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch(toggleFavorite(item.id));
                  }}
                  className="absolute top-6 right-6 z-10 bg-white/90 rounded-full h-9 w-9 flex items-center justify-center border border-gray-300 hover:border-sky-400"
                  aria-label={favoriteItems.includes(item.id) ? "Remove favorite" : "Save favorite"}
                >
                  <Heart
                    size={20}
                    weight={favoriteItems.includes(item.id) ? "fill" : "regular"}
                    className={favoriteItems.includes(item.id) ? "text-red-500" : "text-gray-700"}
                  />
                </button>
                <div className="bg-[#f4f4f4] h-[320px] md:h-[380px] flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="font-body text-zinc-900 tracking-[0.12em] text-sm md:text-base text-center mt-4">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] px-6 md:px-12 lg:px-20 py-14">
        <h2 className={`${sectionHeadingClass} text-center mb-12`}>COLLECTION</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {collectionCards.map((item) => (
            <Link
              to={`/discover/collection/${item.id}`}
              key={item.id}
              className="group bg-[#f6f6f6] border border-[#d6d6d6] p-4 md:p-5"
            >
              <div className="bg-[#f1f1f1] min-h-[320px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#efefef] px-6 md:px-12 lg:px-20 py-14">
        <h2 className={`${sectionHeadingClass} text-center mb-12`}>MOVEMENT IN TIME</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5">
          <Link
            to={`/discover/movement/${movementHeroCard.id}`}
            className="group bg-[#e7e7e7] border border-[#d9d9d9] p-5 md:p-6 lg:row-span-2"
          >
            <div className="bg-[#ededed] min-h-[360px] lg:min-h-[620px] flex items-center justify-center overflow-hidden">
              <img
                src={movementHeroCard.image}
                alt={movementHeroCard.title}
                className="h-[300px] md:h-[360px] lg:h-[520px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <p className="font-body text-zinc-900 text-2xl md:text-4xl tracking-[0.14em] text-center mt-5">
              {movementHeroCard.title}
            </p>
          </Link>

          {movementSecondaryCards.map((item) => (
            <Link
              to={`/discover/movement/${item.id}`}
              key={item.id}
              className="group bg-[#e7e7e7] border border-[#d9d9d9] p-4 md:p-5"
            >
              <div className="bg-[#ededed] min-h-[220px] md:min-h-[260px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[180px] md:h-[220px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <p className="font-body text-zinc-900 text-2xl md:text-4xl tracking-[0.14em] text-center mt-4">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-14">
        <h2 className={`${sectionHeadingClass} text-center mb-12`}>SHOP BY BRANDS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brandCards.map((item) => (
            <Link
              to={`/discover/brands/${item.id}`}
              key={item.id}
              className="group bg-white border border-gray-200 p-4 md:p-5"
            >
              <div className="bg-[#f5f5f5] min-h-[240px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[240px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
