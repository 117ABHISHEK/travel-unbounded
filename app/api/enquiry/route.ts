import dbConnect from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

const ALLOWED_CATEGORIES = ["Standard", "Deluxe", "Luxury"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9]{7,15}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const errors: string[] = [];

    if (!body.fullName || typeof body.fullName !== "string" || !body.fullName.trim()) {
      errors.push("Full name is required.");
    }

    if (!body.contactNumber || !PHONE_REGEX.test(String(body.contactNumber).trim())) {
      errors.push("A valid contact number is required.");
    }

    if (!body.email || !EMAIL_REGEX.test(String(body.email).trim())) {
      errors.push("A valid email is required.");
    }

    const travelDate = new Date(body.dateOfTravel);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (!body.dateOfTravel || isNaN(travelDate.getTime()) || travelDate <= today) {
      errors.push("Date of travel must be a valid future date.");
    }

    const numberOfPeople = Number(body.numberOfPeople);
    if (!Number.isFinite(numberOfPeople) || numberOfPeople < 1) {
      errors.push("Number of people must be at least 1.");
    }

    const numberOfChildren = Number(body.numberOfChildren ?? 0);
    if (!Number.isFinite(numberOfChildren) || numberOfChildren < 0) {
      errors.push("Number of children cannot be negative.");
    }

    if (!body.hotelCategory || !ALLOWED_CATEGORIES.includes(body.hotelCategory)) {
      errors.push("Hotel category must be Standard, Deluxe, or Luxury.");
    }

    if (errors.length > 0) {
      return Response.json(
        { success: false, message: errors.join(" ") },
        { status: 400 }
      );
    }

    await dbConnect();

    await Enquiry.create({
      fullName: body.fullName.trim(),
      countryCode: body.countryCode || "+91",
      contactNumber: String(body.contactNumber).trim(),
      email: String(body.email).trim().toLowerCase(),
      dateOfTravel: travelDate,
      numberOfPeople,
      hotelCategory: body.hotelCategory,
      numberOfChildren,
    });

    return Response.json(
      { success: true, message: "Enquiry submitted successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Enquiry API error:", err);
    return Response.json(
      { success: false, message: "Something went wrong while submitting your enquiry." },
      { status: 500 }
    );
  }
}