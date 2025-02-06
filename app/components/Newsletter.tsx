"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (!email) {
      setMessage("Please enter a valid email.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscription successful! Check your email.");
        setEmail("");
      } else {
        setMessage("Failed to subscribe. Try again later.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 text-gray-900 dark:text-gray-800 bg-white dark:bg-gray-100 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && <p className="mt-2 text-sm text-center text-gray-700 dark:text-gray-300">{message}</p>}
    </div>
  );
}
