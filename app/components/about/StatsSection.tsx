"use client"

import { motion } from "framer-motion"

const stats = [
  { title: "Projects Completed", value: "10+" },
  { title: "Certifications", value: "3+" },
  { title: "Years of Experience", value: "1+" },
  { title: "Programming Languages", value: "Python, SQL, JavaScript" },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05, rotateY: 180 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {stat.value}
              </motion.h3>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {stat.title}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

