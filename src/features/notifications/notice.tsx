import React from "react";

const NotificationData = [
  {
    name: "Lola",
    message:
      "Lola New submitted task are available. Visit the submitted task page to implement feedback today !",
  },
  {
    name: "Lola",
    message:
      "Lola New submitted task are available. Visit the submitted task page to implement feedback today !",
  },
];

const Notice = () => {
  return (
    <div className="bg-white h-screen w-[60%] px-6">
      <div className="w-[68px] shadow p-3 m-auto mt-[44px] mb-[28px] font-medium">
        Today
      </div>

      <div className="flex flex-col gap-4 w-full">
        {NotificationData.map((notification, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 border-b border-gray-200"
          >
            <div className="flex items-center gap-3 w-[80%]">
              <div className="w-10 h-10  rounded-full flex p-2 items-center justify-center bg-[#5100A8]/[0.20] text-[#5100A8]">
                <span className=" uppercase font-bold text-[#5100A8]">
                  {notification.name[0]} 
                </span>
              </div>
              <p className="text-gray-500 text-sm">{notification.message}</p>
            </div>
            <div className="text-sm text-[#3F6FB9]">2m</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between my-4">
        <h2 className="font-medium text-md">All Notifications</h2>
        <p className="font-medium text-sm text-[#3F6FB9] cursor-pointer hover:underline">
          View All
        </p>
      </div>
    </div>
  );
};

export default Notice;
