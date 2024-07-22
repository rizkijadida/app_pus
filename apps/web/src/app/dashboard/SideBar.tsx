
import Link from "next/link";
import React from "react";
import { MdEventAvailable } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";


interface NavigationProps {
  href: string;
  children: React.ReactNode;
}

export const NavigationBar = ({ href, children }: NavigationProps) => {
  return (
    <Link href={href}>

      <p className="flex cursor-pointer items-center gap-x-2 py-2 text-xs text-white transition duration-300 hover:text-gray-300">

        {children}
      </p>
    </Link>
  );
};

const SideBar = () => {
  return (

    <main className="container h-[90vh] bg-gradient-to-r from-[#2853b2] to-[#1c71cd]">
      <div className="sticky justify-center text-white">
        <div className="flex flex-col items-center space-y-2">
          <h6 className="m-3 text-xs">DASHBOARD</h6>
          <div className="flex flex-col gap-y-4">
            <NavigationBar href={"dashboard/event"}>
              <MdEventAvailable />
              Event
            </NavigationBar>
            <NavigationBar href={"dashboard/transaction"}>
              <GrTransaction />
              Transaction
            </NavigationBar>
            <NavigationBar href={"dashboard/certificate"}>
              <TbCertificate />
              Certificate
            </NavigationBar>
            <NavigationBar href={"dashboard/certificate"}>
              <TbCertificate />
              TimeTable
            </NavigationBar>
            <NavigationBar href={"dashboard/certificate"}>
              <TbCertificate />
              History
            </NavigationBar>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <NavigationBar href={"dashboard/contact-us"}>
            <MdOutlineMessage />
            Contact Us
          </NavigationBar>
        </div>

      </div>
    </main>
  );
};

export default SideBar;
