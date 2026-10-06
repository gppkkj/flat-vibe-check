"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { saveAnswer } from "../lib/profileStorage";

export default function SmokingDrinkingPage() {
  const router = useRouter();

  const [smoking, setSmoking] = useState("");
  const [drinking, setDrinking] = useState("");

  const handleContinue = () => {
  if (!smoking || !drinking) {
    alert(
      "Please select both smoking and drinking preferences"
    );
    return;
  }

  saveAnswer("smoking", smoking);
  saveAnswer("drinking", drinking);

  router.push("/work-routine");
};

  const OptionButton = ({
    value,
    selected,
    onClick,
  }: {
    value: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`
        h-14
        rounded-xl
        border-2
        font-semibold
        transition-all

        ${
          selected
            ? "border-purple-600 bg-purple-50 text-purple-700"
            : "border-gray-200 bg-white hover:border-purple-300"
        }
      `}
    >
      {value}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-4 md:p-6">

      <div className="w-full max-w-4xl bg-white rounded-[32px] shadow-xl p-8 md:p-10">

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
              style={{ width: "83.33%" }}
            />

          </div>

          <p className="text-center mt-4 text-purple-600 font-semibold">
            Step 10 of 12
          </p>

        </div>

        {/* TITLE */}

        <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          Do you smoke or drink?
        </h2>

        <p className="text-gray-500 text-lg mb-10">
          Helps avoid future clashes.
        </p>

        {/* SMOKING */}

        <div className="mb-8">

          <h3 className="font-semibold text-lg mb-4">
            Smoking
          </h3>

          <div className="grid grid-cols-3 gap-4">

            {["Yes", "No", "Sometimes"].map(
              (option) => (
                <OptionButton
                  key={option}
                  value={option}
                  selected={smoking === option}
                  onClick={() =>
                    setSmoking(option)
                  }
                />
              )
            )}

          </div>

        </div>

        {/* DRINKING */}

        <div className="mb-8">

          <h3 className="font-semibold text-lg mb-4">
            Drinking
          </h3>

          <div className="grid grid-cols-3 gap-4">

            {["Yes", "No", "Sometimes"].map(
              (option) => (
                <OptionButton
                  key={option}
                  value={option}
                  selected={drinking === option}
                  onClick={() =>
                    setDrinking(option)
                  }
                />
              )
            )}

          </div>

        </div>

        {/* IMAGE */}

        <div className="flex justify-center my-10">

          <Image
            src="/smoking-drinking.png"
            alt="Smoking and Drinking"
            width={450}
            height={300}
            priority
            className="
              w-full
              max-w-[420px]
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
            disabled={!smoking || !drinking}
            className={`
              py-4
              rounded-xl
              text-white
              font-semibold
              transition-all

              ${
                smoking && drinking
                  ? "bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-[1.02]"
                  : "bg-gray-300 cursor-not-allowed"
              }
            `}
          >
            Continue →
          </button>

        </div>

      </div>

    </div>
  );
}