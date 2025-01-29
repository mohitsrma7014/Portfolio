"use client"

import { motion } from "framer-motion"
import { FaRocket } from "react-icons/fa"

export default function FeaturedMilestone() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-6">
            <FaRocket className="text-4xl mr-4 text-yellow-300" />
            <h2 className="text-3xl font-bold">Key Achievement at SSB Pvt Ltd</h2>
          </div>
          <p className="text-xl mb-6">
            Automated inventory management system and created real-time analytics dashboards, resulting in a 30%
            reduction in stockouts and a 25% increase in overall operational efficiency.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.span
              className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm rounded-full font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Python
            </motion.span>
            <motion.span
              className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm rounded-full font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              TensorFlow
            </motion.span>
            <motion.span
              className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm rounded-full font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              SQL
            </motion.span>
            <motion.span
              className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm rounded-full font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Tableau
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

