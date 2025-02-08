<template>
    <v-container class="py-16">
      <h1 class="text-h3 font-weight-bold mb-8">Your Cart</h1>
      <v-row v-if="cart.length === 0">
        <v-col cols="12" class="text-center">
          <p class="text-h5 mb-4">Your cart is empty</p>
          <v-btn color="primary" to="/shop" x-large>
            Continue Shopping
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12" md="8">
          <v-card v-for="item in cart" :key="item.id" class="mb-4">
            <v-card-text>
              <v-row align="center">
                <v-col cols="3">
                  <v-img :src="item.image" height="100" contain></v-img>
                </v-col>
                <v-col cols="5">
                  <h3 class="text-h6">{{ item.title }}</h3>
                  <p class="text-body-1">KES {{ item.price.toFixed(2) }}</p>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                    v-model="item.quantity"
                    type="number"
                    min="1"
                    @input="updateQuantity(item.id, $event)"
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-btn icon @click="removeFromCart(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>Order Summary</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">Subtotal:</v-col>
                <v-col cols="6" class="text-right">KES {{ subtotal.toFixed(2) }}</v-col>
              </v-row>
              <v-row>
                <v-col cols="6">Shipping:</v-col>
                <v-col cols="6" class="text-right">KES {{ shipping.toFixed(2) }}</v-col>
              </v-row>
              <v-divider class="my-4"></v-divider>
              <v-row>
                <v-col cols="6" class="text-h6">Total:</v-col>
                <v-col cols="6" class="text-right text-h6">KES {{ total.toFixed(2) }}</v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block x-large @click="checkout">
                Proceed to Checkout
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useUserStore } from '../stores/user'
  
  export default {
    name: 'CartView',
    setup() {
      const userStore = useUserStore()
  
      const cart = computed(() => userStore.cart)
      const subtotal = computed(() => userStore.cartTotal)
      const shipping = computed(() => 500) // Fixed shipping cost
      const total = computed(() => subtotal.value + shipping.value)
  
      const updateQuantity = (productId, quantity) => {
        userStore.updateCartItemQuantity(productId, parseInt(quantity))
      }
  
      const removeFromCart = (productId) => {
        userStore.removeFromCart(productId)
      }
  
      const checkout = () => {
        // Implement checkout logic here
        alert('Checkout functionality not implemented yet')
      }
  
      return {
        cart,
        subtotal,
        shipping,
        total,
        updateQuantity,
        removeFromCart,
        checkout
      }
    }
  }
  </script>