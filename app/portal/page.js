import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();
  if (!session) return redirect("/profile");
  return (
    <div>
      <h1>Welcome to your profile</h1>
      <p>Email: {session.user.email}</p>
    </div>
  );
}
