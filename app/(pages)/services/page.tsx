


"use client";
import React from 'react';
import Image from 'next/image';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import Card from '@/app/components/Card';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import QuotationForm from '@/app/components/Main/enquiry';

function page() {
    return (
        <div className="bg-[#f5f5f5] dark:bg-gray-900 py-16 px-6 my-[10px]">
           <div className="text-center max-w-[700px] mx-auto">
                <h2 className="text-4xl font-bold uppercase text-green-600">What We Offer</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
                    Experience the unmatched SPARKLE touch—where every corner gleams with perfection,
                    transforming your space into a sanctuary of freshness and joy. Because a spotless
                    environment isn’t just about cleanliness—it’s about creating a brighter, happier
                    place for you to thrive!
                </p>
            </div>

            {/* Service Cards Section */}
            <div className="mt-12 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-items-center">

                <Card
                    imgSrc="/residential.webp"
                    title="Residential Cleaning"
                    description="Keep your home spotless with our professional cleaning services. We ensure every corner shines, giving you a pristine living space."
                />
                <Card
                    imgSrc="/commercial.webp"
                    title="Commercial Cleaning"
                    description="Maintain a professional and hygienic workspace with our tailored office cleaning solutions. Impress clients and boost employee productivity."
                />
                <Card
                    imgSrc="/cleaning-service.webp"
                    title="Deep Cleaning"
                    description="Our detailed deep cleaning service reaches every nook and cranny, leaving your space thoroughly refreshed and revitalized."
                />
                <Card
                    imgSrc="/end-tenancy.webp"
                    title="End of Tenancy Cleaning"
                    description="Hassle-free move with our end-of-tenancy cleaning. Ensure a spotless property to secure your deposit or welcome new tenants."
                />
                <Card
                    imgSrc="/eco.webp"
                    title="Eco-Friendly Cleaning"
                    description="Our eco-friendly cleaning solutions use non-toxic products to protect your health and the environment while maintaining high cleanliness standards."
                />
                <Card
                    imgSrc="/new.webp"
                    title="New Build Cleaning"
                    description="Get your newly constructed property move-in ready with our comprehensive post-construction cleaning service."
                />

            </div>

            {/* Call to Action */}
            
            {/* Header Section */}
            <div className="text-center max-w-[700px] mx-auto my-18">
                <h2 className="text-4xl font-bold uppercase text-green-600">Mobile Car Wash Services</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
                    Experience top-tier convenience with our mobile car wash services, bringing professional cleaning 
                    straight to your location. Whether at home, the office, or any preferred spot, our expert team 
                    ensures a spotless, showroom-quality finish for your vehicle.
                </p>
            </div>

            {/* Service Cards Section */}
            <div className="mt-12 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-items-center">
                <Card
                    imgSrc="/attentio.webp"
                    title="Meticulous Attention to Detail"
                    description="Our team pays close attention to every detail, ensuring a spotless and polished finish for your vehicle."
                />
                <Card
                    imgSrc="/car1.webp"
                    title="Premium-Quality Service"
                    description="We deliver top-notch service using high-quality products to maintain your car’s shine and protection."
                />
                <Card
                    imgSrc="/comprehensive.webp"
                    title="Comprehensive Care"
                    description="Enjoy complete exterior and interior cleaning, safeguarding your car’s value and appearance."
                />
                <Card
                    imgSrc="/cars.webp"
                    title="Satisfaction Guarantee"
                    description="Your satisfaction is our priority, and we back our service with a customer satisfaction guarantee."
                />
                <Card
                    imgSrc="/car6.webp"
                    title="Advanced Cleaning Technology"
                    description="Utilizing modern cleaning technologies for a more efficient and effective car wash experience."
                />
            </div>
            <section id="quotation">
            <QuotationForm />

            </section>
        </div>
    );
}

export default page;
