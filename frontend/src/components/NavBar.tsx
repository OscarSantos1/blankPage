import React from "react";
import Header from "./Header";

const NavBar = () => {
  return (
    <div className="fixed z-10 top-0 left-0 right-0 flex flex-col md:flex-row justify-start items-center md:gap-4 p-5 pb-4 lg:pb-6 backdrop-blur-3xl fade-in">
      <div className="text-lg md:text-4xl lg:text-4xl text-slate-600">
        Blank Page:{" "}
      </div>
      <div className="text-xs md:text-xl lg:text-xl md:pt-3 lg:pt-3 text-slate-600 ">
        AI generated ideas to kickstart your imagination!
      </div>
    </div>
  );
};

export default NavBar;
