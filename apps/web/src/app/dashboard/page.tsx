"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCalendarCheck, FaLink } from "react-icons/fa";
import { FaRegCalendarDays, FaWallet } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import EventCardList from "./(pages)/event/components/EventCardList";
import useGetEvents from "@/hooks/api/dashboard/useGetEvents";
import { appConfig } from "@/utils/config";
import Pagination from "./Pagination";


const Dashboard = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
    take: 3,
  });

  console.log(events);

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };
  return (
    <div className="container m-3">
      <div className="grid space-y-5">
        <div className="flex text-xs">
          <p className="text-slate-600">Dashboard</p>
          <p className="text-[#1c71cd]"> / TimeTable</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaCalendarCheck />
          <h4 className="font-bold">Home</h4>
        </div>
        <div>
          <Separator className="bg-[#1c71cd]" />
        </div>

        <div className="m-5 flex flex-wrap items-center justify-center gap-6">
          {events.map((event, index) => {
            return (
              <EventCardList
                key={index}
                image={appConfig.baseUrl + `/assets${event.image}`}
                name={event.name}
                eventDate={event.eventDate}
                startRegistration={event.startRegistration}
                endRegistration={event.endRegistration}
                regsitrationFee={event.regsitrationFee}
                linkJuknis={event.linkJuknis}
                jumlahPendaftar={10000}
              />
            );
          })}
        </div>

    
      <div className="my-8 flex justify-center ">
        <Pagination
          total={meta?.total || 0}
          take={meta?.take || 0}
          onChangePage={handleChangePaginate}
        />
      </div>
    
      </div>
    </div>
  );
};

export default Dashboard;
