<script setup>
import { ref } from 'vue';
import {useGetRubrics} from '@/services/api.js';
import Checkbox from 'primevue/checkbox';

const allowEmpty = ref(false);
const {data} = useGetRubrics(allowEmpty);




</script>

<template lang="pug">
h1 проверка
Checkbox(v-model="allowEmpty" inputId="allowEmpty" :binary="true")
label(for="allowEmpty") Отображать пустые рубрики

</template>

<style lang="scss" scoped>

</style>
