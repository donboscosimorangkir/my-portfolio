import { useEffect, useState } from "react"

// The initial class is set by an inline script in index.html (no flash on load).
export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light")
    } catch {
      // storage unavailable (private mode etc.), theme just won't persist
    }
  }, [darkMode])

  return [darkMode, setDarkMode]
}
