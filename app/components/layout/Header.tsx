// 'use client';

// import Link from 'next/link';
// import ThemeToggle from '../ui/ThemeToggle';
// import { useState } from 'react';
// import { Bars3Icon, LinkIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import { PhoneArrowDownLeftIcon } from '@heroicons/react/16/solid';
// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'Services', href: '/services' },
//   { name: 'About', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
//         <div className="flex lg:flex-1">
//           <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold">
//             CleanJet
//           </Link>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? (
//               <XMarkIcon className="h-6 w-6" />
//             ) : (
//               <Bars3Icon className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//         <div className="hidden lg:flex lg:gap-x-12">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="text-sm font-semibold leading-6 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-2 ">
//           <Link href ="tel:+17573348357"  className='flex mr-2'>
//           <div className="rounded-full bg-green-600 dark:bg-white p-1">
//             <PhoneArrowDownLeftIcon className= "dark:text-green-600 text-white w-5 h-5  "/>
//           </div>
//           <span>+18929773852</span>
//           </Link>
         
        
          
      
//           <ThemeToggle />
//         </div>
//       </nav>
      
//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden">
//           <div className="space-y-1 px-2 pb-3 pt-2">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }



'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { PhoneArrowDownLeftIcon } from '@heroicons/react/16/solid';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold">
            CleanJet
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
              <PhoneArrowDownLeftIcon className="dark:text-green-600 text-white w-5 h-5" />
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
          </div>
        </div>
      )}
    </header>
  );
}
