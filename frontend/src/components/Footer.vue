<template>
  <v-footer class="bg-navy-blue">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h3 class="text-h5 font-weight-bold text-white mb-4">Stride by Marlow</h3>
          <p class="text-body-1 text-white mb-4">Step into style, stride with confidence.</p>
          <div class="d-flex">
            <v-btn v-for="icon in icons" :key="icon" icon class="mx-1" color="white">
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="text-h6 font-weight-bold text-white mb-4">Quick Links</h3>
          <v-list bg-color="transparent" class="pa-0">
            <v-list-item v-for="link in quickLinks" :key="link.name" :to="link.href" class="pa-0">
              <v-list-item-title class="text-white">
                <v-hover v-slot="{ isHovering, props }">
                  <v-btn
                    v-bind="props"
                    text
                    :color="isHovering ? 'primary' : 'white'"
                    class="px-0"
                  >
                    {{ link.name }}
                  </v-btn>
                </v-hover>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="text-h6 font-weight-bold text-white mb-4">Contact Us</h3>
          <p class="text-body-1 text-white mb-2">Nairobi, Imenti House</p>
          <p class="text-body-1 text-white mb-2">First Floor, Stall No: A19</p>
          <p class="text-body-1 text-white mb-2">
            Phone: <a href="tel:+254714470576" class="text-white">+254 714470576</a>
          </p>
          <p class="text-body-1 text-white">
            Email: <a href="mailto:info@stridemarlow.com" class="text-white">info@stridemarlow.com</a>
          </p>
        </v-col>
      </v-row>
      <v-divider class="my-4 bg-grey-lighten-1"></v-divider>
      <v-row>
        <v-col cols="12" class="text-center text-white">
          &copy; {{ new Date().getFullYear() }} Stride by Marlow. All rights reserved.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Footer',
  setup() {
    const icons = ref(['mdi-facebook', 'mdi-twitter', 'mdi-instagram'])
    const quickLinks = ref([
      { name: 'Home', href: '/' },
      { name: 'Shop', href: '/shop' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' }
    ])

    return {
      icons,
      quickLinks
    }
  }
}
</script>

<style scoped>
.bg-navy-blue {
  background-color: #1D1D1D;
}
</style>