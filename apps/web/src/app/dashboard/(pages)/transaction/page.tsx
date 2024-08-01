import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { FaCalendarCheck, FaMedal } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

const Transaction = () => {
  return (
    <div className="container m-3">
      <div className="grid space-y-5">
        <div className="flex text-xs">
          <p className="text-slate-600">Dashboard</p>
          <p className="text-[#1c71cd]"> / Transactions</p>
        </div>
        <div className="flex items-center space-x-3">
          <GrTransaction />
          <h4 className="font-bold">Transactions</h4>
        </div>
        <Separator className="bg-[#1c71cd]" />

        <div>
          <p className="text-green-500 font-medium">Keranjang Belanja</p>
        </div>

        <div className="m-5 space-y-8">
          <div className="flex cursor-pointer flex-col space-y-4">
            <div className="flex items-center rounded-lg bg-white p-4 shadow-md">
              <FaMedal color="gold" size={25} />
              <div className="ml-6">
                <h2 className="text-base font-semibold">Wafda</h2>
                <p className="text-xs text-gray-600">
                  Prov. Marendal Barat - SMA IT IBNU HAFIDZ
                </p>
                <p className="text-xs text-gray-600">Peraih Medali Emas</p>
              </div>
              <Button variant={"ghost"} className="ml-auto bg-green-200">
                B+
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
