<template>
  <div class="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useAuthStore } from '@/store/auth'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  setup() {
    const authStore = useAuthStore()

    onMounted(() => {
      authStore.checkAuth()
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600;700&family=JetBrains+Mono&family=Poppins:wght@400;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply font-sans bg-gray-50 text-gray-900;
}

.gradient-bg {
  @apply bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700;
}

.gradient-text {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600;
}
</style>
