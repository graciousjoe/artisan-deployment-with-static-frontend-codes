"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function GoogleAuth() {
  const { data: session } = useSession();

  return !session ? (
    <button
      className="bg-blue-500 text-white rounded p-2"
      type="button"
      onClick={() => signIn("google", { callbackUrl: "/portal" })}
    >
      Sign in with Google
    </button>
  ) : (
    <button
      className="bg-red-500 text-white rounded p-2"
      type="button"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
