"use client"

import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-800 rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <div className="mb-6">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-blue-500 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Challenges</h4>
            <p className="text-gray-300">{project.challenges}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Solutions</h4>
            <p className="text-gray-300">{project.solutions}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Impact</h4>
            <p className="text-gray-300">{project.impact}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              >
                <FaGithub size={20} />
                <span>View on GitHub</span>
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              >
                <FaExternalLinkAlt size={20} />
                <span>Live Demo</span>
              </a>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

