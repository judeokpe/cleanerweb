

"use client";

import { useState } from "react";
import Button from "@/app/components/ui/Button";
import { Clipboard } from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "", phone: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="border p-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 text-center">
              Get in touch with us for a free quote
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border px-3.5 py-2 dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border px-3.5 py-2 dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border px-3.5 py-2 dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-2 block w-full rounded-md border px-3.5 py-2 dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <Button type="submit" className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex justify-center items-center " disabled={status === "loading"} >
                  {status === "loading" ? <svg
                    className="animate-spin h-5 w-5 mr-3  text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0116 0"
                    ></path>
                  </svg> : "Send Message"}
                </Button>
              </div>
            </form>
            
            {status === "success" && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                Message sent successfully           ✅!
              </div>
            )}

            {status === "error" && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                Failed to send message. Please try again❌.
              </div>
            )}

          </div>

          {/* Contact Information & Map */}
          <div className="space-y-6">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Our Address</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                123 Sparkle Street, New York, NY 10001
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                <strong>Email:</strong> support@Sparkle.co.uk
              </p>
            </div>

            {/* Google Map */}
            {/* <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Sparkle Location"
                className="w-full h-64 md:h-72"
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=New+York,NY"
                allowFullScreen
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
