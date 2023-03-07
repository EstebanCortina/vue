<template>
  <h1>V-IF</h1>
  <p v-if="edad < 18"> menor de edad porque tienes {{ edad }} años</p>
  <p v-else> mayor de edad porque tienes {{ edad }} años</p>
</template>

<script lang="ts" setup>
let edad: number;
edad = 11;
</script> 

<style></style>