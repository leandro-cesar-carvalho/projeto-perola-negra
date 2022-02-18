<template>
    <UserInfo />
    <Agendamento />
    <TableSchedule />
</template>

<script>
import UserInfo from '@/components/UserInfo.vue'
import Agendamento from '@/components/Agendamento.vue'
import TableSchedule from '@/components/TableSchedule'

export default {
    name: 'Cliente',
    components: {
        UserInfo,
        Agendamento,
        TableSchedule
    }
}

</script>

<style>
html {
    background: url("../assets/images/home/background2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>