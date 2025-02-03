import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { ContactInfo } from "@/components/contact-info"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Us | Stride by Marlow",
  description: "Get in touch with Stride by Marlow",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-orange-100 to-white shadow-lg">
          <CardContent className="p-6">
            <ContactInfo />
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}

