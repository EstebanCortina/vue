<template>
  <div>
    <h3>Este primer párrafo cambia añadiendole una clase con un bool como parámetro (:class)</h3>
    <p v-bind:class="{ 'error': hasError }">Mensaje de éxito</p>
  </div>
  <div>
    <h3>Este segundo párrafo cambia modificando su atributo style (:style)</h3>
    <p :style="{ 'color': 'red' }">Mensaje de error</p>
  </div>
</template>
<script lang="ts" setup>
let hasError: boolean;
hasError = true;
</script>
<style>
.error {
  color: red;
}
</style>