<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Checkout</h1>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-2/3">
        <h2 class="text-2xl font-semibold mb-4">Shipping Information</h2>
        <form @submit.prevent="placeOrder" class="space-y-4">
          <div>
            <label for="name" class="block mb-1">Full Name</label>
            <input type="text" id="name" v-model="shippingInfo.name" required class="w-full border rounded px-3 py-2">
          </div>
          <div>
            <label for="address" class="block mb-1">Address</label>
            <input type="text" id="address" v-model="shippingInfo.address" required class="w-full border rounded px-3 py-2">
          </div>
          <div>
            <label for="city" class="block mb-1">City</label>
            <input type="text" id="city" v-model="shippingInfo.city" required class="w-full border rounded px-3 py-2">
          </div>
          <div>
            <label for="phone" class="block mb-1">Phone Number</label>
            <input type="tel" id="phone" v-model="shippingInfo.phone" required class="w-full border rounded px-3 py-2">
          </div>
          <button type="submit" class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
            Place Order
          </button>
        </form>
      </div>
      <div class="md:w-1/3">
        <h2 class="text-2xl font-semibold mb-4">Order Summary</h2>
        <div class="space-y-2">
          <div v-for="item in cartItems" :key="item.id" class="flex justify-between">
            <span>{{ item.name }} (x{{ item.quantity }})</span>
            <span>KES {{ (item.price * item.quantity).toLocaleString() }}</span>
          </div>
          <div class="border-t pt-2 font-semibold">
            <span>Total:</span>
            <span>KES {{ totalPrice.toLocaleString() }}</span>
          </div>
        </div>
        <PaymentMPesa :orderTotal="totalPrice" class="mt-6" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/store/cart'
import { useOrderStore } from '@/store/order'
import PaymentMPesa from '@/components/PaymentMPesa.vue'

export default {
  name: 'Checkout',
  components: {
    PaymentMPesa
  },
  setup() {
    const router = useRouter()
    const cartStore = useCartStore()
    const orderStore = useOrderStore()

    const shippingInfo = ref({
      name: '',
      address: '',
      city: '',
      phone: ''
    })

    const cartItems = computed(() => cartStore.items)
    const totalPrice = computed(() => cartStore.totalPrice)

    const placeOrder = async () => {
      try {
        const order = {
          items: cartItems.value,
          total: totalPrice.value,
          shippingInfo: shippingInfo.value
        }
        await orderStore.createOrder(order)
        cartStore.clearCart()
        router.push('/order-confirmation')
      } catch (error) {
        console.error('Error placing order:', error)
        alert('An error occurred while placing your order. Please try again.')
      }
    }

    return {
      shippingInfo,
      cartItems,
      totalPrice,
      placeOrder
    }
  }
}
</script>

