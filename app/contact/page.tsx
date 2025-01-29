import Header from "../components/contact/Header"
import ContactForm from "../components/contact/ContactForm"
import ContactInfo from "../components/contact/ContactInfo"
import SocialLinks from "../components/contact/SocialLinks"
import InteractiveMap from "../components/contact/InteractiveMap"
import CTASection from "../components/contact/CTASection"
import Footer from "../components/contact/Footer"
import ParticleBackground from "../components/contact/ParticleBackground"

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <div className="container mx-auto px-4 py-12 grid gap-12 md:grid-cols-2">
          <ContactForm />
          <div>
            <ContactInfo />
            <SocialLinks />
            <InteractiveMap />
          </div>
        </div>
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}

