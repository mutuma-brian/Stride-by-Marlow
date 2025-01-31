import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/contact-background.jpg')" }}
      >
        <div className="max-w-2xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-xl p-8">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}

