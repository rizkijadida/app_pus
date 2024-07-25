import React from "react";
import { FaBook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const DiscussionQuestion = () => {
  return (
    <div className="container grid">
      <div className="m-4 flex items-center space-x-2">
        <FaBook size={25} />
        <div className="flex flex-col">
          <p className="text-lg font-medium">Pembahasan Soal</p>
          <p className="text-sm font-normal text-slate-700">
            Sejarah - SMA - OSSN 2024
          </p>
        </div>
      </div>

      <div className="grid">
        <Separator className="bg-[#1c71cd]" />
      </div>

      <div className="mt-10 grid items-center justify-center space-y-10">
        <Card className="shadow- w-[1000px]">
          <CardHeader>
            <Label>Soal Nomor 1 .</Label>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1 text-sm">
                  <p>Teori Bigbang menyatakan bahwa alam semesta awalnya...</p>
                  <p>Option A:</p>
                  <p>Berasal dari titik tunggal yang padat</p>
                  <p>Option B:</p>
                  <p>Telah ada selamanya atau ada tanpa akhir</p>
                  <p>Option C:</p>
                  <p>Terbentuk dari serangkaian ledakan bintang</p>
                  <p>Option D:</p>
                  <p>Secara tiba-tiba tanpa adanya sebab yang jelas</p>
                  <p>Option E:</p>
                  <p>Dintentukan oleh interaksi antara benda-benda langit</p>
                  <p className="font-medium">Jawaban : A</p>
                  <p>
                    Teori big-bang menyaakan bahwa alam semesta awalnya berasal
                    dari titik tunggal yang padat, yang kemudian mengalami
                    ekspansi besar-besaran, menciptakan ruang, waktu dan materi
                    seperti yang kita kenal saat ini
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow- w-[1000px]">
          <CardHeader>
            <Label>Soal Nomor 1 .</Label>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1 text-sm">
                  <p>Teori Bigbang menyatakan bahwa alam semesta awalnya...</p>
                  <p>Option A:</p>
                  <p>Berasal dari titik tunggal yang padat</p>
                  <p>Option B:</p>
                  <p>Telah ada selamanya atau ada tanpa akhir</p>
                  <p>Option C:</p>
                  <p>Terbentuk dari serangkaian ledakan bintang</p>
                  <p>Option D:</p>
                  <p>Secara tiba-tiba tanpa adanya sebab yang jelas</p>
                  <p>Option E:</p>
                  <p>Dintentukan oleh interaksi antara benda-benda langit</p>
                  <p className="font-medium">Jawaban : A</p>
                  <p>
                    Teori big-bang menyaakan bahwa alam semesta awalnya berasal
                    dari titik tunggal yang padat, yang kemudian mengalami
                    ekspansi besar-besaran, menciptakan ruang, waktu dan materi
                    seperti yang kita kenal saat ini
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiscussionQuestion;
