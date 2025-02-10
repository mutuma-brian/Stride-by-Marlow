export const subscribeToNewsletter = async (email) => {
    try {
      // Simulate an API call to subscribe a user to the newsletter
      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
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
  