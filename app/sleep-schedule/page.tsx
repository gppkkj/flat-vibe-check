"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Moon,
  Sun,
  Shuffle,
  CalendarDays,
} from "lucide-react";
import { saveAnswer } from "../lib/profileStorage";

export default function SleepSchedulePage() {
  const router = useRouter();

  const [selected, setSelected] = useState("");

  const options = [
    {
      id: "night",
      title: "Night owl",
      desc: "Usually up past midnight",
      icon: <Moon size={28} />,
    },
    {
      id: "early",
      title: "Early bird",
      desc: "In bed by 10, up by 6",
      icon: <Sun size={28} />,
    },
    {
      id: "flexible",
      title: "Flexible",
      desc: "Adapt to the week",
      icon: <Shuffle size={28} />,
    },
    {
      id: "shift",
      title: "Shift-based",
      desc: "Irregular hours",
      icon: <CalendarDays size={28} />,
    },
  ];

  const handleContinue = () => {
    if (!selected) {
      alert("Please select your sleep schedule");
      return;
    }

    // Save answer
    saveAnswer("sleepSchedule", selected);

    // Go to next page
    router.push("/personality");
  };

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-6">
      <div className="bg-white rounded-[32px] shadow-xl w-full max-w-3xl p-10">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.back()}
            className="text-purple-600 hover:scale-110 transition"
          >
            <ArrowLeft size={26} />
          </button>

          <h1 className="font-bold text-2xl text-purple-600">
            FlatVibeCheck
          </h1>
        </div>

        {/* PROGRESS */}
        <div className="mb-10">
          <div className="w-full bg-purple-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-purple-600 h-full rounded-full transition-all"
              style={{ width: "33.33%" }}
            />
          </div>

          <p className="text-center mt-4 text-purple-600 font-semibold">
            Step 4 of 12
          </p>
        </div>

        {/* TITLE */}
        <h2 className="text-5xl font-bold mb-3">
          What's your
          <br />
          sleep schedule?
        </h2>

        <p className="text-gray-500 text-lg mb-8">
          Night owl or early bird?
          <br />
          This matters more than you think.
        </p>

        {/* OPTIONS */}
        <div className="space-y-4">
          {options.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`
                cursor-pointer
                border-2
                rounded-2xl
                p-5
                flex
                items-center
                gap-5
                transition-all
                duration-200
                hover:shadow-md
                ${
                  selected === item.id
                    ? "border-purple-600 bg-purple-50 shadow-md"
                    : "border-gray-200 hover:border-purple-300"
                }
              `}
            >
              <div className="text-purple-600">
                {item.icon}
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-2 gap-4 mt-10">
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
            disabled={!selected}
            className={`
              py-4
              rounded-xl
              text-white
              font-semibold
              transition-all
              ${
                selected
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