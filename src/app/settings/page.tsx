"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Settings = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-[28px] text-[#292D32] font-medium"> Settings</h1>
      <div className="bg-white px-5 py-4">
        <h3 className="text-[#000929]  font-medium h-[100%]">
          Settings Control
        </h3>
        <div
          onClick={() => router.push("/notifications")}
          className="flex justify-between w-[342px] rounded-lg shadow shadow-r mt-4 p-4 cursor-pointer "
        >
          <h4>Notification</h4>
        </div>
        <div className="flex justify-between w-[342px] rounded-lg shadow shadow-r mt-4 p-4 cursor-pointer ">
          <h4 className="text-[red]">Log Out</h4>
        </div>
      </div>
    </div>
  );
};

export default Settings;
