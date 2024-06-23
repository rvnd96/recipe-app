import React, { useState } from "react";
import { Heart, HeartPulse, Soup } from "lucide-react";

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
};

const RecipeCard = ({ recipe }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem('favorites')?.includes(recipe.label))

  const addRecipeToFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const isRecipeAlreadyInFavorite = favorites.some((fav) => fav.label === recipe.label)

    if(isRecipeAlreadyInFavorite) {
      favorites = favorites.filter((fav) => fav.label !== recipe.label)
      setIsFavorite(false)
    } else {
      favorites.push(recipe)
      setIsFavorite(true)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  return (
    <div className="flex flex-col rounded-2xl shadow-2xl bg-base-100 overflow-hidden p-3 relative">
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe sinhala`}
        target="_blank"
        className="relative h-32"
      >
        <div className="skeleton absolute inset-0" />
        <img
          src={recipe.image}
          alt={recipe.label}
          className="rounded object-cover w-full h-full cursor-pointer opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1
            e.currentTarget.previousElementSibling.style.display = 'none'
          }}
        />
        <div className="bg-base-100 absolute bottom-2 left-2 rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> {recipe.yield} Serving
        </div>
        <div className="absolute top-1 right-2 bg-base-100 rounded-full p-1 cursor-pointer" onClick={(e) => {
          e.preventDefault()
          addRecipeToFavorite()
        }}>
          {!isFavorite && <Heart size={20} className="hover:fill-error hover:text-error" />}
          {isFavorite && <Heart size={20} className="fill-error text-error" />}
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2 capitalize">{recipe.cuisineType} Kitchen</p>
      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, index) => (
          <div
            key={index}
            className="flex gap-1 btn btn-primary btn-outline btn-sm items-center p-1 rounded-md"
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
