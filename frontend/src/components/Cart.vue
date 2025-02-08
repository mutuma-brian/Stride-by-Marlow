<template>
    <v-dialog v-model="isOpen" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="closeCart">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Your Cart</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="checkout" :disabled="cart.length === 0">
              Checkout
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
  
        <v-list v-if="cart.length > 0" three-line>
          <v-list-item v-for="item in cart" :key="item.id">
            <v-list-item-avatar>
              <v-img :src="item.image"></v-img>
            </v-list-item-avatar>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>KES {{ item.price.toFixed(2) }}</v-list-item-subtitle>
            </v-list-item-content>
  
            <v-list-item-action>
              <v-btn icon @click="removeFromCart(item.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
  
            <v-list-item-action>
              <v-btn-toggle v-model="item.quantity" mandatory>
                <v-btn @click="updateQuantity(item.id, item.quantity - 1)" :disabled="item.quantity === 1">-</v-btn>
                <v-btn disabled>{{ item.quantity }}</v-btn>
                <v-btn @click="updateQuantity(item.id, item.quantity + 1)">+</v-btn>
              </v-btn-toggle>
            </v-list-item-action>
          </v-list-item>
        </v-list>
  
        <v-card-text v-else class="text-center">
          <p class="text-h6">Your cart is empty</p>
          <v-btn color="primary" @click="closeCart">Continue Shopping</v-btn>
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-actions v-if="cart.length > 0">
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="checkout">
            Checkout (Total: KES {{ total.toFixed(2) }})
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../stores/user'
  
  export default {
    name: 'Cart',
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    },
    emits: ['close'],
    setup(props, { emit }) {
      const router = useRouter()
      const userStore = useUserStore()
  
      const cart = computed(() => userStore.cart)
      const total = computed(() => userStore.cartTotal)
  
      const closeCart = () => {
        emit('close')
      }
  
      const removeFromCart = (productId) => {
        userStore.removeFromCart(productId)
      }
  
      const updateQuantity = (productId, quantity) => {
        userStore.updateCartItemQuantity(productId, quantity)
      }
  
      const checkout = () => {
        closeCart()
        router.push('/checkout')
      }
  
      return {
        cart,
        total,
        closeCart,
        removeFromCart,
        updateQuantity,
        checkout
      }
    }
  }
  </script>