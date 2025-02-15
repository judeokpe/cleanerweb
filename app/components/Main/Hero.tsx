

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { useSettings } from "@/app/context/SettingsContext";
const generateBubbles = (count: number) =>
  Array.from({ length: count }).map(() => ({
    width: Math.random() * 50 + 20,
    height: Math.random() * 50 + 20,
    top: Math.random() * 100,
    left: Math.random() * 100,
  }));

function Hero({websiteName}:{websiteName:string}) {
  const [bubbles, setBubbles] = useState<{ width: number; height: number; top: number; left: number; }[]>([]);

  useEffect(() => {
    setBubbles(generateBubbles(10));
  }, []);

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated Bubbles */}
      <motion.div className="absolute inset-0 z-0 flex justify-center items-center">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            className="absolute bg-blue-300 dark:bg-blue-700 rounded-full opacity-30"
            style={{
              width: `${bubble.width}px`,
              height: `${bubble.height}px`,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
            }}
            animate={{
              y: ["0%", "-50%", "0%"],
              x: ["0%", "10%", "-10%", "0%"],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 px-2 lg:px-4">
        <div className="py-14 sm:py-48 lg:py-32 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Flawless Clean, Effortless Shine
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover the pinnacle of pristine spaces with {websiteName} Cleaning
              Services. Our swift and dependable team ensures your environment
              gleams brilliantly in no time. Embrace the {websiteName} touch today— where
              immaculate spaces lead to joyful places!
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <Link href="#quotation">
                <Button size="lg">Get a Quote</Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full max-w-lg hidden md:block">
            <Image
              src="/jantor.webp"
              alt="Cleaning Service"
              width={900}
              height={900}
              className="rounded-xl object-cover shadow-lg h-[350px] w-[550px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
