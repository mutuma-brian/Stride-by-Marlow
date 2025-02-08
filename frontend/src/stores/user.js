import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    cart: []
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  },
  actions: {
    login(credentials) {
      // Simulating API call
      return new Promise((resolve) => {
        setTimeout(() => {
          this.user = { id: 1, name: 'John Doe', email: credentials.email, phone: '+254 712 345 678' }
          resolve(this.user)
        }, 1000)
      })
    },
    logout() {
      this.user = null
      this.cart = []
    },
    register(userData) {
      // Simulating API call
      return new Promise((resolve) => {
        setTimeout(() => {
          this.user = { id: 1, name: userData.name, email: userData.email, phone: userData.phone }
          resolve(this.user)
        }, 1000)
      })
    },
    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += product.quantity
      } else {
        this.cart.push({ ...product })
      }
    },
    removeFromCart(productId) {
      const index = this.cart.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.cart.splice(index, 1)
      }
    },
    updateCartItemQuantity(productId, quantity) {
      const item = this.cart.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    clearCart() {
      this.cart = []
    },
    updateProfilePicture(imageUrl) {
      if (this.user) {
        this.user.profilePicture = imageUrl
      }
    }
  }
})