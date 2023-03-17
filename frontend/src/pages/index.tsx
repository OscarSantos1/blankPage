import Field from "../components/Field";
import GenButton from "../components/GenButton";
import Header from "../components/Header";
import Head from "next/head";
import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [subject, setSubject] = useState("");
  const [action, setAction] = useState("");
  return (
    <>
      <Head>
        <title>Blank Page</title>
        <meta name="description" content="Overcome creative blocks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className="flex flex-col justify-center items-center h-screen w-full px-7 backdrop-blur-sm bg-white/20 overflow-scroll fade-in">
        <div className="h-24" />
        <div className="flex flex-col justify-center h-[50%] md:h-[30%] w-[90%] md:w-[70%] min-w-[340px] max-w-7xl">
          <div className="flex flex-col h-full min-h-[190px] max-h-[500px] w-full mb-20 md:mb-9 roll-in">
            <div className="flex flex-col md:flex-row h-[200%] md:h-[100%] md:gap-4">
              <Field label={"Time"} content={time} />
              <Field label={"Location"} content={location} />
            </div>
            <Field label={"Subject"} content={subject} />
            <Field label={"Action"} content={action} />
          </div>
          <GenButton />
        </div>
      </div>
    </>
  );
}
