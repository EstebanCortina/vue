<template>
  <div>
    <!-- <VerticalComDetail v-for="elm in Users" :key="elm.id" :id="elm.id" :name="elm.name" />-->
    <p v-for="elm in Users" :key="elm.id">{{ elm }}</p>
  </div>
</template>
<script lang="ts" setup>
import VerticalComDetail from './VerticalComDetail.vue'
import { onMounted, ref, Ref } from 'vue'
import { defineProps } from 'vue';

interface User {
  id: number;
  name: string;
}
const data: Ref = ref([]);
const Users: User[] = [];
const A: string[] = ["Uno", "Dos"];
/*
onMounted(async () => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      users.forEach((user: User) => {
        //Object Destructuring
        const { id, name } = user;
        const u: User = {
          id,
          name,
        };
        Users.push(u);
      });
      console.log(Users);
    });
})
*/

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);
  users.forEach((element: User) => {

    Users.push(element);
  });

})



</script>
<style></style>