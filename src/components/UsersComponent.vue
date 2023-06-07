<template>
  <h1>{{ id }}</h1>
  <p>{{ username }}</p>
  <button @click="emitirSaludo()">Saludar</button>
  <button @click="showPosts(id)">Ver posts</button>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});
const emit = defineEmits(['holaPadre', 'showPosts']);

function emitirSaludo(): void {
  emit('holaPadre', `Hola padre, soy: ${props.username}`);
}
function showPosts(userId: number): void {
  emit('showPosts', userId);
}
</script>
<style scoped></style>
