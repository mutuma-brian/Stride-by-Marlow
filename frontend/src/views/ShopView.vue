<template>
  <div>
    <h1 class="text-h3 font-weight-bold mb-8">Shop Our Collection</h1>
    <v-row>
      <v-col cols="12" md="3">
        <v-card>
          <v-card-title>Filters</v-card-title>
          <v-card-text>
            <v-select
              v-model="selectedBrand"
              :items="brands"
              label="Brand"
              clearable
            ></v-select>
            <v-range-slider
              v-model="priceRange"
              :max="maxPrice"
              :min="0"
              :step="1000"
              label="Price Range"
              class="mt-4"
            >
              <template v-slot:prepend>
                <v-text-field
                  :value="priceRange[0]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(priceRange, 0, $event)"
                ></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field
                  :value="priceRange[1]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(priceRange, 1, $event)"
                ></v-text-field>
              </template>
            </v-range-slider>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <v-row>
          <v-col v-for="product in filteredProducts" :key="product.id" cols="12" sm="6" md="4" lg="3">
            <ProductCard :product="product" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useProductStore } from '../stores/products'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ShopView',
  components: {
    ProductCard
  },
  setup() {
    const productStore = useProductStore()
    const selectedBrand = ref(null)
    const priceRange = ref([0, 50000])

    const brands = computed(() => {
      return ['All', ...new Set(productStore.products.map(product => product.brand))]
    })

    const maxPrice = computed(() => {
      return Math.max(...productStore.products.map(product => product.price))
    })

    const filteredProducts = computed(() => {
      return productStore.products.filter(product => {
        const brandMatch = !selectedBrand.value || selectedBrand.value === 'All' || product.brand === selectedBrand.value
        const priceMatch = product.price >= priceRange.value[0] && product.price <= priceRange.value[1]
        return brandMatch && priceMatch
      })
    })

    return {
      selectedBrand,
      priceRange,
      brands,
      maxPrice,
      filteredProducts
    }
  }
}
</script>