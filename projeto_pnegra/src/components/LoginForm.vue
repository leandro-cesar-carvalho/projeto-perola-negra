<template>
    <div data-aos="zoom-in-up">
        <form action="http://192.168.0.6:2022/busca-usuario" method="POST">
            <img :src="require('@/assets/images/logo2.png')" alt="Logo">
            <h1>Agendamento de horário - Login</h1>
            <div id="inputLabel">
                <label for="user">Usuário</label>
                <input type="text" name="usuario" id="usuario" placeholder="Digite seu usuário" required>
            </div>
            <div id="inputLabel">
                <label for="password">Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Digite sua senha" required>
            </div>

            <button>Entrar</button>
            <a href="/cadastro">Ainda não possui cadastro? Acesse aqui</a>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'LoginForm'
    }
</script>

<style scoped>
    form {
        background: rgba(255, 255, 255, 0.85);
        width: 60%;
        margin: 80px auto;
        border-radius: 15px;
        padding-bottom: 20px
    }

    form img, form h1, #inputLabel, button, a {
        text-align: center;
    }

    form img, #inputLabel, button, a {
        margin: auto;
    }

    form img, #inputLabel label, button, a {
        display: block;
    }

    form img {
        width: 220px;
        height: 150px;
        padding: 10px 0 10px 0;
    }

    form h1 {
        text-shadow: 1px 1px 1px black;
    }

    #inputLabel {
        width: 70%;
        height: fit-content;
        padding: 15px;
    }

    #inputLabel label {
        text-align: center;
        font-size: 18px;
    }

    #inputLabel input {
        height: 30px;
        width: 60%;
        border-radius: 8px;
        border: solid 2px black;
        font-size: 15px;
        text-align: center;
    }

    #inputLabel input:valid {
        border: solid 1px green;
    }

    button {
        width: 25%;
        font-size: 18px;
        border-radius: 8px;
    }

    button:hover {
        transform: scale(1.1);
        cursor: pointer;
        transition: ease 1s;
    }

    a {
        width: fit-content;
        font-size: 18px;
        text-decoration: none;
        margin-top: 15px;
        color: black
    }

    a:hover {
        border-bottom: solid 2px tan
    }

    @media(max-width: 800px) {
        form {width: 90%;
            margin: 40px auto;
        }
        form img, #inputLabel, button, a {
            margin: auto;
        }
        form img {
            width: 150px;
            height: auto;
        }
        form h1 {
            font-size: 20px;
        }

        #inputLabel {
            width: 90%;
        }

        #inputLabel label {
            font-size: 15px;
        }

        #inputLabel input {
            height: 30px;
            width: 70%;
        }
        button {
            width: 30%;
            font-size: 15px;
        }
        a {
            font-size: 15px;
            margin-top: 20px;
        }
    }
</style>