<template>
  <div>
    <div v-if="$store.state.user">
      <NavBar />
      <MainPage />
    </div>
    <AuthPage v-else />
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import MainPage from "../components/MainPage.vue";
import AuthPage from "../components/AuthPage.vue";
import NavBar from "@/components/Layout/NavBar.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    MainPage,
    AuthPage,
    NavBar,
  },
});
</script>
