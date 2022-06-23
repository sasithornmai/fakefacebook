<template>
  <v-app-bar color="" height="56" elevation="0">
    <div class="d-flex justify-center align-center" style="width: 320px">
      <v-btn icon href="/mainpage">
        <v-img :src="logo" width="40" />
      </v-btn>
      <input type="text" placeholder="ค้นหาบน Facebook" class="searchTxt" />
    </div>
    <v-spacer></v-spacer>
    <v-tabs v-model="tab" background-color="white" color="#1b74e4">
      <v-tab value="0" style="width: 130px">
        <v-icon size="x-large">mdi-home</v-icon>
      </v-tab>
      <v-tab value="1" style="width: 130px">
        <v-icon size="x-large">mdi-youtube-tv</v-icon>
      </v-tab>
      <v-tab value="2" style="width: 130px">
        <v-icon size="x-large">mdi-account-group</v-icon>
      </v-tab>
      <v-tab value="3" style="width: 130px">
        <v-icon size="x-large">mdi-facebook-gaming</v-icon>
      </v-tab>
    </v-tabs>

    <v-spacer></v-spacer>

    <div class="d-flex justify-end align-center" style="width: 320px">
      <v-btn class="mr-1" size="small" style="background: #d8dadf" icon>
        <v-icon>mdi-dice-5</v-icon>
      </v-btn>
      <v-btn class="mr-1" size="small" style="background: #d8dadf" icon>
        <v-icon>mdi-facebook-messenger</v-icon>
      </v-btn>
      <v-btn class="mr-1" size="small" style="background: #d8dadf" icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-menu v-model="menu" :close-on-content-click="false" location="start">
        <template v-slot:activator="{ props }">
          <v-btn icon color="success">
            <v-avatar size="avatarSize">
              <img
                :src="$store.state.defaultAvatar"
                alt="alt"
                width="40"
                v-bind="props"
              />
            </v-avatar>
          </v-btn>
        </template>

        <v-card class="pa-4" min-width="360">
          <v-card class="pa-4">
            <div class="d-flex align-center">
              <v-avatar class="mr-3" size="avatarSize">
                <img :src="$store.state.defaultAvatar" alt="alt" width="40" />
              </v-avatar>
              <b>{{ $store.state.user.email }}</b>
            </div>
            <v-divider class="my-4"></v-divider>
            <div style="color: #0082fd; font-size: 14px">ดูโปรไฟล์ทั้งหมด</div>
            <div style="color: #0082fd; font-size: 14px">
             <router-link to="/setting">ตั้งค่า</router-link>
            </div>
            <div style="color: #0082fd; font-size: 14px">
             <router-link to="/profile">โปรไฟล์</router-link>
            </div>
            <div style="color: #0082fd; font-size: 14px">
             <router-link to="/mainpage">หน้าหลัก</router-link>
            </div>
          </v-card>
          <div class="mt-3">
            <v-btn
              color=""
              class="d-flex justify-start align-center px-2"
              block
              size="large"
              @click="logout"
            >
              <v-icon class="mr-2">mdi-logout</v-icon>ออกจากระบบ
            </v-btn>
          </div>
        </v-card>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import logo from "../../assets/FBIcon.svg";
export default {
  data: () => ({
    logo,
    tab: null,
  }),
  methods: {
    logout() {
     this.$router.push("/")
      this.$store.commit("setUser", null);
      localStorage.removeItem("user");
    },
  },
};
</script>

<style>
.searchTxt {
  width: 100%;
  background: #f0f2f5;
  height: 40px;
  border-radius: 30px;
  padding: 10px 20px 10px 20px;
  outline: none;
}
</style>
