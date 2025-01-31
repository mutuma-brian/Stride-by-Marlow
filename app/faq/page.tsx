import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FAQContent from "@/components/faq-content"

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-20 px-4 sm:px-6 lg:px-8">
        <FAQContent />
      </main>
      <Footer />
    </>
  )
}

