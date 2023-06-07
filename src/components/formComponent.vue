<template>
  <form>
    <div>
      <label for="name">Nombre:</label>
      <input type="text" v-model="txtName">
    </div>
    <div>
      <label for="pass">Contraseña:</label>
      <input type="password" v-model="txtPass">
    </div>
    <button type="button" @click="addUser()">Agregar</button>
  </form>
  <div v-if="users.length > 0">
    <ul>
      <li v-for="( user, index ) in  users " :key="index">{{ user }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
interface IUser {
  username: string,
  password: string
}
const users: Ref<Array<IUser>> = ref([]);
const txtName: Ref = ref('');
const txtPass: Ref = ref('');

function addUser(): void {
  let newUser: IUser = {
    username: txtName.value,
    password: txtPass.value
  }
  users.value.push(newUser);
}


</script>
<style scoped></style>
