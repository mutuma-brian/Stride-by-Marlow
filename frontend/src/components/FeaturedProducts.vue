<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Featured Products</h2>
      <div class="mb-8 relative">
        <div class="flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            v-model="searchTerm"
            class="flex-grow border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button v-if="searchTerm" @click="clearSearch" class="absolute right-12 text-gray-500 hover:text-gray-700">
            <i class="fas fa-times"></i>
          </button>
          <button class="ml-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <ul v-if="suggestions.length > 0 && searchTerm" class="absolute z-10 bg-white border rounded mt-1 w-full left-0">
          <li
            v-for="suggestion in suggestions"
            :key="suggestion"
            class="p-2 hover:bg-gray-100 cursor-pointer"
            @click="selectSuggestion(suggestion)"
          >
            {{ suggestion }}
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import { useProductStore } from '@/store/product'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'FeaturedProducts',
  components: {
    ProductCard
  },
  setup() {
    const productStore = useProductStore()
    const searchTerm = ref('')

    const filteredProducts = computed(() => {
      return productStore.featuredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    })

    const suggestions = computed(() => {
      return productStore.featuredProducts
        .map((product) => product.name)
        .filter((name) => name.toLowerCase().includes(searchTerm.value.toLowerCase()))
        .slice(0, 5)
    })

    const clearSearch = () => {
      searchTerm.value = ''
    }

    const selectSuggestion = (suggestion) => {
      searchTerm.value = suggestion
    }

    return {
      searchTerm,
      filteredProducts,
      suggestions,
      clearSearch,
      selectSuggestion
    }
  }
}
</script>

