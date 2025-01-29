import Header from "../components/projects/Header"
import ProjectGrid from "../components/projects/ProjectGrid"
import FeaturedProject from "../components/projects/FeaturedProject"
import CTASection from "../components/projects/CTASection"
import ParticleBackground from "../components/projects/ParticleBackground"

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-900 text-white relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <ProjectGrid />
        <FeaturedProject />
        <CTASection />
      </div>
    </main>
  )
}

