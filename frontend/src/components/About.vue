<template>
    <v-container class="py-16">
      <v-row align="center">
        <v-col cols="12" md="6">
          <h2 class="text-h3 font-weight-bold mb-6">About Stride by Marlow</h2>
          <p class="text-body-1 mb-6">
            At Stride by Marlow, we believe that every step should be taken in style and comfort. Our passion for
            sneakers drives us to curate a collection that blends cutting-edge design with unparalleled comfort.
          </p>
          <p class="text-body-1 mb-6">
            Founded by sneaker enthusiasts, we understand the importance of quality footwear in your daily life.
            Whether you're hitting the gym, exploring the city, or making a fashion statement, we've got the perfect
            pair for you.
          </p>
          <v-btn color="primary" x-large>Learn More</v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Sneaker collection"
            height="400"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'About'
  }
  </script>