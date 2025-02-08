<template>
    <v-container class="py-16 text-center">
      <v-icon color="success" size="64" class="mb-4">mdi-check-circle</v-icon>
      <h1 class="text-h3 font-weight-bold mb-4">Thank You for Your Order!</h1>
      <p class="text-h6 mb-8">Your order has been successfully placed.</p>
      <v-btn color="primary" x-large to="/">Continue Shopping</v-btn>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'OrderConfirmationView'
  }
  </script>