"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on all unworn sneakers with original packaging. Simply contact our support team to initiate a return.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days within Kenya. Express shipping options are available at checkout for faster delivery.",
  },
  {
    question: "Are all products authentic?",
    answer:
      "Yes, 100% of our products are authentic. We source directly from authorized distributors and verify each item before shipping.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within Kenya. We're working on expanding our shipping options to other countries soon.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and mobile money payments including M-Pesa.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this to track your package in real-time.",
  },
  {
    question: "What if my sneakers arrive damaged?",
    answer:
      "If your sneakers arrive damaged, contact us immediately with photos. We'll replace them or issue a full refund.",
  },
  {
    question: "Do you have a loyalty program?",
    answer:
      "Yes! Sign up for our newsletter to get exclusive deals, early access to new releases, and loyalty rewards.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="container-max py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Find answers to common questions about Stride by Marlow</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-secondary rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/80 transition"
              >
                <h3 className="font-semibold text-left">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-background/50">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">Our support team is here to help</p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
