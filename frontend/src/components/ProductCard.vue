<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
    <router-link :to="{ name: 'Product', params: { id: product.id } }">
      <div class="relative h-48 w-full">
        <img
          :src="product.image || '/placeholder.svg'"
          :alt="product.name"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div class="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-gray-600 mb-2">KES {{ product.price.toLocaleString() }}</p>
        </div>
      </div>
    </router-link>
    <button
      @click="addToCart"
      class="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300"
    >
      <i class="fas fa-shopping-cart mr-2"></i> Add to Cart
    </button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { useCartStore } from '@/store/cart'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const authStore = useAuthStore()
    const cartStore = useCartStore()

    const addToCart = () => {
      if (!authStore.isLoggedIn) {
        router.push('/login')
      } else {
        cartStore.addToCart(props.product)
      }
    }

    return {
      addToCart
    }
  }
}
</script>

