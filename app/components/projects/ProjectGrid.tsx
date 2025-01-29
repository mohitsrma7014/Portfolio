"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    id: 1,
    name: "AI-Driven Customer Segmentation",
    description: "Developed a machine learning model to segment customers based on their purchasing behavior.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    category: "AI/ML",
    githubLink: "https://github.com/yourusername/customer-segmentation",
    demoLink: "https://demo-link.com/customer-segmentation",
    challenges: "Handling large datasets and optimizing model performance.",
    solutions: "Implemented efficient data preprocessing and used advanced ML techniques for better segmentation.",
  },
  {
    id: 2,
    name: "E-commerce Backend API",
    description: "Built a robust RESTful API for an e-commerce platform using Django and PostgreSQL.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    category: "Web Development",
    githubLink: "https://github.com/yourusername/ecommerce-api",
    demoLink: "https://api-docs.ecommerce-example.com",
    challenges: "Ensuring scalability and implementing complex business logic.",
    solutions: "Used Django REST framework and implemented caching for improved performance.",
  },
  {
    id: 3,
    name: "Data Visualization Dashboard",
    description: "Created an interactive dashboard for visualizing sales data and trends.",
    technologies: ["JavaScript", "React", "D3.js", "Node.js"],
    category: "Data Analytics",
    githubLink: "https://github.com/yourusername/sales-dashboard",
    demoLink: "https://sales-dashboard-demo.com",
    challenges: "Handling real-time data updates and complex visualizations.",
    solutions: "Implemented WebSocket for real-time updates and optimized D3.js renderings.",
  },
  // Add more projects as needed
]

const categories = ["All", "AI/ML", "Web Development", "Data Analytics"]

export default function ProjectGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`mx-2 px-4 py-2 rounded-full ${filter === category ? "bg-blue-500" : "bg-gray-700"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

