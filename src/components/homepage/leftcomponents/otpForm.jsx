import Button from "@/components/homepage/leftcomponents/button";
import Input from "@/components/homepage/leftcomponents/input";
import { CircleUser } from "lucide-react";
import React from "react";

const OtpForm = () => {
  return (
    <div className="h-[50%] w-[85%]  flex flex-col justify-center items-center gap-4 mt-5 mb-12">
      <Input icon={<CircleUser />} type={"email"} text={"Enter your OTP"} />
      <Button text={"Submit"} />
    </div>
  );
};

export default OtpForm;
