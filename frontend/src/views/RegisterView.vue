<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="handleSubmit">
              <v-text-field
                v-model="name"
                label="Name"
                name="name"
                prepend-icon="mdi-account"
                type="text"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                name="email"
                prepend-icon="mdi-email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="phone"
                label="Phone Number"
                name="phone"
                prepend-icon="mdi-phone"
                type="tel"
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
              <v-text-field
                v-model="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
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
                Register
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text to="/login">
              Already have an account? Login here
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
  name: 'RegisterView',
  setup() {
    const router = useRouter()
    const userStore = useUserStore()

    const name = ref('')
    const email = ref('')
    const phone = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const isLoading = ref(false)

    const handleSubmit = async () => {
      if (password.value !== confirmPassword.value) {
        alert('Passwords do not match')
        return
      }

      isLoading.value = true
      try {
        await userStore.register({
          name: name.value,
          email: email.value,
          phone: phone.value,
          password: password.value
        })
        router.push('/')
      } catch (error) {
        alert('Registration failed. Please try again.')
      } finally {
        isLoading.value = false
      }
    }

    return {
      name,
      email,
      phone,
      password,
      confirmPassword,
      isLoading,
      handleSubmit
    }
  }
}
</script>