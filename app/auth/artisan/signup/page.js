import Image from "next/image";
import GoogleAuth from "@/app/components/GoogleAuth";
import { SessionProvider } from "next-auth/react";
import { createUser } from "./actions";

export default async function SignUp() {
  return (
    <div className="flex justify-center items-center md:bg-black h-full w-full">
      <div className="bg-white flex flex-col items-center justify-center p-10 gap-8 rounded-lg shadow-lg w-full md:w-[80%]">
        <Image
          src="/Artisan-Logo.png"
          alt="Artisan logo"
          width={60}
          height={60}
        />

        <form action={createUser} className="flex flex-col gap-4 w-[60%]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded-md"
            required
          />

          <button
            type="submit"
            className="bg-primary text-white p-2 rounded-md cursor-pointer"
          >
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
