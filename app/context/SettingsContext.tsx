"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface Settings {
  websiteName: string;
  logoURL: string;
}

export type SettingsContextType = {
  websiteName: string;
  logoURL: string;
  setWebsiteName: (name: string) => void;
  setLogoURL: (url: string) => void;
};

const defaultSettings: Settings = {
  websiteName: "SPARKLE",
  logoURL: "/sparkle.jpg",
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();
        setSettings(data);
      } catch (error) {
        console.error("Failed to fetch settings:", error);
      }
    }

    fetchSettings();
  }, []);

  // Setters to update individual settings
  const setWebsiteName = (name: string) => {
    setSettings((prev) => ({ ...prev, websiteName: name }));
  };

  const setLogoURL = (url: string) => {
    setSettings((prev) => ({ ...prev, logoURL: url }));
  };

  return (
    <SettingsContext.Provider value={{ ...settings, setWebsiteName, setLogoURL }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
