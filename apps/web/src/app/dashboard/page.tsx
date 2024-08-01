"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoPersonAdd } from "react-icons/io5";

const Dashboard = () => {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(4);
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
          <Card className="w-[300px] cursor-pointer border-gray-500 shadow-xl">
            <CardHeader>
              <div className="relative h-[220px] w-full overflow-hidden rounded-md">
                <Image
                  src="/chopper.jpeg"
                  alt="thumbnail"
                  className="object-cover"
                  fill
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <h2 className="line-clamp-2 justify-end text-lg font-semibold">
                  OPSI 2024
                </h2>
                <div className="flex space-x-3">
                  <p className="text-sm font-light italic">
                    Minggu, 04 Agustus 2024
                  </p>
                  <Badge className="rounded-sm bg-green-100" variant="outline">
                    4 hari lagi
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex">
                  <FaRegCalendarDays color="grey" />
                  <div className="pl-2">
                    <div className="flex flex-col space-y-2 text-xs text-slate-600">
                      <p>Masa Pendaftaran</p>
                      <p>06 Juni 2024 17:00 - 03 Agustus 2024 23:59 </p>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <FaWallet color="grey" />
                  <div className="pl-2">
                    <div className="flex flex-col space-y-2 text-xs text-slate-600">
                      <p>Masa Pendaftaran</p>
                      <p>06 Juni 2024 17:00 - 03 Agustus 2024 23:59 </p>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <FaLink color="grey" />
                  <div className="pl-2">
                    <div className="flex flex-col space-y-2 text-xs text-slate-600">
                      <p>Link Juknis</p>
                      <Link href={"/"}>Lihat Juknis di sini</Link>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                <p className="flex flex-col space-y-2 text-xs text-slate-600">2366 Pendaftar</p>
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
        </div>

        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
