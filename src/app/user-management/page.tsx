import CardArrow from "@/assets/svg/cardArrow";
import HomeButton from "@/components/button";
import UserManagementTable from "@/features/user-management/table";

import React from "react";

const CardDetails = [
  {
    propertyDetails: " No of Properties",
    amount: "34,000",
    percentage: "+32.6%",
    month: "than last month",
  },
  {
    propertyDetails: " No of Apartment Renters",
    amount: "4,500",
    percentage: "+32.6%",
    month: "than last month",
  },
  {
    propertyDetails: "No of Bookings",
    amount: "56,840",
    percentage: "+32.6%",
    month: "than last month",
  },
  {
    propertyDetails: " Total Users",
    amount: "6,500",
    percentage: "+32.6%",
    month: "than last month",
  },
  {
    propertyDetails: " Total Earnings",
    amount: "$650k",
    percentage: "+32.6%",
    month: "than last month",
  },
];

const UserManagement = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] text-[#292D32] font-medium"> User Management</h1>
        <HomeButton
          title={"Add New User"}
          type={"submit"}
          bg={"#ffffff"}
          width={"135px"}
          height={"40px"}
          color="#292D32"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 my-10">
        {CardDetails.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-[10px] font-mediumd text-[#292D32]">
                {item.propertyDetails}
              </h2>
              <CardArrow />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-[21px] font-semibold text-[#151515] ">
                {item.amount}
              </p>
              <div>
                <p
                  className={`text-[10.7px] font-semibold flex justify-end ${
                    index === 3 || index === 4
                      ? "text-red-500"
                      : "text-[#3F6FB9]"
                  } ${index === 2 && "text-[#007344]"}` }
                >
                  {item.percentage}{" "}
                </p>
                <p className="text-[7.14px] text-[#6F6F6F] font-medium ">
                  {" "}
                  {item.month}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <UserManagementTable />
    </div>
  );
};

export default UserManagement;
