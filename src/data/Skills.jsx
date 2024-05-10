import html from "../assets/svgs/html.svg";
import css from "../assets/svgs/css.svg";
import javascript from "../assets/svgs/javascript.svg";
import nextJS from "../assets/svgs/nextJS.svg";
import react from "../assets/svgs/react.svg";
import typescript from "../assets/svgs/typescript.svg";
import bootstrap from "../assets/svgs/bootstrap.svg";
import mongoDB from "../assets/svgs/mongoDB.svg";
import mysql from "../assets/svgs/mysql.svg";
import postgresql from "../assets/svgs/postgresql.svg";
import tailwind from "../assets/svgs/tailwind.svg";
import vitejs from "../assets/svgs/vitejs.svg";
import git from "../assets/svgs/git.svg";
import python from "../assets/svgs/python.svg";
import java from "../assets/svgs/java.svg";
import materialui from "../assets/svgs/materialui.svg";
import docker from "../assets/svgs/docker.svg";

export const skills = [
  "html",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "Javascript",
  "typescript",
  "React",
  //   "Next JS",
  "ViteJS",
  //   "mongoDB",
  //   "mysql",
  //   "postgresql",
  //   "java",
  //   "python",
  //   "Docker",
  "Git",
];

export const skillsImage = (skill) => {
  const skillId = skill.toLowerCase();
  switch (skillId) {
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "java":
      return java;
    case "python":
      return python;
    case "git":
      return git;
    case "materialui":
      return materialui;
    default:
      break;
  }
};
