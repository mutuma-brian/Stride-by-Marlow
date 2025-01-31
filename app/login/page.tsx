"use client"

import { useEffect } from "react"
import { useRouter } from "next/router"
import LoginForm from "@/components/login-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    const handleSuccessfulLogin = () => {
      const redirectUrl = localStorage.getItem("redirectAfterLogin")
      if (redirectUrl) {
        localStorage.removeItem("redirectAfterLogin")
        router.push(redirectUrl)
      } else {
        router.push("/")
      }
    }

    window.addEventListener("login-success", handleSuccessfulLogin)

    return () => {
      window.removeEventListener("login-success", handleSuccessfulLogin)
    }
  }, [router])

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/login-background.jpg')" }}
      >
        <LoginForm />
      </main>
      <Footer />
    </>
  )
}

