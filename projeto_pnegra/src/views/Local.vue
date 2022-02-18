<template>
    <Header />
    <Localizacao />
    <Footer />
</template>

<script>
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