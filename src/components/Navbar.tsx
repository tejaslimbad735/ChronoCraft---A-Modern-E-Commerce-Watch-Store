import { useSelector } from "react-redux";
import { CartIcon } from "./CartIcon";
import { Link, useLocation } from "react-router-dom";
import {
  Heart,
  MagnifyingGlass,
  Moon,
  Sun,
  User,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { menWatches } from "../assets/menWatches";
import { womenWatches } from "../assets/womenWatches";

import { RootState } from "../store";

export function Navbar() {
  const cartProducts = useSelector((state: RootState) => state.cart);
  const favoriteItems = useSelector((state: RootState) => state.favorites);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMenMenuOpen, setIsMenMenuOpen] = useState(false);
  const [isWomenMenuOpen, setIsWomenMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    setIsUserMenuOpen(false);
    setIsMenMenuOpen(false);
    setIsWomenMenuOpen(false);
  }, [location.pathname]);

  const primaryNavItems = [
    { label: "HOME", to: "/" },
    { label: "MEN", to: "/shop#men", image: menWatches[0].image, hasDropdown: "men" },
    { label: "WOMEN", to: "/shop#women", image: womenWatches[0].image, hasDropdown: "women" },
    { label: "NEW", to: "/new", image: menWatches[1].image },
    { label: "TRENDING", to: "/trending", image: menWatches.find(w => w.isTrending)?.image },
    { label: "SERVICE", to: "/boutiques" },
  ];

  return (
    <header className="bg-[#eff1f4] text-gray-800 border-b border-gray-300">
      <div className="mx-auto max-w-[1400px] h-24 px-4 md:px-8 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-zinc-900"
          aria-label="ChronoCraft Watches home"
        >
          <img
            src="/logo1.png"
            alt="ChronoCraft Watches logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
          <div className="ml-2 flex flex-col leading-none">
            <span className="font-heading text-base md:text-xl tracking-[0.12em] text-zinc-900">
              CHRONOCRAFT
            </span>
            <span className="font-body text-[0.68rem] md:text-sm tracking-[0.26em] text-amber-700 mt-0.5">
              WATCHES
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-5 md:gap-6">
          <Link to="/search" className="hover:text-sky-500" aria-label="Search">
            <MagnifyingGlass size={28} />
          </Link>
          <Link to="/favorites" className="hover:text-sky-500 relative" aria-label="Favorites">
            <Heart size={28} />
            <span className="absolute -top-2 -right-2 bg-sky-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {favoriteItems.length}
            </span>
          </Link>
          <button
            className="hover:text-sky-500"
            aria-label="Theme"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
          </button>
          <Link to="/cart" className="hover:text-sky-500">
            <CartIcon quantity={cartProducts.length} />
          </Link>
          <div className="relative">
            <button
              className="hover:text-sky-500"
              aria-label="User menu"
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
            >
              <User size={26} />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 top-10 w-36 rounded-lg border border-gray-300 bg-white shadow-md z-50">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 bg-[#eff1f4] relative">
        <nav className="mx-auto max-w-[1600px] px-4 md:px-6 h-16 flex items-center justify-between gap-3 md:gap-5 lg:gap-6 whitespace-nowrap overflow-x-auto md:overflow-visible text-[clamp(0.72rem,0.92vw,1.05rem)] font-body font-medium tracking-[0.02em]">
          {primaryNavItems.map((item) => (
            <div
              key={item.label}
              className="relative h-full flex items-center"
              onMouseEnter={() => {
                if (item.hasDropdown === "men") setIsMenMenuOpen(true);
                if (item.hasDropdown === "women") setIsWomenMenuOpen(true);
              }}
              onMouseLeave={() => {
                if (item.hasDropdown === "men") setIsMenMenuOpen(false);
                if (item.hasDropdown === "women") setIsWomenMenuOpen(false);
              }}
            >
              <Link
                to={item.to}
                className={`pb-3 border-b-2 transition-colors inline-flex items-center gap-2 ${
                  `${location.pathname}${location.search}` === item.to
                    ? "border-zinc-900 text-zinc-900"
                    : "border-transparent text-zinc-700 hover:text-zinc-900"
                }`}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={`${item.label} watch`}
                    className="h-6 w-6 rounded-full object-cover border border-zinc-300"
                  />
                )}
                {item.label}
              </Link>

              {item.hasDropdown === "men" && isMenMenuOpen && (
                <div className="absolute top-[calc(100%-1px)] left-0 w-[500px] bg-white shadow-xl border border-gray-200 z-[100] p-6 rounded-b-lg hidden md:block">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-heading tracking-wider text-zinc-900 border-l-4 border-amber-600 pl-3">FEATURED MEN'S WATCHES</h3>
                    <Link to="/shop" className="text-sm text-sky-600 hover:text-sky-700 font-bold uppercase tracking-tight">View All</Link>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {menWatches.slice(0, 4).map((watch) => (
                      <Link 
                        key={watch.id} 
                        to={`/men/${watch.id}`}
                        className="group flex flex-col gap-2"
                      >
                        <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100 group-hover:border-sky-200 group-hover:shadow-sm transition-all">
                          <img 
                            src={watch.image} 
                            alt={watch.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{watch.brand}</p>
                          <p className="text-[11px] font-medium text-zinc-800 leading-tight line-clamp-2 group-hover:text-sky-600 transition-colors h-7">{watch.title}</p>
                          <p className="text-xs font-bold text-amber-700">₹{watch.price.toLocaleString()}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {item.hasDropdown === "women" && isWomenMenuOpen && (
                <div className="absolute top-[calc(100%-1px)] left-0 w-[500px] bg-white shadow-xl border border-gray-200 z-[100] p-6 rounded-b-lg hidden md:block">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-heading tracking-wider text-zinc-900 border-l-4 border-pink-600 pl-3">FEATURED WOMEN'S WATCHES</h3>
                    <Link to="/shop" className="text-sm text-sky-600 hover:text-sky-700 font-bold uppercase tracking-tight">View All</Link>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {womenWatches.slice(0, 4).map((watch) => (
                      <Link 
                        key={watch.id} 
                        to={`/women/${watch.id}`}
                        className="group flex flex-col gap-2"
                      >
                        <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100 group-hover:border-pink-200 group-hover:shadow-sm transition-all">
                          <img 
                            src={watch.image} 
                            alt={watch.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{watch.brand}</p>
                          <p className="text-[11px] font-medium text-zinc-800 leading-tight line-clamp-2 group-hover:text-pink-600 transition-colors h-7">{watch.title}</p>
                          <p className="text-xs font-bold text-amber-700">₹{watch.price.toLocaleString()}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
