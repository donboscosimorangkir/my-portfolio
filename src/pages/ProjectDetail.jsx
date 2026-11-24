import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, X } from "lucide-react"
import { FaGithub } from "react-icons/fa"

import { projects, getProject } from "../data/projects"
import { ProjectImage } from "../components/ui"
import { ThemeToggle } from "../components/Navbar"
import { useTheme } from "../hooks/useTheme"

const Lightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-md flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
        aria-label="Close"
      >
        <X size={22} />
      </button>
      <motion.img
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.96 }}
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded-md"
      />
    </motion.div>
  )
}

const ZoomableImage = ({ src, alt, onOpen, className = "" }) => (
  <button
    onClick={() => onOpen(src)}
    className={`group relative block w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/60 cursor-zoom-in ${className}`}
  >
    {/* capped height so tall phone screenshots stay on screen; wide ones fill the width */}
    <img src={src} alt={alt} className="block mx-auto w-auto max-w-full h-auto max-h-[78vh]" />
    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/90 dark:bg-slate-950/90 text-xs font-medium text-slate-700 dark:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
      <Maximize2 size={13} /> View full size
    </span>
  </button>
)

const ProjectDetail = () => {
  const { id } = useParams()
  const project = getProject(id)
  const [darkMode, setDarkMode] = useTheme()
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) document.title = `${project.title} · Don Bosco Simorangkir`
  }, [project])

  const header = (
    <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
        >
          <ArrowLeft size={16} />
          All projects
        </Link>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  )

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950">
        {header}
        <div className="max-w-6xl mx-auto px-6 py-32">
          <p className="font-mono text-xs text-slate-400">404</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
            That project doesn't exist.
          </h1>
          <Link to="/#projects" className="mt-6 inline-block text-violet-600 dark:text-violet-400 underline underline-offset-4">
            Back to all projects
          </Link>
        </div>
      </div>
    )
  }

  const idx = projects.findIndex((p) => p.id === project.id)
  const next = projects[(idx + 1) % projects.length]

  const meta = [
    { label: "Type", value: project.type },
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Status", value: project.status },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {header}

      <main className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto pt-16 md:pt-20"
        >
          {/* Title */}
          <p className="font-mono text-xs text-slate-400 dark:text-slate-500">
            {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-slate-900 dark:text-white">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
            {project.summary}
          </p>

          {/* Meta */}
          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 py-6 border-y border-slate-200 dark:border-slate-800">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                  {m.label}
                </dt>
                <dd className="mt-1.5 text-[15px] text-slate-800 dark:text-slate-200">{m.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Main image, full width, never cropped */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="max-w-6xl mx-auto mt-12"
        >
          {project.image ? (
            <ZoomableImage src={project.image} alt={`${project.title} screenshot`} onOpen={setLightbox} />
          ) : (
            <ProjectImage
              project={project}
              className="aspect-[16/9] rounded-lg border border-slate-200 dark:border-slate-800"
            />
          )}
        </motion.div>

        {/* Body */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 py-16 md:py-20">
          <div className="lg:col-span-8">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
              Overview
            </h2>
            <div className="mt-4 space-y-5 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <h2 className="mt-14 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
              What I built
            </h2>
            <ul className="mt-4 border-t border-slate-200 dark:border-slate-800">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-5 py-4 border-b border-slate-200 dark:border-slate-800 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-10">
              <div>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                  Built with
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-md border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-slate-900 dark:hover:border-white"
                >
                  <span className="inline-flex items-center gap-2"><FaGithub /> Source code</span>
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </aside>
        </div>

        {/* Gallery */}
        {project.gallery?.length > 0 && (
          <div className="max-w-6xl mx-auto pb-16">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-6">
              More screenshots
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((src, i) => (
                <ZoomableImage
                  key={i}
                  src={src}
                  alt={`${project.title} screenshot ${i + 2}`}
                  onOpen={setLightbox}
                />
              ))}
            </div>
          </div>
        )}

        {/* Next project */}
        <div className="border-t border-slate-200 dark:border-slate-800">
          <Link
            to={`/project/${next.id}`}
            className="group max-w-6xl mx-auto py-14 md:py-20 flex items-end justify-between gap-6"
          >
            <div>
              <p className="font-mono text-xs text-slate-400 dark:text-slate-500">Next project</p>
              <p className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400">
                {next.title}
              </p>
            </div>
            <ArrowRight
              size={28}
              className="shrink-0 text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </main>

      <AnimatePresence>
        {lightbox && (
          <Lightbox src={lightbox} alt={`${project.title} full size`} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectDetail
