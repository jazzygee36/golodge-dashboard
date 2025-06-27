import HomeButton from "@/components/button";
import React from "react";

const ConfirmBookings = () => {
  return (
    <div className="mt-7">
      <p className="text-[14px] text-[#050505]/70 text-center">
       You’re about to confirm this booking details. Are you sure you want to confirm this booking ?
      </p>
      <div className="gap-4 flex items-center justify-center mt-4">
        <HomeButton
          title={"Confirm"}
          type={"submit"}
          bg={"#3F6FB9"}
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

export default ConfirmBookings;
