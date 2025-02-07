import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import Settings from "@/app/models/Settings";
import { connectDB } from "@/app/utils/db";

export async function GET() {
    await connectDB();

    try {
        const settings = await Settings.findOne({});
        if (!settings) {
            return NextResponse.json({ websiteName: "", logoURL: "" }, { status: 200 });
        }

        return NextResponse.json(settings, { status: 200 });
    } catch (error) {
        console.error("Error fetching settings:", error);
        return NextResponse.json({ message: "Error fetching settings" }, { status: 500 });
    }
}

// ✅ Fix the PUT method to handle file uploads correctly
export async function PUT(req: Request) {
    await connectDB();

    try {
        const formData = await req.formData(); // ✅ Correct FormData handling in Next.js App Router

        const websiteName = formData.get("websiteName") as string;
        const file = formData.get("logo") as File;

        let logoURL = "";

        // ✅ Handle File Upload
        if (file && file instanceof Blob) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const uploadDir = path.join(process.cwd(), "public/uploads");
            const filePath = path.join(uploadDir, file.name || "logo.png");

            await fs.mkdir(uploadDir, { recursive: true }); // Ensure the directory exists
            await fs.writeFile(filePath, buffer); // Save the file
            logoURL = `/uploads/${file.name}`;
        }

        // ✅ Update Settings in MongoDB
        const updatedSettings = await Settings.findOneAndUpdate(
            {}, 
            { websiteName, logoURL }, 
            { upsert: true, new: true }
        );

        return NextResponse.json(updatedSettings, { status: 200 });
    } catch (error) {
        console.error("Error updating settings:", error);
        return NextResponse.json({ message: "Error updating settings" }, { status: 500 });
    }
}
