import Receipts from "@/components/receipts"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ReceiptsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Receipts />
      </main>
      <Footer />
    </>
  )
}

