<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Your Profile</h1>
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-6">
        <form @submit.prevent="updateProfile">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              v-model="profile.name"
              required
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            >
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              v-model="profile.email"
              required
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            >
          </div>
          <div class="mb-6">
            <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              v-model="profile.phone"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            >
          </div>
          <button
            type="submit"
            class="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuthStore } from '@/store/auth'

export default {
  name: 'Profile',
  setup() {
    const authStore = useAuthStore()

    const profile = ref({
      name: authStore.user?.name || '',
      email: authStore.user?.email || '',
      phone: authStore.user?.phone || ''
    })

    const updateProfile = async () => {
      try {
        await authStore.updateProfile(profile.value)
        alert('Profile updated successfully')
      } catch (error) {
        console.error('Profile update error:', error)
        alert('An error occurred while updating your profile')
      }
    }

    return {
      profile,
      updateProfile
    }
  }
}
</script>

