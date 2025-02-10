<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">About Stride by Marlow</h2>
          <p class="text-gray-600 mb-6">
            At Stride by Marlow, we believe that every step should be taken in style and comfort. Our passion for
            sneakers drives us to curate a collection that blends cutting-edge design with unparalleled comfort.
          </p>
          <p class="text-gray-600 mb-6">
            Founded by sneaker enthusiasts, we understand the importance of quality footwear in your daily life.
            Whether you're hitting the gym, exploring the city, or making a fashion statement, we've got the perfect
            pair for you.
          </p>
          <router-link to="/about">
            <button class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors duration-300">
              Learn More
            </button>
          </router-link>
        </div>
        <div class="md:w-1/2">
          <div class="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Sneaker collection"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

