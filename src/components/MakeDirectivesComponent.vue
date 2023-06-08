<template>
  <h1 v-font-big>Este titulo es modifica con v-font-big y lo ajusta a 70px</h1>
  <h1 v-font-custom="'15px'">Este otro titulo es del tamaño que indica la directiva v-font-custom</h1>
  <h1 v-font-auto:sm>Este titulo usa los argumentos de las directivas con v-font-auto:sm</h1>
  <h1 v-font-auto:md>Este titulo usa los argumentos de las directivas con v-font-auto:md</h1>
  <h1 v-font-auto:xl>Este titulo usa los argumentos de las directivas con v-font-auto:xl</h1>
  <h1 v-font-color.xl.green>Este titulo usa los modificadores de las directivas con v-font-color.xl.green</h1>
</template>
<script lang="ts" setup>
</script>
<style scoped></style>
