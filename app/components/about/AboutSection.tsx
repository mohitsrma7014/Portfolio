"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="relative w-64 h-64 mx-auto md:mx-0">
            <Image
              src="/placeholder.svg"
              alt="Mohit Sharma"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-blue-500 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-25 animate-pulse"></div>
          </div>
          <motion.a
            href="/path-to-your-resume.pdf"
            download
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg block mx-auto md:mx-0 text-center"
            whileHover={{ scale: 1.05, backgroundColor: "#4299e1" }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg mb-6">
            I'm Mohit Sharma, a passionate Data Analyst and Machine Learning Engineer with expertise in Python
            development, predictive modeling, and backend integration. With a focus on solving real-world problems using
            data-driven insights, I aim to create innovative and impactful solutions.
          </p>
          <blockquote className="text-xl italic text-gray-300 border-l-4 border-blue-500 pl-4">
            "Turning data into meaningful decisions is not just my job; it's my passion."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

