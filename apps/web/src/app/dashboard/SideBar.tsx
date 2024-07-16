import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { MdEventAvailable } from 'react-icons/md';
import { PiCertificate } from 'react-icons/pi';

interface NavigationProps {
  href: string;
  children: React.ReactNode;
}

export const NavigationBar = ({ href, children }: NavigationProps) => {
  return (
    <Link href={href}>
      <p className="flex cursor-pointer items-center gap-x-2 py-2 text-white transition duration-300 hover:text-gray-300">
        {children}
      </p>
    </Link>
  );
};

const SideBar = () => {
  return (
    <main className="container mx-auto h-[90vh] px-4 bg-gradient-to-r from-[#2853b2] to-[#1c71cd]">
      <div className="grid justify-center text-white h-96 mx-0 grid-cols-8">
        <div className="col-span-1">
          <div className="flex flex-col mt-3 items-center  space-y-2">
            <h6 className="text-xs m-3">DASHBOARD</h6>
            <NavigationBar href={'dashboard/event'}>
              <MdEventAvailable />
              Event
            </NavigationBar>
            <Button variant={'ghost'} className="flex items-center gap-1">
              <CiMoneyCheck1 />
              Transaction
            </Button>
            <Button variant={'ghost'} className="flex items-center gap-1">
              <PiCertificate />
              Sertifikat
            </Button>
          </div>
        </div>
        <div className="col-span-7"></div>
      </div>
    </main>
  );
};

export default SideBar;
