"use client";
import Image from "next/image";

import { signIn, signOut, useSession } from "next-auth/react";

export default function GoogleAuth({ role }) {
  const { data: session } = useSession();

  const callbackUrl = role ? `/portal?role=${role}` : "/portal";

  return !session ? (
    <button
      className="bg-blue-500 text-white rounded p-2 flex items-center gap-2 cursor-pointer"
      type="button"
      onClick={() => signIn("google", { callbackUrl })}
    >
      Continue with Google{" "}
      <span className="bg-white rounded-full p-1">
        <Image src="/google.svg" alt="Google logo" width={20} height={20} />
      </span>
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
