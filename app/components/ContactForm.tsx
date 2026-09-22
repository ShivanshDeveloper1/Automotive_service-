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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const service = String(form.get("service") || "");
    const vehicle = String(form.get("vehicle") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Pegcity service inquiry${service ? ` - ${service}` : ""}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${String(form.get("phone") || "Not provided")}\nPreferred service: ${service || "Not selected"}\nVehicle type: ${vehicle || "Not provided"}\n\nMessage:\n${message}`);
    setStatus("Opening your email app with this inquiry ready to send.");
    window.location.href = `mailto:Pegcitycustomz@gmail.com?subject=${subject}&body=${body}`;
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
