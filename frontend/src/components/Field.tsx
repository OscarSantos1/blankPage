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
      <h2 className="text-xs md:text-sm pl-4 mb-2">{props.label}</h2>
      <div className="flex h-1/2 pl-4 backdrop-blur-sm bg-white/75 rounded-full shadow-md">
        <p className="text-[10px] md:text-[13px] my-auto text-gray-600">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default Field;
