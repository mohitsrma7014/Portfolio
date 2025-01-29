import Header from "../components/experience/Header"
import Timeline from "../components/experience/Timeline"
import FeaturedMilestone from "../components/experience/FeaturedMilestone"
import CTASection from "../components/experience/CTASection"
import ParallaxBackground from "../components/experience/ParallaxBackground"

export default function Experience() {
  return (
    <main className="min-h-screen bg-gray-900 text-white relative">
      <ParallaxBackground />
      <div className="relative z-10">
        <Header />
        <Timeline />
        <FeaturedMilestone />
        <CTASection />
      </div>
    </main>
  )
}

