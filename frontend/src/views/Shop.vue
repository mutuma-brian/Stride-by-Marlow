<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Shop Our Collection</h1>
    <div class="mb-8">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search products..."
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/store/product'

export default {
  name: 'Shop',
  components: {
    ProductCard,
  },
  setup() {
    const productStore = useProductStore()
    const searchTerm = ref('')

    onMounted(() => {
      productStore.fetchProducts()
    })

    const filteredProducts = computed(() => {
      return productStore.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    })

    return {
      searchTerm,
      filteredProducts,
    }
  }
}
</script>

