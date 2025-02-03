import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { NewCollection } from "@/components/new-collection"
import { About } from "@/components/about"
import { Newsletter } from "@/components/newsletter"
import Footer from "@/components/footer"
import { UserSidebar } from "@/components/user-sidebar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <NewCollection />
        <About />
        <Newsletter />
        <UserSidebar />
      </main>
      <Footer />
    </>
  )
}

