"use client"
import React from 'react'
import Image from "next/image"
import { CheckBadgeIcon } from '@heroicons/react/16/solid'
import Button from '../ui/Button'
import { ArrowDownRightIcon } from '@heroicons/react/24/solid'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
function Service() {
    return (
        <div>
            <div className="shadow-gray-400 dark:shadow-white  shadow-b shadow-sm py-24 sm:py-4 md:px-6 p-4">
                <div className="md:flex-row flex flex-col space-x-4">
                    <Image className='h-[300px] w-[600px] object-cover rounded-tl-[100px]  md:rounded-tl-[400px] ' src={"/cleaning.webp"} width={500} height={300} alt="clean-equipement" />
                    <div className="bg-gray-100 dark:bg-gray-900 flex-1 px-4 text-gray-600 dark:text-gray-300">
                        <div className="headertext">
                            <p className='text-center font-bold text-2xl text-green-600'>WHO ARE WE?</p>
                        </div>
                        <div className="smalltext">
                            <p className='text-md text-justify'>
                                At CleanJet Cleaning Services, we understand that a pristine environment fosters well-being and efficiency. Our dedicated team provides top-tier cleaning services for homes, offices, and commercial properties, ensuring every space is immaculate and inviting.
                            </p>
                        </div>
                        <div className="icon flex md:flex-row flex-col md:space-x-2 mb-4 ">
                            <div className="">
                                <div className="">
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Advanced Techniques</span>
                                </div>
                                <div className="">
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Personalized Consultations</span>
                                </div>
                                <div className="">
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Professional & Friendly Staff</span>
                                </div>
                                <div className="">
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Convenient Online Scheduling</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="">
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Comprehensive Care</span>
                                </div>
                                <div className="">
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Eco-Friendly Solutions</span>
                                </div>
                                <div className="">
                                    <span className="flex items-center space-x-2"><CheckBadgeIcon className='h-4 w-4 text-green-600 dark:text-white mr-2' />Post-Construction Cleaning</span>
                                </div>
                            </div>

                        </div>
                        <Link href="#" className="pt-4">
                    <Button  className='w-[120px] flex items-center'>Find Us  <ArrowUpRightIcon className='w-5 h-5 font-bold ml-2'/></Button>
                   
                </Link>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Service
