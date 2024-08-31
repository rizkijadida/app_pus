"use client"

import { useRouter } from "next/navigation";

const Result = () => {
  const router = useRouter(); // Use router for navigation

  const handleBackToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Selamat!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Selamat atas pencapaian luar biasa ini! Kamu telah bekerja keras dan berjuang hingga akhir untuk menyelesaikan ujian ini. Semoga semua usaha dan dedikasi yang telah kamu berikan mendapatkan hasil yang memuaskan. Teruslah bersemangat dan raih kesuksesan lebih lanjut!
        </p>
        <button
          onClick={handleBackToDashboard}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
};

export default Result;
