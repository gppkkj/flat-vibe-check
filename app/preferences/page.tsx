"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PreferencesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-6">

      <div
        className="
        max-w-7xl
        w-full
        bg-white
        rounded-[32px]
        shadow-xl
        overflow-hidden
        grid
        md:grid-cols-2
        items-center
        "
      >

        {/* LEFT SIDE */}

        <div className="p-16">

          <h1 className="text-3xl font-bold text-purple-600 mb-10">
            FlatVibeCheck
          </h1>

          <h2 className="text-6xl font-bold leading-tight">
            Let's find your
            <span className="text-purple-600 block">
              perfect match!
            </span>
          </h2>

          <p className="text-gray-600 text-xl mt-8 max-w-lg leading-9">
            Answer a few questions about yourself
            so we can find flatmates who truly
            vibe with you.
          </p>

          <button
            onClick={() =>
                router.push("/looking-for")
             }
            className="
            mt-12
            px-10
            py-4
            bg-gradient-to-r
            from-purple-700
            to-purple-500
            text-white
            rounded-xl
            text-lg
            font-semibold
            hover:scale-105
            transition
            "
          >
            Let's Get Started →
          </button>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-[#F8F5FF] flex justify-center items-center p-10">

          <Image
            src="/lifestyle-man.png"
            alt="Lifestyle Illustration"
            width={700}
            height={700}
            className="
            w-full
            max-w-[650px]
            h-auto
            object-contain
            "
            priority
          />

        </div>

      </div>

    </div>
  );
}