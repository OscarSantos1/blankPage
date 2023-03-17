import React from "react";

interface ButtonProps {
  onClick(): void;
}

const GenButton = (props: ButtonProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-[15%] min-h-[30px]">
      <button
        onClick={props.onClick}
        className="text-sm border border-slate-600 max-h-[50px] px-4 h-full backdrop-blur-sm rounded-full fade-in"
      >
        Generate a new idea
      </button>
    </div>
  );
};

export default GenButton;
