"use server";

import { signIn, signOut } from "@/auth";

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/portal" });
}

export async function signOutWithGoogle(params) {
  await signOut("google");
}

export async function createUser(formData) {
  
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  // Password hashing and user creation logic would go here
  // For example, you might save the user to a database here

  console.log("User created:", { name, email, password });
}
