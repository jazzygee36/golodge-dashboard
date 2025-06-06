'use client'
import { useState } from 'react';
import type { dashboardProps } from '../../utils/interface';
import Sidebar from './sidebar';
import Header from './header';
import { usePathname, useRouter } from 'next/navigation';

const Links = [
  { name: 'Dashboard', path: '/dashbaord' },
  { name: 'User Management', path: '/user-management' },
  { name: 'Bookings', path: '/bookings' },
  { name: 'Properties', path: '/properties' },
  // { name: 'Manager', path: '/managers' },
  { name: 'Renters', path: '/renters' },
  { name: 'Financial Records', path: '/financial-records' },
  { name: 'Settings', path: '/settings' },

];

const MainDashboard = ({ children }: dashboardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const activePath =usePathname();

  const currentLink = Links.find((link) => link.path === activePath);
  const title = currentLink?.name || 'Dashboard';

  return (
    <div className='flex h-full'>
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className='flex flex-col flex-1 mx-3 md:mx-[16px]'>
        <Header title={title} setIsOpen={setIsOpen} />
        <div className=' h-full mt-7'>{children}</div>
      </div>
    </div>
  );
};

export default MainDashboard;