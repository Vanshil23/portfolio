import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "/icons/html.svg";
import CsssSvg from "/icons/css.svg";
import dart from "/icons/dart.svg";
import JavascriptSvg from "/icons/javascript.svg";
import Flutter from "/icons/Flutter.svg";
import PowerBi from "/icons/powerbi.svg";
import React from "/icons/react.svg";

import PythonSvg from "/icons/python.svg";

// Backend
import NodejsSvg from "/icons/nodejs.svg";
import Java from "/icons/java.svg";

// Database and ORMS
import Firebase from "/icons/firebase.svg";
import Sqlite from "/icons/sqlite.svg";

// Tools and Tech
import Android from "/icons/android.svg";
import VS from "/icons/vs.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },

      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Dart",
        icon: dart,
      },
      {
        name: "Flutter",
        icon: Flutter,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "PowerBi",
        icon: PowerBi,
      },
      {
        name: "React",
        icon: React,
      },
    ],
  },

  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Java",
        icon: Java,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "Firebase",
        icon: Firebase,
      },
      {
        name: "Sqlite",
        icon: Sqlite,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Android",
        icon: Android,
      },
      {
        name: "VS",
        icon: VS,
      },
    ],
  },
];
