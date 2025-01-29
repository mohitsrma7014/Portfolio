"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import ProjectModal from "./ProjectModal"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title: "AI-Driven Customer Segmentation",
    description:
      "Developed a machine learning model to segment customers based on their purchasing behavior, improving targeted marketing strategies.",
    image: "/placeholder.svg",
    githubLink: "https://github.com/yourusername/customer-segmentation",
    liveLink: "https://customer-segmentation-demo.com",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    challenges: "Handling large datasets and optimizing model performance for real-time segmentation.",
    solutions:
      "Implemented efficient data preprocessing techniques and used advanced ML algorithms for better segmentation accuracy.",
    impact: "Increased marketing ROI by 25% and improved customer retention rates by 15%.",
  },
  {
    id: 2,
    title: "E-commerce Backend API",
    description:
      "Built a robust RESTful API for an e-commerce platform using Django and PostgreSQL, enabling seamless integration with front-end applications.",
    image: "/placeholder.svg",
    githubLink: "https://github.com/yourusername/ecommerce-api",
    liveLink: "https://api-docs.ecommerce-example.com",
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Docker"],
    challenges:
      "Ensuring scalability and implementing complex business logic for product management and order processing.",
    solutions:
      "Utilized Django REST framework for efficient API development and implemented caching mechanisms for improved performance.",
    impact:
      "Reduced server response time by 40% and increased the platform's capacity to handle 10x more concurrent users.",
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description:
      "Created an interactive dashboard for visualizing sales data and trends, providing actionable insights for business decision-making.",
    image: "/placeholder.svg",
    githubLink: "https://github.com/yourusername/sales-dashboard",
    liveLink: "https://sales-dashboard-demo.com",
    technologies: ["JavaScript", "React", "D3.js", "Node.js", "Express"],
    challenges: "Handling real-time data updates and creating complex, interactive visualizations.",
    solutions: "Implemented WebSocket for real-time updates and optimized D3.js renderings for smooth interactions.",
    impact: "Enabled data-driven decision making, resulting in a 20% increase in sales team efficiency.",
  },
  {
    id: 4,
    title: "Predictive Maintenance System",
    description:
      "Developed a machine learning model to predict equipment failures for a manufacturing client, reducing downtime by 30%.",
    image: "/placeholder.svg",
    githubLink: "https://github.com/yourusername/predictive-maintenance",
    liveLink: "https://predictive-maintenance-demo.com",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Docker", "FastAPI"],
    challenges: "Integrating with legacy systems and handling imbalanced data.",
    solutions:
      "Implemented advanced data augmentation techniques and developed a modular architecture for easy integration.",
    impact: "Reduced unplanned downtime by 30% and maintenance costs by 25%.",
  },
  {
    id: 5,
    title: "NLP-Powered Customer Support Bot",
    description:
      "Created an AI-driven chatbot for a SaaS company to improve customer support efficiency and response times.",
    image: "/placeholder.svg",
    githubLink: "https://github.com/yourusername/nlp-support-bot",
    liveLink: "https://nlp-support-bot-demo.com",
    technologies: ["Python", "NLTK", "Rasa", "Docker", "MongoDB"],
    challenges: "Handling complex, multi-turn conversations and integrating with existing support systems.",
    solutions:
      "Implemented advanced dialogue management and developed a custom integration layer for seamless operation.",
    impact: "Reduced average response time by 60% and increased customer satisfaction scores by 25%.",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-20 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-blue-500 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-blue-500 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                  >
                    Learn More
                  </button>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}

