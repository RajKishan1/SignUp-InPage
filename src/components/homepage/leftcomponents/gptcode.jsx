"use client";
import React, { useState } from "react";
import Input from "@/components/homepage/leftcomponents/input";
import { CircleUser, LockKeyhole, Mail } from "lucide-react";
import Button from "@/components/homepage/leftcomponents/button";
import InputVerifier from "./inputVerifier";

const Msg = ({ message, isVisible }) => {
  return (
    <div
      className={`h-[4vh] w-[20vh] bg-white text-red-500 font-semibold flex items-center justify-center rounded-xl ${
        isVisible ? "block" : "hidden"
      }`}
    >
      {message}
    </div>
  );
};

const GptCreateAcc = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [check, setCheck] = useState(false);

  return (
    <div className="h-[50%] w-[85%] flex flex-col justify-center items-center gap-4 my-5">
      <Input
        icon={<Mail />}
        text="abc@xyz.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* {console.log(email)} */}

      <Input
        icon={<CircleUser />}
        text="Username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      {/* {console.log(username)} */}
      <Input
        icon={<LockKeyhole />}
        text="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Msg message="Invalid Email !!" isVisible={!!errorMessage} />
      <div className="h-[15%] w-full flex justify-around items-center">
        <input
          className="h-[40%] w-[10%]"
          type="checkbox"
          onChange={() => {
            setCheck(true);
          }}
        />
        <h2 className=" w-[90%] text-lg flex justify-center items-center">
          I agree to all statements included in
          <a href="" className="ml-1 text-blue-500">
            Terms of Use
          </a>
        </h2>
      </div>
      <Button
        text={"Start Coding Now"}
        onClick={() => {
          {
            InputVerifier;
          }
        }}
      />
    </div>
  );
};

export default GptCreateAcc;
