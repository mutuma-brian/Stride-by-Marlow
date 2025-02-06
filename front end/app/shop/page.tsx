import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { FeaturedProducts } from "@/components/featured-products"

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold mb-8">Shop Our Collection</h1>
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  )
}

