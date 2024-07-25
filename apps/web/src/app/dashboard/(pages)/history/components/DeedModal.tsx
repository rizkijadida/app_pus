"use client ";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface DeedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeedModal: React.FC<DeedModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Deed</h2>
          <Button
            variant={"ghost"}
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <span className="text-xl">&times;</span>
          </Button>
        </div>
        <div className="mt-4">
          <Image
            src="/puskanas.png" // Pastikan path ini benar
            alt="Deed"
            width={600} // Tentukan lebar gambar
            height={400} // Tentukan tinggi gambar
            className="mb-4 h-auto w-full"
          />
          <Link
            href="/puskanas.png"
            download
            className="inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            target="_blank"
            passHref
          >
            Download Deed
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeedModal;
