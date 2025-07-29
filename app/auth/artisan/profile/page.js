// import { auth } from "@/auth";
// import { signInWithGoogle, signOutWithGoogle } from "./actions";
import GoogleAuth from "@/app/components/GoogleAuth";
import { SessionProvider } from "next-auth/react";

export default async function SignIn() {
  return (
    <div className="flex justify-center items-center bg-black h-full w-full">
      <div>

      
      <SessionProvider>
        <GoogleAuth />
      </SessionProvider>
      </div>

    </div>
  );
}
