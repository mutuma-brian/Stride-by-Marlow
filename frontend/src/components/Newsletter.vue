<template>
  <section class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Stay in the Loop</h2>
        <p class="text-gray-300 mb-8">
          Subscribe to our newsletter for exclusive deals, new releases, and sneaker news.
        </p>
        <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            class="flex-grow px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="submit"
            :disabled="isLoading"
            class="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50"
          >
            {{ isLoading ? "Subscribing..." : "Subscribe" }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useNewsletterStore } from '@/store/newsletter'

export default {
  name: 'Newsletter',
  setup() {
    const email = ref('')
    const isLoading = ref(false)
    const newsletterStore = useNewsletterStore()

    const handleSubmit = async () => {
      isLoading.value = true
      try {
        await newsletterStore.subscribe(email.value)
        alert("You've successfully subscribed to our newsletter!")
        email.value = ''
      } catch (error) {
        alert('An error occurred while subscribing. Please try again.')
      } finally {
        isLoading.value = false
      }
    }

    return {
      email,
      isLoading,
      handleSubmit
    }
  }
}
</script>

