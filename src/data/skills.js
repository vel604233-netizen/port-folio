import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import { SiCplusplus, SiPython } from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "C / C++",
    level: 70,
    color: "#2563eb",
    icon: SiCplusplus,
  },
  {
    id: 2,
    name: "Python",
    level: 85,
    color: "#3776ab",
    icon: SiPython,
  },
  {
    id: 3,
    name: "HTML / CSS",
    level: 87,
    color: "#e34f26",
    icon: FaHtml5,
  },
  {
    id: 4,
    name: "JavaScript",
    level: 60,
    color: "#f7df1e",
    icon: FaJs,
  },
  {
    id: 5,
    name: "React",
    level: 69,
    color: "#61dafb",
    icon: FaReact,
  },
  {
    id: 6,
    name: "MySQL",
    level: 65,
    color: "#00758f",
    icon: FaDatabase,
  },
  {
    id: 7,
    name: "Git / GitHub",
    level: 65,
    color: "#f1502f",
    icon: FaGitAlt,
  },
];

export default skills;