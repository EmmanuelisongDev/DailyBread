import bread2 from "./assets/img/bread2.png";
import b1 from "./assets/img/b1.png";
import b2 from "./assets/img/b2.png";
import "./componets.css";

const Section = () => {
  return (
    <section className="h-auto  w-full py-20 section-background px-[5%] border-b-[2px] border-black">
      <article className="relative flex flex-col-reverse md:flex-row-reverse justify-center gap-4 w-full items-center ">
        <div className="z-10  md:w-1/2  text-right  ">
          <h1 className="text-4xl font-extrabold text-[#0000ff] md:text-8xl mb-5">
            it's love <br /> in every bite
          </h1>
          <p className="font-semibold text-xl md:text-3xl">
            Our bread is not just a product, but a symbol of the care and love
            we put into every loaf. Whether it's a simple white bread or a fancy
            artisanal loaf, our bread{" "}
            <span>
              <img className="w-10 inline" src={b1} alt="" />
            </span>{" "}
            has the power to bring people together and provide them with the
            nourishment they need to thrive. So keep baking and spreading the
            joy of bread nourishment!
            <span>
              <img className="w-10 inline" src={b2} alt="" />
            </span>
          </p>
        </div>
        <img className="w-[60%] animate-spin md:w-1/2  " src={bread2} alt="" />
      </article>
    </section>
  );
};

export default Section;
