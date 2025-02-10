import { defineStore } from "pinia"
import { ref } from "vue"
import { fetchProducts, fetchProduct } from "@/api/products"

export const useProductStore = defineStore("product", () => {
  const products = ref([])
  const featuredProducts = ref([])

  const fetchAllProducts = async () => {
    products.value = await fetchProducts()
  }

  const fetchFeaturedProducts = async () => {
    featuredProducts.value = await fetchProducts({ featured: true })
  }

  const getProduct = async (id) => {
    return await fetchProduct(id)
  }

  return {
    products,
    featuredProducts,
    fetchAllProducts,
    fetchFeaturedProducts,
    getProduct,
  }
})

