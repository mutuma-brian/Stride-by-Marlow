import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TransactionHistory from "@/components/transaction-history"

export default function TransactionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <TransactionHistory />
      </main>
      <Footer />
    </>
  )
}

