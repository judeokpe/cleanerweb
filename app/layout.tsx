// 'use client';
// import { SettingsProvider, useSettings } from './context/SettingsContext';
// import { useState, useEffect } from 'react';
// import { ThemeProvider } from './context/ThemeContext';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import { ChevronUpIcon } from '@heroicons/react/24/outline';
// import './globals.css';
// import LoadingAnimation from './components/Loading/LoadingAnimation';

// export default function RootLayout({

//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [showScroll, setShowScroll] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScroll(window.scrollY > 300);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };
//   // const { websiteName, logoURL } = useSettings();
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//         <SettingsProvider> {/* Wrap everything inside SettingsProvider */}
//           <ThemeProvider>
//             {isLoading && <LoadingAnimation />}
//             <div className="min-h-screen flex flex-col">
//               <Header />
//               <main className="flex-grow pt-20">
//                 {children}
//               </main>
//               <Footer />
//             </div>
//             {showScroll && (
//               <button
//                 onClick={scrollToTop}
//                 className="fixed bottom-6 right-6 p-3 rounded-full bg-green-600 dark:bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
//               >
//                 <ChevronUpIcon className="h-6 w-6" />
//               </button>
//             )}
//           </ThemeProvider>
//         </SettingsProvider>
//       </body>
//     </html>
//   );
// }


// 'use client';
// import { SettingsProvider, useSettings } from './context/SettingsContext';
// import { useState, useEffect } from 'react';
// import { ThemeProvider } from './context/ThemeContext';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import { ChevronUpIcon } from '@heroicons/react/24/outline';
// import './globals.css';
// import LoadingAnimation from './components/Loading/LoadingAnimation';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [showScroll, setShowScroll] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => setShowScroll(window.scrollY > 300);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 0);
//     return () => clearTimeout(timer);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//         <SettingsProvider>
//           <ThemeProvider>
//             <Content isLoading={isLoading} showScroll={showScroll} scrollToTop={scrollToTop}>
//               {children}
//             </Content>
//           </ThemeProvider>
//         </SettingsProvider>
//       </body>
//     </html>
//   );
// }

// function Content({ isLoading, showScroll, scrollToTop, children }: any) {
//   const { websiteName, logoURL } = useSettings(); // Extract settings

//   return (
//     <>
//       {isLoading && <LoadingAnimation />}
//       <div className="min-h-screen flex flex-col">
//         <Header websiteName={websiteName} logoURL={logoURL} />
//         <main className="flex-grow pt-20">{children}</main>
//         <Footer websiteName={websiteName} />
//       </div>
//       {showScroll && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 p-3 rounded-full bg-green-600 dark:bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
//         >
//           <ChevronUpIcon className="h-6 w-6" />
//         </button>
//       )}
//     </>
//   );
// }


'use client';

import { SettingsProvider, useSettings } from './context/SettingsContext';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SessionProvider } from 'next-auth/react'; // Import SessionProvider
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import './globals.css';
import LoadingAnimation from './components/Loading/LoadingAnimation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showScroll, setShowScroll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <SessionProvider> {/* Wrap entire app inside SessionProvider */}
          <SettingsProvider>
            <ThemeProvider>
              <Content isLoading={isLoading} showScroll={showScroll} scrollToTop={scrollToTop}>
                {children}
              </Content>
            </ThemeProvider>
          </SettingsProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

function Content({ isLoading, showScroll, scrollToTop, children }: any) {
  const { websiteName, logoURL } = useSettings(); // Extract settings

  return (
    <>
      {isLoading && <LoadingAnimation />}
      <div className="min-h-screen flex flex-col">
        <Header websiteName={websiteName} logoURL={logoURL} />
        <main className="flex-grow pt-20">{children}</main>
        <Footer websiteName={websiteName} />
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-green-600 dark:bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </>
  );
}
