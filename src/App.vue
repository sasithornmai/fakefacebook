<template>
  <v-app>
    <v-main style="background-color: #f0f2f5;">
        <div v-if="$store.state.user">
          <NavBar />
          <router-view />
        </div>
        <AuthPage v-else />
    </v-main>
  </v-app>
</template>

<script>
import AuthPage from "@/components/AuthPage.vue";
import NavBar from "@/components/Layout/NavBar.vue";

export default {
  name: "App",
  components: {
    AuthPage,
    NavBar,
  },
  beforeCreate() {
    this.$store.commit("setUser", JSON.parse(localStorage.getItem("user")));
  },
  data: () => ({
    //
  }),
};
</script>
