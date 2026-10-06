import {
  Users,
  ShieldCheck,
  TriangleAlert
} from "lucide-react";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-[#f8f7ff] py-20"
>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <div className="inline-flex items-center gap-2 px-5 py-2 border border-purple-200 rounded-full text-purple-600 bg-white">

            ✨ AI-Powered Flatmate Matching

          </div>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mt-8">

            Find the

            <span className="text-purple-600">
              {" "}Right{" "}
            </span>

            Flatmate.

            <br />

            Not Just a Room.

          </h1>

          <p className="text-gray-600 text-xl mt-8 max-w-xl">

            FlatVibeCheck uses AI to assess compatibility,
            trust, and potential conflicts so you can live
            better, together.

          </p>

          {/* Features */}

          <div className="flex gap-10 mt-10">

            <div className="flex items-start gap-3">

              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">

                <Users size={24} className="text-purple-600" />

              </div>

              <div>

                <h4 className="font-semibold text-base">
                  Compatibility
                </h4>

                <p className="text-gray-600 text-sm leading-6 max-w-[160px]">

                  AI-based matching using lifestyle &
                  preferences

                </p>

              </div>

            </div>

            <div className="flex items-start gap-3">

              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">

                <ShieldCheck size={24} className="text-purple-600" />

              </div>

              <div>

                <h4 className="font-semibold text-base">
                  Trust Assessment
                </h4>

                <p className="text-gray-600 text-sm leading-6 max-w-[160px]">

                  Verified profiles & trust scoring

                </p>

              </div>

            </div>

            <div className="flex items-start gap-3">

              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">

                <TriangleAlert size={24} className="text-purple-600" />

              </div>

              <div>

                <h4 className="font-semibold text-base">
                  Conflict Prediction
                </h4>

                <p className="text-gray-600 text-sm leading-6 max-w-[160px]">

                  Detect potential conflicts before you move in

                </p>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex gap-5 mt-10">

            <Link href="/register">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-xl">
                Get Started
              </button>
            </Link>

            <a href="#how-it-works">
              <button className="border border-purple-500 px-8 py-4 rounded-xl">
                Learn More
              </button>
            </a>

          </div>

        </div>

        {/* Right Side Image */}

        <div>

          <img
            src="/hero-roommates.jpg"
            alt="Flatmates"
            className="
              rounded-[32px]
              shadow-2xl
              w-full
              object-cover
              hover:scale-[1.02]
              transition-all
              duration-500
            "
          />

        </div>

      </div>

    </section>
  );
}