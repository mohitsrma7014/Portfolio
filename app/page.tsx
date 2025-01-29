import type { Metadata } from "next"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import BackToTop from "./components/BackToTop"
import Freelance from "./components/Freelance"

export const metadata: Metadata = {
  title: "Mohit Sharma - Data Analyst & Machine Learning Engineer",
  description: "Explore my portfolio showcasing data analysis, machine learning, and AI-driven solutions.",
  keywords: "Data Analyst, Machine Learning Engineer, Python, Django, Portfolio, AI, Machine Learning, Data Science",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <section id="about" className="py-20 bg-gray-800">
        <About />
      </section>
      <section id="skills" className="py-20 bg-gray-900">
        <Skills />
      </section>
      <section id="projects" className="py-20 bg-gray-800">
        <Projects />
      </section>
      <section id="experience" className="py-20 bg-gray-900">
        <Experience />
      </section>
      <section id="education" className="py-20 bg-gray-800">
        <Education />
      </section>
      <section id="testimonials" className="py-20 bg-gray-900">
        <Testimonials />
      </section>
      <section id="freelance" className="py-20 bg-gray-900">
        <Freelance />
      </section>
      <section id="contact" className="py-20 bg-gray-800">
        <Contact />
      </section>
      <BackToTop />
    </main>
  )
}

