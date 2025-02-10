<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Your Cart</h1>
    <div v-if="cartItems.length > 0">
      <div class="space-y-4">
        <div v-for="item in cartItems" :key="item.id" class="flex items-center justify-between border-b pb-4">
          <div class="flex items-center">
            <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded mr-4">
            <div>
              <h2 class="text-lg font-semibold">{{ item.name }}</h2>
              <p class="text-gray-600">KES {{ item.price.toLocaleString() }}</p>
            </div>
          </div>
          <div class="flex items-center">
            <button @click="decreaseQuantity(item)" class="text-gray-500 hover:text-gray-700">
              <i class="fas fa-minus"></i>
            </button>
            <span class="mx-2">{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)" class="text-gray-500 hover:text-gray-700">
              <i class="fas fa-plus"></i>
            </button>
            <button @click="removeFromCart(item)" class="ml-4 text-red-500 hover:text-red-700">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-between items-center">
        <p class="text-xl font-semibold">Total: KES {{ totalPrice.toLocaleString() }}</p>
        <button @click="proceedToCheckout" class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
    <div v-else class="text-center">
      <p class="text-xl">Your cart is empty</p>
      <router-link to="/shop" class="text-orange-500 hover:text-orange-600">Continue Shopping</router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/store/cart'

export default {
  name: 'Cart',
  setup() {
    const router = useRouter()
    const cartStore = useCartStore()

    const cartItems = computed(() => cartStore.items)
    const totalPrice = computed(() => cartStore.totalPrice)

    const increaseQuantity = (item) => {
      cartStore.updateQuantity(item.id, item.quantity + 1)
    }

    const decreaseQuantity = (item) => {
      if (item.quantity > 1) {
        cartStore.updateQuantity(item.id, item.quantity - 1)
      }
    }

    const removeFromCart = (item) => {
      cartStore.removeFromCart(item.id)
    }

    const proceedToCheckout = () => {
      router.push('/checkout')
    }

    return {
      cartItems,
      totalPrice,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      proceedToCheckout
    }
  }
}
</script>

