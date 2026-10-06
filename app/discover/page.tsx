"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { getProfile } from "../lib/profileStorage";
import { findMatches } from "../lib/matching";

export default function DiscoverPage() {
const router = useRouter();

const [matches, setMatches] = useState<any[]>([]);
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
const profile = getProfile();
const results = findMatches(profile);
setMatches(results);
}, []);

const currentMatch = matches[currentIndex];

const nextCard = () => {
if (currentIndex < matches.length - 1) {
setCurrentIndex((prev) => prev + 1);
} else {
router.push("/dashboard");
}
};

const handlePass = () => {
nextCard();
};

const handlePriority = () => {
const existing = JSON.parse(
localStorage.getItem("priorityMatches") || "[]"
);

existing.push(currentMatch);

localStorage.setItem(
  "priorityMatches",
  JSON.stringify(existing)
);

nextCard();

};

const handleLike = () => {
const existing = JSON.parse(
localStorage.getItem("likedMatches") || "[]"
);

existing.push(currentMatch);

localStorage.setItem(
  "likedMatches",
  JSON.stringify(existing)
);

const mutual =
  currentMatch.compatibility >= 75;

if (mutual) {
  localStorage.setItem(
    "currentMatch",
    JSON.stringify(currentMatch)
  );

  router.push("/match");
  return;
}

nextCard();


};

if (!currentMatch) {
return ( <div className="min-h-screen flex items-center justify-center bg-[#F8F6FF]"> <h1 className="text-3xl font-bold">
Finding Matches... </h1> </div>
);
}

return ( <div className="min-h-screen bg-[#F8F6FF] p-6"> <div className="max-w-md mx-auto">


    {/* HEADER */}
    <div className="text-center mb-6">
      <h1 className="text-5xl font-bold">
        🔥 Discover
      </h1>

      <p className="text-gray-500 mt-2">
        Swipe your next roommate
      </p>
    </div>

    {/* CARD */}
    <motion.div
      drag="x"
      whileDrag={{
        rotate: 8,
        scale: 1.02,
      }}
      className="
        bg-white
        rounded-[32px]
        overflow-hidden
        shadow-2xl
      "
    >

      {/* PROFILE HEADER */}
      <div
        className="
          relative
          bg-gradient-to-br
          from-purple-700
          to-purple-500
          text-white
          py-12
          px-6
          text-center
        "
      >
        <div className="text-8xl mb-4">
          👤
        </div>

        <h2 className="text-3xl font-bold">
          {currentMatch.name}
        </h2>

        <div
          className="
            inline-block
            mt-3
            px-4
            py-2
            rounded-full
            bg-white/20
            text-sm
            font-semibold
          "
        >
          {currentMatch.gender}
        </div>

        <div
          className="
            absolute
            top-4
            right-4
            bg-white
            text-black
            shadow-lg
            rounded-full
            px-4
            py-2
            font-bold
          "
        >
          {currentMatch.compatibility}%
        </div>
      </div>

      {/* DETAILS */}
      <div className="p-6">

        <p className="text-gray-500">
          {currentMatch.age} Years
        </p>

        <p className="text-gray-500">
          {currentMatch.city}
        </p>

        <p className="text-gray-500 mb-4">
          {currentMatch.occupation}
        </p>

        {currentMatch.compatibility >= 85 && (
          <div className="font-bold text-green-600 mb-4">
            🔥 Excellent Match
          </div>
        )}

        {currentMatch.compatibility >= 70 &&
          currentMatch.compatibility < 85 && (
            <div className="font-bold text-yellow-600 mb-4">
              ⭐ Good Match
            </div>
          )}

        {currentMatch.compatibility < 70 && (
          <div className="font-bold text-red-500 mb-4">
            ⚠ Moderate Match
          </div>
        )}

        {/* AI Insight */}
        <div className="bg-purple-50 p-4 rounded-2xl mb-5">
          <h3 className="font-bold mb-2">
            🤖 AI Insight
          </h3>

          <p className="text-sm text-gray-700">
            You and {currentMatch.name} have
            compatible lifestyle patterns,
            cleanliness habits and daily
            routines which reduces roommate
            conflicts significantly.
          </p>
        </div>

        {/* Why Match */}
        <div>
          <h3 className="font-bold mb-3">
            Why Match?
          </h3>

          <div className="space-y-2">

            {currentMatch.reasons?.map(
              (
                reason: string,
                index: number
              ) => (
                <div
                  key={index}
                  className="
                    bg-purple-50
                    px-3
                    py-2
                    rounded-xl
                    text-sm
                  "
                >
                  ✓ {reason}
                </div>
              )
            )}

          </div>
        </div>

      </div>

    </motion.div>

    {/* BUTTONS */}
    <div className="flex justify-center gap-6 mt-8">

      <button
        onClick={handlePass}
        className="
          w-16
          h-16
          rounded-full
          bg-white
          shadow-lg
          text-3xl
          hover:scale-110
          transition
        "
      >
        ❌
      </button>

      <button
        onClick={handleLike}
        className="
          w-20
          h-20
          rounded-full
          bg-gradient-to-r
          from-pink-500
          to-red-500
          text-white
          text-4xl
          shadow-xl
          hover:scale-110
          transition
        "
      >
        ❤️
      </button>

      <button
        onClick={handlePriority}
        className="
          w-16
          h-16
          rounded-full
          bg-yellow-300
          text-3xl
          shadow-lg
          hover:scale-110
          transition
        "
      >
        ⭐
      </button>

    </div>

    {/* NAVIGATION */}
    <div className="grid grid-cols-3 gap-3 mt-8">

      <button
        onClick={() =>
          router.push("/dashboard")
        }
        className="
          py-3
          rounded-xl
          bg-purple-100
          font-semibold
        "
      >
        Dashboard
      </button>

      <button
        onClick={() =>
          router.push("/shortlist")
        }
        className="
          py-3
          rounded-xl
          bg-pink-100
          font-semibold
        "
      >
        Shortlist
      </button>

      <button
        onClick={() =>
          router.push("/edit-profile")
        }
        className="
          py-3
          rounded-xl
          bg-blue-100
          font-semibold
        "
      >
        Profile
      </button>

    </div>

    <p className="text-center mt-6 text-gray-500">
      {currentIndex + 1} of {matches.length}
    </p>

  </div>
</div>

);
}
