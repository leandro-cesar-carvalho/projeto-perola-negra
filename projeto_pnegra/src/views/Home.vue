<template>
  <Header />
  <HomeInfo />
  <Footer />
</template>

<script>
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
