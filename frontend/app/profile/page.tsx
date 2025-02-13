import ProfileSettings from "@/components/profile-settings"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <ProfileSettings />
      </main>
      <Footer />
    </>
  )
}

