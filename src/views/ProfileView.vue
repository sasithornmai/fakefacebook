<template>
<div>
    <v-card class="mx-auto px-15">
      <v-container>
        <v-img
          class="white--text align-end"
          height="400px"
          cover
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
        <!-- style="position: absolute; top: 69%" -->
        <v-card-title>
          <v-row class="ml-6">
            <v-col cols="2"
              ><v-avatar size="180" style="position: absolute; top: 55%">
                <img
                  alt="user"
                  src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                /> </v-avatar
            ></v-col>
            <v-col cols="10"
              ><v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="ml-8 pb-2 text-h4 font-weight-black">
                    {{  $store.state.user.name }}</v-list-item-title
                  >
                  <v-list-item-subtitle class="ml-8">
                    เพื่อน 700
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card-title>
        <hr class="line mt-10" />
        <v-tabs color="primary">
          <v-tab color="primary">โพสต์</v-tab>
          <v-tab>เกี่ยวกับ</v-tab>
          <v-tab>เพื่อน</v-tab>
          <v-tab>รูปภาพ</v-tab>
          <v-tab>วีดีโอ</v-tab>
          <v-tab>การเช็คอิน</v-tab>
          <v-tab
            >เพิ่มเติม
            <v-icon>mdi-menu-down</v-icon>
          </v-tab>
          <v-spacer></v-spacer>
          <!-- คำสั่ง ชิดขวา -->
          <v-btn depressed elevation="0" color="#EEEEEE">
            <v-icon size="large" color="#424242">mdi-dots-horizontal</v-icon>
          </v-btn>
        </v-tabs>
      </v-container>
    </v-card>
    <v-container>
      <v-row>
        <v-col cols="5">
          <ProfilePage/>
        </v-col>
        <v-col cols="7">
          <CreatePost />
          <div class="mt-4">
            <SinglePost class="mt-2" v-for="(post, i) in posts" :key="i" :post="post"/>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProfilePage from "@/components/ProfilePage.vue";
import CreatePost from "../components/Post/CreatePost.vue";
import SinglePost from "@/components/Post/SinglePost.vue";
import firebase from "@/config/firebase.js";
export default {
  name: "ProfileView",
  components: {
    CreatePost,
    ProfilePage,
    SinglePost
  },
  data: () => ({
    posts: [],
  }),
  // firestore: {
  //   posts: firebase.firestore.collection("posts").orderBy("createAt", "desc")
  // },
  methods: {
    async fetchdata() {
      const fewtest = await firebase
        .firestore
        .collection("posts")
        .orderBy("createAt", "desc")
        .get();
      const few = fewtest.docs.map((doc) => doc.data());
      this.fewza = fewtest.docs;
      console.log(fewtest.docs[0].id);
      console.log(few)
      console.log(this.$store.state.user.uid)
      // this.posts = few;
      for (let i = 0; i < few.length; i++) {
        if (few[i].user.uid == this.$store.state.user.uid) {
          console.log(few[i].user.uid)
          this.posts.push(few[i])
          console.log(few[i])
        }
      }
      console.log(this.posts)
      // console.log(this.posts)
      // console.log(this.posts[0].user.uid)
      // console.log(this.$store.state.user.uid)
    },
  },
  mounted() {
    this.fetchdata();
  },
}

</script>
<style>

</style>
