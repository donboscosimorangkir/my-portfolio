import { motion } from "framer-motion"
import { ArrowRight, Download, ArrowUpRight } from "lucide-react"
import profile from "../assets/profile.jpg"

const socials = [
  { href: "https://github.com/donboscosimorangkir", label: "GitHub" },
  { href: "https://linkedin.com/in/don-bosco-simorangkir-a224a0383/", label: "LinkedIn" },
  { href: "https://instagram.com/donboscosimorangkir", label: "Instagram" },
]

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
})

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center px-6 pt-28 pb-16 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">

        <div className="lg:col-span-7">
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2.5 font-mono text-xs text-slate-500 dark:text-slate-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to internships & freelance work
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-slate-900 dark:text-white"
          >
            Don Bosco
            <br />
            Simorangkir
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-6 text-xl md:text-2xl text-slate-500 dark:text-slate-400 tracking-tight"
          >
            Full-stack web & mobile developer.
          </motion.p>

          <motion.p
            {...rise(0.22)}
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          >
            I build apps with Laravel, React and Flutter, and I'm studying Information
            Technology at Institut Teknologi Del. My current focus is a thesis on
            post-quantum cryptography for IoT devices.
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-violet-600 dark:bg-white dark:text-slate-900 dark:hover:bg-violet-400"
            >
              See my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/CV_Don Bosco Simorangkir.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-slate-900 dark:hover:border-white"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.ul {...rise(0.38)} className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  {s.label}
                  <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.figure {...rise(0.2)} className="lg:col-span-5 w-full max-w-sm lg:max-w-none mx-auto">
          <div className="relative">
            {/* offset frame, a quiet accent */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-slate-300 dark:border-slate-700" />
            <img
              src={profile}
              alt="Portrait of Don Bosco Simorangkir"
              className="relative w-full aspect-[4/5] object-cover rounded-lg bg-slate-200 dark:bg-slate-800"
              style={{ objectPosition: "50% 20%" }}
            />
          </div>
          <figcaption className="mt-6 flex justify-between font-mono text-xs text-slate-400 dark:text-slate-500">
            <span>Laguboti, North Sumatra</span>
            <span>2026</span>
          </figcaption>
        </motion.figure>

      </div>
    </section>
  )
}

export default Hero
