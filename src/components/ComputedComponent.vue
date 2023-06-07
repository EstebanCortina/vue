<template>
  <div>
    <label for="numero">Numero</label>
    <input type="number" name="numero" v-model="numero">
  </div>
  <div>
    <p>Cuadrado:{{ res }}</p>
  </div>
</template>
<script lang="ts" setup>
import { Ref, ref, computed } from "vue";
const numero: Ref<number> = ref(0);
const iva = 0.16;
const res = computed(() => numero.value - (numero.value * iva));
</script>
<style scoped></style>
