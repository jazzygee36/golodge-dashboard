"use client";
import HomeButton from "@/components/button";
import SwitchToggle from "@/components/switch-toggle";
import { useState } from "react";

const NotificationControl = () => {
  return (
    <div className="bg-white h-[100Vh] w-[40%] p-6">
      <div className="flex items-center justify-between  border-b-[#76767C] pb-4 mb-4">
        <h1 className="text-[#3F6FB9] text-[20px] font-semibold">
          Notification Control
        </h1>
        <HomeButton
          title={"Filter"}
          type={"submit"}
          bg={""}
          width={"77.02px"}
          height={"32px"}
          border="1px solid #D9D9D9"
          color="#3F6FB9"
        />
      </div>
      <div
        // onClick={() => router.push("/notifications")}
        className="flex justify-between w-[342px] rounded-lg shadow shadow-r mt-4 p-4 cursor-pointer "
      >
        <h4>Enable notifications</h4>

        <SwitchToggle />
      </div>
      <h1 className="font-semibold mt-[24px] mb-4">PUSH NOTIFICATION</h1>
      <div
        // onClick={() => router.push("/notifications")}
        className="flex justify-between w-[342px] rounded-lg shadow shadow-r mt-4 p-4 cursor-pointer "
      >
        <h4>Set notification type</h4>

        {/* <SwitchToggle /> */}
      </div>
       <div
        // onClick={() => router.push("/notifications")}
        className="flex justify-between w-[342px] rounded-lg shadow shadow-r mt-4 p-4 cursor-pointer "
      >
        <h4>Include a preview of the message</h4>

        <SwitchToggle />
      </div>
       <h1 className="font-semibold mt-[24px] mb-4">GENERAL SETTINGS</h1>
      <div
        // onClick={() => router.push("/notifications")}
        className="flex justify-between w-[342px] rounded-lg shadow shadow-r mt-4 p-4 cursor-pointer "
      >
        <h4>Notification schedule</h4>

        {/* <SwitchToggle /> */}
      </div>
       <div
        // onClick={() => router.push("/notifications")}
        className="flex justify-between w-[342px] rounded-lg shadow shadow-r mt-4 p-4 cursor-pointer "
      >
        <h4>Show in-app notifications</h4>

        <SwitchToggle />
      </div>
    </div>
  );
};

export default NotificationControl;
