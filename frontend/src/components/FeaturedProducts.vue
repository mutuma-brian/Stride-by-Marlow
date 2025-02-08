<template>
    <v-container>
      <h2 class="text-h4 font-weight-bold text-center mb-6">Featured Products</h2>
      <v-row>
        <v-col v-for="product in featuredProducts" :key="product.id" cols="12" sm="6" md="3">
          <ProductCard :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useProductStore } from '../stores/products'
  import ProductCard from './ProductCard.vue'
  
  export default {
    name: 'FeaturedProducts',
    components: {
      ProductCard
    },
    setup() {
      const productStore = useProductStore()
      const featuredProducts = computed(() => productStore.featuredProducts)
  
      return {
        featuredProducts
      }
    }
  }
  </script>