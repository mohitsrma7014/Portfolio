"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

export default function SocialLinks() {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohitsrma", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/mohitsrma", label: "GitHub" },
    { icon: FaTwitter, href: "https://twitter.com/mohitsrma", label: "Twitter" },
  ]

  return (
    <div className="flex justify-center space-x-6 mb-8">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#3B82F6" }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          <link.icon className="text-3xl" />
          <span className="sr-only">{link.label}</span>
        </motion.a>
      ))}
    </div>
  )
}

