import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the TypeScript Interface
interface IQuotation extends Document {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
  service: string;
  createdAt: Date;
  subPackage: string,
}

// Define Mongoose Schema
const quotationSchema = new Schema<IQuotation>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    message: { type: String, required: true },
    subPackage: { type: String },
    service: { type: String},

    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Define Mongoose Model
const Quotation: Model<IQuotation> =
  mongoose.models.Quotation || mongoose.model<IQuotation>('Quotation', quotationSchema);

export default Quotation;
