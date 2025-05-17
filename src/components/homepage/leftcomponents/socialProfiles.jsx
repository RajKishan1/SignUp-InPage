import React, { useEffect, useState } from "react";
import Socialbtn from "./socialbtn";
import { facebook, github, google, twitter } from "@/shared/iconSVG";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SocialProfile = ({ isLogin, setLogin }) => {
  const pathname = usePathname();
  // useEffect(() => {
  //   {
  //     (pathname == "/sign-up" && setText("Sign In")) ||
  //       (pathname == "/sign-in" && setText("Sign Up"));
  //   }
  // }, [pathname]);
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
        Already a member ?
        {pathname === "/sign-in" && <Link className="text-blue-600" href={"/sign-up"}> Sign Up</Link>}
        {pathname === "/sign-up" && <Link className="text-blue-600" href={"/sign-in"}> Sign In</Link>}
      </h2>
    </div>
  );
};

export default SocialProfile;
