import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { ArrowUpRight, Send } from "lucide-react"
import { SectionHeader } from "./ui"
import { fadeUp } from "./motion"

const EMAIL = "donboscosimorangkir3@gmail.com"

const links = [
  { label: "GitHub", value: "donboscosimorangkir", href: "https://github.com/donboscosimorangkir" },
  { label: "LinkedIn", value: "Don Bosco Simorangkir", href: "https://linkedin.com/in/don-bosco-simorangkir-a224a0383/" },
  { label: "Instagram", value: "@donboscosimorangkir", href: "https://instagram.com/donboscosimorangkir" },
]

const inputClass =
  "w-full px-0 py-3 bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-violet-600 dark:focus:border-violet-400 focus-visible:outline-none text-base"

const labelClass =
  "font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500"

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm("service_4z6uo32", "template_kha5d3s", form.current, "eimxtvPGQ5AsQCLxY")
      .then(
        () => {
          toast.success("Thanks! Your message is on its way.")
          form.current.reset()
        },
        (error) => {
          console.error(error.text)
          toast.error(`Couldn't send that. You can email me directly at ${EMAIL}.`)
        }
      )
      .finally(() => setLoading(false))
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="04" label="Contact" title="Have something in mind? Let's talk.">
          I'm looking for internships and small freelance projects in web or mobile development.
          I usually reply within a day or two.
        </SectionHeader>

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <p className={labelClass}>Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 inline-block text-lg md:text-xl font-medium text-slate-900 dark:text-white underline underline-offset-[6px] decoration-slate-300 dark:decoration-slate-700 hover:decoration-violet-600 dark:hover:decoration-violet-400 break-all"
            >
              {EMAIL}
            </a>

            <p className={`${labelClass} mt-10`}>Location</p>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              North Sumatra, Indonesia <span className="text-slate-400">(UTC+7)</span>
            </p>

            <p className={`${labelClass} mt-10`}>Elsewhere</p>
            <ul className="mt-2 border-t border-slate-200 dark:border-slate-800">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3.5 border-b border-slate-200 dark:border-slate-800"
                  >
                    <span className="text-slate-900 dark:text-white">{l.label}</span>
                    <span className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                      {l.value}
                      <ArrowUpRight size={14} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            {...fadeUp}
            ref={form}
            onSubmit={sendEmail}
            className="lg:col-span-7 space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <label className="block">
                <span className={labelClass}>Name</span>
                <input type="text" name="from_name" placeholder="Your name" required className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Email</span>
                <input type="email" name="from_email" placeholder="you@example.com" required className={inputClass} />
              </label>
            </div>

            <label className="block">
              <span className={labelClass}>Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="A few lines about the project or role…"
                required
                className={`${inputClass} resize-none`}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-medium hover:bg-violet-600 dark:hover:bg-violet-400 disabled:opacity-60 cursor-pointer disabled:cursor-wait"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-current/30 border-t-current animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Send size={15} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
