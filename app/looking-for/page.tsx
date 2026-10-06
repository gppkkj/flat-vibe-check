"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function LookingForPage() {
  const router = useRouter();

  const [selected, setSelected] =
    useState("");

  const options = [
    {
      id: "flatmate",
      emoji: "🏠",
      title:
        "I have a flat, looking for a flatmate",
      desc:
        "Find someone to share my flat with",
    },
    {
      id: "both",
      emoji: "🔎",
      title:
        "I need a flat + flatmate",
      desc:
        "Find both a flat and someone to live with",
    },
    {
      id: "replacement",
      emoji: "🔄",
      title:
        "I am replacing myself",
      desc:
        "Find my replacement and keep my flatmates happy",
    },
    {
      id: "exploring",
      emoji: "👀",
      title:
        "Just exploring",
      desc:
        "Browse profiles with no commitment yet",
    },
  ];

  const handleContinue = () => {
    if (!selected) {
      alert(
        "Please select one option"
      );
      return;
    }

    router.push("/who-are-you");
  };

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-6">

      <div
        className="
        bg-white
        rounded-[32px]
        shadow-xl
        w-full
        max-w-3xl
        p-10
        "
      >

        {/* HEADER */}

        <div className="flex items-center gap-4 mb-8">

          <button
            onClick={() =>
              router.back()
            }
            className="text-purple-600"
          >
            <ArrowLeft size={28} />
          </button>

          <h1 className="font-bold text-2xl text-purple-600">
            FlatVibeCheck
          </h1>

        </div>

        {/* PROGRESS */}

        <div className="mb-10">

          <div className="w-full bg-purple-100 h-2 rounded-full overflow-hidden">

            <div className="bg-purple-600 h-full w-[8.33%]" />

          </div>

          <p className="text-center text-purple-600 font-semibold mt-3">
            Step 1 of 12
          </p>

        </div>

        {/* TITLE */}

        <h2 className="text-5xl font-bold leading-tight">

          What are you
          <br />
          looking for?

        </h2>

        <p className="text-gray-500 text-lg mt-4 mb-10">
          This shapes your matches and
          experience.
        </p>

        {/* OPTIONS */}

        <div className="space-y-5">

          {options.map((item) => (

            <div
              key={item.id}
              onClick={() =>
                setSelected(item.id)
              }
              className={`
                cursor-pointer
                rounded-2xl
                border-2
                p-6
                flex
                gap-5
                items-start
                transition
                ${
                  selected === item.id
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 hover:border-purple-300"
                }
              `}
            >

              <div className="text-4xl">
                {item.emoji}
              </div>

              <div>

                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* BUTTON */}

        <button
          onClick={handleContinue}
          className="
          mt-10
          w-full
          py-5
          rounded-xl
          text-white
          text-lg
          font-semibold
          bg-gradient-to-r
          from-purple-700
          to-purple-500
          hover:scale-[1.01]
          transition
          "
        >
          Continue →
        </button>

      </div>

    </div>
  );
}