// 'use client';

// import { useState, useEffect } from 'react';
// import { ThemeProvider } from './context/ThemeContext';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import { ChevronUpIcon } from '@heroicons/react/24/outline';
// import './globals.css';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [showScroll, setShowScroll] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScroll(window.scrollY > 300);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//         <ThemeProvider>
//           <div className="min-h-screen flex flex-col">
//             <Header />
//             <main className="flex-grow pt-20">{children}</main>
//             <Footer />
//           </div>
//           {showScroll && (
//             <button
//               onClick={scrollToTop}
//               className="fixed bottom-6 right-6 p-3 rounded-full bg-green-600 dark:bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
//             >
//               <ChevronUpIcon className="h-6 w-6" />
//             </button>
//           )}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';
// import { ThemeProvider } from './context/ThemeContext';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import { ChevronUpIcon } from '@heroicons/react/24/outline';
// // Import the loading animation
// import './globals.css';
// import LoadingAnimation from './components/Loading/LoadingAnimation';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [showScroll, setShowScroll] = useState(false);
//   const [isLoading, setIsLoading] = useState(true); // State to track if the page is loading

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScroll(window.scrollY > 300);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     // Simulate loading process
//     const timer = setTimeout(() => {
//       setIsLoading(false); // After 2 seconds, set loading to false
//     }, 2000);

//     return () => clearTimeout(timer); // Clear the timer on unmount
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//         <ThemeProvider>
//           {isLoading && <LoadingAnimation />} {/* Show loading animation when isLoading is true */}
//           <div className="min-h-screen flex flex-col">
//             <Header />
//             <main className="flex-grow pt-20">{children}</main>
//             <Footer />
//           </div>
//           {showScroll && (
//             <button
//               onClick={scrollToTop}
//               className="fixed bottom-6 right-6 p-3 rounded-full bg-green-600 dark:bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
//             >
//               <ChevronUpIcon className="h-6 w-6" />
//             </button>
//           )}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
 // Import the loading animation
import './globals.css';
import LoadingAnimation from './components/Loading/LoadingAnimation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showScroll, setShowScroll] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track if the page is loading

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false); // After 2 seconds, set loading to false
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider>
          {isLoading && <LoadingAnimation />} {/* Show loading animation when isLoading is true */}
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 p-3 rounded-full bg-green-600 dark:bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
            >
              <ChevronUpIcon className="h-6 w-6" />
            </button>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
