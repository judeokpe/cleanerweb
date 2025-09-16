"use client"
import React from 'react'
import Image from "next/image"
import { CheckBadgeIcon } from '@heroicons/react/16/solid'
import Button from '../ui/Button'
import { ArrowDownRightIcon } from '@heroicons/react/24/solid'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import { motion } from 'framer-motion'


const ContainerVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 1.0,
            ease: 'easeOut',
            staggerChildren: 0.4
        }
    }
}
const childrenVariant = {
    hidden: { opacity: 0, y: 70 },
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
    hidden: { clipPath: "inset(0 80% 0 50%" },
    visible: {
        clipPath: "inset(0 0% 0 0%",
        transition: { duration: 2.0, ease: "easeInOut" },
    },
};


function Service({ websiteName }: { websiteName: string }) {
    return (
        <div>
            <div className="shadow-gray-400 dark:shadow-white  shadow-b shadow-sm py-24 sm:py-4 md:px-6 p-4">
                <div className="md:flex-row flex flex-col space-x-4">
                    <motion.div initial='hidden'
                        animate='visible'
                        variants={imageVariant}>
                        <Image className='h-[500px] w-[600px] object-cover rounded-tl-[20px]  md:rounded-tl-[400px] ' src={"/weare.webp"} width={500} height={300} alt="clean-equipement" />

                    </motion.div>
                    <div className="bg-gray-100 dark:bg-gray-900 flex-1 px-4 text-gray-600 dark:text-gray-300">
                        <div className="headertext">
                            <p className='text-center font-bold text-2xl text-green-600'>WHO ARE WE?</p>
                        </div>
                        <motion.div className="smalltext" initial="hidden"
                            whileInView={"visible"}
                            viewport={{ once: true, amount: 0.3 }}
                            variants={ContainerVariants}>
                            <p className='text-md text-justify'>
                                At Sparkle Cleaning Services, we believe that a clean environment enhances comfort, productivity, and well-being. Our dedicated team delivers top-tier cleaning solutions for homes, offices, commercial properties, and vehicles, ensuring every space and car is spotless and inviting.

                                With our mobile car wash service, we bring convenience to your doorstep, providing thorough interior and exterior cleaning while you focus on your day. We use advanced techniques and eco-friendly products to ensure a sparkling finish and a healthier environment.

                                At Sparkle Cleaning Services, we’re committed to transforming your spaces—and your vehicle—into pristine, refreshing havens.
                            </p>
                        </motion.div>
                        <div className="icon flex md:flex-row flex-col md:space-x-2 mb-4 ">
                            <div className="">
                                <div className=""  >
                                    <motion.span initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true }} className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Advanced Techniques</motion.span>
                                </div>
                                <motion.div className="" initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true }}>
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Personalized Consultations</span>
                                </motion.div>
                                <motion.div className="" initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true }}>
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Professional & Friendly Staff</span>
                                </motion.div>
                                <motion.div className="" initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true }}>
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Convenient Online Scheduling</span>
                                </motion.div>
                            </div>
                            <div className="flex-1">
                                <motion.div className="" initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true }}>
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Comprehensive Care</span>
                                </motion.div>
                                <motion.div className=""  initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}>
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Eco-Friendly Solutions</span>
                                </motion.div>
                                <motion.div className=""  initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}>
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Post-Construction Cleaning</span>
                                </motion.div>
                                <motion.div className=""  initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}>
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />DBS certified staff</span>
                                </motion.div>
                            </div>

                        </div>
                        <Link href="#quotation" className="pt-4">
                            <Button className='w-[120px] flex items-center'>Find Us  <ArrowUpRightIcon className='w-5 h-5 font-bold ml-2' /></Button>

                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Service
