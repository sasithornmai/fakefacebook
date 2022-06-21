<template>
  <div>
    <MainPage v-if="$store.state.user" />
    <AuthPage v-else />
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import MainPage from "../components/MainPage.vue";
import AuthPage from "../components/AuthPage.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    MainPage,
    AuthPage,
  },
});
</script>
