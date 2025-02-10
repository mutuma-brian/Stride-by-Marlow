import { defineStore } from "pinia"
import { ref } from "vue"
import { createOrder as createOrderAPI, fetchOrders as fetchOrdersAPI } from "@/api/orders"

export const useOrderStore = defineStore("order", () => {
  const orders = ref([])

  const createOrder = async (orderData) => {
    const newOrder = await createOrderAPI(orderData)
    orders.value.push(newOrder)
    return newOrder
  }

  const fetchOrders = async () => {
    orders.value = await fetchOrdersAPI()
  }

  return {
    orders,
    createOrder,
    fetchOrders,
  }
})

