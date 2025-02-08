<template>
  <v-card>
    <v-img :src="product.image" height="200px" cover></v-img>
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-text>
      <div class="text-h6 mb-2">
        KES {{ product.price.toFixed(2) }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn icon @click="decrementQuantity">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <span class="mx-2">{{ quantity }}</span>
      <v-btn icon @click="incrementQuantity">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="addToCart">
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const userStore = useUserStore()
    const quantity = ref(1)

    const incrementQuantity = () => {
      quantity.value++
    }

    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--
      }
    }

    const addToCart = () => {
      userStore.addToCart({ ...props.product, quantity: quantity.value })
      quantity.value = 1
    }

    return {
      quantity,
      incrementQuantity,
      decrementQuantity,
      addToCart
    }
  }
}
</script>