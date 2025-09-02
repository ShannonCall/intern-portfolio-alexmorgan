import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1128] text-[#EAEAEA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-[80vh] px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Alex Morgan</h1>
            <p className="text-xl md:text-2xl mb-8 text-[#EAEAEA]/80">Future Project Manager</p>
            <Link
              href="/projects"
              className="inline-block bg-[#8B0000] hover:bg-[#8B0000]/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View My Projects
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
