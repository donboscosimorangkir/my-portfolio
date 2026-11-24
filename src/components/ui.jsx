import { motion } from "framer-motion"
import { fadeUp } from "./motion"

export const SectionHeader = ({ index, label, title, children }) => (
  <div className="mb-14">
    <motion.div {...fadeUp} className="flex items-center gap-4 mb-8">
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
        {index} — {label}
      </span>
      <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
    </motion.div>
    <motion.h2
      {...fadeUp}
      className="max-w-4xl text-3xl md:text-[2.75rem] md:leading-[1.15] font-semibold tracking-tight text-slate-900 dark:text-white"
    >
      {title}
    </motion.h2>
    {children && (
      <motion.p {...fadeUp} className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        {children}
      </motion.p>
    )}
  </div>
)

// Fills its box edge to edge (object-cover). Falls back to a placeholder when there's no image yet.
export const ProjectImage = ({ project, className = "", imgClassName = "" }) => {
  if (project.image) {
    return (
      <div className={`bg-slate-100 dark:bg-slate-800/60 ${className}`}>
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className={`w-full h-full object-cover ${imgClassName}`}
          style={{ objectPosition: project.imagePosition || "center" }}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative flex items-center justify-center bg-slate-100 dark:bg-slate-800/60 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 opacity-60 dark:opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(148 163 184 / 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative text-center px-6">
        <p className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-400 dark:text-slate-500">
          {project.shortTitle}
        </p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          Screenshots coming soon
        </p>
      </div>
    </div>
  )
}
