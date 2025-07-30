"use server";

import { signIn, signOut } from "@/auth";

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/portal" });
}

export async function signOutWithGoogle(params) {
  await signOut("google");
}

export async function createUser(formData) {
  // Extract data and handle user creation logic here
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  // ...save to DB, hash password, etc.
}
