<template>
  <div class="mt-4">
    <SinglePost class="mt-2" v-for="(post, i) in posts" :key="i" :post="post" :id="post.user" :like="post.likes.length"/>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import firebase from "@/config/firebase.js";
export default {
  components: { SinglePost },
  data: () => ({
    posts: [],
  }),
  firestore: {
    posts: firebase.firestore.collection("posts").orderBy("createAt", "desc"),
  },
};
</script>

<style>
</style>
