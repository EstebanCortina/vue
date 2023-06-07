<template>
  <div>
    <ul>
      <li v-for="user in data" :key="user.id">{{ user.id }} {{ user.name }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>

import { onBeforeMount, ref, Ref } from 'vue'


interface IUser {
  id: number;
  name: string;
}
const data: Ref<Array<IUser>> = ref([]);

onBeforeMount(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      users.forEach((user: IUser) => {
        const { id, name } = user;
        let newUser: IUser = {
          id,
          name
        }
        data.value.push(newUser);
      });

    })
});





</script>
<style></style>