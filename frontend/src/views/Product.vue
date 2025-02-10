<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="product" class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2">
        <img :src="product.image" :alt="product.name" class="w-full h-auto rounded-lg shadow-lg">
      </div>
      <div class="md:w-1/2">
        <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>
        <p class="text-xl text-gray-600 mb-4">KES {{ product.price.toLocaleString() }}</p>
        <p class="text-gray-700 mb-6">{{ product.description }}</p>
        <div class="flex items-center mb-6">
          <label for="quantity" class="mr-4">Quantity:</label>
          <input
            type="number"
            id="quantity"
            v-model="quantity"
            min="1"
            class="border rounded px-2 py-1 w-16"
          >
        </div>
        <button
          @click="addToCart"
          class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
    <div v-else class="text-center">
      <p>Loading product...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/store/product'
import { useCartStore } from '@/store/cart'

export default {
  name: 'Product',
  setup() {
    const route = useRoute()
    const productStore = useProductStore()
    const cartStore = useCartStore()
    const product = ref(null)
    const quantity = ref(1)

    onMounted(async () => {
      product.value = await productStore.fetchProduct(route.params.id)
    })

    const addToCart = () => {
      if (product.value) {
        cartStore.addToCart({
          ...product.value,
          quantity: quantity.value
        })
        alert('Product added to cart!')
      }
    }

    return {
      product,
      quantity,
      addToCart
    }
  }
}
</script>

