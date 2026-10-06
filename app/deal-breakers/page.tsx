"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { saveAnswer } from "../lib/profileStorage";

export default function DealBreakersPage() {
  const router = useRouter();

  const [dealBreakers, setDealBreakers] =
    useState("");

  const handleContinue = () => {
    // Save answer (optional field)
    saveAnswer("dealBreakers", dealBreakers);

    router.push("/analysis");
  };

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-4 md:p-6">
      <div className="bg-white rounded-[32px] shadow-xl w-full max-w-4xl p-8 md:p-10">
        {/* HEADER */}
        <button
          onClick={() => router.back()}
          className="text-purple-600 hover:scale-110 transition mb-8"
        >
          <ArrowLeft size={26} />
        </button>

        {/* PROGRESS */}
        <div className="mb-10">
          <div className="w-full bg-purple-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-purple-600 h-full rounded-full transition-all"
              style={{ width: "100%" }}
            />
          </div>

          <p className="text-center mt-4 text-purple-600 font-semibold">
            Step 12 of 12
          </p>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
          Any deal-breakers
          <br />
          we should know?
        </h2>

        <p className="text-purple-500 font-medium mb-2">
          Optional
        </p>

        <p className="text-gray-500 text-lg mb-8">
          Anything you absolutely can't
          compromise on?
        </p>

        {/* TEXTAREA */}
        <textarea
          value={dealBreakers}
          onChange={(e) =>
            setDealBreakers(e.target.value)
          }
          maxLength={150}
          placeholder="e.g. No smokers, No pets, Girls only, etc."
          className="
            w-full
            h-40
            border
            border-gray-300
            rounded-3xl
            p-5
            resize-none
            outline-none
            text-base
            md:text-lg
            focus:border-purple-600
            focus:ring-2
            focus:ring-purple-100
            transition
          "
        />

        <div className="text-right text-gray-400 text-sm mt-2">
          {dealBreakers.length}/150
        </div>

        {/* IMAGE */}
        <div className="flex justify-center my-10">
          <Image
            src="/deal-breakers.png"
            alt="Deal Breakers"
            width={350}
            height={280}
            priority
            className="
              w-full
              max-w-[320px]
              h-auto
              object-contain
            "
          />
        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => router.back()}
            className="
              py-4
              rounded-xl
              bg-purple-100
              text-purple-700
              font-semibold
              hover:bg-purple-200
              transition
            "
          >
            Back
          </button>

          <button
            onClick={handleContinue}
            className="
              py-4
              rounded-xl
              text-white
              font-semibold
              bg-gradient-to-r
              from-purple-700
              to-purple-500
              hover:scale-[1.02]
              transition-all
            "
          >
            Finish & Continue →
          </button>
        </div>
      </div>
    </div>
  );
}