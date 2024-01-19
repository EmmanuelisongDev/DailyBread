import Recipes from "./Recipes";
import recipe from "../data";

const Recipe = () => {
  return (
    <>
      <section className=" py-32 h-auto  px-[5%] bg-[#0000ff] border-b-[2px] border-black">
        <h1 className="text-center  text-white text-4xl md:text-8xl font-extrabold mb-10  ">
          Our Top Picks <br /> and <br /> Popular Recipes*
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {recipe.map((item) => {
            return <Recipes key={item.id} item={item} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default Recipe;
