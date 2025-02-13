import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import fs from "fs/promises";
import path from "path";

// Disable Next.js' built-in body parser
export const config = {
    api: {
        bodyParser: false,
    },
};

// Helper function to parse the form data
async function parseFormData(req: Request) {
    return new Promise<{ fields: any; files: any }>((resolve, reject) => {
        const form = new IncomingForm({
            uploadDir: path.join(process.cwd(), "public/uploads"),
            keepExtensions: true,
            multiples: false,
        });

        form.parse(req as any, (err, fields, files) => {
            if (err) reject(err);
            else resolve({ fields, files });
        });
    });
}

export async function POST(req: Request) {
    try {
        const { fields, files } = await parseFormData(req);
        const uploadedFile = files.logo?.[0]; // Get uploaded file

        if (!uploadedFile) {
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }

        const filePath = `/uploads/${uploadedFile.newFilename}`;

        return NextResponse.json({ filePath }, { status: 200 });
    } catch (error:any) {
        return NextResponse.json({ message: "Upload failed", error: error.message }, { status: 500 });
    }
}
