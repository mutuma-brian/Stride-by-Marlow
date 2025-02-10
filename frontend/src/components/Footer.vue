<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Stride by Marlow</h3>
          <p class="text-gray-400 mb-4">Step into style, stride with confidence.</p>
          <div class="flex space-x-4">
            <button
              v-for="(icon, platform) in socialIcons"
              :key="platform"
              @click="openSocialMedia(platform)"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <i :class="['fab', icon, 'h-5 w-5']"></i>
            </button>
            <button @click="openEmail" class="text-gray-400 hover:text-white transition-colors">
              <i class="fas fa-envelope h-5 w-5"></i>
            </button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link :to="link.href" class="text-gray-400 hover:text-white transition-colors">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Customer Service</h3>
          <ul class="space-y-2">
            <li v-for="link in customerServiceLinks" :key="link.name">
              <router-link :to="link.href" class="text-gray-400 hover:text-white transition-colors">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <p class="text-gray-400 mb-2">Nairobi, Imenti House</p>
          <p class="text-gray-400 mb-2">First Floor, Stall No: A19</p>
          <p class="text-gray-400 mb-2">Phone: +254 714470576</p>
          <p class="text-gray-400">Email: info@stridemarlow.com</p>
          <h3 class="text-lg font-semibold mt-4 mb-2">Payment Details</h3>
          <div class="flex items-center space-x-2">
            <img src="" alt="M-Pesa" class="w-6 h-6" />
            <p class="text-gray-400">Paybill: 714777</p>
          </div>
          <p class="text-gray-400">Account No: 0714470576</p>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-400">&copy; {{ currentYear }} Stride by Marlow. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socialIcons: {
        facebook: 'fa-facebook-f',
        twitter: 'fa-twitter',
        instagram: 'fa-instagram'
      },
      quickLinks: [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/shop' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' }
      ],
      customerServiceLinks: [
        { name: 'Shipping & Returns', href: '/shipping-returns' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Track Your Order', href: '/track-order' }
      ]
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    openSocialMedia(platform) {
      let url = ''
      switch (platform) {
        case 'facebook':
          url = 'https://www.facebook.com/stridemarlow'
          break
        case 'twitter':
          url = 'https://twitter.com/stridemarlow'
          break
        case 'instagram':
          url = 'https://www.instagram.com/stridemarlow'
          break
      }
      window.open(url, '_blank')
    },
    openEmail() {
      const subject = 'Official Inquiry: Stride by Marlow'
      const body = `Dear Stride by Marlow Team,

I am writing to inquire about...

Best regards,
[Your Name]`
      window.location.href = `mailto:info@stridemarlow.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }
  }
}
</script>

