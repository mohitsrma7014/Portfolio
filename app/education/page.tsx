import Header from "../components/education/Header"
import EducationSection from "../components/education/EducationSection"
import CertificationsSection from "../components/education/CertificationsSection"
import CTASection from "../components/education/CTASection"
import ParticleBackground from "../components/education/ParticleBackground"

export default function Education() {
  return (
    <main className="min-h-screen bg-gray-900 text-white relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <EducationSection />
        <CertificationsSection />
        <CTASection />
      </div>
    </main>
  )
}

