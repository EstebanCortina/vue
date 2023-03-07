<template>
  <div>
    <h1>Ciclo FOR IN</h1>
    <ul>
      <li v-for="pais in paises" :key="pais">{{ pais }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
let paises: string[];
paises = ["México", "Italia", "España"];
</script>
<style></style>