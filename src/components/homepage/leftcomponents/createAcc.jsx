import React from "react";
import Input from "@/components/input";
import { CircleUser, LockKeyhole, Mail } from "lucide-react";
import Button from "@/components/button";
const Msg = ({ message }) => {
  return (
    <div className="h-[4vh] w-[20vh] bg-white text-red-500 font-semibold flex items-center justify-center rounded-xl hidden ">
      {message}
    </div>
  );
};

const CreateAcc = () => {
  return (
    <div className="h-[50%] w-[85%] flex flex-col justify-center items-center gap-4 my-5 ">
      <Input icon={<Mail />} text="abc@xyz.com" type="email" />
      <Input
        icon={<CircleUser />}
        text="User Name"
        type="text"
        // onChange={(e) => {
        //   setUsername(e.target.value);
        // onChange={(e) => setUsername(e.target.value)}
      />

      <Input icon={<LockKeyhole />} text="password" type="password" />
      <Msg message="Invalid Email !!" />
      <div className="h-[15%] w-full flex justify-around items-center ">
        <input className="h-[45%] w-[15%]" type="checkbox" />
        <h2 className="h-[90] w-[90%]  text-xl flex justify-center items-center">
          I agree to all statements included in
          <a href="/" className="ml-1 text-blue-500">
            Terms of Use
          </a>
        </h2>
      </div>
      <Button text={"Start Coding Now"} />
    </div>
  );
};

export default CreateAcc;
