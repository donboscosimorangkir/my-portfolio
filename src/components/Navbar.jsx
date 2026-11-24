import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
]

export const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="w-9 h-9 rounded-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  >
    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
  </button>
)

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      let current = ""
      for (const { id } of navLinks) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 160) current = id
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b ${
        scrolled || menuOpen
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-slate-200 dark:border-slate-800"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-2 group">
          <span className="font-semibold tracking-tight text-slate-900 dark:text-white">
            Don Bosco
          </span>
          <span className="hidden sm:inline font-mono text-xs text-slate-400 dark:text-slate-500 group-hover:text-violet-600 dark:group-hover:text-violet-400">
            / developer
          </span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden md:flex items-center gap-1 mr-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative px-3 py-2 text-sm ${
                    activeSection === link.id
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-px h-px bg-violet-600 dark:bg-violet-400"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800"
          >
            <ul className="max-w-6xl mx-auto px-6 py-3">
              {navLinks.map((link, i) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 py-3 text-lg text-slate-800 dark:text-slate-100"
                  >
                    <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
