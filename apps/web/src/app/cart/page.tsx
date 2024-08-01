import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CiCircleMinus } from "react-icons/ci";
import { FaBagShopping, FaCartShopping } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { Card } from "@/components/ui/card";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";

const Cart = () => {
  return (
    <div className="m-10 space-y-10">
      <div className="text-xs">
        <p className="text-[#1c71cd]">/Keranjang</p>
      </div>

      <div className="flex items-center space-x-3">
        <FaCartShopping />
        <h4 className="font-bold">Keranjang</h4>
      </div>
      <div>
        <Separator className="bg-[#1c71cd]" />
      </div>

      <div>
        <p className="font-medium text-green-500">Keranjang Belanja</p>
      </div>

      <div className="space-y-8">
        <Card className="flex h-relative flex-col items-center justify-center space-y-4 py-4 shadow-xl">
          <div className="grid-row grid space-y-4 justify-between">
            <div className="flex items-center rounded-lg bg-white p-6 shadow-md w-full">
              <FaBagShopping color="blue" size={25} />
              <div className="ml-6">
                <h2 className="text-base">Paket Komplit</h2>
                <h2 className="text-base font-semibold">
                  Wafda Taqia - SMA ANNIZAM
                </h2>
                <h2 className="text-base">KSPI 2024 - BAHASA ARAB - PERAK</h2>
                <p
                  key="penjelasan dari isi paket yang diammbil"
                  className="text-xs text-blue-600"
                >
                  Medali, Piagam Cetak, Sertifikat Cetak, Piagam Digital,
                  Sertidikat Digital, Pembahasan dan Legalisir Piagam
                </p>
              </div>

              <div className="ml-auto flex flex-col items-center">
                <div className="flex items-center gap-2 text-sm">
                  <Button variant={"ghost"}>
                    <CiCircleMinus color="orange" size={25} />
                  </Button>
                  1
                  <Button variant={"ghost"}>
                    {" "}
                    <CiCirclePlus color="green" size={25} />
                  </Button>
                </div>
                <p className="p-1 text-xs">Rp.137.500</p>
              </div>
            </div>

            <div className="flex items-center rounded-lg bg-white p-6 shadow-md">
              <FaTruckFast color="blue" size={25} />
              <div className="ml-6">
                <h2 className="text-base">Ongkos Kirim (JNE - REG)</h2>
                <h2 className="text-base">Wafda Taqia / 089648408033</h2>
                <h2 className="text-base">
                  JAWA BARAT - KAB. CIANJUR - CIANJUR
                </h2>
                <p
                  key="penjelasan dari isi paket yang diammbil"
                  className="text-xs text-blue-600"
                >
                  jln. barisan banteng no.12, gang merpati samping sate maranggi
                  <br />rumahnya dekat masjid jami nurul abror, RT.02, RW.07,
                  Kel.Muka, Kec.Muka, Kab. Cianjur{" "}
                </p>
              </div>

              <div className="ml-auto flex flex-col items-center">
                <div className="flex items-center gap-2">
                  
                  <Button variant={"ghost"}>
                    {" "}
                    <MdOutlineEdit color="green" size={20} />
                  </Button>
                </div>
                <p className="p-1 text-xs">Rp.137.500 / kg</p>
              </div>
            </div>

            <div className="flex justify-between text-white">
              <Button className="bg-orange-400 cursor-default">Total: Rp. 158.500</Button>
              <Button className="bg-green-700">Order</Button>
            </div>
          </div>
        </Card>

      </div>

    </div>
  );
};

export default Cart;
