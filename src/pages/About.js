import React from "react";
import vid_1 from "../components/assets/video/bread.mp4";
import bread from "../components/assets/img/bread1.png";
import head from "../components/assets/img/u.jpg";

const About = () => {
  return (
    <div className="mx-[3%]">
      <header>
        <h1 className="text-5xl font-black text-[#0000ff] md:text-9xl">
          About Us
        </h1>
        <img
          className=" border-b-[2px] border-black  border-[1px] shadow-[5px_5px_0px_0px] hover:shadow-[0.5px_0.5px_0px_0px_#171796] object-cover h-[50vh] w-full"
          src={head}
          alt=""
        />
      </header>

      <div className="py-20">
        <p className="font-bold text-3xl md:text-7xl text-[#000] ">
          Our bakery specializes in using only the freshest and highest quality
          ingredients to create delicious breads and desserts
          <span>
            <video
              className=" inline w-[25%] md:w-[10%]  object-cover mx-0 border-b-[2px] border-black  border-[1px] shadow-[5px_5px_0px_0px] hover:shadow-[0.5px_0.5px_0px_0px_#171796]"
              src={vid_1}
              loop
              autoPlay
              muted
            />
          </span>
          .
          <br />
          Our team of skilled bakers works tirelessly to provide a wide variety
          of options for our customers{" "}
          <span>
            <img className="w-[25%] md:w-[10%] inline" src={bread} alt="" />
          </span>
          , including gluten-free and vegan choices. Whether you're looking for
          classic croissant or a customized bread for a special occasion,
          <br />
          we get you covered.
        </p>
      </div>
    </div>
  );
};

export default About;
