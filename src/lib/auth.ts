import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";

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

        if (!res.ok) {
          throw new Error("backend user save fail");
        }
        return res.ok;
      } catch (err) {
        console.error("⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️", err);
        return false;
      }
    },
  },
});
