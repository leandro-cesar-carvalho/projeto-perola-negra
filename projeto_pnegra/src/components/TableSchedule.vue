<template>
    <div>
        <table>
            <th>Serviço</th>
            <th>Data</th>
            <th>Valor</th>

            <tbody>
                <tr v-for="(agendado, index) in agendados" :key="index">
                    <td>{{agendado.servico}}</td>
                    <td>{{agendado.data}}</td>
                    <td>R$ {{agendado.valor}},00</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableSchedule',
    data() {
        return {
            agendados: null
        }
    },
    methods: {
        puxaAgenda() {
            let axios = require('axios')
            axios.get('http://192.168.0.6:2022/busca-agendamento', {withCredentials: true})
            .then((response) => {

                this.agendados = response.data
                for(let i=0; i<this.agendados.length; i++) {
                    this.agendados[i].data = new Date(this.agendados[i].data);
                    //this.agendados[i].data = this.agendados[i].data.getDate() + '/' + this.agendados[i].data.getMonth() + '/' + this.agendados[i].data.getFullYear() + ' - ' + this.agendados[i].data.getHours() + ':' + this.agendados[i].data.getMinutes()
                }

                console.log(this.agendados)
            })
        },
    },
    mounted() {
       this.puxaAgenda()
    }
}
</script>

<style scoped>
table {
    background: #1d2327;
    color: tan;
    border: solid 2px tan;
    border-radius: 12px;
    width: 80%;
    margin: auto;
    border-spacing: 0;
}

th {
    width: 33%;
    border-bottom: solid 2px tan;
}

td {
    border-right: solid 1px tan;
    text-align: center;
}

tr:nth-child(even) {
    background: #353839;
}
</style>