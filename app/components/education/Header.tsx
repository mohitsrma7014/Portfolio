"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="py-20 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 relative inline-block">
        Education & Certifications
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-300 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        The foundation of my knowledge and the milestones of my learning journey.
      </motion.p>
    </header>
  )
}

