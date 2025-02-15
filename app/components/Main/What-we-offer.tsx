"use client";
import React from "react";
import Card from "../Card";
import Button from "../ui/Button";
import Link from "next/link";

function Offer({ websiteName }: { websiteName: string }) {
    return (
        <div className="bg-[#f5f5f5] dark:bg-gray-900 py-16 px-6 my-[100px]">
            {/* Header Text */}
            <div className="text-center max-w-[700px] mx-auto">
                <p className="text-2xl font-bold uppercase text-green-600">What We Offer</p>
                <p className="text-gray-600 mt-4">
                    Experience the unmatched {websiteName || "SPARKLE"} touch—where every corner gleams with perfection,
                    transforming your space into a sanctuary of freshness and joy. Because a spotless
                    environment isn’t just about cleanliness—it’s about creating a brighter, happier
                    place for you to thrive!
                </p>
            </div>

            {/* Card Grid */}
            <div className="mt-12 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-items-center">

                <Card
                    imgSrc="/residential.webp"
                    title="Residential Cleaning"
                    description="Keep your home spotless with our professional cleaning services."
                />
                <Card
                    imgSrc="/commercial.webp"
                    title="Commercial Cleaning"
                    description="Ensure a pristine workspace with our expert office cleaning solutions."
                />
                <Card
                    imgSrc="/cleaning-service.webp"
                    title="Deep Cleaning"
                    description="Thorough and detailed cleaning for a truly refreshed space."
                />
                <Card
                    imgSrc="/end-tenancy.webp"
                    title="End of Tenancy Clenaing"
                    description="Seamless transition with spotless cleaning before or after moving."
                />
                <Card
                    imgSrc="/eco.webp"
                    title="Eco-Friendly Cleaning"
                    description="Sustainable and non-toxic cleaning solutions for a healthier environment."
                />
                
                <Card
                    imgSrc="/new.webp"
                    title="New Build Cleaning"
                    description="Thorough post-construction cleaning to make your new build move-in ready."
                />

            </div>
            <Link href="/services" className="mt-18 flex justify-center items-center">
                <Button variant="gradient" className="hover:animate-bounce">View All Services</Button>
            </Link>




        </div>
    );
}

export default Offer;
