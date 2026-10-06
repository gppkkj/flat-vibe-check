"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function AgePage() {
  const router = useRouter();

  const [age, setAge] = useState("");

  const ageRanges = [
    "18 - 21 years",
    "22 - 25 years",
    "26 - 30 years",
    "31 - 35 years",
    "36 - 40 years",
    "41+ years",
  ];

  const handleContinue = () => {
    if (!age) {
      alert("Please select your age range");
      return;
    }

    router.push("/location");
  };

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-6">

      <div
        className="
        bg-white
        rounded-[32px]
        shadow-xl
        w-full
        max-w-5xl
        p-12
        "
      >
        {/* HEADER */}

        <div className="flex items-center gap-4 mb-8">

          <button
            onClick={() => router.back()}
            className="
            text-purple-600
            hover:bg-purple-50
            p-2
            rounded-full
            transition
            "
          >
            <ArrowLeft size={28} />
          </button>

          <h1 className="text-3xl font-bold text-purple-600">
            FlatVibeCheck
          </h1>

        </div>

        {/* PROGRESS BAR */}

        <div className="mb-12">

          <div className="flex justify-center items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
              ✓
            </div>

            <div className="w-20 h-1 bg-purple-600 rounded-full" />

            <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
              ✓
            </div>

            <div className="w-20 h-1 bg-purple-300 rounded-full" />

            <div className="w-12 h-12 rounded-full border-2 border-purple-600 text-purple-600 flex items-center justify-center font-bold text-lg">
              3
            </div>

          </div>

          <p className="text-center text-purple-600 font-semibold mt-4 text-lg">
            Step 3 of 15
          </p>

        </div>

        {/* CONTENT */}

        <div className="max-w-3xl mx-auto">

          <h2 className="text-5xl font-bold mb-4">
            What's your age?
          </h2>

          <p className="text-gray-500 text-xl mb-8">
            We won't show your exact age to other users.
          </p>

          {/* CAKE IMAGE */}

          <div className="flex justify-center my-8">

            <Image
              src="/birthday-cake.png"
              alt="Birthday Cake"
              width={300}
              height={300}
              className="object-contain"
              priority
            />

          </div>

          {/* AGE SELECT */}

          <div>

            <label className="block font-semibold text-lg mb-3">
              Select your age range
            </label>

            <select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="
              w-full
              border
              border-gray-300
              rounded-2xl
              p-5
              text-lg
              outline-none
              focus:border-purple-600
              focus:ring-2
              focus:ring-purple-200
              "
            >
              <option value="">
                Choose age range
              </option>

              {ageRanges.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

          </div>

          {/* BUTTONS */}

          <div className="grid grid-cols-2 gap-6 mt-14">

            <button
              onClick={() => router.back()}
              className="
              py-5
              rounded-2xl
              bg-purple-100
              text-purple-700
              font-semibold
              text-lg
              hover:bg-purple-200
              transition
              "
            >
              Back
            </button>

            <button
              onClick={handleContinue}
              className="
              py-5
              rounded-2xl
              text-white
              text-lg
              font-semibold
              bg-gradient-to-r
              from-purple-700
              to-purple-500
              hover:scale-[1.02]
              transition
              "
            >
              Continue →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}