// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/app/utils/db";
import User from "@/app/models/User";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Admin Login",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "your@email.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required.");
                }

                await connectDB(); // Ensure DB connection

                // Find user in the database by email
                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    throw new Error("User not found.");
                }

                // Verify password
                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) {
                    throw new Error("Invalid credentials.");
                }

                return {
                    id: String(user._id),
                    name: user.username,
                    email: user.email,
                    role: user.role,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id as string;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    id: token.id as string,
                    name: session.user.name,
                    email: session.user.email,
                    role: token.role as 'admin' | 'user',
                };
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },
});
