"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <h1 className="text-lg font-semibold tracking-tight">
          Conversations
        </h1>

        <button className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
          Login / Sign up
        </button>
      </div>
    </nav>
  );
}