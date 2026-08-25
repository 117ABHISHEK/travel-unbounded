"use client";

import { useState } from "react";

interface FormData {
  fullName: string;
  countryCode: string;
  contactNumber: string;
  email: string;
  dateOfTravel: string;
  numberOfPeople: number;
  hotelCategory: string;
  numberOfChildren: number;
}

const initialState: FormData = {
  fullName: "",
  countryCode: "+91",
  contactNumber: "",
  email: "",
  dateOfTravel: "",
  numberOfPeople: 1,
  hotelCategory: "Standard",
  numberOfChildren: 0,
};

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "numberOfPeople" || name === "numberOfChildren" ? Number(value) : value,
    }));
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";

    const phoneRegex = /^[0-9]{7,15}$/;
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!phoneRegex.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Enter a valid phone number (digits only).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.dateOfTravel) {
      newErrors.dateOfTravel = "Travel date is required.";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(formData.dateOfTravel);
      if (selected <= today) {
        newErrors.dateOfTravel = "Travel date must be in the future.";
      }
    }

    if (formData.numberOfPeople < 1) newErrors.numberOfPeople = "At least 1 person is required.";
    if (formData.numberOfChildren < 0) newErrors.numberOfChildren = "Cannot be negative.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setFormData(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong while submitting your enquiry."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
        <p className="text-green-800 font-semibold">Thank you!</p>
        <p className="text-green-700 mt-1">Our travel expert will contact you within 24 hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-800 underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
        {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
      </div>

      <div className="flex gap-2">
        <div className="w-24">
          <label className="block text-sm font-medium mb-1">Code</label>
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-full border rounded-md px-2 py-2"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+971">+971</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Contact Number</label>
          <input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.contactNumber && <p className="text-red-600 text-sm mt-1">{errors.contactNumber}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Date of Travel</label>
        <input
          type="date"
          name="dateOfTravel"
          value={formData.dateOfTravel}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
        {errors.dateOfTravel && <p className="text-red-600 text-sm mt-1">{errors.dateOfTravel}</p>}
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Number of People</label>
          <input
            type="number"
            name="numberOfPeople"
            min={1}
            value={formData.numberOfPeople}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.numberOfPeople && <p className="text-red-600 text-sm mt-1">{errors.numberOfPeople}</p>}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Children</label>
          <input
            type="number"
            name="numberOfChildren"
            min={0}
            value={formData.numberOfChildren}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.numberOfChildren && <p className="text-red-600 text-sm mt-1">{errors.numberOfChildren}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Hotel Category</label>
        <select
          name="hotelCategory"
          value={formData.hotelCategory}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        >
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-md font-medium"
      >
        {status === "submitting" ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  );
}