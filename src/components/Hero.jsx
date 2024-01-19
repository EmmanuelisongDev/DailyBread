import React from "react";
import video from "./assets/video/hero.mp4";

const Hero = () => {
  return (
    <>
      <div className=" relative flex w-full h-screen border-b-[4px]  ">
        <header className="absolute top-[30%]   px-[5%]  w-full">
          <h1 className=" text-5xl  font-black text-white md:text-9xl">
            Handmade, <br /> with an <br /> Extra Pinch of Love
          </h1>
          <p className="font-bold text-xl md:text-3xl text-[#000fff]">
            We prepare our breads daily <br /> and that's where the charming
            smell comes from.
          </p>
        </header>
        <video
          className=" w-full h-screen object-cover mx-0 border-b-[2px] border-black"
          src={video}
          loop
          autoPlay
          muted
        />
      </div>
    </>
  );
};

export default Hero;
