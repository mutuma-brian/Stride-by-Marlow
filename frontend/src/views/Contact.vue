<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Contact Us</h1>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2">
        <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block mb-1">Name</label>
            <input type="text" id="name" v-model="form.name" required class="w-full border rounded px-3 py-2">
          </div>
          <div>
            <label for="email" class="block mb-1">Email</label>
            <input type="email" id="email" v-model="form.email" required class="w-full border rounded px-3 py-2">
          </div>
          <div>
            <label for="message" class="block mb-1">Message</label>
            <textarea id="message" v-model="form.message" required class="w-full border rounded px-3 py-2 h-32"></textarea>
          </div>
          <button type="submit" class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>
      <div class="md:w-1/2">
        <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
        <p class="mb-2"><strong>Address:</strong> Imenti House, First Floor, Stall No: A19, Nairobi, Kenya</p>
        <p class="mb-2"><strong>Phone:</strong> +254 714470576</p>
        <p class="mb-2"><strong>Email:</strong> info@stridemarlow.com</p>
        <h3 class="text-xl font-semibold mt-6 mb-2">Business Hours</h3>
        <p class="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p class="mb-2">Saturday: 10:00 AM - 4:00 PM</p>
        <p class="mb-2">Sunday: Closed</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useContactStore } from '@/store/contact'

export default {
  name: 'Contact',
  setup() {
    const contactStore = useContactStore()
    const form = ref({
      name: '',
      email: '',
      message: ''
    })

    const submitForm = async () => {
      try {
        await contactStore.sendMessage(form.value)
        alert('Thank you for your message. We will get back to you soon!')
        form.value = { name: '', email: '', message: '' }
      } catch (error) {
        console.error('Error sending message:', error)
        alert('An error occurred while sending your message. Please try again.')
      }
    }

    return {
      form,
      submitForm
    }
  }
}
</script>

