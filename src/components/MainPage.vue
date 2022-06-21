<template>
  <v-container>
    {{ $store.state.user }}
    <v-btn color="success" @click="logout">Logout</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "MainPage",

  data: () => ({}),
  methods: {
    logout() {
      this.$store.commit("setUser", null);
      localStorage.removeItem("user");
    },
  },
};
</script>
