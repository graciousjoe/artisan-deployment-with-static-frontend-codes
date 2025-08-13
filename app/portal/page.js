// app/portal/page.js
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Redirector } from "./PortalLogic"; // Import the new component

export default async function PortalPage() {
  const session = await auth();

  // Security check first
  if (!session) {
    return redirect("/auth/option");
  }

  // Render the Client Component to handle redirection
  return <Redirector />;
}
