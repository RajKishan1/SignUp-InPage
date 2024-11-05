import React from "react";
import { playBtn } from "@/shared/iconSVG";

const Boldtxt = ({ text }) => {
  return <h1 className=" text-7xl font-bold tracking-wide leading5">{text}</h1>;
};
const Semitxt = ({ text }) => {
  return <h1 className=" text-3xl font-normal">{text}</h1>;
};

const Rightside = () => {
  return (
    <div className="h-full w-[65%] bg-[#5965e6d9] rounded-xl flex flex-col items-left justify-between p-12 pl-24 overflow-hidden  ">
      <Semitxt text="First Bracket" />
      <div className="">
        <Boldtxt text="Learn to code." />
        <Boldtxt text="Interactively." />
        <Boldtxt text="For free." />
      </div>
      <div className="h-[4vw] w-[10vw] bg-[#0F172A] rounded-full flex items-center justify-center">
        <p className="text-xl pr-4">{playBtn}</p>
        <p className=" text-lg font-medium">Watch demo</p>
      </div>
      <div className="w-[90%] flex items-center justify-between  ">
        <Semitxt text="Home" />
        <Semitxt text="Tour" />
        <Semitxt text="Courses" />
        <Semitxt text="Articles" />
        <Semitxt text="Blog" />
      </div>
    </div>
  );
};

export default Rightside;
