
import { Separator } from "@/components/ui/separator";
import { GrTransaction } from "react-icons/gr";
import { LuUpload } from "react-icons/lu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Transaction = () => {
  return (
    <div className="m-3 h-screen">
      <div className="grid space-y-5">
        <div className="flex text-xs">
          <p className="text-slate-600">Dashboard</p>
          <p className="text-[#1c71cd]"> / Transactions</p>
        </div>
        <div className="flex items-center space-x-3">
          <GrTransaction />

          <h4 className="font-bold">Daftar Transaksi</h4>

        </div>
        <Separator className="bg-[#1c71cd]" />

        <div>
          <p className="font-medium text-green-500">Keranjang Belanja</p>
        </div>

        <div className="grid m-5">
          <Table>
            <TableCaption>Daftar Transaksi Terbaru Anda .</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Upload Bukti Transfer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Berlaku Hingga</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell><Button className="font-normal gap-2" variant={"ghost"}> <LuUpload /> Upload Bukti</Button></TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell className="text-right">02 Agustus 2024 14:28:23 (24 jam lagi)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
