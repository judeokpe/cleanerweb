import { NextApiRequest, NextApiResponse } from "next";

import Settings from "../../models/Settings";

import { connectDB } from "@/app/utils/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();

    if (req.method === "GET") {
        try {
            const settings = await Settings.findOne({}) || { websiteName: "", logoURL: "", testimonies: [] };
            return res.status(200).json(settings);
        } catch (error) {
            return res.status(500).json({ message: "Error fetching settings" });
        }
    }

    if (req.method === "PUT") {
        try {
            const { websiteName, logoURL, testimonies } = req.body;
            const settings = await Settings.findOneAndUpdate({}, { websiteName, logoURL, testimonies }, { upsert: true, new: true });
            return res.status(200).json(settings);
        } catch (error) {
            return res.status(500).json({ message: "Error updating settings" });
        }
    }

   

    return res.status(405).json({ message: "Method not allowed" });
}
