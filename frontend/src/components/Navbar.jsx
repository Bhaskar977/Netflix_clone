import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="absolute z-10 flex w-[100vw] item-center justify-between px-6 bg-gradient-to-t from-black">
      <img
        width="150px"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt=""
      />
      <div className="flex items-center">
        <IoIosArrowDropdown size={"24"} color="white"/>
        <h1 className="text-lg font-medium text-white" >Bhaskar Joshi</h1>
        <div className="mx-4">
          <button className="bg-red-800 text-white px-4 py-2">Logout</button>
          <button className="bg-red-800 text-white px-4 py-2 ml-2">
            Search Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
