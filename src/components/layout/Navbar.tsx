"use client";

import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <nav className="sticky top-0 border-b bg-white">
        <div className="mx-auto flex h-14 max-w-5xl items-center px-4">
          <div className="h-4 w-20 animate-pulse rounded bg-neutral-200" />
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <h1 className="text-lg font-semibold tracking-tight">Conversations</h1>

        {session ? (
          <div className="flex items-center gap-3">
            {session.user.image && (
              <img
                src={session.user.image}
                alt={session.user.name}
                className="h-8 w-8 rounded-full"
              />
            )}

            <span className="hidden text-sm sm:block">{session.user.name}</span>

            <button
              onClick={() => authClient.signOut()}
              className="
              rounded-full
              border
              px-4
              py-2
              text-sm
              transition
              hover:bg-neutral-100
              "
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() =>
              authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
              })
            }
            className="
            rounded-full
            bg-black
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:opacity-90
            "
          >
            Continue with Google
          </button>
        )}
      </div>
    </nav>
  );
}
