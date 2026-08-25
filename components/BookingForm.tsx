"use client";

import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

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

const inputClass =
  "w-full px-4 py-3 bg-white border border-ink/10 rounded-xl text-ink text-sm placeholder:text-slate/50 focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition-all duration-200";

const labelClass = "block text-sm font-medium text-navy mb-1.5";

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
      <div className="p-8 bg-teal/5 border border-teal/20 rounded-2xl text-center animate-fade-in-up">
        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✓</span>
        </div>
        <p className="text-navy font-display font-bold text-xl">Thank you!</p>
        <p className="text-slate mt-2">Our travel expert will contact you within 24 hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 px-6 py-2.5 text-sm font-medium text-teal border border-teal/30 rounded-full hover:bg-teal/5 transition-all"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      {/* Full Name */}
      <div>
        <label className={labelClass}>Full Name</label>
        <input
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1.5">{errors.fullName}</p>}
      </div>

      {/* Phone */}
      <div className="flex gap-3">
        <div className="w-28">
          <label className={labelClass}>Code</label>
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+971">+971</option>
          </select>
        </div>
        <div className="flex-1">
          <label className={labelClass}>Contact Number</label>
          <input
            name="contactNumber"
            placeholder="Phone number"
            value={formData.contactNumber}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.contactNumber && <p className="text-red-500 text-xs mt-1.5">{errors.contactNumber}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
      </div>

      {/* Date */}
      <div>
        <label className={labelClass}>Date of Travel</label>
        <input
          type="date"
          name="dateOfTravel"
          value={formData.dateOfTravel}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.dateOfTravel && <p className="text-red-500 text-xs mt-1.5">{errors.dateOfTravel}</p>}
      </div>

      {/* People & Children */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className={labelClass}>Number of People</label>
          <input
            type="number"
            name="numberOfPeople"
            min={1}
            value={formData.numberOfPeople}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.numberOfPeople && <p className="text-red-500 text-xs mt-1.5">{errors.numberOfPeople}</p>}
        </div>
        <div className="flex-1">
          <label className={labelClass}>Children</label>
          <input
            type="number"
            name="numberOfChildren"
            min={0}
            value={formData.numberOfChildren}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.numberOfChildren && <p className="text-red-500 text-xs mt-1.5">{errors.numberOfChildren}</p>}
        </div>
      </div>

      {/* Hotel Category */}
      <div>
        <label className={labelClass}>Hotel Category</label>
        <select
          name="hotelCategory"
          value={formData.hotelCategory}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3.5 bg-navy hover:bg-navy-light disabled:bg-slate/40 text-parchment rounded-xl font-display font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-navy/20"
      >
        {status === "submitting" ? (
          <LoadingSpinner size="sm" label="Submitting…" />
        ) : (
          "Submit Enquiry"
        )}
      </button>
    </form>
  );
}