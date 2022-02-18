<template>
    <div> 
        <a id="voltar" href="/login">Voltar para a página de login</a>
        <RegisterForm />
    </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
    name: 'Cadastro',
    components: {
        RegisterForm
    }
}
</script>

<style>
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