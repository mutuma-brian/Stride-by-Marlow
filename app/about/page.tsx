import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutContent from "@/components/about-content"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-cover bg-center py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/about-background.jpg')" }}
      >
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
          <AboutContent />
        </div>
      </main>
      <Footer />
    </>
  )
}

