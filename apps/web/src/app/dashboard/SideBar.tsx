"use client";
import Link from "next/link";
import React from "react";
import { MdEventAvailable } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  return (
    // <main className="container h-[90vh] bg-gradient-to-r from-[#2853b2] to-[#1c71cd] text-white">
    //   <div className="sticky justify-center ">
    //     <div className="flex flex-col items-center space-y-2">
    //       <h6
    //         className="m-3 cursor-pointer text-xs"
    //         onClick={() => router.push("/dashboard")}
    //       >
    //         DASHBOARD
    //       </h6>
    //       <div className="flex flex-col gap-y-4">
    //         <div
    //           onClick={() => router.push("/dashboard/event")}
    //           className="flex cursor-pointer items-center gap-x-2 py-2 text-xs text-white transition duration-300 hover:text-gray-300"
    //         >
    //           <MdEventAvailable />
    //           <p>Event</p>
    //         </div>

    //         <div
    //           onClick={() => router.push("/dashboard/transaction")}
    //           className="flex cursor-pointer items-center gap-x-2 py-2 text-xs text-white transition duration-300 hover:text-gray-300"
    //         >
    //           <GrTransaction />
    //           <p>Transaction</p>
    //         </div>

    //         <div
    //           onClick={() => router.push("/dashboard/time-table")}
    //           className="flex cursor-pointer items-center gap-x-2 py-2 text-xs text-white transition duration-300 hover:text-gray-300"
    //         >
    //           <TbCertificate />
    //           <p>TimeTable</p>
    //         </div>

    //         <div
    //           onClick={() => router.push("/dashboard/history")}
    //           className="flex cursor-pointer items-center gap-x-2 py-2 text-xs text-white transition duration-300 hover:text-gray-300"
    //         >
    //           <TbCertificate />
    //           <p>History</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-8 flex items-center justify-center">
    //       <div
    //         onClick={() => router.push("/dashboard/history")}
    //         className="flex cursor-pointer items-center gap-x-2 py-2 text-xs text-white transition duration-300 hover:text-gray-300"
    //       >
    //         <MdOutlineMessage />
    //         <p>Contact Us</p>
    //       </div>
    //     </div>
    //   </div>
    // </main>

    <main className="h-full bg-gradient-to-r from-[#2853b2] to-[#1c71cd] text-white">
    <div className="flex flex-col items-center space-y-2 py-4">
      <h6
        className="m-3 cursor-pointer text-xs"
        onClick={() => router.push("/dashboard")}
      >
        DASHBOARD
      </h6>
      <div className="flex flex-col gap-y-4">
        <div
          onClick={() => router.push("/dashboard/event")}
          className="flex cursor-pointer items-center gap-x-2 py-2 text-xs text-white transition duration-300 hover:text-gray-300"
        >
          <MdEventAvailable />
          <p>Event</p>
        </div>

        <div
          onClick={() => router.push("/dashboard/transaction")}
          className="flex cursor-pointer items-center gap-x-2 py-2 text-xs text-white transition duration-300 hover:text-gray-300"
        >
          <GrTransaction />
          <p>Transaction</p>
        </div>

        <div
          onClick={() => router.push("/dashboard/time-table")}
          className="flex cursor-pointer items-center gap-x-2 py-2 text-xs text-white transition duration-300 hover:text-gray-300"
        >
          <TbCertificate />
          <p>TimeTable</p>
        </div>

        <div
          onClick={() => router.push("/dashboard/history")}
          className="flex cursor-pointer items-center gap-x-2 py-2 text-xs text-white transition duration-300 hover:text-gray-300"
        >
          <TbCertificate />
          <p>History</p>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <div
          onClick={() => router.push("/dashboard/contact-us")}
          className="flex cursor-pointer items-center gap-x-2 py-2 text-xs text-white transition duration-300 hover:text-gray-300"
        >
          <MdOutlineMessage />
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  </main>
  );
};

export default SideBar;
