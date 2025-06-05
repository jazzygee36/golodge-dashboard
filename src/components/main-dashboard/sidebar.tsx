"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import BookingsIcon from "@/assets/svg/bookings";
import UnitsIcon from "@/assets/svg/units";
import ManagersIcon from "@/assets/svg/manager";
import FinancialRecordsIcon from "@/assets/svg/financial";
import SettingsIcon from "@/assets/svg/settings";
import DashboardIcon from "@/assets/svg/dashboardIcon";
import Logo from "@/assets/images/golodgeLogo.svg"
import Image from 'next/image';
import ManagementIcon from "@/assets/svg/management";

const Links = [
  { name: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  { name: "User Management", icon: ManagementIcon, path: "/user-management" },
  { name: "Booking Details", icon: BookingsIcon, path: "/bookings" },
  { name: "Units", icon: UnitsIcon, path: "/units" },
  { name: "Managers", icon: ManagersIcon, path: "/managers" },
  { name: "Financial Records", icon: FinancialRecordsIcon, path: "/financial-records" },
  { name: "Settings", icon: SettingsIcon, path: "/settings" },
];

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) => {
  const active = usePathname();
  const router = useRouter();

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 lg:hidden z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Sidebar Container */}
      <div
        className={`pl-3 md:pl-[30px] lg:pl-[40px] fixed lg:static top-0 left-0 h-[100vw] w-[60%] md:w-[30%] lg:w-[19%] bg-[#ffffff]  transition-transform duration-300 ease-in-out z-20
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo & Close Button */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center  mt-[27px] mb-[41px] ">
            <Image src={Logo} alt='logo' className='' />
          </div>

          {/* Close button for mobile */}
          <div
            className="lg:hidden cursor-pointer mr-3 font-bold text-white"
            onClick={() => setIsOpen(false)}
          >
            X
          </div>
        </div>

        {/* Navigation Links */}
        <div className="  text-center">
          {Links.map((item, index) => (
            <div key={index}>
              <div
                className={`flex items-center gap-3 py-3 px-3 mb-12 text-[14px] font-normal cursor-pointer rounded-md 
        ${
          active === item.path
            ? "text-[#3F6FB9]  font-medium underline"
            : "text-[#707070] hover:bg-[#E4F0FF] hover:text-[#014DAF]"
        }`}
                onClick={() => {
                  router.push(item.path);
                  setIsOpen(false);
                }}
              >
                {typeof item.icon === "function" ? (
                  <item.icon
                    color={active === item.path ? "#3F6FB9" : "#707070"}
                  />
                ) : (
                  item.icon
                )}
                <h2>{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
