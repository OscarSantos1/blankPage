import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full px-7 backdrop-blur-sm bg-white/20 overflow-scroll">
      <Link href="/">
        <h1 className="text-4xl md:text-6xl text-sky-600 mb-5 md:mb-7">
          Blank Page
        </h1>
      </Link>
      <p className="text-[9px] w-[90%] md:text-base text-center max-w-[900px]">
        Blank Page is a AI powered tool that helps you get out of a creative
        block. If you are an artist and wanna get creating as soon as posible,
        try generating a brand new original idead just with the press of a
        button
      </p>
    </div>
  );
};

export default about;
