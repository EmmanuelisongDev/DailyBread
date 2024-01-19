import React from "react";
import { useParams } from "react-router-dom";
import recipe from "../data";

const Recipe = () => {
  let { id } = useParams();
  const reci = recipe.find((e) => e.id == id);

  const { name, img, directions, ingredients } = reci;
  console.log(reci);

  return (
    <div className="mx-[3%] mb-20">
      <h1 className=" text-5xl font-black text-[#0000ff] md:text-9xl">
        {name}
      </h1>
      <img className="w-full h-56 object-cover " src={img} alt="" />
      <div className=" mt-20">
        <h1 className=" text-4xl  font-black text-[#000fff] md:text-8xl">
          Ingredient
        </h1>
        <p className="font-bold text-xl md:text-3xl text-[#000]">
          {ingredients}
        </p>
        <h1 className=" text-4xl  font-black text-[#000fff] md:text-8xl">
          Direction
        </h1>
        <p className="font-bold text-xl md:text-3xl text-[#000]">
          {directions}
        </p>
      </div>
    </div>
  );
};

export default Recipe;
