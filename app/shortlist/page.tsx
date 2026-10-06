"use client";

import { useEffect, useState } from "react";

export default function ShortlistPage() {

  const [likes, setLikes] =
    useState<any[]>([]);

  const [priority, setPriority] =
    useState<any[]>([]);

  useEffect(() => {

    setLikes(
      JSON.parse(
        localStorage.getItem(
          "likedMatches"
        ) || "[]"
      )
    );

    setPriority(
      JSON.parse(
        localStorage.getItem(
          "priorityMatches"
        ) || "[]"
      )
    );

  }, []);

  return (
    <div className="min-h-screen bg-[#F8F6FF] p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          ❤️ Your Shortlist
        </h1>

        {/* PRIORITY */}

        <div className="mb-12">

          <h2 className="text-3xl font-bold mb-6">
            ⭐ Priority Matches
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {priority.map((user) => (

              <div
                key={user.id}
                className="
                  bg-white
                  rounded-3xl
                  shadow
                  p-6
                "
              >

                <img
                  src={user.image}
                  alt={user.name}
                  className="
                    w-24
                    h-24
                    rounded-full
                    mx-auto
                    mb-4
                  "
                />

                <h3 className="text-xl font-bold text-center">
                  {user.name}
                </h3>

                <p className="text-center text-gray-500">
                  {user.compatibility}%
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* LIKES */}

        <div>

          <h2 className="text-3xl font-bold mb-6">
            ❤️ Liked Profiles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {likes.map((user) => (

              <div
                key={user.id}
                className="
                  bg-white
                  rounded-3xl
                  shadow
                  p-6
                "
              >

                <img
                  src={user.image}
                  alt={user.name}
                  className="
                    w-24
                    h-24
                    rounded-full
                    mx-auto
                    mb-4
                  "
                />

                <h3 className="text-xl font-bold text-center">
                  {user.name}
                </h3>

                <p className="text-center text-gray-500">
                  {user.compatibility}%
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}