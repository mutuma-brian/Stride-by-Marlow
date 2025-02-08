<template>
    <v-container fluid class="bg-grey-darken-4 py-16">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <h2 class="text-h4 font-weight-bold text-center text-white mb-6">Stay in the Loop</h2>
          <p class="text-body-1 text-center text-white mb-8">
            Subscribe to our newsletter for exclusive deals, new releases, and sneaker news.
          </p>
          <v-form @submit.prevent="handleSubmit">
            <v-row>
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="email"
                  label="Enter your email"
                  type="email"
                  required
                  variant="outlined"
                  bg-color="white"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-btn
                  type="submit"
                  color="primary"
                  size="x-large"
                  block
                  :loading="isLoading"
                >
                  Subscribe
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'Newsletter',
    setup() {
      const email = ref('')
      const isLoading = ref(false)
  
      const handleSubmit = async () => {
        isLoading.value = true
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        isLoading.value = false
        alert("You've successfully subscribed to our newsletter.")
        email.value = ''
      }
  
      return {
        email,
        isLoading,
        handleSubmit
      }
    }
  }
  </script>