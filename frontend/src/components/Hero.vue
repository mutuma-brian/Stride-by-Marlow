<template>
    <v-parallax
      src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      height="100vh"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <v-card color="rgba(0,0,0,0.5)" dark>
            <v-card-text class="text-center">
              <h1 class="text-h3 font-weight-bold mb-4">
                Step into Style with Stride by Marlow
              </h1>
              <p class="text-h6 mb-6">
                Discover the perfect blend of comfort and fashion with our premium sneaker collection.
              </p>
              <v-btn
                color="primary"
                x-large
                @click="handleShopNowClick"
              >
                Shop Now
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
  </template>
  
  <script>
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../stores/user'
  
  export default {
    name: 'Hero',
    setup() {
      const router = useRouter()
      const userStore = useUserStore()
  
      const handleShopNowClick = () => {
        if (userStore.isLoggedIn) {
          router.push('/shop')
        } else {
          router.push('/login')
        }
      }
  
      return {
        handleShopNowClick
      }
    }
  }
  </script>