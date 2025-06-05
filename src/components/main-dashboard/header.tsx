"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HomeInput from "../input";
import NotificationIcon from "@/assets/svg/notification";

const Header = ({
  title,
  setIsOpen,
}: {
  title: string;
  setIsOpen: (val: boolean) => void;
}) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    setIsDropdownOpen(false);
    localStorage.removeItem("token");

    router.push("/");
  };

  return (
    <div className=" w-full  py-5 flex items-center justify-between  relative">
      {/* Hamburger Menu (Mobile) */}
      <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
        Menu
      </div>

      <h3 className="text-[16px] text-[#292D32] font-bold hidden md:block">
        {title}
      </h3>

      <div className="flex items-center gap-6 relative">
        <HomeInput type={"text"} placeholder={"Search anything..."} height={'40px'} borderRadius="40px" border="1px #F6F5F5 solid" boxShadow="10px"/>
        <NotificationIcon/>
        <div  className="flex items-center gap-3 cursor-pointer">
         <div>
           <h1 className='text-[14px] text-[#292D32] font-bold'>Lola </h1>
           <p className='text-[10px] text-[#6F6F6F]'> Admin</p>
         </div>
         <div className='w-[40px] h-[40px] bg-gray-400 rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
