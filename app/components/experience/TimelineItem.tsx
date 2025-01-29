"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function TimelineItem({ experience, index }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{experience.icon()}</h1>
      </div>
      <motion.div
        className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4"
        whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
      >
        <h3 className="mb-3 font-bold text-gray-300 text-xl">{experience.dateRange}</h3>
        <h4 className="mb-3 font-bold text-white text-lg">{experience.role}</h4>
        <a
          href={experience.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center mb-3"
        >
          {experience.company}
          <FaExternalLinkAlt className="ml-2 text-sm" />
        </a>
        <ul className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 list-disc list-inside mb-3">
          {experience.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-3">
          {experience.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-blue-500 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <motion.button
          className="text-blue-400 hover:text-blue-300 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </motion.button>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-gray-300"
          >
            <h5 className="font-bold mb-2">Challenges Faced:</h5>
            <p className="mb-2">
              Implementing scalable machine learning models and integrating them with existing systems.
            </p>
            <h5 className="font-bold mb-2">Solutions Implemented:</h5>
            <p>
              Utilized cloud computing resources and developed a modular architecture for easy integration and scaling
              of ML models.
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

