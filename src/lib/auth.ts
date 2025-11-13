import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import { cookies } from "next/headers";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID!,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log({ user, account });

      if (!user.email) return false;
      if (!account) return false;

      try {
        const res = await fetch(`${process.env.BACKEND_URL}/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            name: user.name,
            image: user.image,
            provider: account.provider,
            providerId: account.providerAccountId,
          }),
        });

        const result = await res.json();

        const storeCookies = await cookies();

        if (result?.success) {
          storeCookies.set("accessToken", result.data.accessToken);
        }

        return result;
      } catch (err) {
        console.error("⚠️", err);
        return false;
      }
    },
  },
});

export const getAuthToken = async (): Promise<string | undefined> => {
  const TOKEN_COOKIE_NAME = "accessToken";
  const cookieStore = cookies();

  const token = (await cookieStore).get(TOKEN_COOKIE_NAME)?.value;
  return token;
};
