"use client";

import Link from "next/link";
import {
  Mail,
  Lock,
  User,
  ShieldCheck,
  TriangleAlert,
  Users,
  Eye,
  House,
} from "lucide-react";

interface Props {
  type: "login" | "register";
}

export default function AuthLayout({ type }: Props) {
  const isLogin = type === "login";

  return (
    <div className="min-h-screen bg-[#f8f5ff]">
      {/* Logo */}
      <div className="px-10 py-8">
        <div className="flex items-center gap-3">
          <House className="text-violet-600 w-10 h-10" />

          <h1 className="text-5xl font-bold">
            <span className="text-slate-900">Flat</span>
            <span className="text-violet-600">VibeCheck</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-[28px] bg-white shadow-sm">

          {/* LEFT PANEL */}

          <div className="bg-[#f6f2ff] relative p-10">

            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-200 rounded-full opacity-40" />

            <h2 className="text-6xl font-bold leading-tight">
              {isLogin ? (
                <>
                  Welcome <span className="text-violet-600">Back!</span>
                </>
              ) : (
                <>
                  Create Your
                  <br />
                  <span className="text-violet-600">Account</span>
                </>
              )}
            </h2>

            <p className="mt-5 text-xl text-slate-700 max-w-sm">
              {isLogin
                ? "Log in to continue finding your perfect flatmate."
                : "Start your journey to find the perfect flatmate."}
            </p>

            {/* IMAGE */}

            <div className="mt-10">
              <img
                src="/hero-roommates.jpg"
                alt=""
                className="rounded-3xl w-full h-[330px] object-cover"
              />
            </div>

            <div className="mt-10 space-y-8">

              <Feature
                icon={<Users size={24} />}
                title="AI-Powered Matching"
                text="Find compatible flatmates based on lifestyle and habits."
              />

              <Feature
                icon={<ShieldCheck size={24} />}
                title="Trust & Safety"
                text="Verified profiles and trust assessment for safer connections."
              />

              <Feature
                icon={<TriangleAlert size={24} />}
                title="Conflict Prediction"
                text="AI predicts potential conflicts before you move in."
              />
            </div>
          </div>

          {/* RIGHT PANEL */}

          <div className="bg-white p-12 lg:p-16">

            <h2 className="text-5xl font-bold text-center">
              {isLogin
                ? "Login to Your Account"
                : "Create Your Account"}
            </h2>

            <p className="text-center text-slate-500 mt-4 text-lg">
              {isLogin
                ? "Welcome back! Please enter your details."
                : "Join FlatVibeCheck and find your ideal flatmate."}
            </p>

            <form className="mt-10 space-y-5">

              {!isLogin && (
                <Input
                  label="Full Name"
                  icon={<User size={18} />}
                  placeholder="Enter your full name"
                />
              )}

              <Input
                label="Email Address"
                icon={<Mail size={18} />}
                placeholder="Enter your email"
              />

              <Input
                label="Password"
                icon={<Lock size={18} />}
                placeholder={
                  isLogin
                    ? "Enter your password"
                    : "Create a password"
                }
              />

              {!isLogin && (
                <Input
                  label="Confirm Password"
                  icon={<Lock size={18} />}
                  placeholder="Confirm your password"
                />
              )}

              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-violet-600 font-medium"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                className="
                  w-full
                  h-14
                  rounded-xl
                  text-white
                  font-semibold
                  text-lg
                  bg-gradient-to-r
                  from-violet-700
                  to-purple-500
                  hover:scale-[1.02]
                  transition
                "
              >
                {isLogin ? "Login" : "Register"}
              </button>

              <div className="flex items-center gap-4 py-2">
                <div className="h-px bg-gray-200 flex-1" />
                <span className="text-gray-500">OR</span>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              <button
                type="button"
                className="
                  w-full
                  h-14
                  rounded-xl
                  border
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="text-center text-slate-600">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}

                <Link
                  href={isLogin ? "/register" : "/login"}
                  className="ml-2 text-violet-600 font-semibold"
                >
                  {isLogin ? "Register" : "Login"}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  icon,
  placeholder,
}: {
  label: string;
  icon: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div>
      <label className="font-semibold block mb-2">
        {label}
      </label>

      <div className="border rounded-xl h-14 flex items-center px-4 gap-3">
        {icon}

        <input
          placeholder={placeholder}
          className="w-full outline-none"
        />

        <Eye
          size={18}
          className="text-slate-400"
        />
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-lg">{title}</h3>

        <p className="text-slate-600">
          {text}
        </p>
      </div>
    </div>
  );
}