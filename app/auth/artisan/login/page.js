// app/login/artisan/page.js
import Image from "next/image";
import LoginForm from "@/app/components/LoginForm";

export default function ArtisanLoginPage() {
  return (
    <div className="bg-white">
      <div className="bg-white flex flex-col items-center justify-center p-10 gap-8 border-gray-200 rounded-lg w-full md:w-[500px]">
        <h2 className="text-xl font-semibold">Log in to Artisan Linkup</h2>
        <LoginForm role="artisan" />
      </div>
    </div>
  );
}
