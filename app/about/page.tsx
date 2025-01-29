import Header from "../components/about/Header"
import AboutSection from "../components/about/AboutSection"
import StatsSection from "../components/about/StatsSection"
import TimelineSection from "../components/about/TimelineSection"
import CTASection from "../components/about/CTASection"

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />
      <AboutSection />
      <StatsSection />
      <TimelineSection />
      <CTASection />
    </main>
  )
}

