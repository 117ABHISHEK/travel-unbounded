import mongoose, { Schema, models, model } from "mongoose";

export interface IEnquiry {
  fullName: string;
  countryCode: string;
  contactNumber: string;
  email: string;
  dateOfTravel: Date;
  numberOfPeople: number;
  hotelCategory: "Standard" | "Deluxe" | "Luxury";
  numberOfChildren: number;
  createdAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>({
  fullName: { type: String, required: true, trim: true },
  countryCode: { type: String, required: true, trim: true },
  contactNumber: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  dateOfTravel: { type: Date, required: true },
  numberOfPeople: { type: Number, required: true, min: 1 },
  hotelCategory: {
    type: String,
    required: true,
    enum: ["Standard", "Deluxe", "Luxury"],
  },
  numberOfChildren: { type: Number, required: true, min: 0, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

// Avoid recompiling the model on every hot-reload in dev
const Enquiry = models.Enquiry || model<IEnquiry>("Enquiry", EnquirySchema);

export default Enquiry;