

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { useSettings } from "@/app/context/SettingsContext";


const ContainerVariants = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 1.0,
      ease: 'easeOut',
      staggerChildren: 0.4
    }
  }
}
const childrenVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

const imageVariant = {
  hidden: { clipPath: "inset(0 50% 0 50%" },
  visible: {
    clipPath: "inset(0 0% 0 0%",
    transition: { duration: 2.0, ease: "easeInOut" },
  },
};

const generateBubbles = (count: number) =>
  Array.from({ length: count }).map(() => ({
    width: Math.random() * 50 + 20,
    height: Math.random() * 50 + 20,
    top: Math.random() * 100,
    left: Math.random() * 100,
  }));

function Hero({ websiteName }: { websiteName: string }) {
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
            <motion.h1 className="text-4xl font-bold tracking-tight sm:text-6xl"

              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={ContainerVariants}>
              Flawless Clean, Effortless Shine
            </motion.h1>
            <motion.p variants={childrenVariant}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }} className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover the pinnacle of pristine spaces with {websiteName} Cleaning
              Services. Our swift and dependable team ensures your environment
              gleams brilliantly in no time. Embrace the {websiteName} touch today— where
              immaculate spaces lead to joyful places!
            </motion.p>
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
          <motion.div className="relative w-full max-w-lg hidden lg:block"

            initial='hidden'
            animate='visible'
            variants={imageVariant}>
            <Image
              src="/jantor.webp"
              alt="Cleaning Service"
              width={900}
              height={900}
              className="rounded-xl object-cover shadow-lg h-[350px] w-[550px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
