import mongoose, { Document, Schema, Model } from 'mongoose';

interface INewsletter extends Document {
  email: string;
  subscribedAt: Date;
}

const NewsletterSchema: Schema<INewsletter> = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Newsletter: Model<INewsletter> = mongoose.models.Newsletter || mongoose.model<INewsletter>('Newsletter', NewsletterSchema);

export default Newsletter;