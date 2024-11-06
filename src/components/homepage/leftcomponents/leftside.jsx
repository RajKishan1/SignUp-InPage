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

  useEffect(() => {
    if (forgotPassword) {
      console.log("it is working");
    } else {
      console.log("false");
    }
  }, [forgotPassword]);

  const renderContent = () => {
    if (isLogin) {
      return (
        <Login
          forgotPassword={forgotPassword}
          setForgotPassword={setForgotPassword}
        />
      );
    } else if (forgotPassword) {
      return <EmailForm />;
    } else {
      return <GptCreateAcc />;
    }
  };
  useEffect(() => {
    renderContent()
  }, [forgotPassword]);
  return (
    <div className="h-full w-[35%] bg-[#1C1E21] flex flex-col justify-start items-center ">
      <TextArea />
      {/* {isLogin ? (
        <Login pswrd={forgotPassword} setpswrd={setForgotPassword} />
      ) : forgotPassword ? (
        <EmailForm />
      ) : (
        <GptCreateAcc />
      )} */}
      {/* <NewPassword /> */}
      {/* <EmailForm emailBtn={emailBtn} setEmailBtn={setEmailBtn} /> */}
      {/* {disp()} */}
      {renderContent()}
      {/* <OtpForm /> */}
      <SocialProfile Login={isLogin} setLogin={setIsLogin} />
      {console.log(isLogin)}
    </div>
  );
};

export default Leftside;
