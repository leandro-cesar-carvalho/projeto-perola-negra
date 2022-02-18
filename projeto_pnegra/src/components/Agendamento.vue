<template>
    <div>
        <form action="http://192.168.0.6:2022/agendar" method="POST">
            <h1>Agendamento de Horários</h1>
            <div id="inputLabel">
                <label for="servico">Serviço:</label>
                <select name="servicos" id="servicos" @change="alteraValor($event)" v-model="servicos">
                    <option disabled selected>Serviços</option>
                    <option value="Cabelo">Cabelo</option>
                    <option value="Cabelo e Barba">Cabelo + Barba</option>
                    <option value="Cabelo e Luzes">Cabelo + Luzes</option>
                </select>
            </div>
            <div id="inputLabel">
                <label for="data">Data</label>
                <input type="datetime-local" name="data" id="data" required>
            </div>
            <div id="inputLabel">
                <label for="valor">Valor</label>
                <input type="text" name="valor" id="valor" v-model="valor" readonly>
            </div>

            <button>Agendar</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'Agendamento',
    data() {
        return {
            valor: '',
            servicos : ''
        }
    },
    methods: {
        alteraValor(event) {
            if(event.target.value == 'Cabelo') {this.valor = 'R$ 30.00'}
            else if(event.target.value == 'Cabelo e Barba') {this.valor = 'R$ 60.00'}
            else if(event.target.value == 'Cabelo e Luzes') {this.valor = 'R$ 75.00'}
        }
    }
}
</script>

<style scoped>
    form {
        background: #1d2327;
        color: tan;
        width: 80%;
        margin: 100px auto;
        border-radius: 8px;
        padding-bottom: 20px;
    }

    h1 {
        text-align: center;
    }

    #inputLabel {
        width: 20%;
        margin: 10px 60px;
        display: inline-block;
    }

    #inputLabel label {
        display: block;
        font-size: 18px;
    }

    #inputLabel input, #inputLabel select {
        width: 100%;
        height: 30px;
        border-radius: 5px;
    }

    button {
        width: 25%;
        display: block;
        font-size: 18px;
        border-radius: 8px;
        margin: 25px auto;
        text-align: center;
    }

    button:hover {
        transform: scale(1.1);
        cursor: pointer;
        transition: ease 1s;
    }

    @media(max-width: 800px) {
        form {
            width: 90%;
            margin: 20px auto;
            border-radius: 8px;
            padding-bottom: 20px;
        }

        h1 {
            text-align: center;
            font-size: 25px;
            padding-top: 15px
        }
        #inputLabel {
            width: 90%;
            margin: 10px auto;
            display: block;
        }

        #inputLabel label {
            display: block;
            font-size: 18px;
        }

        #inputLabel input, #inputLabel select {
            width: 100%;
            height: 30px;
            border-radius: 5px;
        }

        button {
            width: 35%;
            font-size: 15px;
        }
    }
</style>