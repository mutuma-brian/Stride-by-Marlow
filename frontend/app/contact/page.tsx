import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Stride by Marlow",
  description: "Get in touch with Stride by Marlow",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}

