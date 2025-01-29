"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaArrowUp } from "react-icons/fa"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link href={`/${item.toLowerCase()}`}>
                    <motion.a
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <p className="text-gray-300">© {new Date().getFullYear()} Mohit Sharma. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <motion.button
              onClick={scrollToTop}
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.1, backgroundColor: "#3B82F6" }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

