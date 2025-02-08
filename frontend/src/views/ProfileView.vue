<template>
  <v-container class="py-16">
    <h1 class="text-h3 font-weight-bold mb-8">Your Profile</h1>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Personal Information</v-card-title>
          <v-card-text>
            <v-avatar size="150" class="mb-4">
              <v-img v-if="user.profilePicture" :src="user.profilePicture" alt="Profile Picture"></v-img>
              <span v-else class="text-h2">{{ user.name.charAt(0) }}</span>
            </v-avatar>
            <v-file-input
              v-model="profilePicture"
              accept="image/*"
              label="Change Profile Picture"
              prepend-icon="mdi-camera"
              @change="updateProfilePicture"
            ></v-file-input>
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Phone:</strong> {{ user.phone }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Order History</v-card-title>
          <v-card-text>
            <div v-if="orders.length === 0" class="text-body-1">
              You haven't placed any orders yet.
            </div>
            <v-list v-else>
              <v-list-item v-for="order in orders" :key="order.id">
                <v-list-item-content>
                  <v-list-item-title>Order #{{ order.id }}</v-list-item-title>
                  <v-list-item-subtitle>
                    Date: {{ formatDate(order.date) }} | Total: KES {{ order.total.toFixed(2) }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-chip :color="getStatusColor(order.status)">{{ order.status }}</v-chip>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="12">
        <v-card>
          <v-card-title>Account Settings</v-card-title>
          <v-card-text>
            <v-btn color="primary" class="mr-4" @click="showChangePasswordDialog = true">
              Change Password
            </v-btn>
            <v-btn color="error" @click="logout">
              Logout
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="showChangePasswordDialog" max-width="500px">
      <v-card>
        <v-card-title>Change Password</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="changePassword">
            <v-text-field
              v-model="currentPassword"
              label="Current Password"
              type="password"
              required
            ></v-text-field>
            <v-text-field
              v-model="newPassword"
              label="New Password"
              type="password"
              required
            ></v-text-field>
            <v-text-field
              v-model="confirmNewPassword"
              label="Confirm New Password"
              type="password"
              required
            ></v-text-field>
            <v-btn type="submit" color="primary" class="mt-4" block>
              Change Password
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

export default {
  name: 'ProfileView',
  setup() {
    const router = useRouter()
    const userStore = useUserStore()

    const user = computed(() => userStore.user)
    const orders = ref([
      { id: '1001', date: new Date('2023-05-01'), total: 15000, status: 'Delivered' },
      { id: '1002', date: new Date('2023-05-15'), total: 8500, status: 'Processing' },
    ])

    const showChangePasswordDialog = ref(false)
    const currentPassword = ref('')
    const newPassword = ref('')
    const confirmNewPassword = ref('')
    const profilePicture = ref(null)

    const formatDate = (date) => {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(date)
    }

    const getStatusColor = (status) => {
      switch (status) {
        case 'Delivered':
          return 'success'
        case 'Processing':
          return 'warning'
        default:
          return 'info'
      }
    }

    const logout = () => {
      userStore.logout()
      router.push('/')
    }

    const changePassword = () => {
      if (newPassword.value !== confirmNewPassword.value) {
        alert('New passwords do not match')
        return
      }

      // Implement password change logic here
      alert('Password changed successfully')
      showChangePasswordDialog.value = false
      currentPassword.value = ''
      newPassword.value = ''
      confirmNewPassword.value = ''
    }

    const updateProfilePicture = () => {
      if (profilePicture.value) {
        const reader = new FileReader()
        reader.onload = (e) => {
          userStore.updateProfilePicture(e.target.result)
        }
        reader.readAsDataURL(profilePicture.value)
      }
    }

    return {
      user,
      orders,
      showChangePasswordDialog,
      currentPassword,
      newPassword,
      confirmNewPassword,
      profilePicture,
      formatDate,
      getStatusColor,
      logout,
      changePassword,
      updateProfilePicture
    }
  }
}
</script>