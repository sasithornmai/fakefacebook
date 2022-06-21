<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    this.$store.commit("setUser", JSON.parse(localStorage.getItem("user")));
  },
  data: () => ({
    //
  }),
};
</script>
