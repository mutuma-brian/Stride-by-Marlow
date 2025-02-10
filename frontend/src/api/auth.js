import axios from "axios"

const API_URL = process.env.VUE_APP_API_URL

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password })
  return response.data
}

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/auth/register`, { name, email, password })
  return response.data
}

export const logout = async () => {
  const response = await axios.post(`${API_URL}/auth/logout`)
  return response.data
}

export const updateProfile = async (profileData) => {
  const response = await axios.put(`${API_URL}/auth/profile`, profileData)
  return response.data
}

