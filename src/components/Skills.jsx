import { motion } from "framer-motion"
import { FaAws } from "react-icons/fa"
import { TbBrandVscode } from "react-icons/tb"
import {
  SiPhp, SiDart, SiJavascript, SiPython, SiCplusplus,
  SiLaravel, SiFlutter, SiReact, SiTailwindcss, SiFramer,
  SiMysql, SiPostgresql, SiFirebase, SiSqlite,
  SiGit, SiGithub, SiNodedotjs, SiPostman, SiEspressif, SiVite, SiFigma,
} from "react-icons/si"
import { SectionHeader } from "./ui"
import { fadeUp } from "./motion"

const groups = [
  {
    label: "Languages",
    note: "Day to day it's PHP, Dart and JavaScript. C/C++ came with the thesis.",
    items: [
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "Dart", icon: SiDart, color: "text-[#0175C2] dark:text-[#40C4FF]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#E0B800] dark:text-[#F7DF1E]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB] dark:text-[#5A9FD4]" },
      { name: "C/C++", icon: SiCplusplus, color: "text-[#00599C] dark:text-[#659AD2]" },
    ],
  },
  {
    label: "Frameworks",
    note: "Laravel for APIs, React for the web, Flutter for mobile.",
    items: [
      { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
      { name: "React", icon: SiReact, color: "text-[#149ECA] dark:text-[#61DAFB]" },
      { name: "Flutter", icon: SiFlutter, color: "text-[#02569B] dark:text-[#47C5FB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4] dark:text-[#38BDF8]" },
      { name: "Framer Motion", icon: SiFramer, color: "text-[#0055FF] dark:text-[#4D88FF]" },
    ],
  },
  {
    label: "Data",
    note: "Mostly relational. SQLite on the research side.",
    items: [
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1] dark:text-[#6FA8D6]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1] dark:text-[#6E8FF0]" },
      { name: "SQLite", icon: SiSqlite, color: "text-[#003B57] dark:text-[#4FA3D1]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#FFA000] dark:text-[#FFCA28]" },
    ],
  },
  {
    label: "Backend & cloud",
    note: "REST APIs, token auth, and deploying them to AWS.",
    items: [
      { name: "REST APIs" },
      { name: "Laravel Sanctum", icon: SiLaravel, color: "text-[#FF2D20]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]" },
      { name: "AWS EC2 · RDS · S3", icon: FaAws, color: "text-[#FF9900]" },
    ],
  },
  {
    label: "Tools",
    note: "What's open on my screen most days.",
    items: [
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "text-[#181717] dark:text-white" },
      { name: "VS Code", icon: TbBrandVscode, color: "text-[#007ACC] dark:text-[#3BA7F0]" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "ESP-IDF", icon: SiEspressif, color: "text-[#E7352C]" },
      { name: "Vite", icon: SiVite, color: "text-[#646CFF] dark:text-[#8A90FF]" },
      { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="02" label="Skills" title="The tools I reach for.">
          Everything here has been used in a real project, grouped by where it fits.
        </SectionHeader>

        <div className="border-t border-slate-200 dark:border-slate-800">
          {groups.map((g) => (
            <motion.div
              key={g.label}
              {...fadeUp}
              className="grid md:grid-cols-12 gap-4 md:gap-10 py-8 border-b border-slate-200 dark:border-slate-800"
            >
              <div className="md:col-span-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{g.label}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{g.note}</p>
              </div>

              <ul className="md:col-span-8 flex flex-wrap gap-2 content-start">
                {g.items.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600"
                  >
                    {Icon && (
                      <Icon className={`text-lg shrink-0 ${color}`} aria-hidden="true" />
                    )}
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
