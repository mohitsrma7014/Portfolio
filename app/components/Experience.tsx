"use client"

import { motion } from "framer-motion"
import { FaBriefcase, FaCode, FaChartLine, FaRobot, FaGraduationCap, FaLaptopCode } from "react-icons/fa"

const experiences = [
  {
    title: "Data Analytics Intern",
    company: "NBC Jaipur",
    period: "May 2023 - August 2023",
    type: "Internship",
    description: "Gained hands-on experience in data analysis and visualization for marketing strategies.",
    responsibilities: [
      "Analyzed large datasets using Python and SQL to identify trends and patterns in customer behavior",
      "Created visualizations and reports using Matplotlib, Seaborn, and Power BI",
      "Assisted in developing data-driven marketing strategies, resulting in a 15% increase in campaign effectiveness",
      "Conducted A/B testing for website optimization, improving conversion rates by 10%",
      "Collaborated with cross-functional teams to present findings and implement data-driven solutions",
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "SQL", "Power BI", "A/B Testing"],
    icon: FaChartLine,
  },
  {
    title: "AI Research Intern",
    company: "Auring Technologies",
    period: "September 2023 - December 2023",
    type: "Research",
    description: "Contributed to cutting-edge AI research and development projects.",
    responsibilities: [
      "Implemented and fine-tuned machine learning models for natural language processing tasks",
      "Developed AI-powered solutions for sentiment analysis and text classification",
      "Collaborated with the research team on innovative projects in computer vision",
      "Conducted literature reviews and stayed up-to-date with the latest AI research papers",
      "Presented research findings and methodologies to both technical and non-technical audiences",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
    icon: FaRobot,
  },
  {
    title: "Developer & Data Analyst",
    company: "SSB Pvt. Ltd.",
    period: "January 2024 - Present",
    type: "Full-time",
    description: "Leading data science initiatives and developing full-stack solutions for business optimization.",
    responsibilities: [
      "Design and implement machine learning models for predictive analytics and process optimization",
      "Develop and maintain data pipelines using Apache Spark and Kafka for real-time data processing",
      "Create interactive dashboards and data visualizations using React and D3.js",
      "Build RESTful APIs using Django and FastAPI for data-driven applications",
      "Implement DevOps practices, including CI/CD pipelines and containerization with Docker and Kubernetes",
      "Collaborate with stakeholders to identify business problems and develop data-driven solutions",
      "Mentor junior team members and contribute to the company's data science best practices",
    ],
    technologies: [
      "Python",
      "SQL",
      "Machine Learning",
      "Apache Spark",
      "Kafka",
      "React",
      "D3.js",
      "Django",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    icon: FaLaptopCode,
  },
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My journey in data science and machine learning, featuring internships and full-time roles that have shaped my
          professional growth and expertise.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className={`flex flex-col md:flex-row gap-8 items-center md:items-start relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900 z-10" />

              <div className="w-full md:w-5/12">
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <exp.icon className="text-3xl text-blue-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-300">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-blue-300">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey in engineering and artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">B.Tech in Mechanical Engineering</h3>
                <p className="text-blue-400">Bikaner Technical University</p>
                <p className="text-gray-400">2020 - 2024</p>
              </div>
            </div>
            <p className="text-gray-300">
              Focused on core mechanical principles with additional emphasis on computational methods and data analysis
              in engineering applications. Completed several projects combining mechanical engineering concepts with
              data science techniques.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <FaCode className="text-3xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Minor in Artificial Intelligence</h3>
                <p className="text-blue-400">IIT Ropar</p>
                <p className="text-gray-400">2024 - 2025</p>
              </div>
            </div>
            <p className="text-gray-300">
              Specialized program covering advanced topics in AI, machine learning, and deep learning, with practical
              projects in computer vision and natural language processing. Gained hands-on experience with cutting-edge
              AI technologies and research methodologies.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

