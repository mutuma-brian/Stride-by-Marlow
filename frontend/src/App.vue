<template>
  <v-app>
    <Navbar />
    <v-main class="bg-custom">
      <v-container class="py-8 px-6" fluid>
        <v-row justify="center">
          <v-col cols="12" xl="10">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer
  }
})
</script>

<style>
.bg-custom {
  background-color: #f8f8f8;
}
</style>