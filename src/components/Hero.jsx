import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00d9fa] font-bold p-2 text-2xl">GROWING WITH US</p>
        <h1 className="md:text-7xl sm:-6xl text-4xl font-bold md:py-6">
          GROWING WITH{" "}
          <span className="hover:text-[#00d9fa] ease-in duration-500">
            CODOCTORS
          </span>
        </h1>
        <div className=" flex justify-center items-center">
          <p className="md:text-3xl sm:2-xl text-xl font-bold">
            Fast, flexible Code for
          </p>
          <Typed
            className="md:text-3xl sm:2-xl text-xl font-bold md:pl-4 py-2 pl-2"
            strings={[" BTB", " BTC", " SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></Typed>
        </div>
        <p className="md:text-2xl  text-xl font-bold text-gray-500">
          Monitor your Website to increase revenue for BTB, BTC & SASS
        </p>
        <button className="bg-[#00d9fa] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
