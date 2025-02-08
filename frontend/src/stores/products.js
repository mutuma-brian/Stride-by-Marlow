import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    featuredProducts: []
  }),
  actions: {
    async fetchProducts() {
      // Simulating API call with real-life sneaker data
      const sneakerData = [
        {
          id: 1,
          title: 'Nike Air Max 270',
          price: 15000,
          image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/skwgyqrbfzhu6uyeh0gg/air-max-270-shoes-nnTrqDGR.png',
          brand: 'Nike'
        },
        {
          id: 2,
          title: 'Adidas Ultraboost 21',
          price: 18000,
          image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Ultraboost_21_Shoes_Black_FY0378_01_standard.jpg',
          brand: 'Adidas'
        },
        {
          id: 3,
          title: 'Puma RS-X³ Puzzle',
          price: 12000,
          image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371570/04/sv01/fnd/PNA/fmt/png/RS-X%C2%B3-Puzzle-Sneakers',
          brand: 'Puma'
        },
        {
          id: 4,
          title: 'New Balance 990v5',
          price: 20000,
          image: 'https://nb.scene7.com/is/image/NB/m990gl5_nb_02_i?$pdpflexf2$&wid=440&hei=440',
          brand: 'New Balance'
        }
      ]

      this.products = sneakerData
      this.featuredProducts = this.products.filter((_, index) => index < 4)
    }
  }
})