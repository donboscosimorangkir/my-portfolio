import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { SectionHeader, ProjectImage } from "./ui"
import { projects, categories } from "../data/projects"

const ProjectCard = ({ project, index }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 12 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <Link to={`/project/${project.id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
        <ProjectImage
          project={project}
          className="aspect-video"
          imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-950/90 text-xs font-medium text-slate-700 dark:text-slate-200 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          View project <ArrowUpRight size={13} />
        </span>
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4 font-mono text-xs text-slate-400 dark:text-slate-500">
        <span>
          {String(index + 1).padStart(2, "0")} · {project.type}
        </span>
        <span>{project.year}</span>
      </div>

      <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400">
        {project.title}
      </h3>

      <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
        {project.summary}
      </p>

      <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
        {project.tech.slice(0, 5).join(" · ")}
      </p>
    </Link>
  </motion.article>
)

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  const countFor = (id) =>
    id === "all" ? projects.length : projects.filter((p) => p.category === id).length

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="03" label="Work" title="Selected projects.">
          Coursework, client work, a hackathon entry, and my thesis. Open any of them for the
          full write-up and screenshots.
        </SectionHeader>

        <div role="tablist" className="flex flex-wrap gap-x-6 gap-y-2 mb-12 border-b border-slate-200 dark:border-slate-800">
          {categories.map((c) => {
            const active = filter === c.id
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(c.id)}
                className={`relative pb-3 text-sm cursor-pointer ${
                  active
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {c.label}
                <sup className="ml-1 font-mono text-[10px] text-slate-400">{countFor(c.id)}</sup>
                {active && (
                  <motion.span
                    layoutId="project-tab"
                    className="absolute left-0 right-0 -bottom-px h-0.5 bg-violet-600 dark:bg-violet-400"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
