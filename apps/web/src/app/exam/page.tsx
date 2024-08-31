"use client";
import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Question from "@/app/exam/components/Question";
import { useRouter } from "next/navigation";
import { GrNext } from "react-icons/gr";
import { IoCheckmarkDone } from "react-icons/io5";

const questions = [
  {
    id: 1,
    question: "Apa ibukota Indonesia?",
    options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
  },
  {
    id: 2,
    question: "Apa ibukota Jepang?",
    options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
  },
  {
    id: 3,
    question: "Apa ibukota Prancis?",
    options: ["Paris", "Marseille", "Lyon", "Nice"],
  },
  // Tambahkan lebih banyak soal jika perlu
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const router = useRouter(); // Use router for navigation

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setIsDialogOpen(false);
  };

  const handleFinishExam = () => {
    setIsConfirmationOpen(true);
  };

  const handleConfirmFinish = () => {
    // Navigate to the result page
    router.push("exam/result"); // Adjust the path to your result page
  };

  const handleCancelFinish = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-md">
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
        />

        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <GrFormPrevious />
          </button>

          <button
            onClick={() => setIsDialogOpen(true)}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white"
          >
            <MdOutlineMenu />
          </button>

          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <GrNext />
          </button>

          <button
            onClick={handleFinishExam}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <IoCheckmarkDone />
          </button>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-lg items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <h2 className="mb-4 text-lg font-semibold">Jump to Question</h2>
            <div className="grid grid-cols-3 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleJumpToQuestion(index)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm hover:bg-gray-300"
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {isConfirmationOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
            {/* Close Button */}
            <button
              onClick={handleCancelFinish}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <h2 className="mb-4 text-lg font-semibold">
              Konfirmasi Penyelesaian Ujian
            </h2>
            <p className="mb-4 text-sm">
              Apakah kamu yakin ingin menyelesaikan ujian? Kamu masih bisa
              melanjutkan jika masih memiliki waktu ujian.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancelFinish}
                className="rounded-md bg-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
              >
                Urungkan
              </button>

              <button
                onClick={handleConfirmFinish}
                className="rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
              >
                Yakin
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
