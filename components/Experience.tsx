"use client";
import { useSectionInView } from "@/lib/hooks";
import React, { Fragment } from "react";
import SectionHeading from "./Section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { experiencesDataDe } from "@/lib/dataDe";
import { experiencesDataEs } from "@/lib/dataEs";
import type { ExperienceItem } from "@/lib/types";
import "react-vertical-timeline-component/style.min.css";

import { useTheme } from "@/context/Theme-context";
import { useTranslation } from "react-i18next";
export default function Experience() {
  const { i18n, t } = useTranslation();

  const { ref } = useSectionInView("Experience");

  const { theme } = useTheme();

  const experience: readonly ExperienceItem[] =
    i18n.language === "de" ? experiencesDataDe
    : i18n.language === "es" ? experiencesDataEs
    : experiencesData;

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 text-center"
    >
      <SectionHeading title={t("my_experience")} />
      <VerticalTimeline lineColor="">
        {experience.map((item, index) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: theme === "light" ? "white" : "black",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </Fragment>
          ))}
      </VerticalTimeline>
    </section>
  );
}
