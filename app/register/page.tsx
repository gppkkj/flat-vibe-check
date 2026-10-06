"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleRegister = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!fullName.trim()) {
      alert("Please enter your full name");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (password.length < 6) {
      alert(
        "Password must be at least 6 characters"
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save name for questionnaire page
    localStorage.setItem(
      "fullName",
      fullName
    );

    router.push("/questionnaire");
  };

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-white rounded-[30px] shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="bg-[#F8F5FF] p-10 flex flex-col justify-between">

          <div>
            <h1 className="text-5xl font-bold mb-4">
              Create Your
              <span className="text-purple-600">
                {" "}Account
              </span>
            </h1>

            <p className="text-gray-600 text-lg">
              Start your journey to find the
              perfect flatmate.
            </p>
          </div>

          <div className="my-8">
            <Image
              src="/sofa.jpeg"
              alt="Living Room"
              width={500}
              height={500}
              className="w-full rounded-xl"
            />
          </div>

          <div className="space-y-8">

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                👥
              </div>

              <div>
                <h3 className="font-semibold">
                  AI-Powered Matching
                </h3>

                <p className="text-gray-500 text-sm">
                  Find compatible flatmates based
                  on lifestyle and habits.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                🛡️
              </div>

              <div>
                <h3 className="font-semibold">
                  Trust & Safety
                </h3>

                <p className="text-gray-500 text-sm">
                  Verified profiles and trust
                  assessment.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                ⚠️
              </div>

              <div>
                <h3 className="font-semibold">
                  Conflict Prediction
                </h3>

                <p className="text-gray-500 text-sm">
                  AI predicts conflicts before
                  you move in.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="p-12 flex flex-col justify-center">

          <h2 className="text-4xl font-bold mb-3">
            Create Your Account
          </h2>

          <p className="text-gray-500 mb-8">
            Join FlatVibeCheck and find your
            ideal flatmate.
          </p>

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            {/* FULL NAME */}

            <div>
              <label className="font-medium mb-2 block">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(
                      e.target.value
                    )
                  }
                  className="w-full border rounded-xl py-4 pl-12 pr-4"
                  required
                />
              </div>
            </div>

            {/* EMAIL */}

            <div>
              <label className="font-medium mb-2 block">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="w-full border rounded-xl py-4 pl-12 pr-4"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div>
              <label className="font-medium mb-2 block">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  className="w-full border rounded-xl py-4 pl-12 pr-12"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}

            <div>
              <label className="font-medium mb-2 block">
                Confirm Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={
                    showConfirm
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  className="w-full border rounded-xl py-4 pl-12 pr-12"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirm(
                      !showConfirm
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showConfirm ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                text-white
                bg-gradient-to-r
                from-purple-600
                to-purple-500
                hover:scale-[1.01]
                transition
              "
            >
              Register →
            </button>

          </form>

          <div className="text-center mt-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-purple-600 font-semibold"
            >
              Login
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}