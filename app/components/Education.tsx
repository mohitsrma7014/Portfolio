"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaAward } from "react-icons/fa"

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Mechanical Engineering",
      institution: "Bikaner Technical University",
      year: "2020 - 2024",
      description:
        "Focused on core mechanical principles with a strong emphasis on computational methods and data analysis in engineering applications.",
    },
    {
      degree: "Minor in Artificial Intelligence",
      institution: "IIT Ropar",
      year: "2024 - 2025",
      description:
        "Specialized program covering advanced topics in AI, machine learning, and deep learning, with practical projects in computer vision and natural language processing.",
    },
  ]

  const certifications = [
    "Machine Learning Specialization - Coursera",
    "Deep Learning Specialization - deeplearning.ai",
    "TensorFlow Developer Certificate - Google",
    "Data Science Professional Certificate - IBM",
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education & Certifications
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.degree}
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FaGraduationCap className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
            <p className="text-gray-300 mb-2">{edu.institution}</p>
            <p className="text-gray-400 mb-4">{edu.year}</p>
            <p>{edu.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="bg-gray-700 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FaAward className="text-4xl mb-4 text-blue-500" />
        <h3 className="text-xl font-semibold mb-4">Certifications</h3>
        <ul className="list-disc list-inside">
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-2"
            >
              {cert}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

