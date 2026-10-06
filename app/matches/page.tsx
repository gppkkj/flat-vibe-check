"use client";

import { useEffect, useState } from "react";

import { getProfile } from "../lib/profileStorage";
import { findMatches } from "../lib/matching";

export default function MatchesPage() {
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
  const profile = getProfile();

  console.log(
    "PROFILE",
    profile
  );

  const results =
    findMatches(profile);

  console.log(
    "MATCHES",
    results
  );

  setMatches(results);
}, []);
  return (
    <div className="min-h-screen bg-[#F8F6FF] p-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold mb-4">
            🎉 Your Top Matches
          </h1>

          <p className="text-gray-500 text-lg">
            Based on your lifestyle, habits, and
            preferences.
          </p>

        </div>

        {/* MATCH GRID */}

        {matches.length === 0 ? (

          <div className="bg-white rounded-3xl p-10 text-center shadow">

            <h2 className="text-2xl font-bold mb-3">
              No Matches Found
            </h2>

            <p className="text-gray-500">
              Try updating your preferences.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {matches.map((match, index) => (

              <div
                key={match.id}
                className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  overflow-hidden
                  hover:shadow-xl
                  transition-all
                "
              >

                {/* TOP BADGE */}

                {index === 0 && (

                  <div
                    className="
                    bg-gradient-to-r
                    from-purple-700
                    to-purple-500
                    text-white
                    text-center
                    py-2
                    font-semibold
                    "
                  >
                    ⭐ Best Match
                  </div>

                )}

                {/* IMAGE */}

                <div className="flex justify-center pt-8">

                  <img
                    src={match.image}
                    alt={match.name}
                    className="
                      w-28
                      h-28
                      rounded-full
                      object-cover
                      border-4
                      border-purple-200
                    "
                  />

                </div>

                {/* DETAILS */}

                <div className="p-6">

                  <div className="text-center">

                    <h2 className="text-2xl font-bold">
                      {match.name}
                    </h2>

                    <p className="text-gray-500">
                      {match.age} Years
                    </p>

                    <p className="text-gray-500">
                      {match.city}
                    </p>

                    <p className="text-gray-500 mb-4">
                      {match.occupation}
                    </p>

                  </div>

                  {/* COMPATIBILITY */}

                  <div className="mb-5">

                    <div className="flex justify-between mb-2">

                      <span className="font-semibold">
                        Compatibility
                      </span>

                      <span className="font-bold text-purple-600">
                        {match.compatibility}%
                      </span>

                    </div>

                    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">

                      <div
                        className="
                        bg-gradient-to-r
                        from-purple-700
                        to-purple-500
                        h-full
                        rounded-full
                        "
                        style={{
                          width: `${match.compatibility}%`,
                        }}
                      />

                    </div>

                  </div>

                  {/* REASONS */}

                  <div>

                    <h3 className="font-bold mb-3">
                      Why Match?
                    </h3>

                    <div className="space-y-2">

                      {match.reasons
                        ?.slice(0, 3)
                        .map(
                          (
                            reason: string,
                            idx: number
                          ) => (

                            <div
                              key={idx}
                              className="
                                bg-purple-50
                                rounded-lg
                                px-3
                                py-2
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

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}