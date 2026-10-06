"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const [likes, setLikes] = useState<any[]>([]);
  const [priority, setPriority] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    setLikes(
      JSON.parse(
        localStorage.getItem("likedMatches") || "[]"
      )
    );

    setPriority(
      JSON.parse(
        localStorage.getItem("priorityMatches") || "[]"
      )
    );

    const storedProfile = JSON.parse(
      localStorage.getItem("userProfile") || "{}"
    );

    setProfile(storedProfile);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F6FF] p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

          <div className="flex items-center gap-4">

            <img
              src={
                profile.profileImage ||
                "/profile1.jpg"
              }
              alt="Profile"
              className="
                w-16
                h-16
                rounded-full
                object-cover
                border-2
                border-purple-300
                shadow
              "
            />

            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Welcome,{" "}
                {profile.fullName || "User"} 👋
              </h1>

              <p className="text-gray-500 mt-2">
                Your roommate matching overview
              </p>
            </div>

          </div>

          <button
            onClick={() =>
              router.push("/edit-profile")
            }
            className="
              mt-5 md:mt-0
              bg-purple-600
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-purple-700
              transition
            "
          >
            ✏️ Edit Profile
          </button>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-3xl p-8 shadow">
            <h2 className="text-4xl font-bold text-purple-600">
              {likes.length}
            </h2>

            <p className="text-gray-500 mt-2">
              Saved Likes
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow">
            <h2 className="text-4xl font-bold text-yellow-500">
              {priority.length}
            </h2>

            <p className="text-gray-500 mt-2">
              Priority Matches
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow">
            <h2 className="text-4xl font-bold text-green-500">
              92%
            </h2>

            <p className="text-gray-500 mt-2">
              Profile Strength
            </p>
          </div>

        </div>

        {/* PREMIUM CARD */}
        <div
          className="
            mb-10
            rounded-3xl
            p-8
            text-white
            bg-gradient-to-r
            from-purple-700
            via-purple-600
            to-pink-500
            shadow-xl
          "
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">

            <div>
              <h2 className="text-3xl font-bold">
                👑 Premium Dashboard
              </h2>

              <p className="mt-2 text-purple-100">
                Unlock unlimited matches,
                advanced AI compatibility
                insights, priority recommendations,
                and premium roommate verification.
              </p>
            </div>

            <button
              className="
                bg-white
                text-purple-700
                px-6
                py-3
                rounded-xl
                font-bold
              "
            >
              Upgrade Now
            </button>

          </div>
        </div>

        {/* QUICK ACTION BUTTONS */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <button
            onClick={() =>
              router.push("/discover")
            }
            className="
              bg-purple-700
              text-white
              p-8
              rounded-3xl
              text-xl
              font-bold
              hover:scale-[1.02]
              transition
            "
          >
            🔥 Discover Matches
          </button>

          <button
            onClick={() =>
              router.push("/shortlist")
            }
            className="
              bg-white
              p-8
              rounded-3xl
              shadow
              text-xl
              font-bold
              hover:shadow-lg
              transition
            "
          >
            ❤️ View Shortlist
          </button>

        </div>

        {/* EXTRA FEATURES */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-3xl p-8 shadow">
            <h2 className="text-2xl font-bold mb-4">
              🚀 Quick Actions
            </h2>

            <div className="space-y-3">

              <button
                onClick={() =>
                  router.push("/edit-profile")
                }
                className="
                  w-full
                  bg-gray-100
                  p-4
                  rounded-xl
                  text-left
                  font-medium
                "
              >
                Edit Profile
              </button>

              <button
                onClick={() =>
                  router.push("/discover")
                }
                className="
                  w-full
                  bg-gray-100
                  p-4
                  rounded-xl
                  text-left
                  font-medium
                "
              >
                Find New Matches
              </button>

              <button
                onClick={() =>
                  router.push("/shortlist")
                }
                className="
                  w-full
                  bg-gray-100
                  p-4
                  rounded-xl
                  text-left
                  font-medium
                "
              >
                Manage Shortlist
              </button>

            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-white rounded-3xl p-8 shadow">
            <h2 className="text-2xl font-bold mb-4">
              📊 Recent Activity
            </h2>

            <div className="space-y-4 text-gray-600">

              <div>
                ❤️ You liked {likes.length}
                roommate profiles
              </div>

              <div>
                ⭐ {priority.length}
                matches marked as priority
              </div>

              <div>
                📝 Profile completion reached 92%
              </div>

              <div>
                🔥 AI generated new compatibility
                suggestions
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}