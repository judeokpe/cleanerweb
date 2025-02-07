import NextAuth from "next-auth";

// Extend NextAuth types to include custom fields like `role`
declare module "next-auth" {
    interface User {
        id: string;
        name: string;
        email: string;
        role: "admin" | "user";
    }

    interface Session {
        user: User;
    }

    interface JWT {
        id: string;
        role: "admin" | "user";
    }
}


  interface Testimony {
    name: string;
    message: string;
    rating: number;
    position: string;
  }