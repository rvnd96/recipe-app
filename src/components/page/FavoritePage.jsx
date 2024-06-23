import React from "react";
import RecipeCard from "../RecipeCard";

const FavoritePage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <div className="bg-base-300 p-10 flex-1 min-h-dvh">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="font-bold text-3xl md:text-5xl my-4">My Favorites</h2>

        {favorites.length === 0 && (
          <div className="h-[80dvh] flex flex-col items-start gap-4 my-10">
            <p className="font-bold text-2xl text-error ">
              Oops.. Theres no favorites! 😯
            </p>
          </div>
        )}

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.label} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
