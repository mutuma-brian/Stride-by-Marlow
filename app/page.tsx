import Navbar from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { About } from "@/components/about"
import { Newsletter } from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <About />
      <Newsletter />
      <Footer />
    </>
  )
}
