import React from "react";
import Input from "@/components/input";
import { CircleUser, LockKeyhole } from "lucide-react";
import Button from "../button";

const Login = ({ forgotPassword, setForgotPassword }) => {
  return (
    <div className="h-[50%] w-[85%]  flex flex-col justify-center items-center gap-4 mt-5 mb-12">
      <Input icon={<CircleUser />} text="Username" type="text" />
      <Input icon={<LockKeyhole />} text="Passsword" type="password" />
      <a href="/forgot-password"
        className="text-blue-600 text-lg ml-[-19vw] cursor-pointer"
        onClick={() => {
          setForgotPassword(true);
        }}
      >
        Forget Password ?
      </a>
      <Button text={"Log In"} />
    </div>
  );
};

export default Login;
