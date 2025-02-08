<template>
    <v-container class="py-16">
      <h1 class="text-h3 font-weight-bold mb-8">Frequently Asked Questions</h1>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in faqItems" :key="i">
          <v-expansion-panel-title>{{ item.question }}</v-expansion-panel-title>
          <v-expansion-panel-text>{{ item.answer }}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'FAQView',
    setup() {
      const faqItems = ref([
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept various payment methods including credit/debit cards, M-Pesa, and bank transfers.'
        },
        {
          question: 'How long does shipping take?',
          answer: 'Shipping within Nairobi typically takes 1-3 business days. For other areas in Kenya, it may take 3-7 business days.'
        },
        {
          question: 'Do you offer international shipping?',
          answer: 'Currently, we only ship within Kenya. We hope to expand our shipping options in the future.'
        },
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for unworn items in their original condition. Please contact our customer service for more details.'
        },
        {
          question: 'How can I track my order?',
          answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website.'
        },
        {
          question: 'Do you offer size exchanges?',
          answer: 'Yes, we offer size exchanges within 14 days of receiving your order. Please ensure the item is unworn and in its original condition.'
        }
      ])
  
      return {
        faqItems
      }
    }
  }
  </script>