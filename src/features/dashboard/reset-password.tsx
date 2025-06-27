import HomeButton from "@/components/button";
import React from "react";

const ResetPassword = () => {
  return (
    <div className="mt-7">
      <p className="text-[14px] text-[#050505]/70 text-center">
        You’re about to reset this user password. Are you sure you want to reset
        these user password ?
      </p>
      <div className="gap-4 flex items-center justify-center mt-4">
        <HomeButton
          title={"Reset Password"}
          type={"submit"}
          bg={"green"}
          width={"129px"}
          height={"40px"}
          borderRadius="20px"
        />
        <HomeButton
          title={"Cancel"}
          type={"submit"}
          bg={"#FAFAFA"}
          width={"129px"}
          height={"40px"}
          border="1px solid grey"
          borderRadius="20px"
          color="#707070"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
