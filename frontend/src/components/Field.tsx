import React from "react";

export interface FieldProps {
  label: string;
  content: string;
}

const Field = (props: FieldProps) => {
  return (
    <div
      className={`flex flex-col h-full ${
        props.label == "Time" ? "w-[70%]" : "w-full"
      } `}
    >
      <h2 className="pl-4 mb-2">{props.label}</h2>
      <div className="backdrop-blur-sm bg-white/60 h-1/2 rounded-full">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Field;
