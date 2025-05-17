import React from "react";

const Button = ({ text, href }) => {
  return (
    <button
      className={`w-full h-[20%] bg-[#545FDA] text-2xl text-[#e6e5e5] font-semibold rounded-lg `}
    >
      <a href={href}> {text}</a>
    </button>
  );
};
export default Button;
