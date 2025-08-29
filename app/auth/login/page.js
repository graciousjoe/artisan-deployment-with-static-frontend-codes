// app/login/artisan/page.js
import Image from "next/image";
import LoginForm from "@/app/components/LoginForm";
import TestimonialCard from "@/app/components/TestimonialCard";

export default function ArtisanLoginPage() {
  return (
    <div className="flex flex-col md:flex-row h-[80%] md:h-screen">
      <TestimonialCard />

      <div className="flex-1 flex flex-col items-center justify-center px-4 gap-4">
        <h2 className="text-xl font-semibold">Log in to Artisan Linkup</h2>
        <LoginForm />
      </div>
    </div>
  );
}
