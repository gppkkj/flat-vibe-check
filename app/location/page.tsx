"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { saveAnswer } from "../lib/profileStorage";

export default function LocationPage() {
  const router = useRouter();

  const [city, setCity] = useState("");

  const handleContinue = () => {
    if (!city.trim()) {
      alert("Please enter your city");
      return;
    }

    // Save answer
    saveAnswer("location", city.trim());

    // Go to next page
    router.push("/sleep-schedule");
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

        {/* PROGRESS BAR */}
        <div className="mb-14">
          <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-600 rounded-full transition-all"
              style={{
                width: "25%",
              }}
            />
          </div>

          <p className="text-center mt-4 text-purple-600 font-semibold">
            Step 3 of 12
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Where are you
            <br />
            currently based?
          </h2>

          <p className="text-gray-500 text-lg md:text-xl mb-10">
            We'll show matches in your preferred area.
          </p>

          {/* IMAGE */}
          <div className="flex justify-center mb-12">
            <Image
              src="/city-location.png"
              alt="City Location"
              width={450}
              height={300}
              className="object-contain"
              priority
            />
          </div>

          {/* CITY INPUT */}
          <div>
            <label className="block font-semibold mb-3">
              Enter your city
            </label>

            <input
              type="text"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
              placeholder="Hyderabad, Telangana"
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
                focus:ring-purple-100
                transition
              "
            />
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
              disabled={!city.trim()}
              className={`
                py-4
                rounded-2xl
                text-white
                font-semibold
                transition-all

                ${
                  city.trim()
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
    </div>
  );
}