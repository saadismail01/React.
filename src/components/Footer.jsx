import React from "react";
import {
  FaFacebook,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:flex justify-between max-w-[1240px] mx-auto py-16 px-4 text-gray-300 ">
      <div className="flex flex-col w-72">
        <h1 className="w-full text-3xl font-bold text-[#00d9fa] my-2">
          REACT.
        </h1>
        <p className="mb-2">
          Lorem Loremghjkl hjkl hjkl jkl nmkl bnm bnm bnk bnk bnjk bnmk bnmk
          bnmk bnmk bnmk bnm b nm bnm
        </p>
        <div className="flex space-x-4">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between w-2/4 mt-10">
        <div>
          <ul>
            <li>fghj</li>
            <li>ghjkl</li>
            <li>ghjkk</li>
            <li>fghjk</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>fghj</li>
            <li>ghjkl</li>
            <li>ghjkk</li>
            <li>fghjk</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>fghj</li>
            <li>ghjkl</li>
            <li>ghjkk</li>
            <li>fghjk</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
