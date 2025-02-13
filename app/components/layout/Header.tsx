

'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { PhoneArrowDownLeftIcon } from '@heroicons/react/16/solid';
import { motion } from "framer-motion";
import Image from 'next/image';
import { useSettings } from '@/app/context/SettingsContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header({websiteName, logoURL}:{websiteName:string, logoURL:string}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Get settings from context (instead of fetching with axios)
 

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 flex items-center uppercase text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
          >
            <Image src={logoURL || '/logo.jpg'} width={40} height={40} className='w-12 h-12' alt='logo' />
            {websiteName || 'SPARKLE'}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-semibold leading-6 transition-transform duration-200 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 ${
                pathname === item.href ? 'text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
              )}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-2">
          <Link href="tel:+17573348357" className="flex mr-2">
            <div className="rounded-full bg-green-600 dark:bg-white p-1">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }} // Creates a shaking effect
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }} // Controls animation speed and repetition
              >
                <PhoneArrowDownLeftIcon className="dark:text-green-600 text-white w-5 h-5" />
              </motion.div>
            </div>
            <span className='ml-2'>+18929773852</span>
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
               <Link href="tel:+17573348357" className="flex mr-2">
            <div className="rounded-full bg-green-600 dark:bg-white p-1">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }} // Creates a shaking effect
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }} // Controls animation speed and repetition
              >
                <PhoneArrowDownLeftIcon className="dark:text-green-600 text-white w-5 h-5" />
              </motion.div>
            </div>
            <span className='ml-2'>+18929773852</span>
          </Link>
          </div>
        </div>
      )}
    </header>
  );
}
