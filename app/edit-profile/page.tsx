"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
const router = useRouter();
const fileInputRef = useRef<HTMLInputElement>(null);

const [profile, setProfile] = useState<any>({});

useEffect(() => {
const stored = JSON.parse(
localStorage.getItem("userProfile") || "{}"
);

setProfile(stored);

}, []);

const handleImageUpload = (
e: React.ChangeEvent<HTMLInputElement>
) => {
const file = e.target.files?.[0];

if (!file) return;

const reader = new FileReader();

reader.onloadend = () => {
  setProfile((prev: any) => ({
    ...prev,
    profileImage: reader.result,
  }));
};

reader.readAsDataURL(file);

};

const removePhoto = () => {
setProfile((prev: any) => ({
...prev,
profileImage: "",
}));
};

const saveChanges = () => {
localStorage.setItem(
"userProfile",
JSON.stringify(profile)
);


alert("Profile Updated Successfully");

router.push("/dashboard");


};

return ( <div className="min-h-screen bg-[#F8F6FF]">


  {/* HEADER */}
  <div
    className="
      bg-gradient-to-r
      from-purple-700
      to-purple-500
      text-white
      p-10
    "
  >
    <div className="max-w-5xl mx-auto">

      <div className="flex items-center gap-8">

        {/* PROFILE SECTION */}
        <div className="flex flex-col items-center">

          <div className="relative">

            <img
              src={
                profile?.profileImage &&
                profile.profileImage !== ""
                  ? profile.profileImage
                  : "/profile1.jpg"
              }
              alt="Profile"
              onClick={() =>
                fileInputRef.current?.click()
              }
              className="
                w-28
                h-28
                rounded-full
                border-4
                border-white
                object-cover
                cursor-pointer
                hover:opacity-90
                transition
              "
            />

            <div
              onClick={() =>
                fileInputRef.current?.click()
              }
              className="
                absolute
                bottom-0
                right-0
                bg-white
                text-purple-700
                w-8
                h-8
                rounded-full
                flex
                items-center
                justify-center
                cursor-pointer
                shadow-lg
              "
            >
              📷
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

          </div>

          <button
            onClick={removePhoto}
            className="
              mt-3
              px-4
              py-2
              bg-red-500
              text-white
              rounded-lg
              text-sm
              hover:bg-red-600
            "
          >
            Remove Photo
          </button>

        </div>

        {/* PROFILE INFO */}
        <div>

          <h1 className="text-4xl font-bold">
            {profile.fullName ||
              "Your Profile"}
          </h1>

          <p className="opacity-90 mt-1">
            {profile.city || "Hyderabad"}
          </p>

          <p className="text-sm mt-3 opacity-80">
            Click the profile picture to upload
            or change your photo
          </p>

        </div>

      </div>

    </div>
  </div>

  {/* FORM */}
  <div className="max-w-5xl mx-auto p-8">

    <div
      className="
        bg-white
        rounded-3xl
        shadow-xl
        p-8
      "
    >

      <h2 className="text-3xl font-bold mb-8">
        Edit Profile
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          value={profile.fullName || ""}
          onChange={(e) =>
            setProfile({
              ...profile,
              fullName: e.target.value,
            })
          }
          placeholder="Full Name"
          className="
            border
            rounded-xl
            p-4
          "
        />

        <input
          value={profile.city || ""}
          onChange={(e) =>
            setProfile({
              ...profile,
              city: e.target.value,
            })
          }
          placeholder="City"
          className="
            border
            rounded-xl
            p-4
          "
        />

        <input
          value={profile.personality || ""}
          onChange={(e) =>
            setProfile({
              ...profile,
              personality:
                e.target.value,
            })
          }
          placeholder="Personality"
          className="
            border
            rounded-xl
            p-4
          "
        />

        <input
          value={profile.foodHabits || ""}
          onChange={(e) =>
            setProfile({
              ...profile,
              foodHabits:
                e.target.value,
            })
          }
          placeholder="Food Habits"
          className="
            border
            rounded-xl
            p-4
          "
        />

      </div>

      {/* LIFESTYLE */}
      <div className="mt-10">

        <h3 className="font-bold mb-4">
          Lifestyle
        </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-purple-100 px-4 py-2 rounded-full">
            🌙 {profile.sleepSchedule || "Not Set"}
          </span>

          <span className="bg-purple-100 px-4 py-2 rounded-full">
            🧹 {profile.cleanliness || "Not Set"}
          </span>

          <span className="bg-purple-100 px-4 py-2 rounded-full">
            🍴 {profile.foodHabits || "Not Set"}
          </span>

          <span className="bg-purple-100 px-4 py-2 rounded-full">
            💻 {profile.workRoutine || "Not Set"}
          </span>

        </div>

      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 mt-10">

        <button
  type="button"
  onClick={() => {
    router.push("/dashboard");
  }}
  className="
    flex-1
    py-4
    rounded-xl
    bg-gray-100
    font-medium
    hover:bg-gray-200
    transition
  "
>
  Dashboard
</button>

        <button
          onClick={saveChanges}
          className="
            flex-1
            py-4
            rounded-xl
            text-white
            font-bold
            bg-gradient-to-r
            from-purple-700
            to-purple-500
          "
        >
          Save Changes
        </button>

      </div>

    </div>

  </div>

</div>

);
}
