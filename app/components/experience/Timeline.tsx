"use client"

import { motion } from "framer-motion"
import { FaGear, FaChartLine } from "react-icons/fa6"
import TimelineItem from "./TimelineItem"

const experiences = [
  {
    id: 1,
    dateRange: "2024 - Present",
    role: "Data Scientist & Machine Learning Engineer",
    company: "SSB Pvt. Ltd.",
    companyLink: "https://www.ssbpvtltd.com",
    description: [
      "Developed and implemented machine learning models for predictive analytics",
      "Created real-time analytics dashboards for inventory management",
      "Optimized data processing pipelines, reducing processing time by 40%",
    ],
    technologies: ["Python", "TensorFlow", "SQL", "Tableau"],
    icon: FaChartLine,
  },
  {
    id: 2,
    dateRange: "2024",
    role: "AI Research Intern",
    company: "Auring Technologies",
    companyLink: "https://www.auringtechnologies.com",
    description: [
      "Conducted research on natural language processing techniques",
      "Developed a prototype for an AI-powered chatbot",
      "Contributed to the company's AI ethics guidelines",
    ],
    technologies: ["Python", "PyTorch", "NLTK", "OpenAI API"],
    icon: FaGear,
  },
  {
    id: 3,
    dateRange: "2023",
    role: "Data Analytics Intern",
    company: "NBC Jaipur",
    companyLink: "https://www.nbcjaipur.com",
    description: [
      "Analyzed large datasets to identify trends and patterns",
      "Created visualizations and reports for stakeholders",
      "Assisted in the development of a data-driven marketing strategy",
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Excel"],
    icon: FaChartLine,
  },
]

export default function Timeline() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Timeline items */}
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

