'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Logo from '@/assets/images/golodgeLogo.svg';
import DashboardIcon from '@/assets/svg/dashboardIcon';
import ManagementIcon from '@/assets/svg/management';
import BookingsIcon from '@/assets/svg/bookings';
import UnitsIcon from '@/assets/svg/units';
import ManagersIcon from '@/assets/svg/manager';
import FinancialRecordsIcon from '@/assets/svg/financial';
import SettingsIcon from '@/assets/svg/settings';

const Links = [
  { name: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
  { name: 'User Management', icon: ManagementIcon, path: '/user-management' },
  { name: 'Booking Details', icon: BookingsIcon, path: '/bookings' },
  { name: 'Properties', icon: UnitsIcon, path: '/properties' },
  { name: 'Renters', icon: ManagersIcon, path: '/renters' },
  { name: 'Financial Records', icon: FinancialRecordsIcon, path: '/financial-records' },
  { name: 'Settings', icon: SettingsIcon, path: '/settings' },
];

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 lg:hidden z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed lg:static top-0 left-0 h-screen overflow-y-auto w-[60%] md:w-[30%] lg:w-[19%] bg-white transition-transform duration-300 ease-in-out z-20 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-3 pt-6 pb-8">
          <Image src={Logo} alt="logo" />
          <div className="lg:hidden cursor-pointer text-xl font-bold" onClick={() => setIsOpen(false)}>
            X
          </div>
        </div>

        <div className="px-3">
          {Links.map(({ name, icon: Icon, path }) => (
            <div
              key={name}
              className={`flex items-center gap-3 py-4 px-3 mb-4 text-sm cursor-pointer rounded-md ${
                pathname === path
                  ? 'text-[#3F6FB9] font-medium underline'
                  : 'text-[#707070] hover:bg-[#E4F0FF] hover:text-[#014DAF]'
              }`}
              onClick={() => {
                router.push(path);
                setIsOpen(false);
              }}
            >
              <Icon color={pathname === path ? '#3F6FB9' : '#707070'} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Sidebar.Links = Links;

export default Sidebar;
