<template>
  <!-- {{ $store.state.user }} -->
  <div>
  <NavBar/>
  <v-row no-gutters>
    <v-col cols="3" class="pa-2">
      <SideBar />
    </v-col>
    <v-col cols="6" class="pa-2">
        <SettingPage/>
    </v-col>
    <v-col cols="3"><v-card class="mt-2" width="100%"> w </v-card></v-col>
  </v-row>
  </div>
  <!-- <v-btn color="success" @click="logout">Logout</v-btn> -->
</template>

<script>
import SideBar from "@/components/Layout/SideBar.vue";
import SettingPage from "../components/SettingPage.vue";
import NavBar from "@/components/Layout/NavBar.vue";
export default {
  name: "MainPage",
  components: {
    SideBar,
    SettingPage,
    NavBar,
  },
  methods: {
    logout() {
      this.$store.commit("setUser", null);
      localStorage.removeItem("user");
      this.$route.push("/")
    },
  },
};
</script>
