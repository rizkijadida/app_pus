
"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaMedal, FaPaperPlane } from "react-icons/fa";
import { IoMdMedal } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { LuGanttChartSquare, LuHistory } from "react-icons/lu";
import { SiBookstack } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";
import SearchButton from "./components/SearchButton";
import { useRouter } from "next/navigation";
import CertificateModal from "./components/CertificateModal";
import { FaBook } from "react-icons/fa";
import DeedModal from "./components/DeedModal";

const CardComponent = () => {
  const router = useRouter();
  const cards = [
    {
      title: "Olimnus 2024",
      description: "Siswa - SMA, MA, dan SMK",
      icon: <SiBookstack size={30} color="orange" />,
    },
    {
      title: "Olimnus 2024",
      description: "Siswa - SMA, MA, dan SMK",
      icon: <SiBookstack size={30} color="orange" />,
    },
    {
      title: "Olimnus 2024",
      description: "Siswa - SMA, MA, dan SMK",
      icon: <SiBookstack size={30} color="orange" />,
    },
    {
      title: "Olimnus 2024",
      description: "Siswa - SMA, MA, dan SMK",
      icon: <SiBookstack size={30} color="orange" />,
    },
    {
      title: "Olimnus 2024",
      description: "Siswa - SMA, MA, dan SMK",
      icon: <SiBookstack size={30} color="orange" />,
    },
  ];
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
    <div className="m-3">
      <div className="flex items-center gap-2">
        <LuHistory />
        <p className="text-lg font-medium">History</p>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-4">
        {cards.slice(0, visibleCount).map((card, index) => (
          <Card key={index} className="w-[60vh] shadow-xl">
            <CardHeader>
              <div className="relative w-full overflow-hidden rounded-md font-medium">
                <p className="text-base">{card.title}</p>
                <p className="text-sm">{card.description}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-8 items-center justify-center gap-4">
                <div className="col-span-1">
                  <SiBookstack size={30} color="orange" />
                </div>
                <div className="col-span-7 h-[15vh] space-y-3">
                  <p className="text-sm font-medium">{card.title}</p>
                  <p className="from-neutral-600 text-xs">{card.description}</p>
                  <div className="mx-auto flex">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant={"ghost"}>
                          <IoMdMedal size={25} color="grey" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="max-h-[80vh] max-w-3xl overflow-y-auto p-6">
                        <div className="relative flex flex-col space-y-4">
                          {!isSearching && (
                            <div className="flex justify-between">
                              <AlertDialogCancel className="rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none">
                                <IoArrowBackOutline size={25} color="white" />
                              </AlertDialogCancel>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Olimnus 2024 Bahasa Arab
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Siswa - SMA, MA, dan SMK
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <SearchButton onSearch={handleSearchClick} />
                            </div>
                          )}
                          {isSearching ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-4">
                              <div className="flex w-full items-center justify-between space-x-7">
                                <Button
                                  onClick={handleBackClick}
                                  variant={"ghost"}
                                  className="rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none"
                                >
                                  <IoArrowBackOutline color="white" />
                                </Button>
                                <Input
                                  type="text"
                                  placeholder="Cari nama peserta / sekolah"
                                  className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="flex cursor-pointer flex-col space-y-4">
                              <div className="flex items-center rounded-lg bg-white p-4 shadow-md">
                                <FaMedal color="gold" size={25} />
                                <div className="ml-6">
                                  <h2 className="text-base font-semibold">
                                    Wafda
                                  </h2>
                                  <p className="text-xs text-gray-600">
                                    Prov. Marendal Barat - SMA IT IBNU HAFIDZ
                                  </p>
                                  <p className="text-xs text-gray-600">
                                    Peraih Medali Emas
                                  </p>
                                </div>
                                <Button
                                  variant={"ghost"}
                                  className="ml-auto bg-green-200"
                                >
                                  B+
                                </Button>
                              </div>
                              <div className="flex items-center rounded-lg bg-white p-4 shadow-md">
                                <FaMedal color="silver" size={25} />
                                <div className="ml-6">
                                  <h2 className="text-base font-semibold">
                                    Wafda
                                  </h2>
                                  <p className="text-xs text-gray-600">
                                    Prov. Marendal Barat - SMA IT IBNU HAFIDZ
                                  </p>
                                  <p className="text-xs text-gray-600">
                                    Peraih Medali Emas
                                  </p>
                                </div>
                                <Button
                                  variant={"ghost"}
                                  className="ml-auto bg-green-200"
                                >
                                  B+
                                </Button>
                              </div>
                              <div className="flex items-center rounded-lg bg-white p-4 shadow-md">
                                <FaMedal color="#CD7F32" size={25} />
                                <div className="ml-6">
                                  <h2 className="text-base font-semibold">
                                    Wafda
                                  </h2>
                                  <p className="text-xs text-gray-600">
                                    Prov. Marendal Barat - SMA IT IBNU HAFIDZ
                                  </p>
                                  <p className="text-xs text-gray-600">
                                    Peraih Medali Emas e
                                  </p>
                                </div>
                                <Button
                                  variant={"ghost"}
                                  className="ml-auto bg-green-200"
                                >
                                  B+
                                </Button>
                              </div>
                              <div className="flex items-center rounded-lg bg-white p-4 shadow-md">
                                <Avatar
                                  style={{ width: "25px", height: "25px" }}
                                >
                                  <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                  />
                                  <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="ml-6">
                                  <h2 className="text-base font-semibold">
                                    Wafda
                                  </h2>
                                  <p className="text-xs text-gray-600">
                                    Prov. Marendal Barat - SMA IT IBNU HAFIDZ
                                  </p>
                                  <p className="text-xs text-gray-600">
                                    Peraih Medali Emas
                                  </p>
                                </div>
                                <Button
                                  variant={"ghost"}
                                  className="ml-auto bg-green-200"
                                >
                                  B+
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </AlertDialogContent>
                    </AlertDialog>

                    <div>
                      <Button
                        variant={"ghost"}
                        onClick={handleButtonClickCertificate}
                      >
                        <TbCertificate size={25} color="grey" />{" "}
                      </Button>
                      <CertificateModal
                        isOpen={isCertificateModalOpen}
                        onClose={handleCloseModalCertificate}
                      />
                    </div>

                    <div>
                      <Button
                        className=""
                        variant={"ghost"}
                        onClick={handleClickDeed}
                      >
                        <LuGanttChartSquare size={25} color="grey" />{" "}
                      </Button>
                      <DeedModal
                        isOpen={isDeedModalOpen}
                        onClose={handleCloseDeed}
                      />
                    </div>

                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        router.push("/dashboard/history/discussionQuestion")
                      }
                    >
                      <FaBook size={25} color="grey" />{" "}
                    </Button>

                    <Button
                      className=""
                      variant={"ghost"}
                      onClick={() =>
                        window.open("https://t.me/OLIMNUS2024", "_blank")
                      }
                    >
                      <FaPaperPlane size={25} color="grey" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {visibleCount < cards.length && (
        <div className="mt-4 flex justify-center">
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
</div>
  )}
export default CardComponent;

