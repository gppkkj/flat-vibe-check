"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function QuestionnairePage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");

  const [email, setEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");
  const [showPhoneOtp, setShowPhoneOtp] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  const [livingPreference, setLivingPreference] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("fullName");
    if (savedName) {
      setFullName(savedName);
    }
  }, []);

  const handleSendEmailVerification = () => {
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    setShowEmailOtp(true);
  };

  const handleVerifyEmailOtp = () => {
    if (!emailOtp.trim()) {
      alert("Enter OTP");
      return;
    }

    setEmailVerified(true);
    alert("Email Verified");
  };

  const handleSendPhoneOtp = () => {
    if (!phone.trim()) {
      alert("Please enter phone number");
      return;
    }

    setShowPhoneOtp(true);
  };

  const handleVerifyPhoneOtp = () => {
    if (!phoneOtp.trim()) {
      alert("Enter OTP");
      return;
    }

    setPhoneVerified(true);
    alert("Phone Verified");
  };

  const handleContinue = () => {
    if (!fullName) {
      alert("Name missing");
      return;
    }

    if (!age) {
      alert("Age is required");
      return;
    }

    if (Number(age) < 18) {
      alert("Only users 18+ are allowed");
      return;
    }

    if (!gender) {
      alert("Please select gender");
      return;
    }

    if (!occupation.trim()) {
      alert("Occupation is required");
      return;
    }

    if (!city.trim()) {
      alert("City is required");
      return;
    }

    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    if (!emailVerified) {
      alert("Please verify email");
      return;
    }

    if (!phone.trim()) {
      alert("Phone number is required");
      return;
    }

    if (!phoneVerified) {
      alert("Please verify phone number");
      return;
    }

    if (!livingPreference) {
      alert("Please select living preference");
      return;
    }

    if (!budget) {
      alert("Please select budget");
      return;
    }

    router.push("/preferences");
  };

  return (
    <div className="min-h-screen bg-[#F8F6FF] p-6">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-[420px_1fr] gap-8">

        {/* LEFT PANEL */}

        <div className="bg-[#F7F2FF] rounded-[28px] p-8">

          <div className="flex items-center gap-3 mb-10">
            <div className="text-4xl">🏠</div>

            <h1 className="text-4xl font-bold">
              Flat
              <span className="text-purple-600">
                VibeCheck
              </span>
            </h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Let's Get to
            <span className="text-purple-600">
              {" "}Know You!
            </span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Help us personalize your experience and
            find your perfect flatmate match.
          </p>

          <div className="my-8">
            <Image
              src="/sofa.jpeg"
              alt="Room"
              width={500}
              height={500}
              className="w-full rounded-3xl"
            />
          </div>

          <div className="mt-10">
            <h3 className="text-purple-600 font-bold text-xl mb-5">
              Why this matters?
            </h3>

            <p className="text-gray-600 mb-8">
              The more accurate your information,
              the better we can match you and ensure
              a safe, compatible living experience.
            </p>

            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  👥
                </div>

                <div>
                  <h4 className="font-semibold">
                    Better Matches
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Accurate information helps AI find compatible flatmates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  🛡️
                </div>

                <div>
                  <h4 className="font-semibold">
                    Higher Trust Score
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Verified users build trust.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  🔒
                </div>

                <div>
                  <h4 className="font-semibold">
                    Safer Community
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Verification improves reliability.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}

        <div className="bg-white rounded-[28px] p-10 shadow-sm">

          <h1 className="text-5xl font-bold">
            Complete Your Profile
          </h1>

          <p className="text-gray-500 mt-3 mb-10">
            Please fill in your details to help us find the best matches for you.
          </p>

          {/* PERSONAL INFO */}

          <h2 className="text-2xl font-bold text-purple-600 mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <input
              value={fullName}
              readOnly
              className="border rounded-xl p-4 bg-gray-100 cursor-not-allowed"
            />

            <input
              type="number"
              min="18"
              placeholder="Age (18+)"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border rounded-xl p-4"
            />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border rounded-xl p-4"
            >
              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Non-Binary">
                Non-Binary
              </option>

              <option value="Prefer Not To Say">
                Prefer Not To Say
              </option>
            </select>

            <input
              placeholder="Occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="border rounded-xl p-4"
            />

            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border rounded-xl p-4"
            />
          </div>

          {/* TRUST */}

          <h2 className="text-2xl font-bold text-purple-600 mt-12 mb-6">
            Trust & Verification
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* EMAIL */}

            <div className="border rounded-2xl p-6">

              <h3 className="font-bold text-lg">
                Email Verification
              </h3>

              <input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-xl p-4 w-full mt-4"
              />

              <button
                onClick={handleSendEmailVerification}
                className="w-full mt-4 border border-purple-500 text-purple-600 rounded-xl py-3"
              >
                Send Verification Link
              </button>

              {showEmailOtp && (
                <>
                  <input
                    placeholder="Enter Email OTP"
                    value={emailOtp}
                    onChange={(e) => setEmailOtp(e.target.value)}
                    className="border rounded-xl p-4 w-full mt-4"
                  />

                  <button
                    onClick={handleVerifyEmailOtp}
                    className="w-full mt-4 bg-purple-600 text-white rounded-xl py-3"
                  >
                    Verify OTP
                  </button>
                </>
              )}
            </div>

            {/* PHONE */}

            <div className="border rounded-2xl p-6">

              <h3 className="font-bold text-lg">
                Phone Verification
              </h3>

              <input
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded-xl p-4 w-full mt-4"
              />

              <button
                onClick={handleSendPhoneOtp}
                className="w-full mt-4 border border-purple-500 text-purple-600 rounded-xl py-3"
              >
                Send OTP
              </button>

              {showPhoneOtp && (
                <>
                  <input
                    placeholder="Enter Phone OTP"
                    value={phoneOtp}
                    onChange={(e) => setPhoneOtp(e.target.value)}
                    className="border rounded-xl p-4 w-full mt-4"
                  />

                  <button
                    onClick={handleVerifyPhoneOtp}
                    className="w-full mt-4 bg-purple-600 text-white rounded-xl py-3"
                  >
                    Verify OTP
                  </button>
                </>
              )}
            </div>

          </div>

          {/* LIVING PREFERENCES */}

          <h2 className="text-2xl font-bold text-purple-600 mt-12 mb-6">
            Living Preferences
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <select
              value={livingPreference}
              onChange={(e) => setLivingPreference(e.target.value)}
              className="border rounded-xl p-4"
            >
              <option value="">
                Select Living Preference
              </option>

              <option>
                Single Sharing
              </option>

              <option>
                Double Sharing
              </option>

              <option>
                Triple Sharing
              </option>

              <option>
                Co-Living
              </option>
            </select>

            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="border rounded-xl p-4"
            >
              <option value="">
                Select Budget
              </option>

              <option>
                ₹5000 - ₹10000
              </option>

              <option>
                ₹10000 - ₹15000
              </option>

              <option>
                ₹15000 - ₹20000
              </option>

              <option>
                ₹20000 - ₹25000
              </option>

              <option>
                ₹25000 - ₹30000
              </option>

              <option>
                ₹30000+
              </option>
            </select>

          </div>

          <button
            onClick={handleContinue}
            className="w-full mt-12 bg-gradient-to-r from-purple-700 to-purple-500 text-white py-5 rounded-xl text-lg font-semibold"
          >
            Continue →
          </button>

        </div>
      </div>
    </div>
  );
}