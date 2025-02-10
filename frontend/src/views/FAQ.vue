<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
    <div class="space-y-4">
      <div v-for="(faq, index) in faqs" :key="index" class="border-b pb-4">
        <h2 class="text-xl font-semibold mb-2">{{ faq.question }}</h2>
        <p>{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  setup() {
    const faqs = [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for all unworn items in their original condition with tags attached. Shipping costs for returns are the responsibility of the customer unless the item is defective."
      },
      {
        question: "How long does shipping take?",
        answer: "For orders within Nairobi, we offer same-day or next-day delivery. For orders outside Nairobi, shipping typically takes 3-5 business days."
      },
      {
        question: "Do you offer international shipping?",
        answer: "Currently, we only ship within Kenya. We're working on expanding our shipping options to other countries in the future."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the courier's website."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept M-PESA, credit/debit cards, and PayPal. For M-PESA payments, use our Paybill number 714777 and your order number as the account number."
      }
    ]

    return {
      faqs
    }
  }
}
</script>

