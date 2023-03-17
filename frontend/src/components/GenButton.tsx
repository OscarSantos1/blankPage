import React from "react";

interface ButtonProps {
  loading: boolean;
  onClick(): void;
}

const GenButton = (props: ButtonProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-[15%] min-h-[30px]">
      <button
        onClick={props.onClick}
        disabled={props.loading}
        className="text-sm bg-[#EFA066] shadow-md max-h-[50px] px-6 h-full backdrop-blur-sm rounded-full fade-in"
      >
        {props.loading ? "Loading..." : "Generate a new idea"}
      </button>
    </div>
  );
};

export default GenButton;
