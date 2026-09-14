import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type NavLink = {
  name: string;
  hash: string;
};

export type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  icon: ReactNode;
  date: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  projectUrl: string;
};
