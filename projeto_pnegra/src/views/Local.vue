<template>
    <Header />
    <Localizacao />
    <Footer />
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

import Header from '@/components/Header.vue'
import Localizacao from '@/components/Localizacao.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Local',
    components : {
        Header,
        Footer,
        Localizacao
    }
}
</script>