<template>
  <section class="relative h-screen overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{
        backgroundImage: `url('https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        transform: `translateY(${offset * 0.5}px)`
      }"
    >
      <div class="absolute inset-0 bg-black/60" />
    </div>
    <div class="relative container mx-auto px-4 h-full flex flex-col justify-center">
      <div class="max-w-3xl space-y-6">
        <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          Step into Style with Stride by Marlow
        </h1>
        <p class="text-lg md:text-xl text-white/80 max-w-xl">
          Discover the perfect blend of comfort and fashion with our premium sneaker collection.
        </p>
        <router-link to="/shop" class="inline-block">
          <button class="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">
            Shop Now
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Hero',
  setup() {
    const offset = ref(0)

    const handleScroll = () => {
      offset.value = window.pageYOffset
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      offset
    }
  }
}
</script>

