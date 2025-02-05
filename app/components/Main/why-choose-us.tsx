
"use client"
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react'

function WhyChooseUs() {
    return (
        <div className='flex md:flex-row flex-col-reverse p-4 bg-gray-100 dark:bg-gray-900 space-x-2' >

            <div className="textdiv" >
                <p className='uppercase text-green-600 text-2xl font-bold pb-8'>
                    CleanJet – Your Trusted Cleaning Experts</p>
                <p className='text-justify'>At CleanJet Cleaning Services, we pride ourselves on providing fast, efficient,<br /> and high-quality cleaning solutions tailored to meet the unique needs of both homes and businesses. <br />  We understand the importance of a spotless environment, <br /> which is why we go above and beyond to deliver exceptional results every time.</p>
                <div className="mt-12">
                    <div className="icon flex md:flex-row flex-col md:space-x-2 mb-4 ">
                        <div className="">
                            <div className="">
                                <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Use These Advanced Equipment</span>
                            </div>
                            <div className="">
                                <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Eco-Friendly Cleaning</span>
                            </div>
                            <div className="">
                                <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Thorough & Safe</span>
                            </div>
                            <div className="">
                                <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Healthier Spaces</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="">
                                <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Customer Satisfaction</span>
                            </div>
                            <div className="">
                                <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Attention to Detail</span>
                            </div>
                            <div className="">
                                <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Trusted Service</span>
                            </div>
                            <div className="">
                                <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Fresh & Comfortable</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="imgdiv pb-6 md:pb-0">
                <Image className='rounded-bl-[100px]  rounded-tr-[100px] h-[400px] w-[500px]' src="/item3.webp" width={500} height={500} alt='Cleaning equipment' />
            </div>
        </div>
    )
}

export default WhyChooseUs;
