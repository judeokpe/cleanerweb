// middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    
    if (!token || token.role !== "admin") {
        return NextResponse.redirect(new URL("/login", req.url)); // Redirect non-admins to login
    }

    return NextResponse.next();
}

// Protect only the admin settings route
export const config = {
    matcher: ["/admin/settings"], // Only protect this route
};
