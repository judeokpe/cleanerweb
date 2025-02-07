
"use client";

import { useState } from 'react';
import Button from '@/app/components/ui/Button';

export default function QuotationForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        email: '',
        time: '',
        service: 'General inquiry',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/quotation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send quotation');

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                service: 'General inquiry',
                message: '',
            });
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    return (
        <div className="py-16 bg-blue-50 dark:bg-gray-900 dark:border-t-6">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-white">Get Your Free Estimation</h2>
                <p className="mt-4 text-center text-lg text-blue-600 dark:text-gray-400">
                    Fill in the form below to request a free quotation for our services.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white dark:bg-gray-900 dark:text-red p-6 rounded-md shadow-md">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 block w-full rounded-md border-b-[4px] px-3 py-2 border-green-500 shadow-sm focus:ring-0 focus:border-transparent text-green-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 block w-full rounded-md border-b-[4px] px-3 py-2 border-green-500 shadow-sm focus:ring-0 focus:border-transparent text-green-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-white">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-2 block w-full rounded-md border-b-[4px] px-3 py-2 border-green-500 shadow-sm focus:ring-0 focus:border-transparent text-green-900"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-white">
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-b-[4px] px-3 py-2 border-green-500 shadow-sm focus:ring-0 focus:border-transparent text-green-900"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-white">
                                Time
                            </label>
                            <input
                                type="time"
                                id="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-b-[4px] px-3 py-2 border-green-500 shadow-sm focus:ring-0 focus:border-transparent text-green-900"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-white">
                            Service Type
                        </label>
                        <select
                            id="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="mt-2 block w-full rounded-md border-b-[4px] px-3 py-2 border-green-500 shadow-sm focus:ring-0 focus:border-transparent text-green-900"
                        >
                            <option>General inquiry</option>
                            <option>Deep cleaning</option>
                            <option>Commercial cleaning</option>
                            <option>Domestic cleaning</option>
                            <option>End-of-tenancy cleaning</option>
                            <option>Upholstery cleaning</option>
                            <option>Logistics & Merchandise cleaning</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="mt-2 block w-full rounded-md border-b-[4px] px-3 py-2 border-green-500 shadow-sm focus:ring-0 focus:border-transparent text-green-900 text-xl md:text-2xl  h-16"
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? (
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
                                "Request Quotation"
                            )}
                        </Button>
                    </div>
                </form>
                {status === 'success' && (
                    <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md" aria-live="polite">
                        Quotation request sent successfully!
                    </div>
                )}

                {status === 'error' && (
                    <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md" aria-live="polite">
                        Failed to send request. Please try again.
                    </div>
                )}
            </div>
        </div>
    );
}
