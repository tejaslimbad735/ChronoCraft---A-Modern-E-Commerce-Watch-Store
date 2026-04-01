import { Link } from "react-router-dom";
import { Heart, Trash } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import { RootState } from "../store";

interface CardProps {
  id: string;
  title: string;
  price: number;
  url: string;
  isNew?: boolean;
}

export function Card({ id, title, price, url, isNew }: CardProps) {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state: RootState) => state.favorites);
  const isFavorite = favoriteItems.includes(id);

  return (
    <div className="relative flex justify-center align-middle items-center w-[90%] shadow-lg">
      {isNew && (
        <span className="absolute top-2 left-2 z-10 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          NEW
        </span>
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatch(toggleFavorite(id));
        }}
        className="absolute top-2 right-2 z-10 bg-white/90 rounded-full h-9 w-9 flex items-center justify-center border border-gray-300 hover:border-sky-400"
        aria-label={isFavorite ? "Delete selected watch" : "Save favorite"}
      >
        {isFavorite ? (
          <Trash size={18} className="text-red-500" />
        ) : (
          <Heart size={20} weight="regular" className="text-gray-700" />
        )}
      </button>
      <Link to={`/shop/${id}`} className="bg-neutral-200 mr-auto max-w-md">
        <img src={url} alt="watch" className="h-[220px]" />
      </Link>
      <div className="flex-col justify-center text-center mr-auto">
        <p className="font-bold pb-2 pt-4 font-body">{title}</p>
        <p className="pb-4">${price}</p>
      </div>
    </div>
  );
}
