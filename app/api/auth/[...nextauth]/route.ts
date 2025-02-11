// import NextAuth, { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { connectDB } from "@/app/utils/db";
// import User from "@/app/models/User";
// import { JWT } from "next-auth/jwt";

// interface CustomToken extends JWT {
//     id?: string;
//     role?: "admin" | "user";
// }

// export const authOptions: AuthOptions = { // Explicitly type authOptions
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "text", placeholder: "your@email.com" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 if (!credentials?.email || !credentials?.password) {
//                     throw new Error("Email and password are required.");
//                 }

//                 await connectDB(); // Ensure DB connection

//                 // Find user in the database by email
//                 const user = await User.findOne({ email: credentials.email });

//                 if (!user) {
//                     throw new Error("User not found.");
//                 }

//                 // Verify password
//                 const isValid = await bcrypt.compare(credentials.password, user.password);
//                 if (!isValid) {
//                     throw new Error("Invalid credentials.");
//                 }

//                 return {
//                     id: String(user._id),
//                     name: user.username,
//                     email: user.email,
//                     role: user.role,
//                 };
//             },
//         }),
//     ],
//     callbacks: {
//         async jwt({ token, user }: { token: CustomToken; user?: any }) {
//             if (user) {
//                 token.id = user.id;
//                 token.role = user.role;
//             }
//             return token;
//         },
//         async session({ session, token }: { session: any; token: CustomToken }) {
//             if (token) {
//                 session.user = {
//                     id: token.id,
//                     name: session.user.name,
//                     email: session.user.email,
//                     role: token.role as "admin" | "user",
//                 };
//             }
//             return session;
//         },
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     session: { strategy: "jwt" as const }, // Explicitly assert "jwt" as valid
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };



// import NextAuth, { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { connectDB } from "@/app/utils/db";
// import User from "@/app/models/User";
// import { JWT } from "next-auth/jwt";

// interface CustomToken extends JWT {
//     id?: string;
//     role?: "admin" | "user";
// }

// export const authOptions: AuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "email", placeholder: "your@email.com" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 if (!credentials?.email || !credentials?.password) {
//                     throw new Error("Email and password are required.");
//                 }

//                 await connectDB(); // Ensure MongoDB is connected

//                 const user = await User.findOne({ email: credentials.email });

//                 if (!user) {
//                     throw new Error("User not found.");
//                 }

//                 const isValid = await bcrypt.compare(credentials.password, user.password);
//                 if (!isValid) {
//                     throw new Error("Invalid credentials.");
//                 }

//                 return {
//                     id: user._id.toString(),
//                     name: user.username,
//                     email: user.email,
//                     role: (user.role as "admin" | "user") ?? "user", // Ensure correct type
//                 };
                
//             },
//         }),
//     ],
//     callbacks: {
//         async jwt({ token, user }) {
//             if (user) {
//                 token.id = user.id?.toString() ?? ""; 
//                 token.role = (user.role as "admin" | "user") ?? "user"; 
//             }
//             return token;
//         },
        
//         async session({ session, token }) {
//             session.user = {
//                 id: typeof token.id === "string" ? token.id : "", // Ensure id is a string
//                 name: session.user?.name || "", // Use optional chaining
//                 email: session.user?.email || "",
//                 role: (token.role as "admin" | "user") || "user", // Ensure correct type
//             };
//             return session;
//         }
        
        
//     },
//     pages: {
//         signIn: "auth/login", // Custom login page
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     session: {
//         strategy: "jwt",
//     },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };





import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/app/utils/db"; 
import User from "@/app/models/User"; 

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your@email.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required.");
                }

                await connectDB();

                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    throw new Error("User not found.");
                }

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) {
                    throw new Error("Invalid credentials.");
                }

                return {
                    id: user._id.toString(),
                    name: user.username,
                    email: user.email,
                    role: user.role ?? "user", // Ensure role is stored
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role; 
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                id: token.id as string || "",
                name: session.user?.name || "",
                email: session.user?.email || "",
                role: token.role as  "admin" | "user",
            };
            return session;
        },
    },
    pages: {
        signIn: "/login", // Custom login page
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
