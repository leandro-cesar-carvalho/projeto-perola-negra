<template>
  <Header />
  <HomeInfo />
  <Footer />
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

// @ is an alias to /src
import Header from '@/components/Header.vue'
import HomeInfo from '@/components/HomeInfo.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HomeInfo,
    Footer
  }
}
</script>
