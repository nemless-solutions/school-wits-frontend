import { jwtDecode } from "jwt-decode";
import NextAuth, { NextAuthResult, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    token?: string;
  }
  interface Session {
    token?: string;
    exp?: number;
  }
}

const nextAuthResult = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const res = await fetch("https://backend.schoolwits.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        if (!res.ok) return null;

        const data = await res.json();

        return {
          id: data.user.id,
          name: data.user.fullName,
          email: data.user.email,
          token: data.token,
        } as User;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.jwt = user.token;
        token.exp = jwtDecode(user.token || "").exp;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.token = token.jwt as string;
        session.exp = token.exp as number;
      }

      return session;
    },
  },
});

// to avoid auth type can not infer issue
// otherwise just export destructured nextAuthResult
export const auth: NextAuthResult["auth"] = nextAuthResult.auth;
export const { handlers, signIn, signOut }: NextAuthResult = nextAuthResult;
