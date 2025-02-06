import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              At Stride by Marlow, we are committed to protecting your privacy and ensuring the security of your
              personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data
              when you use our website and services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We collect personal information that you provide to us, such as your name, email address, phone number,
              shipping address, and payment information when you make a purchase or create an account. We may also
              collect information about your browsing behavior on our website.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We use your personal information to:</p>
            <ul className="list-disc list-inside">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We may use third-party services to process payments, ship orders, or analyze website traffic. These
              service providers have access to your personal information only to perform specific tasks on our behalf
              and are obligated to protect your information.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              You have the right to access, correct, or delete your personal information. You can also object to the
              processing of your data or request its limitation. To exercise these rights, please contact us using the
              information provided below.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">
              Email: privacy@stridemarlow.com
              <br />
              Address: Imenti House, First Floor, Stall No: A19, Nairobi, Kenya
            </p>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-8">Last updated: February 5, 2025</p>
      </main>
      <Footer />
    </>
  )
}

