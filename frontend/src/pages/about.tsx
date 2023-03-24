import Link from "next/link";
import React from "react";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Overcome creative blocks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen w-full px-7 backdrop-blur-sm bg-white/20 overflow-scroll">
        <Link href="/">
          <h1 className="text-4xl md:text-6xl text-sky-600 mb-5 md:mb-7">
            Blank Page
          </h1>
        </Link>
        <p className="text-[9px] w-[90%] md:text-base text-center max-w-[900px]">
          Blank Page uses the same AI models form{" "}
          <span className="font-bold">Open AI</span> used to power
          <span className="font-bold"> Chat GPT</span> to help you get out of a
          creative block. If you are an artist and want to get creating as soon
          as posible, try generating a brand new original idea with just the
          press of a button.
        </p>
      </div>
    </>
  );
};

export default about;
