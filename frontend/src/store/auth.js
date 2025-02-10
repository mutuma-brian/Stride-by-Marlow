import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { login, register, logout, updateProfile as updateProfileAPI } from "@/api/auth"

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null)
  const token = ref(localStorage.getItem("token"))

  const isLoggedIn = computed(() => !!token.value)

  const setUser = (userData) => {
    user.value = userData
  }

  const setToken = (tokenValue) => {
    token.value = tokenValue
    localStorage.setItem("token", tokenValue)
  }

  const clearAuth = () => {
    user.value = null
    token.value = null
    localStorage.removeItem("token")
  }

  const loginUser = async (email, password) => {
    const response = await login(email, password)
    setUser(response.user)
    setToken(response.token)
  }

  const registerUser = async (name, email, password) => {
    const response = await register(name, email, password)
    setUser(response.user)
    setToken(response.token)
  }

  const logoutUser = async () => {
    await logout()
    clearAuth()
  }

  const checkAuth = async () => {
    if (token.value) {
      try {
        const response = await updateProfileAPI({})
        setUser(response.user)
      } catch (error) {
        clearAuth()
      }
    }
  }

  const updateProfile = async (profileData) => {
    const response = await updateProfileAPI(profileData)
    setUser(response.user)
  }

  return {
    user,
    isLoggedIn,
    loginUser,
    registerUser,
    logoutUser,
    checkAuth,
    updateProfile,
  }
})

