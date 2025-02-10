import { defineStore } from "pinia"
import { ref } from "vue"
import { subscribeToNewsletter as subscribeAPI } from "@/api/newsletter"

export const useNewsletterStore = defineStore("newsletter", () => {
  const email = ref("")
  const isSubscribed = ref(false)
  const subscriptionStatus = ref(null)

  const subscribeToNewsletter = async () => {
    if (email.value) {
      const response = await subscribeAPI(email.value)
      if (response.success) {
        isSubscribed.value = true
        subscriptionStatus.value = "Subscription successful!"
      } else {
        subscriptionStatus.value = "Subscription failed. Please try again."
      }
    } else {
      subscriptionStatus.value = "Please enter a valid email address."
    }
  }

  return {
    email,
    isSubscribed,
    subscriptionStatus,
    subscribeToNewsletter,
  }
})
