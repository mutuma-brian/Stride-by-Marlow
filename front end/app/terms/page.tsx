import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Stride by Marlow website and services, you agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You
            are prohibited from violating or attempting to violate the security of the website.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            To access certain features of our services, you may be required to create an account. You are responsible
            for maintaining the confidentiality of your account information and for all activities that occur under your
            account.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on the Stride by Marlow website, including text, graphics, logos, and software, is the property
            of Stride by Marlow and is protected by copyright and other intellectual property laws.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Stride by Marlow shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages resulting from your use or inability to use our services.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Your continued use of our services after
            any changes indicates your acceptance of the new terms.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of Kenya, without
            regard to its conflict of law provisions.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

