<template>
  <div class="container">
    <UsersComponent v-for="user in dataUsers" :key="user.id" :id="user.id" :username="user.name" @holaPadre="saludar"
      @showPosts="showPosts" @closePosts="closePosts" />
    <div>
      <ul>
        <!--<li v-for="(post, index) in data" :key="index">{{ post }}</li>-->
        <PostsComponent v-for="(post, index) in aux" :key="index" :id="post.id" :username="post.name" :title="post.title"
          :body="post.body" />
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>

import { onBeforeMount, ref, Ref } from 'vue';
import UsersComponent from "./UsersComponent.vue";
import PostsComponent from "./PostsComponent.vue";


interface IUser {
  id: number;
  name: string;
}
interface IPost {
  title: string,
  body: string
}
type IData = IUser & IPost;
const dataUsers: Ref<Array<IUser>> = ref([]);
const dataPosts: Ref<Array<IPost>> = ref([]);
const data: Ref<Array<IData>> = ref([]);


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
        dataUsers.value.push(newUser);
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then(response => response.json())
          .then(posts => {
            posts.forEach((post: IPost) => {
              const { title, body } = post;
              let newPost: IPost = {
                title,
                body
              }
              let newData: IData = {
                id,
                name,
                title,
                body
              }
              dataPosts.value.push(newPost);
              data.value.push(newData);
            });
          });
      });

    });
});

function saludar(msg: string): void {
  alert(msg);
}
let aux: Ref<Array<IData>> = ref([]);
function showPosts(userId: number): void {
  aux.value = [];
  for (let i = 0; i < data.value.length; i++) {
    if (data.value[i].id === userId) {
      aux.value.push(data.value[i]);
    }
  }
}
function closePosts(): void {
  aux.value = [];
}




</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>