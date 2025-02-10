export const submitContactForm = async (formData) => {
    try {
      // Simulate an API call to submit a contact form
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      return data
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  