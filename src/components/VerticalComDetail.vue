<template>
  <div>
    <h4>{{ props.id }}</h4>
    <h4>{{ props.name }}</h4>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VerticalComDetail',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return { props }
  }
});
</script>

<style></style>