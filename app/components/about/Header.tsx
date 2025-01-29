"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="py-20 text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 glow-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-300"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Data Analyst | Machine Learning Engineer | Python Developer
      </motion.p>
    </header>
  )
}

