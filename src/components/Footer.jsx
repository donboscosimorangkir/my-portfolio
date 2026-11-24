import { ArrowUp } from "lucide-react"

const Footer = () => {
  return (
    <footer className="px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto py-10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} Don Bosco Simorangkir
          <span className="hidden md:inline text-slate-400 dark:text-slate-600"> · Built with React & Tailwind CSS</span>
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white"
        >
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
