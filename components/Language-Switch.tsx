"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="relative" style={{ zIndex: 9999 }}>
      <select
        className="fixed top-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem]
      border border-gray-950 border-opacity-40 shadow-2x1 rounded-full flex items-center justify-center 
      hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white custom-select z-auto"
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">🇪🇳</option>
        <option value="de">🇩🇪</option>
      </select>
    </div>
  );
}
