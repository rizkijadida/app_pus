"use client";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Event } from "@/types/event.types";
import { format } from "date-fns";
import Image from "next/image";
import { FaCalendarAlt, FaPaperPlane } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
export interface EventCardPorps extends Pick<Event, "name" | "eventDate" | "targetPeserta"> {

}

const EventCard: React.FC<EventCardPorps> = ({name, eventDate, targetPeserta }) => {
// 
  return (
    <Card className="grid w-[500px] grid-cols-3 border-blue-300 shadow-xl">
    <div className="col-span-1 flex flex-col">
      <div className="relative h-32 w-32">
        <Image
          src={''}
          alt="thumbnail"
          fill
          className="h-full w-full rounded rounded-br-2xl object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="text-xs">
        {format(eventDate, 'dd MMMM yyyy')}  <br /> {targetPeserta}
        </CardDescription>
      </CardHeader>
    </div>
    <CardContent className="col-span-2">
      <form>
        <div className="m-2 grid grid-cols-8 justify-center gap-4">
          <div className="col-span-1">
            <FaCalendarAlt />
          </div>
          <div className="col-span-7 h-[15vh] space-y-3">
            <div>
              <CardDescription className="text-xs">
                Kedokteran
              </CardDescription>
            </div>

            <div>
              <CardDescription className="text-xs">
                04 Agustus 2024 - 08:00 s/d 09:00
              </CardDescription>
            </div>

            <div className="flex justify-between">
              <Badge
                variant="outline"
                onClick={() =>
                  window.open("https://t.me/OLIMNUS2024", "_blank")
                }
                className="cursor-pointer items-center gap-1 space-x-1 bg-cyan-100 text-cyan-500"
              >
                {" "}
                <FaPaperPlane size={10} color="" /> Link Telegram
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer items-center gap-1 space-x-1 bg-red-100 text-red-500"
              >
                {" "}
                <MdOutlineTimer size={10} color="" /> 5 hari lagi
              </Badge>
            </div>
          </div>
        </div>

        <div className="m-2 grid grid-cols-8 justify-center gap-4">
          <div className="col-span-1">
            <FaCalendarAlt />
          </div>
          <div className="col-span-7 h-[15vh] space-y-3">
            <div className="flex items-center space-x-3">
              <CardDescription className="text-xs">
                Kedokteran
              </CardDescription>
            </div>
            <div className="flex">
              <CardDescription className="text-xs">
                04 Agustus 2024 - 08:00 s/d 09:00
              </CardDescription>
            </div>

            <div className="flex justify-between">
              <Badge
                variant="outline"
                onClick={() =>
                  window.open("https://t.me/OLIMNUS2024", "_blank")
                }
                className="cursor-pointer items-center gap-1 space-x-1 bg-cyan-100 text-cyan-500"
              >
                {" "}
                <FaPaperPlane size={10} color="" /> Link Telegram
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer items-center gap-1 space-x-1 bg-red-100 text-red-500"
              >
                {" "}
                <MdOutlineTimer size={10} color="" /> 5 hari lagi
              </Badge>
            </div>
          </div>
        </div>

        <div className="m-2 grid grid-cols-8 justify-center gap-4">
          <div className="col-span-1">
            <FaCalendarAlt />
          </div>
          <div className="col-span-7 h-[15vh] space-y-3">
            <div className="flex items-center space-x-3">
              <CardDescription className="text-xs">
                Kedokteran
              </CardDescription>
            </div>
            <div className="flex">
              <CardDescription className="text-xs">
                04 Agustus 2024 - 08:00 s/d 09:00
              </CardDescription>
            </div>

            <div className="flex justify-between">
              <Badge
                variant="outline"
                onClick={() =>
                  window.open("https://t.me/OLIMNUS2024", "_blank")
                }
                className="cursor-pointer items-center gap-1 space-x-1 bg-cyan-100 text-cyan-500"
              >
                {" "}
                <FaPaperPlane size={10} color="" /> Link Telegram
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer items-center gap-1 space-x-1 bg-red-100 text-red-500"
              >
                {" "}
                <MdOutlineTimer size={10} color="" /> 5 hari lagi
              </Badge>
            </div>
          </div>
        </div>

        <div className="m-2 grid grid-cols-8 justify-center gap-4">
          <div className="col-span-1">
            <FaCalendarAlt />
          </div>
          <div className="col-span-7 h-[15vh] space-y-3">
            <div className="flex items-center space-x-3">
              <CardDescription className="text-xs">
                Kedokteran
              </CardDescription>
            </div>
            <div className="flex">
              <CardDescription className="text-xs">
                04 Agustus 2024 - 08:00 s/d 09:00
              </CardDescription>
            </div>

            <div className="flex justify-between">
              <Badge
                variant="outline"
                onClick={() =>
                  window.open("https://t.me/OLIMNUS2024", "_blank")
                }
                className="cursor-pointer items-center gap-1 space-x-1 bg-cyan-100 text-cyan-500"
              >
                {" "}
                <FaPaperPlane size={10} color="" /> Link Telegram
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer items-center gap-1 space-x-1 bg-red-100 text-red-500"
              >
                {" "}
                <MdOutlineTimer size={10} color="" /> 5 hari lagi
              </Badge>
            </div>
          </div>
        </div>
      </form>
    </CardContent>
  </Card>
  );
};

export default EventCard;
