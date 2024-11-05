"use client";
import React, { useState, useEffect } from "react";
import TextArea from "./textArea";
import SocialProfile from "./socialProfiles";
import CreateAcc from "./createAcc";
import Login from "./login";
import EmailForm from "./emailForm";
import OtpForm from "./otpForm";
import GptCreateAcc from "./gptcode";
import NewPassword from "./newPassword";

const Leftside = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailBtn, setEmailBtn] = useState(false);

  const disp = () => {
    useEffect(() => {
      emailBtn ? <OtpForm /> : console.log("false");

      // return () => {
      //   // second;
      // };
    }, [emailBtn]);
  };
  return (
    <div className="h-full w-[35%] bg-[#1C1E21] flex flex-col justify-start items-center ">
      <TextArea />
      {/* <CreateAcc /> */}
      {/* {isLogin ? (
        <Login pswrd={forgotPassword} setpswrd={setForgotPassword} />
      ) : forgotPassword ? (
        <EmailForm />
      ) : (
        <GptCreateAcc />
      )} */}
      {/* <NewPassword /> */}
      <EmailForm emailBtn={emailBtn} setEmailBtn={setEmailBtn} />
      {/* {disp()} */}
      <OtpForm />
      <SocialProfile Login={isLogin} setLogin={setIsLogin} />
      {console.log(isLogin)}
    </div>
  );
};

export default Leftside;
const display = (isLogin, forgotPassword) => {
  if (isLogin === true) {
    return <Login pswrd={forgotPassword} setpswrd={setForgotPassword} />;
  } else if (forgotPassword === true) {
    return <EmailForm />;
  } else return <GptCreateAcc />;
};
