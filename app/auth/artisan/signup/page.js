import Image from "next/image";
import GoogleAuth from "@/app/components/GoogleAuth";
import { SessionProvider } from "next-auth/react";

export default async function SignUp() {
  return (
    <div className="flex justify-center items-center bg-black h-full w-full">
      <div className="bg-white flex flex-col items-center justify-center p-10 gap-8 rounded-lg shadow-lg w-full md:w-[40%]">
        <Image
          src="/Artisan-Logo.png"
          alt="Artisan logo"
          width={60}
          height={60}
        />

        <form className="flex flex-col gap-4 w-[60%]">
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md"
          />
          <button type="submit" className="bg-black text-white p-2 rounded-md">
            Sign Up
          </button>
        </form>
        <SessionProvider>
          <GoogleAuth />
        </SessionProvider>
      </div>
    </div>
  );
}
