"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaCertificate } from "react-icons/fa"

const certifications = [
  {
    name: "Machine Learning Specialization",
    platform: "Coursera - Stanford University",
    date: "January 2024",
    description:
      "Comprehensive course covering supervised learning, unsupervised learning, and best practices in machine learning.",
  },
  {
    name: "Deep Learning Specialization",
    platform: "Coursera - deeplearning.ai",
    date: "March 2024",
    description:
      "In-depth study of neural networks, optimization algorithms, and structuring machine learning projects.",
  },
  {
    name: "TensorFlow Developer Certificate",
    platform: "Google",
    date: "May 2024",
    description:
      "Professional certification demonstrating proficiency in building and training neural networks using TensorFlow.",
  },
  {
    name: "Data Science Professional Certificate",
    platform: "IBM",
    date: "July 2024",
    description: "Comprehensive program covering data science methodology, tools, and best practices in the industry.",
  },
]

export default function CertificationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Certifications</h2>
        <div className="flex overflow-x-auto pb-8 space-x-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-lg flex-shrink-0 w-80 h-64 relative cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front flex flex-col justify-between h-full">
                  <div>
                    <FaCertificate className="text-4xl text-yellow-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-gray-400 mb-2">{cert.platform}</p>
                  </div>
                  <p className="text-sm text-gray-300">{cert.date}</p>
                </div>
                <div className="flip-card-back">
                  <p className="text-sm">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <motion.a
            href="/path-to-certificates.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Certificates
          </motion.a>
        </div>
      </div>
    </section>
  )
}

