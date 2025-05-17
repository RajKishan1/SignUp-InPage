"use client";
import React, { useState, useEffect } from "react";
import TextArea from "./textArea";
import SocialProfile from "./socialProfiles";
import CreateAcc from "./createAcc";
import Login from "../../LogIn/login";
import EmailForm from "../../LogIn/emailForm";
import OtpForm from "../../LogIn/otpForm";
import GptCreateAcc from "./gptcode";
import NewPassword from "../../LogIn/newPassword";
import { usePathname } from "next/navigation";

const Leftside = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailBtn, setEmailBtn] = useState(false);

  const pathname = usePathname();

  return (
    <div className="h-full w-[35%] bg-[#1C1E21] flex flex-col justify-start items-center ">
      <TextArea />
      {(pathname == "/" && <GptCreateAcc />) ||
        (pathname == "/sign-up" && <GptCreateAcc />) ||
        (pathname == "/sign-in" && <Login />) ||
        (pathname == "/forgot-password" && <EmailForm />) ||
        (pathname == "/otp-form" && <OtpForm />) ||
        (pathname == "/new-password" && <NewPassword />)}

      <SocialProfile Login={isLogin} setLogin={setIsLogin} />
      {console.log(isLogin)}
    </div>
  );
};
export default Leftside;
