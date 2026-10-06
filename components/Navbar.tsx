import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6D4AFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12"
          >
            <path d="M3 11L12 3L21 11" />
            <path d="M5 9V21H19V9" />
            <path d="M9 21V14H15V21" />
            <path d="M7 7L7 4H10V6" />
            <circle cx="17" cy="6" r="2" />
            <path d="M17 5V7" />
            <path d="M16 6H18" />
          </svg>

          <Link href="/">
            <h1 className="font-bold text-3xl cursor-pointer">
              Flat
              <span className="text-purple-600">
                VibeCheck
              </span>
            </h1>
          </Link>

        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium">

  <li>
    <Link href="/#top">
      Home
    </Link>
  </li>

  <li>
    <Link href="/#how-it-works">
      How It Works
    </Link>
  </li>

  <li>
    <Link href="/#features">
      Features
    </Link>
  </li>

  <li>
    <Link href="/#about">
      About Us
    </Link>
  </li>

  <li>
    <Link href="/#contact">
      Contact
    </Link>
  </li>

</ul>

        {/* Buttons */}
        <div className="flex gap-4">

          <Link
            href="/login"
            className="border border-purple-500 px-8 py-3 rounded-xl hover:bg-purple-50 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
}