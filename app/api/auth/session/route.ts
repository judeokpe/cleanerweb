// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../authOptions"; 

// export async function GET() {
//     const session = await getServerSession(authOptions);

//     if (!session) {
//         return NextResponse.json({ user: null }, { status: 401 });
//     }

//     return NextResponse.json({ user: session.user });
// }

// app/api/auth/session/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions"; // Import from separate file

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ user: null }, { status: 401 });
    }

    return NextResponse.json({ user: session.user });
}
