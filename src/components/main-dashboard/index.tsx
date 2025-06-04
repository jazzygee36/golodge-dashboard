'use client'
import { useState } from 'react';
import type { dashboardProps } from '../../utils/interface';
import Sidebar from './sidebar';
import Header from './header';
import { usePathname, useRouter } from 'next/navigation';

const Links = [
  { name: 'Dashboard', path: '/dashbaord' },
  { name: 'Bookings', path: '/bookings' },
  { name: 'Utils', path: '/utils' },
  { name: 'Manager', path: '/managers' },
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
    <div className='flex h-[100%]'>
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className='flex flex-col flex-1  mx-8'>
        <Header title={title} setIsOpen={setIsOpen} />
        <div className=' h-full mt-7'>{children}</div>
      </div>
    </div>
  );
};

export default MainDashboard;