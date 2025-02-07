import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

// Disable body parser for file uploads
export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req: Request) {
    return new Promise((resolve, reject) => {
        const form = new IncomingForm({
            uploadDir: path.join(process.cwd(), "public/uploads"),
            keepExtensions: true,
            multiples: false,
        });

        form.parse(req, async (err, fields, files) => {
            if (err) return reject(NextResponse.json({ message: "Upload failed" }, { status: 500 }));

            const uploadedFile = files.logo?.[0]; // Get uploaded file
            if (!uploadedFile) return reject(NextResponse.json({ message: "No file uploaded" }, { status: 400 }));

            const filePath = `/uploads/${uploadedFile.newFilename}`;

            return resolve(NextResponse.json({ filePath }, { status: 200 }));
        });
    });
}
