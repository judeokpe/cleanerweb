// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';

// type Theme = 'light' | 'dark';

// type ThemeContextType = {
//   theme: Theme;
//   toggleTheme: () => void;
// };

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, setTheme] = useState<Theme>('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') as Theme | null;
//     if (savedTheme) {
//       setTheme(savedTheme);
//     } else {
//       // Default to system preference
//       const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//       setTheme(prefersDark ? 'dark' : 'light');
//     }
//   }, []);

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [theme]);
  

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);
  
//     if (newTheme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   };
  

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// }



'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the user is on a mobile device
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    setIsMobile(mobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Force light mode on mobile
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      // Desktop: Load saved theme or default to light
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      setTheme(savedTheme || 'light');
    }
  }, [isMobile]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  const toggleTheme = () => {
    if (isMobile) {
      alert("Dark mode is disabled on mobile. Light mode is always on.");
      return;
    }
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
