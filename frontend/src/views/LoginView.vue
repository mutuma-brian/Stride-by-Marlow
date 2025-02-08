<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="handleSubmit">
                <v-text-field
                  v-model="email"
                  label="Email"
                  name="email"
                  prepend-icon="mdi-email"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  required
                ></v-text-field>
                <v-btn
                  type="submit"
                  color="primary"
                  class="mt-4"
                  block
                  :loading="isLoading"
                >
                  Login
                </v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text to="/register">
                Don't have an account? Register here
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../stores/user'
  
  export default {
    name: 'LoginView',
    setup() {
      const router = useRouter()
      const userStore = useUserStore()
  
      const email = ref('')
      const password = ref('')
      const isLoading = ref(false)
  
      const handleSubmit = async () => {
        isLoading.value = true
        try {
          await userStore.login({ email: email.value, password: password.value })
          router.push('/')
        } catch (error) {
          alert('Login failed. Please check your credentials.')
        } finally {
          isLoading.value = false
        }
      }
  
      return {
        email,
        password,
        isLoading,
        handleSubmit
      }
    }
  }
  </script>