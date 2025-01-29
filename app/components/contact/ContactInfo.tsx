"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { toast } from "react-toastify"

export default function ContactInfo() {
  const contactDetails = [
    { icon: FaEnvelope, text: "mohitsrma7014@gmail.com", type: "email" },
    { icon: FaPhone, text: "+91 7014 028949", type: "phone" },
    { icon: FaMapMarkerAlt, text: "Alwar, Rajasthan, India", type: "location" },
  ]

  const copyToClipboard = (text, type) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success(`${type === "email" ? "Email" : "Phone number"} copied to clipboard!`)
      })
      .catch(() => {
        toast.error("Failed to copy. Please try again.")
      })
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      {contactDetails.map((detail, index) => (
        <motion.div
          key={index}
          className="flex items-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <detail.icon className="text-blue-500 mr-4 text-xl" />
          <span>{detail.text}</span>
          {(detail.type === "email" || detail.type === "phone") && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => copyToClipboard(detail.text, detail.type)}
              className="ml-2 text-sm text-blue-400 hover:text-blue-300"
            >
              Copy
            </motion.button>
          )}
        </motion.div>
      ))}
    </div>
  )
}

