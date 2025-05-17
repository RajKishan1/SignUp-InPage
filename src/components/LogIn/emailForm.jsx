import Button from "@/components/button";
import Input from "@/components/input";
import { CircleUser } from "lucide-react";
import React from "react";

const EmailForm = ({ emailBtn, setEmailBtn }) => {
  return (
    <div className="h-[50%] w-[85%]  flex flex-col justify-center items-center gap-4 mt-5 mb-12">
      <Input
        icon={<CircleUser />}
        type={"email"}
        text={"Enter your Email address"}
      />
      <Button text={"Submit"} href="/otp-form" />
    </div>
  );
};

export default EmailForm;
