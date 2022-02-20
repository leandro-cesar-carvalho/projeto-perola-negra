<template>
    <div data-aos="zoom-in-up">
        <form action="http://192.168.0.6:2022/confirma-cadastro" method="POST">
            <img :src="require('@/assets/images/logo2.png')" alt="Logo">
            <h1>Cadastro do Cliente</h1>
            <div id="inputLabel">
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" required>
            </div>
            <div id="inputLabel">
                <label for="cpf">CPF</label>
                <input type="text" name="cpf" id="cpf" placeholder="Digite seu CPF" required>
            </div>
            <div id="inputLabel">
                <label for="endereco">Endereço</label>
                <input type="text" name="endereco" id="endereco" placeholder="Digite seu endereço com o número" required>
            </div>
            <div id="inputLabel">
                <label for="bairro">Bairro</label>
                <input type="text" name="bairro" id="bairro" placeholder="Digite seu bairro" required>
            </div>
            <div id="inputLabel">
                <label for="telefone">Telefone</label>
                <input type="text" name="telefone" id="telefone" placeholder="Digite seu telefone" required>
            </div>
            <div id="inputLabel">
                <label for="usuario">Usuário</label>
                <input type="text" name="usuario" id="usuario" placeholder="Digite seu usuário" required>
            </div>
            <div id="inputLabel">
                <label for="senha">Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Digite sua senha" required>
            </div>

            <button>Cadastrar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'RegisterForm'
}
</script>

<style scoped>
    form {
        background: rgba(255, 255, 255, 0.85);
        width: 60%;
        margin: 40px auto;
        border-radius: 15px;
        padding-bottom: 20px
    }

    form img, form h1, #inputLabel, button, a {
        text-align: center;
    }

    form img, button, a {
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
        width: 50%;
        height: fit-content;
        display: inline-block;

    }

    #inputLabel label {
        text-align: center;
        font-size: 18px;
    }

    #inputLabel input {
        height: 30px;
        width: 80%;
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
        margin-top: 25px;
        font-size: 18px;
        border-radius: 8px;
    }

    button:hover {
        transform: scale(1.1);
        cursor: pointer;
        transition: ease 1s;
    }

    @media(max-width: 800px) {
        form {
            background: rgba(255, 255, 255, 0.85);
            width: 90%;
        }
        form img {
            width: 200px;
            height: auto;
        }
        form h1 {
            font-size: 20px;
        }
        #inputLabel {
            width: 90%;
            margin: auto;
            height: fit-content;
            display: block;

        }
        #inputLabel label {
            text-align: center;
            font-size: 15px;
        }
        button {
            width: 30%;
            font-size: 15px;
            border-radius: 8px;
        }
    }
</style>