<template>
    <div>
        <header>
            <img :src="require('@/assets/images/logo.png')" alt="Logo">
            <div id="introUser">
                <h2>Área do Cliente</h2>
                <h2>Olá {{user.nome}}, seja bem-vindo!</h2>
                <p>Endereço: {{user.endereco}} - {{user.bairro}}</p>
                <p>Telefone: {{user.telefone}}</p>
            </div>
            
			<a href="http://192.168.0.6:2022/logout">Sair</a>
        </header>
    </div>
</template>


<script>
export default {
    name: 'UserInfo',
    data() {
        return{
            user : {
                nome: null,
                endereco: null,
                bairro: null,
                telefone: null
            }
        }
    },
    methods: {
        getUserData() {
            let axios = require('axios');
            axios.get('http://192.168.0.6:2022/userInfo', {withCredentials: true})
            .then((user) => {
                this.user.nome = user.data.nome;
                this.user.endereco = user.data.endereco;
                this.user.bairro = user.data.bairro;
                this.user.telefone = user.data.telefone
            })
            
        }
    },
    mounted() {
        this.getUserData()
    }
}
</script>

<style scoped>
    div {
        background: #1d2327;
        color: tan;
    }

    header {
        border-bottom: solid 2px tan;
        padding-bottom: 10px;
    }

    img {
        width: 105px;
        height: 120px;
        padding-right: 50px;
    }

    #introUser {
        display: inline-block;
        position: absolute;
        padding-top: 20px;
    }

    a {
        position: absolute;
        right: 0;
        text-decoration: none;
        font-size: 18px;
        color: tan;       
        margin-right: 10px; 
    }

    @media(max-width: 800px) {
        img {
            width: fit-content;
            height: fit-content;
            padding-right: 0%;
            display: block;
            margin: auto;
        }

        #introUser {
            display: block;
            position: inherit;
            padding-top: 5px;
        }

        #introUser h2 {
            font-size: 18px;
        }
        #introUser p {
            font-size: 15px;
        }
        a {
            position: absolute;
            right: 0;
            top: 0;
            font-size: 15px; 
        }
    }
</style>