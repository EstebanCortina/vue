<template>
  <h1>V-SHOW</h1>
  <p v-show="edad < 18"> menor de edad porque tienes {{ edad }} años</p>
  <p v-show="edad >= 18"> mayor de edad porque tienes {{ edad }} años</p>
</template>
<script lang="ts" setup>
let edad: number;
edad = 11;
</script>
<style lang="">
  
</style>