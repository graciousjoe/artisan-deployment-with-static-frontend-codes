import { auth } from "@/auth";
import { signInWithGoogle, signOutWithGoogle } from "./actions";

export default async function SignIn() {
  const session = await auth();
  console.log(session);

  return (
    <>
      {!session ? (
        <form action={signInWithGoogle}>
          <button className="bg-blue-500 text-white rounded p-2" type="submit">
            Sign in with Google
          </button>
        </form>
      ) : (
        <form action={signOutWithGoogle}>
          <button className="bg-red-500 text-white rounded p-2" type="submit">
            Sign out
          </button>
        </form>
      )}
    </>
  );
}
