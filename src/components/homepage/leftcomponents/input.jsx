import React from "react";

const Input = ({ icon, text, type }) => {
  return (
    <div
      id="inputDiv"
      className="h-[20%] w-full bg-[#1C1E21] relative flex text-white rounded-xl border border-gray-600 focus-within:border-blue-500"
    >
      <div className="h-full w-[10%] absolute left-2 flex items-center justify-center pointer-events-none">
        {icon}
      </div>
      <input
        className="h-[100%] w-[100%] bg-transparent text-xl text-gray-300 pl-16 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded-lg"
        type={type}
        placeholder={text}
      />
    </div>
  );
};

export default Input;
