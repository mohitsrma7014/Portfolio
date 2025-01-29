"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Header() {
  const [text, setText] = useState("")
  const fullText = "Professional Experience"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <header className="py-20 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        {text}
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          |
        </motion.span>
      </h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        My journey of learning, building, and making an impact.
      </motion.p>
    </header>
  )
}

