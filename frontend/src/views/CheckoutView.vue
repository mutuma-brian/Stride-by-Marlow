<template>
    <v-container class="py-16">
      <h1 class="text-h3 font-weight-bold mb-8">Checkout</h1>
      <v-row>
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>Shipping Information</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="placeOrder">
                <v-text-field v-model="shippingInfo.name" label="Full Name" required></v-text-field>
                <v-text-field v-model="shippingInfo.address" label="Address" required></v-text-field>
                <v-text-field v-model="shippingInfo.city" label="City" required></v-text-field>
                <v-text-field v-model="shippingInfo.postalCode" label="Postal Code" required></v-text-field>
                <v-text-field v-model="shippingInfo.phone" label="Phone Number" required></v-text-field>
                <v-btn type="submit" color="primary" block x-large :loading="isLoading">
                  Place Order
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>Order Summary</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item v-for="item in cart" :key="item.id">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.quantity }} x KES {{ item.price.toFixed(2) }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    KES {{ (item.quantity * item.price).toFixed(2) }}
                  </v-list-item-action>
                </v-list-item>
              </v-list>
              <v-divider class="my-4"></v-divider>
              <v-row>
                <v-col cols="6">Subtotal:</v-col>
                <v-col cols="6" class="text-right">KES {{ subtotal.toFixed(2) }}</v-col>
              </v-row>
              <v-row>
                <v-col cols="6">Shipping:</v-col>
                <v-col cols="6" class="text-right">KES {{ shipping.toFixed(2) }}</v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="text-h6">Total:</v-col>
                <v-col cols="6" class="text-right text-h6">KES {{ total.toFixed(2) }}</v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../stores/user'
  
  export default {
    name: 'CheckoutView',
    setup() {
      const router = useRouter()
      const userStore = useUserStore()
  
      const cart = computed(() => userStore.cart)
      const subtotal = computed(() => userStore.cartTotal)
      const shipping = computed(() => 500) // Fixed shipping cost
      const total = computed(() => subtotal.value + shipping.value)
  
      const shippingInfo = ref({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        phone: ''
      })
  
      const isLoading = ref(false)
  
      const placeOrder = async () => {
        isLoading.value = true
        // Simulate order placement
        await new Promise(resolve => setTimeout(resolve, 2000))
        isLoading.value = false
        // Clear cart and redirect to order confirmation
        userStore.clearCart()
        router.push('/order-confirmation')
      }
  
      return {
        cart,
        subtotal,
        shipping,
        total,
        shippingInfo,
        isLoading,
        placeOrder
      }
    }
  }
  </script>