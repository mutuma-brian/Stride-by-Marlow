<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              v-model="name"
              required
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            >
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            >
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            >
          </div>
          <button
            type="submit"
            class="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Register
          </button>
        </form>
        <p class="mt-4 text-center">
          Already have an account?
          <router-link to="/login" class="text-orange-500 hover:text-orange-600">Login here</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

export default {
  name: 'Register',
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()

    const name = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      try {
        await authStore.register(name.value, email.value, password.value)
        router.push('/')
      } catch (error) {
        console.error('Registration error:', error)
        alert('An error occurred during registration')
      }
    }

    return {
      name,
      email,
      password,
      handleSubmit
    }
  }
}
</script>

