import mongoose from "mongoose";

const TestimonySchema = new mongoose.Schema({
    name: String,
    position: String,
    message: String,
    rating: Number, 
});

const SettingsSchema = new mongoose.Schema({
    websiteName: String,
    logoURL: String,
    testimonies: [TestimonySchema], 
});

export default mongoose.models.Settings || mongoose.model("Settings", SettingsSchema);
