import React from "react";
import { FaCloudSunRain } from "react-icons/fa";
import { ThemeToggle } from "./theme-toggle";

const Header= ()=> {
  return (
    <div className="flex justify-between p-4 px-6">
      <div className="flex items-center ">
      <FaCloudSunRain size={50} className="text-white  " />
      <h1 className="text-white font-bold ml-2">Weather</h1>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
