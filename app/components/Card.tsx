
"use client";

import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import { SparklesIcon } from "@heroicons/react/16/solid";

interface CardProps {
  imgSrc?: string;
  title: string;
  description: string;
  
}

function Card({ imgSrc, title, description }: CardProps) {
  return (
    <div className="shadow-lg p-6 w-[320px] bg-white dark:bg-gray-800 rounded-xl">
      {/* Image Section */}
      <div className="w-full flex justify-center">
        <Image
          src={imgSrc || "/cleaning.webp"} 
          width={300}
          height={200}
 

          alt={title || "Cleaning Service"}
          className="h-[200px] w-[300px] object-cover rounded-lg"
  
        />
      </div>

      {/* Text Section */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-green-600 uppercase">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>

      {/* Button Section */}
      <div className="mt-5 flex justify-center">
        <Button variant="gradient" className="flex">Request Service <SparklesIcon className="w-4 h-4 ml-2" /></Button>
      </div>
    </div>
  );
}

export default Card;
