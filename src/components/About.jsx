import { motion } from "framer-motion"
import { SectionHeader } from "./ui"
import { fadeUp } from "./motion"

const facts = [
  { label: "Studying", value: "Diploma in Information Technology, Institut Teknologi Del (2024 – 2027)" },
  { label: "Based in", value: "Laguboti, Toba · North Sumatra, Indonesia" },
  { label: "Usual stack", value: "Laravel, React, Flutter, MySQL, AWS" },
  { label: "Right now", value: "Thesis on post-quantum cryptography for IoT devices" },
]

const timeline = [
  { year: "2026 – now", title: "Post-quantum crypto benchmarking on ESP32", place: "Thesis research" },
  { year: "2026", title: "Member, Department of Religion and Social Affairs", place: "Student Organization, IT Del" },
  { year: "2026", title: "TobaWise AI, a travel planner for Lake Toba", place: "AI Hackathon IT Del" },
  { year: "2025", title: "Cadre Committee", place: "Information Technology Association, IT Del" },
  { year: "2024", title: "Started my diploma in IT", place: "Institut Teknologi Del" },
]

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="01"
          label="About"
          title={
            <>
              A student developer from North Sumatra, building for the web, for mobile, and
              lately for <span className="text-violet-600 dark:text-violet-400">very small chips</span>.
            </>
          }
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div {...fadeUp} className="lg:col-span-7">
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I'm an Information Technology student at Institut Teknologi Del, a campus on the
                shore of Lake Toba. Most of what I know I picked up by shipping things: a café
                ordering app running on AWS, an AI travel planner built for a campus hackathon,
                and a booking site for my family's rental business.
              </p>
              <p>
                I usually work with Laravel on the backend and React or Flutter on the front.
                I like the less visible parts as much as the UI, things like database design,
                clean APIs, and deployments that keep running after the demo.
              </p>
              <p>
                These days most of my time goes into my thesis, benchmarking post-quantum
                cryptography algorithms on an ESP32. It's a long way from web apps, and I've
                enjoyed learning how much a few hundred kilobytes of memory changes the way
                you write code.
              </p>
            </div>

            <dl className="grid sm:grid-cols-2 gap-x-10 mt-12 border-t border-slate-200 dark:border-slate-800">
              {facts.map((f) => (
                <div key={f.label} className="py-5 border-b border-slate-200 dark:border-slate-800">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 text-[15px] text-slate-800 dark:text-slate-200">{f.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-5">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-2">
              Along the way
            </h3>
            <ol className="relative border-l border-slate-200 dark:border-slate-800 ml-1">
              {timeline.map((t, i) => (
                <li key={t.title} className="relative pl-6 py-4">
                  <span
                    className={`absolute -left-[5px] top-[1.4rem] w-[9px] h-[9px] rounded-full border-2 ${
                      i === 0
                        ? "bg-violet-600 border-violet-600 dark:bg-violet-400 dark:border-violet-400"
                        : "bg-white border-slate-300 dark:bg-slate-900 dark:border-slate-600"
                    }`}
                  />
                  <p className="font-mono text-xs text-slate-400 dark:text-slate-500">{t.year}</p>
                  <p className="mt-1 text-[15px] text-slate-800 dark:text-slate-200">{t.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.place}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
