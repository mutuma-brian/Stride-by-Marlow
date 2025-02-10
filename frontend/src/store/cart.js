import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCartStore = defineStore("cart", () => {
  const items = ref([])

  const totalItems = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))
  const totalPrice = computed(() => items.value.reduce((sum, item) => sum + item.price * item.quantity, 0))

  const addToCart = (product) => {
    const existingItem = items.value.find((item) => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (productId) => {
    const index = items.value.findIndex((item) => item.id === productId)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  const updateQuantity = (productId, quantity) => {
    const item = items.value.find((item) => item.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  const clearCart = () => {
    items.value = []
  }

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }
})

