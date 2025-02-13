"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";

export default function Login() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const result = await signIn("credentials", {
                redirect: false, // Prevents default redirect
                email: form.email,
                password: form.password,
            });

            if (result?.error) {
                throw new Error(result.error);
            }

            // Fetch user session to determine role
            const res = await fetch("/api/auth/session");
            const session = await res.json();

            // Redirect based on user role
            if (session?.user?.role === "admin") {
                router.push("/admin");
            } else {
                router.push("/testimony");
            }
        } catch (err: any) {
            setError(err.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center dark:bg-gray-900 min-h-screen bg-gray-100 px-4">
            <div className="w-full  dark:text-black dark:bg-gray-100 max-w-md p-6 bg-white shadow-lg rounded-lg">
                {/* Logo */}
                <div className="flex items-center justify-center gap-2">
                    <Image src="/logo.jpg" alt="logo" width={40} height={40} className="w-10 h-10 object-cover" />
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent uppercase">
                        SPARKLE
                    </p>
                </div>

                {/* Form Title */}
                <h2 className="text-2xl font-semibold text-center mt-4">Welcome Back</h2>

                {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

                {/* Form */}
                <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <Button
                        type="submit"
                        className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex justify-center items-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <svg
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
                            </svg>
                        ) : (
                            "Login"
                        )}
                    </Button>
                </form>

                {/* Redirect to Sign Up */}
                <p className="text-sm text-gray-600 text-center mt-4">
                    Don &apos;t have an account?{" "}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
