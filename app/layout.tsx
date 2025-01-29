import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CursorEffect from "./components/CursorEffect"
import { AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mohit Sharma - Portfolio",
  description: "Data Analyst | Machine Learning Engineer | Python Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer />
        <CursorEffect />
      </body>
    </html>
  )
}

