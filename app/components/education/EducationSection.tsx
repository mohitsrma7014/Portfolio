"use client"

import { motion } from "framer-motion"
import { FaPython, FaDatabase, FaRobot } from "react-icons/fa"
import { SiTensorflow, SiScikitlearn } from "react-icons/si"

const educationData = [
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    institution: "Bikaner Technical University",
    duration: "2020 - 2024",
    achievements: [
      "Graduated with First Class Honors",
      "Completed a capstone project on AI-driven Predictive Maintenance for Industrial Equipment",
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Machine Learning", icon: FaRobot },
      { name: "Data Analysis", icon: FaDatabase },
    ],
  },
  {
    degree: "Minor in Artificial Intelligence",
    institution: "IIT Ropar",
    duration: "2024 - 2025",
    achievements: [
      "Specialized in Deep Learning and Computer Vision",
      "Developed a real-time object detection system as part of the coursework",
    ],
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Computer Vision", icon: FaRobot },
    ],
  },
]

export default function EducationSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Academic Journey</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                {edu.degree}
              </h3>
              <p className="text-gray-400 mb-2">{edu.institution}</p>
              <p className="text-lg font-semibold mb-4">{edu.duration}</p>
              <h4 className="font-bold mb-2">Achievements:</h4>
              <ul className="list-disc list-inside mb-4">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300">
                    {achievement}
                  </li>
                ))}
              </ul>
              <h4 className="font-bold mb-2">Key Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {edu.skills.map((skill, i) => (
                  <div key={i} className="flex items-center bg-gray-700 rounded-full px-3 py-1">
                    <skill.icon className="mr-2" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

