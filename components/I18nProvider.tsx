"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/language";

// i18next initialises with "en" on both server and client to avoid hydration
// mismatches. After the client is mounted we read localStorage and switch to
// the saved language — a one-time silent update that React handles gracefully.
export default function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
