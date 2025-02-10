import { defineStore } from "pinia"
import { ref } from "vue"
import { submitContactForm as submitContactAPI } from "@/api/contact"

export const useContactStore = defineStore("contact", () => {
  const name = ref("")
  const email = ref("")
  const message = ref("")
  const status = ref(null)

  const submitContactForm = async () => {
    if (name.value && email.value && message.value) {
      const response = await submitContactAPI({
        name: name.value,
        email: email.value,
        message: message.value,
      })
      if (response.success) {
        status.value = "Thank you for reaching out! We'll get back to you soon."
        // Optionally clear the form after successful submission
        name.value = ""
        email.value = ""
        message.value = ""
      } else {
        status.value = "There was an error submitting your message. Please try again."
      }
    } else {
      status.value = "Please fill in all the fields."
    }
  }

  return {
    name,
    email,
    message,
    status,
    submitContactForm,
  }
})
