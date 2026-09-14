"use client";

import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/language";

// Importing lib/language for its side effect from the root layout does not work:
// the layout is a Server Component, so the client module is never evaluated and
// i18next stays uninitialised. Owning the instance in a rendered client
// component initialises it on both the server pass and the client.
export default function I18nProvider({ children }: { children: ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
