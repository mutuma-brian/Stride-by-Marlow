<template>
  <nav 
    class="fixed top-0 w-full z-50 backdrop-blur-md shadow-md transition-all duration-300 bg-white/90"
  >
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 mr-2 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            SM
          </div>
          <span class="text-2xl font-semibold text-orange-500">STRIDE BY MARLOW</span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.href"
            class="text-lg font-bold transition-colors duration-300 text-orange-500 hover:text-orange-600"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Action Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <button v-if="isLoggedIn" @click="handleCartClick" class="text-orange-500 hover:text-orange-600 transition-colors duration-300">
            <i class="fas fa-shopping-cart text-2xl"></i>
          </button>
          <template v-if="isLoggedIn">
            <router-link to="/profile">
              <button class="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 px-4 py-2 rounded">
                Profile
              </button>
            </router-link>
          </template>
          <template v-else>
            <router-link to="/login">
              <button class="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 px-4 py-2 rounded">
                Login
              </button>
            </router-link>
            <router-link to="/register">
              <button class="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 px-4 py-2 rounded">
                Register
              </button>
            </router-link>
          </template>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          class="md:hidden text-orange-500 transition-transform duration-300 hover:scale-110"
          @click="toggleMobileMenu"
        >
          <i :class="['fas', isOpen ? 'fa-times' : 'fa-bars', 'text-2xl']"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div v-if="isOpen" class="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
        <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.href"
            class="text-orange-500 hover:text-orange-600 transition-colors duration-300 block text-lg font-bold"
            @click="isOpen = false"
          >
            {{ item.name }}
          </router-link>
          <button class="bg-orange-500 text-white hover:bg-orange-600 transition-all w-full py-2 rounded" @click="handleMobileCartClick">
            Cart
          </button>
          <template v-if="isLoggedIn">
            <router-link to="/profile">
              <button class="bg-orange-500 text-white hover:bg-orange-600 transition-all w-full py-2 rounded" @click="isOpen = false">
                Profile
              </button>
            </router-link>
          </template>
          <template v-else>
            <router-link to="/login">
              <button class="bg-orange-500 text-white hover:bg-orange-600 transition-all w-full py-2 rounded" @click="isOpen = false">
                Login
              </button>
            </router-link>
            <router-link to="/register">
              <button class="bg-orange-500 text-white hover:bg-orange-600 transition-all w-full py-2 rounded" @click="isOpen = false">
                Register
              </button>
            </router-link>
          </template>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';

export default {
  name: 'Navbar',
  setup() {
    const isOpen = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();
    const { isLoggedIn } = storeToRefs(authStore);

    const navItems = [
      { name: "Home", href: "/" },
      { name: "Shop", href: "/shop" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/faq" },
    ];

    const toggleMobileMenu = () => {
      isOpen.value = !isOpen.value;
    };

    const handleCartClick = () => {
      if (!isLoggedIn.value) {
        router.push('/login');
      } else {
        router.push('/cart');
      }
    };

    const handleMobileCartClick = () => {
      isOpen.value = false;
      handleCartClick();
    };

    return {
      isOpen,
      isLoggedIn,
      navItems,
      toggleMobileMenu,
      handleCartClick,
      handleMobileCartClick,
    };
  }
};
</script>
