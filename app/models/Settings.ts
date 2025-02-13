import mongoose from "mongoose";

const TestimonySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  position: { type: String, trim: true },
  message: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5, default: 5 }, // Rating between 1-5
}, { timestamps: true });

const SettingsSchema = new mongoose.Schema({
  websiteName: { type: String, required: true, trim: true },
  logoURL: { type: String, trim: true },
  testimonies: { type: [TestimonySchema], default: [] },
}, { timestamps: true });

export default mongoose.models.Settings || mongoose.model("Settings", SettingsSchema);
