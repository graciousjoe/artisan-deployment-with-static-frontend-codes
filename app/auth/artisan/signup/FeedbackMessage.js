"use client";
import { useSearchParams } from "next/navigation";

export default function FeedbackMessage() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const error = searchParams.get("error");

  return (
    <>
      {success && (
        <p className="text-green-600 font-medium">
          Account created successfully!
        </p>
      )}
      {error && (
        <p className="text-red-600 font-medium">{decodeURIComponent(error)}</p>
      )}
    </>
  );
}
