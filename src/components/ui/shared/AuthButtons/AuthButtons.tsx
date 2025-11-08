"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000" })
        }
      >
        Google Login{" "}
      </button>
      <button
        onClick={() =>
          signIn("github", { callbackUrl: "http://localhost:3000" })
        }
      >
        GitHub Login{" "}
      </button>
      <button
        onClick={() =>
          signIn("facebook", {
            callbackUrl: "http://localhost:3000",
          })
        }
      >
        Facebook Login{" "}
      </button>
    </div>
  );
}
