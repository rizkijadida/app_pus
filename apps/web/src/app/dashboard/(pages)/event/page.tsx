"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useGetEvents from "@/hooks/api/dashboard/useGetEvents";
import Image from "next/image";
import { useState } from "react";
import { FaCalendarAlt, FaCalendarCheck, FaPaperPlane } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useRouter } from "next/navigation";

const Event = () => {
  const router = useRouter()
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
    take: 3,
  });

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
          <h4 className="font-bold">Event Online</h4>
        </div>
        <Separator className="bg-[#1c71cd]" />

        <div className="m-5 flex flex-wrap items-center justify-center gap-10">
          <Card className="grid w-[500px] grid-cols-3 border-blue-300 shadow-xl">
            <div className="col-span-1 flex flex-col">
              <div className="relative h-32 w-32">
                <Image
                  src="/chopper.jpeg"
                  alt="gambar event"
                  layout="fill"
                  className="h-full w-full rounded rounded-br-2xl object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">OPSI 2024</CardTitle>
                <CardDescription className="text-xs">
                  Minggu 4 Agustus 2024 <br /> Siswa-SMA, MA, dan SMK
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
                        className="cursor-pointer items-center gap-1 space-x-1 bg-green-100 text-green-500"
                        onClick={() => router.push("/exam")}
                      >
                        {" "}
                        <CiCircleCheck  size={10} color="" /> Mulai Ujian
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

          <Card className="grid w-[500px] grid-cols-3 border-blue-300 shadow-xl">
            <div className="col-span-1 flex flex-col">
              <div className="relative h-32 w-32">
                <Image
                  src="/chopper.jpeg"
                  alt="gambar event"
                  layout="fill"
                  className="h-full w-full rounded rounded-br-2xl object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">OPSI 2024</CardTitle>
                <CardDescription className="text-xs">
                  Minggu 4 Agustus 2024 <br /> Siswa-SMA, MA, dan SMK
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

          <Card className="grid w-[500px] grid-cols-3 border-blue-300 shadow-xl">
            <div className="col-span-1 flex flex-col">
              <div className="relative h-32 w-32">
                <Image
                  src="/chopper.jpeg"
                  alt="gambar event"
                  layout="fill"
                  className="h-full w-full rounded rounded-br-2xl object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">OPSI 2024</CardTitle>
                <CardDescription className="text-xs">
                  Minggu 4 Agustus 2024 <br /> Siswa-SMA, MA, dan SMK
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

          <Card className="grid w-[500px] grid-cols-3 border-blue-300 shadow-xl">
            <div className="col-span-1 flex flex-col">
              <div className="relative h-32 w-32">
                <Image
                  src="/chopper.jpeg"
                  alt="gambar event"
                  layout="fill"
                  className="h-full w-full rounded rounded-br-2xl object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">OPSI 2024</CardTitle>
                <CardDescription className="text-xs">
                  Minggu 4 Agustus 2024 <br /> Siswa-SMA, MA, dan SMK
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

          <Card className="grid w-[500px] grid-cols-3 border-blue-300 shadow-xl">
            <div className="col-span-1 flex flex-col">
              <div className="relative h-32 w-32">
                <Image
                  src="/chopper.jpeg"
                  alt="gambar event"
                  layout="fill"
                  className="h-full w-full rounded rounded-br-2xl object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">OPSI 2024</CardTitle>
                <CardDescription className="text-xs">
                  Minggu 4 Agustus 2024 <br /> Siswa-SMA, MA, dan SMK
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

          <Card className="grid w-[500px] grid-cols-3 border-blue-300 shadow-xl">
            <div className="col-span-1 flex flex-col">
              <div className="relative h-32 w-32">
                <Image
                  src="/chopper.jpeg"
                  alt="gambar event"
                  layout="fill"
                  className="h-full w-full rounded rounded-br-2xl object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">OPSI 2024</CardTitle>
                <CardDescription className="text-xs">
                  Minggu 4 Agustus 2024 <br /> Siswa-SMA, MA, dan SMK
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
        </div>
      </div>
    </div>
  );
};

export default Event;
