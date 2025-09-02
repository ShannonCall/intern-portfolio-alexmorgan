import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A1128] text-[#EAEAEA]">
      <Navbar />

      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h1>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo Placeholder */}
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-[#EAEAEA]/10 rounded-lg flex items-center justify-center border border-[#EAEAEA]/20">
                <span className="text-[#EAEAEA]/60">Photo Placeholder</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-lg leading-relaxed text-[#EAEAEA]/90">
                Alex is a project manager in training, learning Agile methods and portfolio building. With a passion for
                organizing complex projects and leading teams to success, Alex is developing the skills necessary to
                excel in modern project management environments.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
