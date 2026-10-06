"use client";

import { getProfile } from "../lib/profileStorage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [profile, setProfile] =
    useState<any>(null);

  useEffect(() => {
    setProfile(getProfile());
  }, []);

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-[#F8F6FF] p-6">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <div className="text-center">

          <img
            src="/profile-user.png"
            className="
              w-32
              h-32
              rounded-full
              mx-auto
              mb-4
            "
          />

          <h1 className="text-4xl font-bold">
            {profile.fullName}
          </h1>

          <p className="text-gray-500">
            {profile.city}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-purple-50 p-5 rounded-2xl">
            <h3 className="font-bold">
              Personality
            </h3>

            <p>
              {profile.personality}
            </p>
          </div>

          <div className="bg-purple-50 p-5 rounded-2xl">
            <h3 className="font-bold">
              Work Routine
            </h3>

            <p>
              {profile.workRoutine}
            </p>
          </div>

          <div className="bg-purple-50 p-5 rounded-2xl">
            <h3 className="font-bold">
              Food Habit
            </h3>

            <p>
              {profile.foodHabits}
            </p>
          </div>

          <div className="bg-purple-50 p-5 rounded-2xl">
            <h3 className="font-bold">
              Sleep Schedule
            </h3>

            <p>
              {profile.sleepSchedule}
            </p>
          </div>

        </div>

        <div className="mt-10">

          <h2 className="font-bold text-xl mb-4">
            Match Readiness
          </h2>

          <div className="bg-gray-200 h-4 rounded-full">

            <div
              className="
                bg-purple-600
                h-full
                rounded-full
              "
              style={{
                width: "92%",
              }}
            />

          </div>

          <p className="mt-2 text-gray-500">
            92% Complete
          </p>

        </div>

        <button
          onClick={() =>
            router.push("/edit-profile")
          }
          className="
            mt-10
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-purple-700
            to-purple-500
            text-white
            font-bold
          "
        >
          Edit Profile
        </button>

      </div>

    </div>
  );
}