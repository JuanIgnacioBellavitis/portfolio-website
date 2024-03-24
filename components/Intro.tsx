"use client";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import photo from "@/public/Photo.jpg";
import React from "react";
import { useActiveSection } from "@/context/Active-section-context";
import { Trans, useTranslation } from "react-i18next";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();
  const { t } = useTranslation();
  return (
    <section
      className="mb-28 max-w-[50rem] text-center scroll-mt-[100rem] sm:mb-0"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={photo}
              alt="Juan Ignacio Bellavitis"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-whiter
                shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            😃
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* <span className="font-bold">{t("intro")}.</span> */}
        <Trans i18nKey="intro">
          <span className="font-bold">Hello, I'm Juan.</span> I'm a
          <span className="font-bold"> full-stack developer</span> with
          <span className="font-bold"> 4 years</span> of experience. I enjoy
          building
          <span className="italic"> sites & apps</span>. My focus is
          <span className="underline"> React and NodeJs</span>.
        </Trans>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex 
                    items-center gap-2 rounded-full outline-none focus:scale-110 
                    hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {t("contact_here")}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                    outline-none focus:scale-110 hover:scale-110 active:scale-105
                    transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Juan_Ignacio_Bellavitis_Resume.pdf"
          download
        >
          {t("download_cv")}{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                     first-letter:focus:scale-[1.15] hover:scale-[1.15] active:scale-105
                    transition cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-200"
          href="https://www.linkedin.com/in/juan-ignacio-bellavitis/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 
                    rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
                    transition cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-200"
          href="https://github.com/JuanIgnacioBellavitis"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
