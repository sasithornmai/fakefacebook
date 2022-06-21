<template>
  <v-app-bar color="" height="56">
    <!-- <v-app-bar-title>
      <v-btn icon href="/">
        <v-img :src="logo" width="40" />
      </v-btn>
    </v-app-bar-title>
    <v-text-field
      name="search"
      label="ค้นหาบนเฟคเฟส"
      hide-details
      variant="filled"
    ></v-text-field> -->
    <div class="d-flex justify-center align-center" style="width: 320px">
      <v-btn icon href="/">
        <v-img :src="logo" width="40" />
      </v-btn>
      <input type="text" placeholder="ค้นหาบน Facebook" class="searchTxt" />
    </div>
    <v-spacer></v-spacer>
    <v-tabs v-model="tab" background-color="white" color="#1b74e4">
      <v-tab value="" style="width: 130px">
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIMKLBPr-PxlbWxWWaAerVx1V2QA1BDgUw9Foe1cwE87wPOup8JKPhkYEu4lKAGQH5gM&usqp=CAU"
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
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIMKLBPr-PxlbWxWWaAerVx1V2QA1BDgUw9Foe1cwE87wPOup8JKPhkYEu4lKAGQH5gM&usqp=CAU"
                  alt="alt"
                  width="40"
                  v-bind="props"
                />
              </v-avatar>
              <b>{{ $store.state.user.email }}</b>
            </div>
            <v-divider class="my-4"></v-divider>
            <div>ดูโปรไฟล์ทั้งหมด</div>
          </v-card>
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
  }),
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