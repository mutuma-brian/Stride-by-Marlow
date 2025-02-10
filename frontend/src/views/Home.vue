<template>
  <div class="home">
    <Hero />
    <FeaturedProducts />
    <About />
    <Newsletter />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import About from '@/components/About.vue'
import Newsletter from '@/components/Newsletter.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    FeaturedProducts,
    About,
    Newsletter
  }
}
</script>

