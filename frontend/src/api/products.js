import axios from "axios"

const API_URL = process.env.VUE_APP_API_URL

export const fetchProducts = async (params = {}) => {
  const response = await axios.get(`${API_URL}/products`, { params })
  return response.data
}

export const fetchProduct = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`)
  return response.data
}

