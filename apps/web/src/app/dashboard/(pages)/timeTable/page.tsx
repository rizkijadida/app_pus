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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCalendarAlt, FaCalendarCheck, FaPaperPlane } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

const TimeTable = () => {
  const router = useRouter();

  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const [isSearching, setIsSearching] = useState(false);

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleBackClick = () => {
    setIsSearching(false);
  };

  // sertifikat
  const [isCertificateModalOpen, setCertificateModalOpen] = useState(false);

  const handleButtonClickCertificate = () => {
    setCertificateModalOpen(true);
  };

  const handleCloseModalCertificate = () => {
    setCertificateModalOpen(false);
  };

  // piagam]
  const [isDeedModalOpen, setDeedModalOpen] = useState(false);
  const handleClickDeed = () => {
    setDeedModalOpen(true);
  };
  const handleCloseDeed = () => {
    setDeedModalOpen(false);
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
          <h4 className="font-bold">Time Table</h4>
        </div>
        <Separator className="bg-[#1c71cd]" />

        <div className="m-5 flex flex-wrap gap-10">
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

export default TimeTable;
