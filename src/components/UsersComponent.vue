<template>
  <div class="card">
    <h3>{{ id }}.- {{ username }}</h3>
    <button @click="emitirSaludo()">Saludar</button>
    <button @click="showPosts(id)">Ver posts</button>
    <button @click="closePosts">Cerrar posts</button>
  </div>
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
const emit = defineEmits(['holaPadre', 'showPosts', 'closePosts']);

function emitirSaludo(): void {
  emit('holaPadre', `Hola padre, soy: ${props.username}`);
}
function showPosts(userId: number): void {
  emit('showPosts', userId);
}
function closePosts() {
  emit('closePosts');
}
</script>
<style scoped>
.card {
  text-align: center;
  margin: 10px;
  flex-basis: calc(100% / 6);
}
</style>
