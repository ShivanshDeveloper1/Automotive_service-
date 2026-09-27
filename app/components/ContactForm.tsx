"use client";

import { FormEvent, useState } from "react";

const serviceOptions = [
  "Interior detailing",
  "Exterior detailing",
  "Full detail",
  "Window tinting",
  "Paint or body repair",
  "Rust or winter protection",
  "Maintenance",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState("");

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formElement = event.currentTarget;
  const form = new FormData(formElement);

  const data = {
    name: String(form.get("name") || ""),
    email: String(form.get("email") || ""),
    phone: String(form.get("phone") || ""),
    vehicle: String(form.get("vehicle") || ""),
    service: String(form.get("service") || ""),
    message: String(form.get("message") || ""),
  };

  setStatus("Sending...");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send");
    }

    formElement.reset();

    setStatus("Thanks! Your inquiry has been sent.");
  } catch (error) {
    console.error(error);
    setStatus("Something went wrong. Please try again.");
  }
}
  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-field"><label htmlFor="name">Name</label><input id="name" name="name" type="text" autoComplete="name" required /></div>
    <div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
    <div className="form-field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
    <div className="form-field"><label htmlFor="vehicle">Vehicle type</label><input id="vehicle" name="vehicle" type="text" placeholder="Sedan, SUV, truck..." /></div>
    <div className="form-field full"><label htmlFor="service">Preferred service</label><select id="service" name="service" defaultValue=""><option value="" disabled>Select a service</option>{serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></div>
    <div className="form-field full"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Tell us what your vehicle needs." required /></div>
    <button className="button form-submit" type="submit">Prepare email inquiry <span aria-hidden="true">↗</span></button>
    <p className="form-status" aria-live="polite">{status || "This form opens your email app. No information is stored on this website."}</p>
  </form>;
}
