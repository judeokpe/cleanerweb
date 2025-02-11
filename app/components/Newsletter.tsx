"use client";
import { useState } from "react";
import axios from "axios";
// import ClipLoader from "react-spinners/ClipLoader"; // Import loader

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post("/api/newsletter", { email });

      setMessage(response.data.message);
      setEmail("");
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data.error || "Failed to subscribe. Try again.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
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
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex justify-center items-center"
          disabled={loading}
        >
          {loading ? <svg
            className="animate-spin h-5 w-5 mr-3 text-white"
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
          </svg> : "Subscribe"}
        </button>
      </form>
      {message && <p className="mt-2 text-sm text-center text-gray-700 dark:text-gray-300">{message}</p>}
    </div>
  );
}
