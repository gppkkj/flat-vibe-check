"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MatchingPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/matches");
    }, 4000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F6FF]">
      <div className="bg-white p-12 rounded-3xl shadow-xl w-[650px] text-center">

        <h1 className="text-4xl font-bold">
          Finding Your Perfect Match...
        </h1>

        <p className="text-gray-500 mt-4">
          Analyzing lifestyle preferences,
          compatibility and trust score.
        </p>

        <div className="mt-8 h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-purple-600 animate-pulse w-full" />
        </div>

      </div>
    </div>
  );
}