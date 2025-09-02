import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Projects() {
  const projects = [
    {
      title: "Project A",
      description:
        "A comprehensive project management system built with modern technologies to streamline team collaboration and task tracking.",
    },
    {
      title: "Project B",
      description:
        "An innovative solution for resource allocation and timeline management, helping teams deliver projects on time and within budget.",
    },
    {
      title: "Project C",
      description:
        "A client portal application that enhances communication between project stakeholders and provides real-time project updates.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A1128] text-[#EAEAEA]">
      <Navbar />

      <main className="flex-1 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#EAEAEA]/5 border border-[#EAEAEA]/10 rounded-lg p-6 hover:bg-[#EAEAEA]/10 transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#8B0000]">{project.title}</h3>
                <p className="text-[#EAEAEA]/80 mb-6 leading-relaxed">{project.description}</p>
                <button className="bg-[#8B0000] hover:bg-[#8B0000]/80 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
