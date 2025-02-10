<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4">M-Pesa Payment</h2>
    <form @submit.prevent="initiatePayment" class="space-y-4">
      <div>
        <label for="phone" class="block mb-1">M-Pesa Phone Number</label>
        <input
          type="tel"
          id="phone"
          v-model="phoneNumber"
          placeholder="e.g., 254712345678"
          required
          class="w-full border rounded px-3 py-2"
        >
      </div>
      <div>
        <label for="amount" class="block mb-1">Amount (KES)</label>
        <input
          type="number"
          id="amount"
          v-model="amount"
          required
          class="w-full border rounded px-3 py-2"
        >
      </div>
      <button
        type="submit"
        :disabled="isLoading"
        class="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300 disabled:opacity-50"
      >
        {{ isLoading ? 'Processing...' : 'Pay with M-Pesa' }}
      </button>
    </form>
    <div class="mt-4 text-sm text-gray-600">
      <p>M-Pesa Paybill: 714777</p>
      <p>Account Number: Your Order Number</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useMpesa } from '@/api/mpesa'

export default {
  name: 'PaymentMPesa',
  props: {
    orderTotal: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const phoneNumber = ref('')
    const amount = ref(props.orderTotal)
    const isLoading = ref(false)
    const mpesa = useMpesa()

    const initiatePayment = async () => {
      isLoading.value = true
      try {
        const result = await mpesa.initiatePayment(phoneNumber.value, amount.value)
        console.log('M-Pesa payment initiated:', result)
        // Handle successful payment initiation (e.g., show a success message, redirect to order confirmation)
      } catch (error) {
        console.error('M-Pesa payment failed:', error)
        // Handle payment failure (e.g., show an error message)
      } finally {
        isLoading.value = false
      }
    }

    return {
      phoneNumber,
      amount,
      isLoading,
      initiatePayment
    }
  }
}
</script>

