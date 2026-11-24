import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useTheme } from "./hooks/useTheme"

function App() {
  const [darkMode, setDarkMode] = useTheme()
  const { hash } = useLocation()

  useEffect(() => {
    document.title = "Don Bosco Simorangkir · Full-stack Web & Mobile Developer"
  }, [])

  // Coming back from a project page via "/#projects" — jump to that section
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "instant" }))
  }, [hash])

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
