import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/app/utils/db";
import User from "@/app/models/User";

export async function POST(req: Request) {
    try {
        await connectDB();
        const { username, email, password } = await req.json();
        console.log(username, email, password)
        if (!username || !email || !password) {
            return NextResponse.json({ message: "All fields are required." }, { status: 400 });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists." }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        return NextResponse.json({ message: "User registered successfully." }, { status: 201 });
    } catch (error) {
        console.error("Sign-up error:", error);
        return NextResponse.json({ message: "Internal server error." }, { status: 500 });
    }
}
