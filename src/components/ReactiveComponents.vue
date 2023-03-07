<template>
  <div>
    <p :style="{ 'color': color }">Este párrafo cambia de color con el click del boton</p>
    <button v-on:click="updateColor()" type="button">CAMBIAR COLOR</button>
  </div>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue';
let color: Ref;
color = ref("green");
const updateColor = () => {
  color.value = "#316caf";
}
</script>
<style></style>