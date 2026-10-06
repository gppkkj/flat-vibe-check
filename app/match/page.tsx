"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MatchPage() {
  const router = useRouter();

  const [match, setMatch] =
    useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem(
      "currentMatch"
    );

    if (saved) {
      setMatch(JSON.parse(saved));
    }
  }, []);

  if (!match) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="
        min-h-screen
        bg-pink-600
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div className="max-w-md w-full text-center text-white">

        <div className="text-8xl mb-6">
          🎉
        </div>

        <h1 className="text-5xl font-bold mb-4">
          It's a Match!
        </h1>

        <p className="text-xl mb-8 opacity-90">
          You and {match.name}
          liked each other
        </p>

        <div
          className="
            flex
            justify-center
            items-center
            gap-6
            mb-10
          "
        >

          <img
            src="/profile-user.png"
            alt="You"
            className="
              w-24
              h-24
              rounded-full
              border-4
              border-white
            "
          />

          <div
            className="
              bg-white
              text-pink-600
              px-5
              py-3
              rounded-full
              font-bold
            "
          >
            {match.compatibility}%
          </div>

          <img
            src={match.image}
            alt={match.name}
            className="
              w-24
              h-24
              rounded-full
              border-4
              border-white
            "
          />

        </div>

        <button
          onClick={() =>
            router.push("/chat")
          }
          className="
            w-full
            bg-white
            text-pink-600
            font-bold
            py-4
            rounded-2xl
            mb-4
          "
        >
          Send Message →
        </button>

        <button
          onClick={() =>
            router.push("/discover")
          }
          className="
            text-white
            underline
          "
        >
          Keep Swiping
        </button>

      </div>
    </div>
  );
}