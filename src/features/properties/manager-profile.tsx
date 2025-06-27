import HomeButton from "@/components/button";
import React from "react";

const ManagerProfile = () => {
  return (
    <div>
      <div className="my-4">
        <div className="flex items-center gap-3">
          <div className="w-[60px] h-[60px] bg-gray-400 rounded-full"></div>
          <div>
            <h2 className="text-[16px] "> John Doe</h2>
            <p className="text-[12px] text-[#050505]/70">
              +234 81697840000
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <HomeButton
            title={"Property Manager"}
            type={"submit"}
            bg={"#3F6FB9"}
            width={"150px"}
            height={"40px"}
            borderRadius={"20px"}
          />
          <HomeButton
            title={"Edit Profile"}
            type={"submit"}
            bg={"#F2F3F7"}
            width={"150px"}
            height={"40px"}
            borderRadius={"20px"}
            color={"#000"}
            border={"1px solid #F2F3F7"}
          />
        </div>
      </div>

      <h1 className="text-[14px] text-[#3F6FB9]">General Information</h1>
      <hr className="text-[#3F6FB9] mb-[33px]" />
      <h3 className="text-[14px] my-4">User Information</h3>
      <div className="flex gap-10">
        <div className="flex gap-4">
          <p className="text-[14px] text-[#050505]/70">
            {" "}
            Name: <span className="text-[#050505] ">Lily Adams</span>
          </p>
          <p className="text-[14px] text-[#050505]/70">
            {" "}
            Mobile Number:{" "}
            <span className="text-[#050505] "> +122222222222</span>
          </p>
        </div>
      </div>
      <div className="flex gap-10 my-4">
        <div className="flex gap-4">
          <p className="text-[14px] text-[#050505]/70">
            {" "}
            Email: <span className="text-[#050505] "> lindaforeman@mail.com</span>
          </p>
          <p className="text-[14px] text-[#050505]/70">
            {" "}
            Date Joined:   
            <span className="text-[#050505] "> 8 - 02 - 2025</span>
          </p>
        </div>
      </div>
      <div className="flex gap-10 my-4">
        <div className="flex gap-4">
          <p className="text-[14px] text-[#050505]/70">
            {" "}
            Status: <span className="text-[#3F6FB9] "> Active</span>
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default ManagerProfile;
