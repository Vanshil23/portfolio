import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "../../public/icons/html.svg";
import CssSvg from "../../public/icons/css.svg";
import DartSvg from "../../public/icons/dart.svg";
import JavascriptSvg from "../../public/icons/javascript.svg";
import FlutterSvg from "../../public/icons/flutter.svg";
import PowerBiSvg from "../../public/icons/powerbi.svg";
import ReactSvg from "../../public/icons/react.svg";
import PythonSvg from "../../public/icons/python.svg";

// Backend
import NodejsSvg from "../../public/icons/nodejs.svg";
import JavaSvg from "../../public/icons/java.svg";

// Database and ORMS
import FirebaseSvg from "../../public/icons/firebase.svg";
import SqliteSvg from "../../public/icons/sqlite.svg";

// Tools and Tech
import AndroidSvg from "../../public/icons/android.svg";
import VsSvg from "../../public/icons/vs.svg";

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
        icon: CssSvg,
      },

      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Dart",
        icon: DartSvg,
      },
      {
        name: "Flutter",
        icon: FlutterSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "PowerBi",
        icon: PowerBiSvg,
      },
      {
        name: "React",
        icon: ReactSvg,
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
        icon: JavaSvg,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "Firebase",
        icon: FirebaseSvg,
      },
      {
        name: "Sqlite",
        icon: SqliteSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Android",
        icon: AndroidSvg,
      },
      {
        name: "VS",
        icon: VsSvg,
      },
    ],
  },
];
