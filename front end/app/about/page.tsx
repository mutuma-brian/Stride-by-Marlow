import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { About } from "@/components/about"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">About Stride by Marlow</h1>
        <About />
      </main>
      <Footer />
    </>
  )
}

