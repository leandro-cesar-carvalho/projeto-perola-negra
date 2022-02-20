<template>
    <a id="voltar" href="/">Voltar para a página principal</a>
    <LoginForm />
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

import LoginForm from '@/components/LoginForm.vue'

export default {
    name: 'Login',
    components: {
        LoginForm
    }
}
</script>


<style >
    html {
        background-image: url("../assets/images/login/background.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    #voltar {
        width: fit-content;
        font-size: 18px;
        padding: 10px;
        background: rgba(255, 255, 255, 0.80);
        text-decoration: none;
        color: black;
        border-radius: 10px;
    }

    #voltar:hover {
        text-decoration: underline;
    }
</style>