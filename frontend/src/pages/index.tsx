import Field from "../components/Field";
import GenButton from "../components/GenButton";
import Header from "../components/Header";
import Head from "next/head";
import { useState } from "react";

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
      <div className="flex-col h-screen w-full px-7 pt-7 backdrop-blur-md bg-white/20 overflow-scroll fade-in">
        <Header />
        <div className="flex flex-col justify-around h-[60%] min-h-[250px] max-h-[500px] w-full roll-in">
          <div className="flex flex-col h-[200%] md:flex-row md:h-[100%] md:gap-4">
            <Field label={"Time"} content={time} />
            <Field label={"Location"} content={location} />
          </div>
          <Field label={"Subject"} content={subject} />
          <Field label={"Action"} content={action} />
        </div>
        <GenButton />
      </div>
    </>
  );
}
