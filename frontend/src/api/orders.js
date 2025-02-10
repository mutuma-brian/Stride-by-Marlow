import axios from "axios"

const API_URL = process.env.VUE_APP_API_URL

export const createOrder = async (orderData) => {
  const response = await axios.post(`${API_URL}/orders`, orderData)
  return response.data
}

export const fetchOrders = async () => {
  const response = await axios.get(`${API_URL}/orders`)
  return response.data
}

