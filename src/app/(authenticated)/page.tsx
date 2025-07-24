"use client";
import CardArrow from "@/assets/svg/cardArrow";
import HomeButton from "@/components/button";
import DashboardTable from "@/features/dashboard/table";
import { getAllUsers } from "@/lib/users/all-users";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  Status: string;
  dateOfReg: string;
  userType: string;
  action: string;
  role?: string;
}

const Dashbaord = () => {
  const [users, setUsers] = useState<User[]>([]);
  console.log('users',users)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const rawUsers = await getAllUsers();

        const mappedUsers = (rawUsers ?? []).map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          userType: "Property Account", // default or fetched
          dateOfReg: new Date(user.createdAt).toLocaleDateString(), // format
          Status: "Active", // fallback or actual user.status
          action: "View",
        }));

        setUsers(mappedUsers);
      } catch (err) {
        console.error("Failed to load users", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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
      amount: users.length.toLocaleString(), // ✅ safely display count
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

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-lg font-medium text-gray-600">Loading users...</p>
      </div>
    );
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] text-[#292D32] font-medium"> Dashboard</h1>
        <HomeButton
          title={"Add New User"}
          type={"submit"}
          bg={"#3F6FB9"}
          width={"135px"}
          height={"40px"}
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
                  } ${index === 2 && "text-[#007344]"}`}
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
      <DashboardTable users={users} />
    </div>
  );
};

export default Dashbaord;
