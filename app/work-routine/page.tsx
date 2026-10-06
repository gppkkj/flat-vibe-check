"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { saveAnswer } from "../lib/profileStorage";

export default function WorkRoutinePage() {
  const router = useRouter();

  const [selected, setSelected] = useState("");

  const options = [
    {
      id: "office",
      emoji: "🏢",
      title: "Full Office",
      desc: "Out by 9, back by 7",
    },
    {
      id: "remote",
      emoji: "💻",
      title: "Full Remote",
      desc: "Home all day",
    },
    {
      id: "hybrid",
      emoji: "🙂",
      title: "Hybrid",
      desc: "Mix of both",
    },
    {
      id: "freelance",
      emoji: "🌍",
      title: "Freelance",
      desc: "Variable schedule",
    },
  ];

  const handleContinue = () => {
    if (!selected) {
      alert("Please select your work routine");
      return;
    }

    // Save answer
    saveAnswer("workRoutine", selected);

    // Go to next page
    router.push("/deal-breakers");
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
              style={{ width: "91.67%" }}
            />
          </div>

          <p className="text-center mt-4 text-purple-600 font-semibold">
            Step 11 of 12
          </p>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          What's your
          <br />
          work routine?
        </h2>

        <p className="text-gray-500 text-lg mb-10">
          WFH vs office changes the vibe.
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
                rounded-3xl
                p-6
                min-h-[110px]
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
              <div className="text-5xl flex-shrink-0">
                {item.emoji}
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-base md:text-lg">
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