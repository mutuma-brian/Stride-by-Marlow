import axios from "axios"

const API_URL = process.env.VUE_APP_API_URL

export function useMpesa() {
  const initiatePayment = async (phoneNumber, amount) => {
    try {
      const response = await axios.post(`${API_URL}/mpesa/initiate`, {
        phoneNumber,
        amount,
      })
      return response.data
    } catch (error) {
      console.error("Error initiating M-Pesa payment:", error)
      throw error
    }
  }

  return {
    initiatePayment,
  }
}

