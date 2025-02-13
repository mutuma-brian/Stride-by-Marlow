import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "FAQ | Stride by Marlow",
  description: "Frequently Asked Questions about Stride by Marlow",
}

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unworn items in their original condition with tags attached. Shipping costs for returns are the responsibility of the customer unless the item is defective.",
  },
  {
    question: "How long does shipping take within Nairobi?",
    answer:
      "For orders within Nairobi, we offer same-day or next-day delivery, depending on the time of order placement and your location within the city.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Currently, we only ship within Kenya. We're working on expanding our shipping options to other countries in the future.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the courier's website.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept M-PESA, credit/debit cards, and PayPal. For M-PESA payments, use our Paybill number 714777 and your order number as the account number.",
  },
  {
    question: "How do I know which size to order?",
    answer:
      "We provide a detailed size guide on our website. You can find it in the footer under 'Size Guide'. If you're still unsure, feel free to contact our customer service team for assistance.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes, we offer digital gift cards that can be purchased on our website. They make great gifts for sneaker enthusiasts!",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@stridemarlow.com or by phone at +254 714 470576 during our business hours (Monday to Friday, 9 AM to 6 PM EAT).",
  },
]

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <Card className="w-full max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}

