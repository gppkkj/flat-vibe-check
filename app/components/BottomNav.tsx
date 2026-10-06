"use client";

import Link from "next/link";

export default function BottomNav() {
  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        bg-white
        border-t
        flex
        justify-around
        py-4
      "
    >
      <Link href="/dashboard">🏠</Link>
      <Link href="/discover">🔥</Link>
      <Link href="/shortlist">❤️</Link>
      <Link href="/chat">💬</Link>
      <Link href="/profile">👤</Link>
    </div>
  );
}