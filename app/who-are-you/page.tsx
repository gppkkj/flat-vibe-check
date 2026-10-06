"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { saveAnswer } from "../lib/profileStorage";

export default function LivingWithPage() {
  const router = useRouter();

  const [livingWith, setLivingWith] = useState<string[]>([]);

  const options = [
    {
      id: "women",
      emoji: "👩",
      title: "Women",
      description: "Comfortable living with women",
    },
    {
      id: "men",
      emoji: "👨",
      title: "Men",
      description: "Comfortable living with men",
    },
    {
      id: "nonbinary",
      emoji: "🧑",
      title: "Non-binary",
      description: "Comfortable living with non-binary people",
    },
    {
      id: "anyone",
      emoji: "🌍",
      title: "Anyone",
      description: "Open to everyone",
    },
  ];

  const handleToggle = (value: string) => {
    if (livingWith.includes(value)) {
      setLivingWith(
        livingWith.filter(
          (item) => item !== value
        )
      );
    } else {
      setLivingWith([
        ...livingWith,
        value,
      ]);
    }
  };

  const handleContinue = () => {
    if (livingWith.length === 0) {
      alert(
        "Please select at least one option"
      );
      return;
    }

    // Save to localStorage
    saveAnswer(
      "livingWith",
      livingWith
    );

    router.push("/location");
  };

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-6">

      <div className="bg-white rounded-[32px] shadow-xl w-full max-w-5xl p-10">

        {/* HEADER */}

        <div className="flex items-center gap-4 mb-8">

          <button
            onClick={() => router.back()}
            className="text-purple-600 hover:scale-110 transition"
          >
            <ArrowLeft size={28} />
          </button>

          <h1 className="text-2xl font-bold text-purple-600">
            FlatVibeCheck
          </h1>

        </div>

        {/* PROGRESS */}

        <div className="mb-14">

          <div className="h-2 bg-purple-100 rounded-full overflow-hidden">

            <div
              className="h-full bg-purple-600 rounded-full transition-all"
              style={{
                width: "16.67%",
              }}
            />

          </div>

          <p className="text-center mt-4 text-purple-600 font-semibold">
            Step 2 of 12
          </p>

        </div>

        {/* TITLE */}

        <div className="text-center mb-12">

          <h2 className="text-5xl font-bold mb-4">
            Who Would You Like
            <br />
            To Live With?
          </h2>

          <p className="text-gray-500 text-lg">
            Select all options you're comfortable
            sharing a home with.
          </p>

        </div>

        {/* OPTIONS */}

        <div className="grid md:grid-cols-2 gap-6">

          {options.map((item) => {
            const selected =
              livingWith.includes(item.id);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  handleToggle(item.id)
                }
                className={`
                  p-8
                  rounded-3xl
                  border-2
                  text-left
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-lg

                  ${
                    selected
                      ? "border-purple-600 bg-purple-50 shadow-md"
                      : "border-gray-200 bg-white"
                  }
                `}
              >
                <div className="text-6xl mb-4">
                  {item.emoji}
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.description}
                </p>

                {selected && (
                  <div className="mt-4 text-purple-600 font-semibold">
                    ✓ Selected
                  </div>
                )}

              </button>
            );
          })}

        </div>

        {/* BUTTONS */}

        <div className="grid grid-cols-2 gap-6 mt-14">

          <button
            onClick={() => router.back()}
            className="
              py-4
              rounded-2xl
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
            disabled={
              livingWith.length === 0
            }
            className={`
              py-4
              rounded-2xl
              text-white
              font-semibold
              transition-all

              ${
                livingWith.length === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-[1.02]"
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