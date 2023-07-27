import React from "react";

const News = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto lg:grid-cols-3 lg:flex  ">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want Websites & Apps to optimize your Flow?
          </h1>
          <p>Sign up to our Newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col  sm:flex-row items-center justify-between w-full">
            <input
              className=" flex p-3 w-[300px] rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            ></input>
            <button className="bg-[#00d9fa] w-[200px] rounded-md font-bold ml-4 my-6 mx-auto py-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care about your data. Read our{" "}
            <span className="text-[#00d9fa]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
