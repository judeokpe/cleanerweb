'use client';

import { useState } from 'react';
import Button from '@/app/components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', message: '', phone:'' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 text-center">
            Get in touch with us for a free quote
          </p>
          
          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
              Message sent successfully!
            </div>
          )}
          
          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
              Failed to send message. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-16 space-y-6">
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
              <Button 
                type="submit" 
                className="w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}