"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getProfile } from "../lib/profileStorage";
import { findMatches } from "../lib/matching";

export default function AnalysisPage() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [bestMatch, setBestMatch] =
    useState<any>(null);

  useEffect(() => {

    const profile = getProfile();

console.log("PROFILE");
console.log(profile);

const matches =
  findMatches(profile);

console.log("MATCHES");
console.log(matches);

    if (matches.length > 0) {
      setBestMatch(matches[0]);
    }

    const timer = setTimeout(() => {
  setLoading(false);

  setTimeout(() => {
    router.push("/discover");
  }, 5000);

}, 3000);

    return () =>
      clearTimeout(timer);

  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center">

        <div className="bg-white rounded-[32px] shadow-xl p-12 max-w-2xl w-full text-center">

          <div className="animate-spin rounded-full h-20 w-20 border-4 border-purple-200 border-t-purple-600 mx-auto mb-8" />

          <h1 className="text-4xl font-bold mb-4">
            Analyzing Your Preferences...
          </h1>

          <p className="text-gray-500 text-lg">
            Our AI is finding your most compatible flatmates.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-6">

      <div className="bg-white rounded-[32px] shadow-xl p-10 max-w-4xl w-full">

        <div className="text-center">

          <h1 className="text-5xl font-bold mb-4">
            🎉 Match Analysis Complete
          </h1>

          <p className="text-gray-500 text-lg mb-10">
            We found your most compatible roommate.
          </p>

        </div>

        {bestMatch && (

          <div className="border-2 border-purple-200 rounded-3xl p-8 bg-purple-50">

            <div className="flex flex-col items-center text-center">

              <img
                src={bestMatch.image}
                alt={bestMatch.name}
                className="
                  w-32
                  h-32
                  rounded-full
                  object-cover
                  mb-6
                "
              />

              <h2 className="text-3xl font-bold">
                {bestMatch.name}
              </h2>

              <p className="text-gray-500">
                {bestMatch.age} Years • {bestMatch.city}
              </p>

              <div className="mt-6">

                <div className="text-7xl font-bold text-purple-600">
                  {bestMatch.compatibility}%
                </div>

                <p className="text-gray-600 mt-2">
                  Compatibility Score
                </p>

              </div>

            </div>

            <div className="mt-10">

              <h3 className="font-bold text-xl mb-4">
                Why You're Compatible
              </h3>

              <div className="space-y-3">

                {bestMatch.reasons
                  ?.slice(0, 5)
                  .map(
                    (
                      reason: string,
                      index: number
                    ) => (

                      <div
                        key={index}
                        className="
                          bg-white
                          rounded-xl
                          p-4
                          border
                        "
                      >
                        ✓ {reason}
                      </div>

                    )
                  )}

              </div>

            </div>

          </div>

        )}

        <div className="text-center mt-10">

          <p className="text-gray-500">
            Redirecting to all matches...
          </p>

        </div>

      </div>

    </div>
  );
}