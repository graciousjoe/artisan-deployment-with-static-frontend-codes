import Image from "next/image";
import Link from "next/link";

export default function Signupas() {
  return (
    <div className="flex justify-center items-center bg-black min-h-screen w-screen">
      <div className="bg-white flex flex-col items-center justify-center p-8 gap-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <Image
          src="/artisan-logo.png"
          alt="Artisan Logo"
          width={60}
          height={60}
        />

        <Link
          className="bg-primary text-white p-4 w-full text-center rounded hover:opacity-90 transition"
          href="/signup/artisan"
        >
          I am an Artisan
        </Link>
        <Link
          className="bg-primary text-white p-4 w-full text-center rounded hover:opacity-90 transition"
          href="/auth/signup"
        >
          I am a Customer
        </Link>
      </div>
    </div>
  );
}
