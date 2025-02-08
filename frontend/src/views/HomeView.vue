<template>
  <div>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="12">
          <v-img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            height="600"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <v-card-title class="text-white text-h2 font-weight-bold">
              Step into Style
            </v-card-title>
            <v-card-subtitle class="text-white text-h5 mb-6">
              Discover the latest sneaker trends
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                color="primary"
                size="x-large"
                class="mb-6 ml-4"
                to="/shop"
              >
                Shop Now
              </v-btn>
            </v-card-actions>
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-16">
      <h2 class="text-h4 font-weight-bold mb-8 text-center">Featured Products</h2>
      <v-row>
        <v-col v-for="product in featuredProducts" :key="product.id" cols="12" sm="6" md="3">
          <ProductCard :product="product" />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="py-16 bg-grey-lighten-3">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <h2 class="text-h4 font-weight-bold mb-8 text-center">About Stride by Marlow</h2>
          <p class="text-body-1 text-center mb-8">
            Stride by Marlow is your premier destination for the latest and greatest in sneaker fashion. 
            We pride ourselves on offering a curated selection of top brands, ensuring that every step you take 
            is a statement of style and comfort.
          </p>
          <div class="text-center">
            <v-btn color="primary" size="x-large" to="/about">Learn More</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-16">
      <h2 class="text-h4 font-weight-bold mb-8 text-center">Join Our Newsletter</h2>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-form @submit.prevent="subscribeNewsletter">
            <v-text-field
              v-model="email"
              label="Enter your email"
              type="email"
              required
            ></v-text-field>
            <v-btn type="submit" color="primary" block>Subscribe</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useProductStore } from '../stores/products'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  setup() {
    const productStore = useProductStore()
    const email = ref('')

    const subscribeNewsletter = () => {
      // Implement newsletter subscription logic
      console.log('Subscribed:', email.value)
      email.value = ''
    }

    return {
      featuredProducts: productStore.featuredProducts,
      email,
      subscribeNewsletter
    }
  }
}
</script>