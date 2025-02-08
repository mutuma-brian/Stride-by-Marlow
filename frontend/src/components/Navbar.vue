<template>
  <v-app-bar color="primary" dark app height="80">
    <v-container class="d-flex align-center">
      <v-toolbar-title class="d-flex align-center">
        <v-img src="/logo.png" max-height="60" max-width="60" class="mr-2"></v-img>
        <router-link to="/" class="text-decoration-none text-white text-h5">
          STRIDE BY MARLOW
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        v-model="searchQuery"
        placeholder="Search products"
        prepend-inner-icon="mdi-magnify"
        class="mt-7 hidden-sm-and-down"
        hide-details
        style="max-width: 300px;"
        @input="updateSuggestions"
      ></v-text-field>

      <v-menu v-model="showSuggestions" :close-on-content-click="false" location="bottom">
        <v-list v-if="filteredSuggestions.length > 0">
          <v-list-item v-for="suggestion in filteredSuggestions" :key="suggestion" @click="selectSuggestion(suggestion)">
            <v-list-item-title>{{ suggestion }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-btn v-for="item in navItems" :key="item.name" :to="item.href" text class="mx-2">
          {{ item.name }}
        </v-btn>
      </div>

      <v-menu v-if="isLoggedIn" offset-y>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" class="ml-2">
            <v-avatar color="primary" size="40">
              <v-img v-if="user.profilePicture" :src="user.profilePicture" alt="Profile Picture"></v-img>
              <span v-else class="text-h6 white--text">{{ user.name.charAt(0) }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/profile">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-else>
        <v-btn to="/login" text class="hidden-sm-and-down">Login</v-btn>
        <v-btn to="/register" text class="hidden-sm-and-down">Register</v-btn>
      </template>

      <v-btn icon @click="goToCart" class="ml-2">
        <v-badge :content="cartItemCount" :value="cartItemCount" color="red" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { useProductStore } from '../stores/products'

export default {
  name: 'Navbar',
  setup() {
    const router = useRouter()
    const userStore = useUserStore()
    const productStore = useProductStore()

    const drawer = ref(false)
    const searchQuery = ref('')
    const showSuggestions = ref(false)

    const navItems = [
      { name: 'Home', href: '/' },
      { name: 'Shop', href: '/shop' },
      { name: 'About', href: '/about' },
      { name: 'FAQ', href: '/faq' },
    ]

    const isLoggedIn = computed(() => userStore.isLoggedIn)
    const user = computed(() => userStore.user)
    const cartItemCount = computed(() => userStore.cart.reduce((total, item) => total + item.quantity, 0))

    const logout = () => {
      userStore.logout()
      router.push('/')
    }

    const goToCart = () => {
      if (isLoggedIn.value) {
        router.push('/cart')
      } else {
        router.push('/login')
      }
    }

    const updateSuggestions = () => {
      showSuggestions.value = searchQuery.value.length > 0
    }

    const filteredSuggestions = computed(() => {
      return productStore.products
        .filter(product => product.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
        .map(product => product.title)
        .slice(0, 5)
    })

    const selectSuggestion = (suggestion) => {
      searchQuery.value = suggestion
      showSuggestions.value = false
      // Implement search functionality here
      router.push({ name: 'shop', query: { search: suggestion } })
    }

    return {
      drawer,
      navItems,
      isLoggedIn,
      user,
      cartItemCount,
      logout,
      goToCart,
      searchQuery,
      showSuggestions,
      filteredSuggestions,
      updateSuggestions,
      selectSuggestion
    }
  }
}
</script>

<style scoped>
.v-app-bar {
  background-color: #FFAA33 !important;
}
</style>