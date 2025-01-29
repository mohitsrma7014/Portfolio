"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Linkedin } from "lucide-react"

const infoItems = [
  { icon: MapPin, text: "Alwar, Rajasthan, India" },
  { icon: Mail, text: "mohitsrma7014@gmail.com" },
  { icon: Phone, text: "+91 7014 028949" },
  { icon: Linkedin, text: "www.linkedin.com/in/mohitsrma" },
]

export default function QuickInfo() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <item.icon className="w-6 h-6 mr-2 text-blue-400" />
                <h3 className="text-lg font-semibold">{item.text}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

