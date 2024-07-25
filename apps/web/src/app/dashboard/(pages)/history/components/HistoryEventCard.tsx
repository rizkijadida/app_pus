"use client";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FC } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { IoMdMedal } from "react-icons/io";
import { LuGanttChartSquare } from "react-icons/lu";
import { SiBookstack } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";


export interface HistoryEventProps {
  userId: number;
  title: string;
  level: string;
  subjects: string;
  certificate: string;
  charter: string;
  discussion: string;
  eventId: number;
  telegramLink: string;
  status: string;
}

const HistoryEventCard: FC<HistoryEventProps> = ({
  userId,
  title,
  level,
  subjects,
  certificate,
  charter,
  discussion,
  eventId,
  telegramLink,
  status,
}) => {
  return (
    <Card className="w-[60vh] border border-[#1c71cd] focus:border-[#1c71cd]">
      <CardHeader>
        <div className="relative w-full overflow-hidden rounded-md font-medium">
          <p className="text-base">{title}</p>
          <p className="text-sm">{level}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-8 items-center justify-center gap-4">
          <div className="col-span-1">
            <SiBookstack size={30} color="orange" />
          </div>
          <div className="col-span-7 h-[15vh] space-y-3">
            <p className="text-sm font-medium">{subjects}</p>
            <p className="from-neutral-600 text-xs">{status}</p>
            <div className="flex space-x-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="" variant={"ghost"}>
                    <IoMdMedal size={25} color="grey" />
                  </Button>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogTrigger>
              </AlertDialog>
              <Button className="" variant={"ghost"}>
                <TbCertificate size={25} color="grey" />{" "}
              </Button>
              <Button className="" variant={"ghost"}>
                <LuGanttChartSquare size={25} color="grey" />{" "}
              </Button>
              <Button className="" variant={"ghost"}>
                <FaPaperPlane size={25} color="grey" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HistoryEventCard;
