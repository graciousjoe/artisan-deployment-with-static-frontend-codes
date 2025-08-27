"use client";
// ...existing code...

export default function CustomerDashboard() {
  // Only use local form name for static hosting
  const localName =
    typeof window !== "undefined" ? localStorage.getItem("fullName") : null;
  const userName = localName || "User";

  return <div className="pt-16">Welcome {userName}</div>;
}
