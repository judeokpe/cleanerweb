import mongoose, { Schema, Document, Model } from 'mongoose';
interface IInquiry extends Document {
  name: string;
  email: string;
  message: string;
  phone: string;
  createdAt: Date;
}

const InquirySchema: Schema<IInquiry> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true },
    phone: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Inquiry: Model<IInquiry> = mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);

export default Inquiry;
