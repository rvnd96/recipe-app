import React from "react";
import { Heart, HeartPulse, Soup } from 'lucide-react'

const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded bg-base-200 overflow-hidden p-3 relative">
      <a href="#" className="relative h-32">
        <img
          src="https://picsum.photos/300"
          alt="recipt"
          className="rounded object-cover w-full h-full cursor-pointer"
        />
        <div className="bg-base-100 absolute bottom-2 left-2 rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> 4 Serving
        </div>
        <div className="absolute top-1 right-2 bg-base-100 rounded-full p-1 cursor-pointer">
          <Heart size={20} className="hover:fill-error hover:text-error" />
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">Roasted Chicken</p>
      </div>
      <p className="my-2">Turkish Kitchen</p>
      <div className="flex gap-2 mt-auto">
        <div className="flex gap-1 btn btn-success btn-outline btn-sm items-center p-1 rounded-md">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Gluten-free
          </span>
        </div>
        <div className="flex gap-1 btn btn-success btn-outline btn-sm items-center p-1 rounded-md">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Heart-healthy
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
