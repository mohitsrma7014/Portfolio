"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function FeaturedProject() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Project
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg"
              alt="Featured Project Demo"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-4">ERP Software Solution</h3>
            <p className="text-gray-300 mb-6">
              Developed a comprehensive ERP system for a manufacturing company, integrating inventory management,
              production planning, and financial reporting. This AI-driven solution optimized resource allocation and
              improved overall efficiency.
            </p>
            <h4 className="text-xl font-bold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Real-time inventory tracking and automated reordering</li>
              <li>AI-powered production scheduling and optimization</li>
              <li>Integrated financial reporting with predictive analytics</li>
              <li>User-friendly dashboard for key performance indicators</li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500 text-sm rounded-full">Python</span>
              <span className="px-3 py-1 bg-blue-500 text-sm rounded-full">Django</span>
              <span className="px-3 py-1 bg-blue-500 text-sm rounded-full">React</span>
              <span className="px-3 py-1 bg-blue-500 text-sm rounded-full">PostgreSQL</span>
              <span className="px-3 py-1 bg-blue-500 text-sm rounded-full">TensorFlow</span>
            </div>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

