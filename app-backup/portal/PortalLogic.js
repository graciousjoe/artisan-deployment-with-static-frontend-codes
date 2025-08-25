"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function Redirector() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  // Use useEffect to handle the redirect after the component has mounted
  useEffect(() => {
    if (role === "customer") {
      window.location.href = "/customer/dashboard";
    }

    if (role === "artisan") {
      window.location.href = "/artisan/profile-setup";
    }

    if (!role) {
      window.location.href = "/auth/option";
    }
  }, [role]);

  return <div>Redirecting...</div>;
}