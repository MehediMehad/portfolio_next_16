"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Github, Facebook } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export const AuthButtons = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = (provider: "google" | "github" | "facebook") => {
    setLoading(true);
    signIn(provider, {
      callbackUrl: "/",
    }).finally(() => {
      setLoading(false);
    });
  };
  return (
    <div className="space-y-4">
      <button
        onClick={() => handleSignIn("google")}
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-primary/30 bg-background hover:bg-primary/5 transition-colors disabled:opacity-70 cursor-pointer"
      >
        <FcGoogle className="text-foreground" size={20} />
        <span className="font-medium">Continue with Google</span>
      </button>

      <button
        onClick={() => handleSignIn("github")}
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-primary/30 bg-background hover:bg-primary/5 transition-colors disabled:opacity-70 cursor-pointer"
      >
        <Github className="text-foreground" size={20} />
        <span className="font-medium">Continue with GitHub</span>
      </button>

      <button
        onClick={() => handleSignIn("facebook")}
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-primary/30 bg-background hover:bg-primary/5 transition-colors disabled:opacity-70 cursor-pointer"
      >
        <Facebook className="text-blue-600" size={20} />
        <span className="font-medium">Continue with Facebook</span>
      </button>
    </div>
  );
};
