import React from "react";

const Cards = () => {
  return (
    <div className="w-full py-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-2xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 hover:bg-[#00d9fa] ease-in duration-500">
          <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
          <p className="text-center text-4xl font-bold">179$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">lorem</p>
            <p className="py-2 border-b mx-8 mt-8">lorem</p>
            <p className="py-2 border-b mx-8 mt-8">lorem</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-white">
            Get Started
          </button>
        </div>
        <div className="w-full bg-gray-300 shadow-2xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 hover:bg-[#00d9fa] ease-in duration-500">
          <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
          <p className="text-center text-4xl font-bold">179$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">lorem</p>
            <p className="py-2 border-b mx-8 mt-8">lorem</p>
            <p className="py-2 border-b mx-8 mt-8">lorem</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-white">
            Get Started
          </button>
        </div>
        <div className="w-full shadow-2xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 hover:bg-[#00d9fa] ease-in duration-500">
          <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
          <p className="text-center text-4xl font-bold">179$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">lorem</p>
            <p className="py-2 border-b mx-8 mt-8">lorem</p>
            <p className="py-2 border-b mx-8 mt-8">lorem</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
