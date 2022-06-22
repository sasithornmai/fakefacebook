<template>
  <!-- {{ $store.state.user }} -->
  <div>
    <div>
      <v-row no-gutters>
        <v-col cols="3" class="pa-2">
          <SideBar />
        </v-col>
        <v-col cols="6" class="pa-2">
            <CreatePost />
            <AllPost />
        </v-col>
        <v-col cols="3"><v-card class="mt-2" width="100%"> w </v-card></v-col>
      </v-row>
    </div>
  </div>
  <!-- <v-btn color="success" @click="logout">Logout</v-btn> -->
</template>

<script>
import SideBar from "@/components/Layout/SideBar.vue";
import CreatePost from "./Post/CreatePost.vue";
import AllPost from "./Post/AllPost.vue";
export default {
  name: "MainPage",
  components: {
    SideBar,
    CreatePost,
    AllPost,
  },
  methods: {
    logout() {
      this.$store.commit("setUser", null);
      localStorage.removeItem("user");
    },
  },
};
</script>
