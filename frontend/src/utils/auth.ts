import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions = {
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        }
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials.password){
          throw new Error('Email and password required');
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          }
        });

        if(!user || !user.hashedPassword){
          throw new Error('Email does not exist');
        }

        const isCorrectPassword = await compare(
          credentials.password, 
          user.hashedPassword
        );

        if(!isCorrectPassword){
          throw new Error('Incorrect Password');
        }

        return user;
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
}