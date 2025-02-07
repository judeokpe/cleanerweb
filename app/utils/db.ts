import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is missing in environment variables");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
    if (cached.conn) {
        console.log("✅ Using existing database connection");
        return cached.conn;
    }

    if (!cached.promise) {
        console.log("🔄 Connecting to MongoDB...");
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "cleaning-website",
            bufferCommands: false,
        }).then(mongoose => {
            console.log("✅ Database connected successfully");
            return mongoose;
        }).catch(error => {
            console.error("❌ MongoDB connection error:", error);
            throw error;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
