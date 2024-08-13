"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Event } from "@/types/event.types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLink } from "react-icons/fa";
import { FaRegCalendarDays, FaWallet } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";

export interface EventCardPorps
  extends Pick<
    Event,
    | "name"
    | "eventDate"
    | "image"
    | "regsitrationFee"
    | "linkJuknis"
    | "startRegistration"
    | "endRegistration"
  > {
  jumlahPendaftar: number;
}

const EventCardList: React.FC<EventCardPorps> = ({
  name,
  eventDate,
  image,
  linkJuknis,
  regsitrationFee,
  startRegistration,
  endRegistration,
  jumlahPendaftar,
}) => {
  const router = useRouter();

  return (
    <Card className="w-[300px] cursor-pointer border-gray-500 shadow-xl">
      <CardHeader>
        <div className="relative h-[220px] w-full overflow-hidden rounded-md">
          <Image src={""} alt="thumbnail" className="object-cover" fill />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <h2 className="line-clamp-2 justify-end text-lg font-semibold">
            {name}
          </h2>
          <div className="flex space-x-3">
            <p className="text-sm font-light italic">
              {format(eventDate, "dd MMMM yyyy")}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex">
            <FaRegCalendarDays color="grey" />
            <div className="pl-2">
              <div className="flex flex-col space-y-2 text-xs text-slate-600">
                <p>Masa Pendaftaran</p>
                <p>
                  {format(startRegistration, "dd MMMM yyyy")} -{" "}
                  {format(endRegistration, "dd MMMM yyyy")}{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <FaWallet color="grey" />
            <div className="pl-2">
              <div className="flex flex-col space-y-2 text-xs text-slate-600">
                <p>Biaya</p>
                <p>Rp.{regsitrationFee}</p>
              </div>
            </div>
          </div>

          <div className="flex">
            <FaLink color="grey" />
            <div className="pl-2">
              <div className="flex flex-col space-y-2 text-xs text-slate-600">
                <p>Link Juknis</p>
                <Link href={`/${linkJuknis}`}>Lihat Juknis di sini</Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="flex flex-col space-y-2 text-xs text-slate-600">
              {jumlahPendaftar} Pendaftar
            </p>
            <Button
              onClick={() => router.push("/")}
              className="rounded-full bg-[#e46d07]"
            >
              <IoPersonAdd color="grey" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCardList;
