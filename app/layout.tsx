import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActivesectionContextProvider from "@/context/Active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/Theme-Switch";
import ThemeContextProvider from "@/context/Theme-context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LanguageSwitch from "@/components/Language-Switch";
import I18nProvider from "@/components/I18nProvider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://juanbellavitis-portfolio.vercel.app";
const TITLE = "Juan Ignacio Bellavitis | Senior Full Stack Software Engineer";
const DESCRIPTION =
  "Senior Full Stack Software Engineer with 6 years of experience building distributed backends and modular frontends with React, NestJS, Java and AWS. Based in Madrid, Spain.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Juan Ignacio Bellavitis",
  },
  description: DESCRIPTION,
  keywords: [
    "Full Stack Engineer",
    "Software Engineer",
    "React",
    "NestJS",
    "Java",
    "TypeScript",
    "AWS",
    "Microfrontends",
    "Distributed Systems",
    "Madrid",
    "Juan Bellavitis",
    "Juan Ignacio Bellavitis",
  ],
  authors: [{ name: "Juan Ignacio Bellavitis", url: SITE_URL }],
  creator: "Juan Ignacio Bellavitis",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Juan Ignacio Bellavitis",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {/* Blocking script: sets dark class before first paint to avoid flash */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${inter.className}
         bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
         dark:bg-gray-900 dark:text-gray-50/90`}
      >
        <div
          className="bg-[#e2b9ba] absolute
           top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem]
           rounded-full blur-[10rem]
           sm:w-[68.75rem] dark:bg-[#946263]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute
           top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem]
           rounded-full blur-[10rem]
           sm:w-[68.75rem] md:left[-33rem] lg:left-[-28rem] 
           xl-left-[-15rem] 2xl::left-[-5rem] dark:bg-[#676394]"
        ></div>
        <Suspense fallback="loading...">
          <I18nProvider>
            <ThemeContextProvider>
              <ActivesectionContextProvider>
                <Header />
                {children}
                <SpeedInsights />
                <Footer />
                <Toaster position="top-right" />
                <LanguageSwitch />
                <ThemeSwitch />
              </ActivesectionContextProvider>
            </ThemeContextProvider>
          </I18nProvider>
        </Suspense>
      </body>
    </html>
  );
}
