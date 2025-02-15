import   Navbar from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { About } from "@/components/about"
import { Newsletter } from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
     <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.19.3/inter.min.css" 
        />
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

