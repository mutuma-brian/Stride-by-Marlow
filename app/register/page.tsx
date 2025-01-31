import RegisterForm from "@/components/register-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/register-background.jpg')" }}
      >
        <RegisterForm />
      </main>
      <Footer />
    </>
  )
}

