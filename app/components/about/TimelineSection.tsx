"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const timelineEvents = [
  { year: "2020-2024", title: "B.Tech in Mechanical Engineering", subtitle: "Bikaner Technical University" },
  { year: "2024-2025", title: "Minor in AI", subtitle: "IIT Ropar" },
  { year: "2023", title: "Internship", subtitle: "NBC Jaipur" },
  { year: "2024", title: "Internship", subtitle: "Auring Technologies" },
  { year: "2024-Present", title: "Data Scientist", subtitle: "SSB Pvt. Ltd." },
]

export default function TimelineSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
        <div className="relative">
          <div className="timeline-line"></div>
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ event, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
      </div>
      <div className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">{event.year}</h3>
        <h4 className="mb-3 font-bold text-white text-lg">{event.title}</h4>
        <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{event.subtitle}</p>
      </div>
    </motion.div>
  )
}

