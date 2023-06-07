<template>
  <div>
    <h3>Componente prueba</h3>
  </div>
</template>
<script lang="ts" setup>
//Hooks
import { onMounted, onUpdated } from "vue";

//Call back function

onMounted(() => {
  console.log("Mounted");
});

onUpdated(() => {
  console.log("Updated");
});
</script>
<style></style>