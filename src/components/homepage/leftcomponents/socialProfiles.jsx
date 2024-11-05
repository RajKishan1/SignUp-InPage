import React from "react";
import Socialbtn from "./socialbtn";
import { facebook, github, google, twitter } from "@/shared/iconSVG";

const SocialProfile = ({ isLogin, setLogin }) => {
  return (
    <div className="w-[85%] h-[20%]  flex flex-col items-center justify-evenly ">
      <p>Or continue with these social profile</p>
      <div className="w-[60%] flex justify-around gap-2">
        <Socialbtn icon={google} link={"https://www.google.co.in/"} />
        <Socialbtn icon={facebook} link={"https://www.facebook.com/"} />
        <Socialbtn icon={twitter} link={"https://x.com/home"} />
        <Socialbtn icon={github} link={"https://github.com/RajKishan1"} />
      </div>
      <h2 className="font-semibold text-[#bdbcbc]">
        Already a member ?{" "}
        <a onClick={() => setLogin(true)} className="text-blue-500" >
          Login
        </a>
      </h2>
    </div>
  );
};

export default SocialProfile;
