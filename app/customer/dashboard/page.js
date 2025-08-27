import { useEffect, useState } from "react";
("use client");
// ...existing code...

export default function CustomerDashboard() {
  // Only use local form name for static hosting
  // Use useState and useEffect to avoid hydration mismatch
  const [userName, setUserName] = useState("User");
  useEffect(() => {
    const localName = localStorage.getItem("fullName");
    if (localName) setUserName(localName);
  }, []);

  return <div className="pt-16">Welcome {userName}</div>;
}
