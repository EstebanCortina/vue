<template>
  <div>
    <h1>{{ props.title }}</h1>
    <p>{{ props.body }}</p>
    <p>By:{{ props.username }}</p>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})

</script>
<style scoped></style>
