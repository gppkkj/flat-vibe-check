"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Add authentication logic here

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-[30px] shadow-xl overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="bg-[#F8F5FF] p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Welcome{" "}
              <span className="text-purple-600">Back!</span>
            </h1>

            <p className="text-gray-600 text-lg">
              Log in to continue finding your perfect flatmate.
            </p>
          </div>

          <div className="my-8">
            <Image
              src="/sofa.jpeg"
              alt="Living Room"
              width={500}
              height={500}
              className="w-full rounded-xl"
              priority
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
                  Find compatible flatmates based on lifestyle and habits.
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
                  Verified profiles and trust assessment.
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
                  AI predicts conflicts before you move in.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-3">
            Login to Your Account
          </h2>

          <p className="text-gray-500 mb-8">
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">

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
                  required
                  className="w-full border rounded-xl py-4 pl-12 pr-4 outline-none focus:border-purple-500"
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
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full border rounded-xl py-4 pl-12 pr-12 outline-none focus:border-purple-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
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

            <div className="text-right">
              <button
                type="button"
                className="text-purple-600 text-sm hover:underline"
              >
                Forgot Password?
              </button>
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
              Login →
            </button>
          </form>

          <div className="text-center mt-8">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-purple-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}