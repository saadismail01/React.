import { useState } from "react";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00d9fa]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <button>Home</button>
        </li>
        <li className="p-4">
          <button>Company</button>
        </li>
        <li className="p-4">
          <button>Resources</button>
        </li>
        <li className="p-4">
          <button>About</button>
        </li>
        <li className="p-4">
          <button>Contact</button>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00d9fa] m-4">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Company</li>
          <li className="p-4 border-b border-b-gray-600">Resources</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4 border-b border-b-gray-600 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
