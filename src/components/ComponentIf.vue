<template>
  <h1>Lista de Paises</h1>
  <ul>
    <li v-for="pais in paises" v-bind:key="pais">{{ pais }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
let paises: Ref<Array<string>> = ref(['Mexico', 'España', 'UK']);
</script> 

<style></style>