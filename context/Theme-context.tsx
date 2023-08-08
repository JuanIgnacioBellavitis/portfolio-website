"use client";
import React, { useEffect, useState, createContext, ReactNode, useContext } from 'react'

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
    children: ReactNode,
};

type ThemeContextTytpe = {
    theme: Theme,
    toggleTheme: () => void,
}

const ThemeContext = createContext<ThemeContextTytpe | null>(null);

export default function ThemeContextProvider({children} : ThemeContextProviderProps) {

    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme("dark");
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    };
  
    useEffect(() => {
      const localTheme = localStorage.getItem("theme") as Theme | null;
      
      if (localTheme) {
        setTheme(localTheme);
  
        if (localTheme === "dark") {
          document.documentElement.classList.add("dark");
        }
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches){
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }, []);
    
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme Error.")
    }

    return context;
}