"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unworn items in their original condition with tags attached. Shipping costs for returns are the responsibility of the customer unless the item is defective.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "For orders within Nairobi, we offer same-day or next-day delivery. For orders outside Nairobi, shipping typically takes 3-5 business days.",
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
]

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-4 text-orange-600">Frequently Asked Questions</h1>
          <p className="text-gray-600">Find answers to common questions about our products and services.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-64 md:h-full"
        >
          <Image
            src="/faq-image.jpg"
            alt="Stride by Marlow FAQ"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-orange-600">{faq.question}</span>
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4"
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

