import Link from "next/link";
import React from "react";
import { IoIosHeart } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="fixed z-10 top-0 left-0 right-0 flex flex-row justify-between items-center lg:gap-4 pl-3 md:pl-2 p-2 lg:p-3 md:pb-3 lg:pb-3 bg-white/40 backdrop-blur-sm shadow-sm border-slate-300 fade-in">
      <div className="flex flex-col md:flex-row justify-start md:items-center gap-1 md:gap-4 w-full">
        <Link href="/">
          <div className="text-base md:text-xl lg:text-2xl text-sky-600">
            Blank Page:
          </div>
        </Link>
        <div className="text-[9px] md:text-sm lg:text-base md:pt-1 lg:pt-2 text-slate-600">
          AI generated ideas to kickstart your creativity
        </div>
      </div>
      <div className="flex items-center gap-1 md:gap-2">
        {/* <div className="border px-[4px] pt-[5px] pb-[3px] border-[#bd3967] rounded-full cursor-pointer">
          <IoIosHeart className="text-[#e4315a]" size="20" />
        </div> */}
        <Link href="/about">
          <button className="text-[9px] md:text-sm border border-slate-600 px-2 md:px-4 py-2 md:py-1 rounded-full">
            ABOUT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
