import React from "react";
import Premium from "../assets/Premium.jpeg";

const Analyst = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px]  mx-auto my-4 rounded-2xl"
          src={Premium}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00d9fa] font-bold text-2xl">System Analyses</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage the frameworks of the system
          </h1>
          <p>
            Lorem Loremghjkl hjkl hjkl jkl nmkl bnm bnm bnk bnk bnjk bnmk bnmk
            bnmk bnmk bnmk bnm b nm bnm bnm nk hjk hjkl hjkl hjk hjk jkl jk njkl
            jkopew erw erwerw efrwqdweq dfew 3ewds d3ew dsde2w
          </p>
          <button className="bg-black text-[#00d9fa] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analyst;
