<template>
  <div>
    <v-btn
      class="
        d-flex
        justify-start
        align-center
        pa-1
        text-capitalize
        overflow-hidden
      "
      color="#fff0"
      block
      size="large"
      elevation="0"
    >
      <v-avatar class="mr-2" size="avatarSize">
        <img
          :src="this.$store.state.defaultAvatar"
          alt="alt"
          width="35"
        />
      </v-avatar>
      <b class="text-truncate" style="max-width: 100%; font-size: 14px">
        {{ $store.state.user.name }}
      </b>
    </v-btn>
    <v-btn
      v-for="(item, index) in items"
      :key="index"
      class="
        d-flex
        justify-start
        align-center
        pa-1
        text-capitalize
        overflow-hidden
      "
      color="#fff0"
      block
      size="large"
      elevation="0"
    >
      <v-avatar class="mr-2" size="avatarSize">
        <v-img width="35">
          <v-icon>{{ item.icon }}</v-icon>
        </v-img>
      </v-avatar>
      <b class="text-truncate" style="max-width: 100%; font-size: 14px">
        {{ item.name }}
      </b>
    </v-btn>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: "mdi-account-multiple", name: "เพื่อน" },
      { icon: "mdi-account-group", name: "กลุ่ม" },
      { icon: "mdi-warehouse", name: "Marketplace" },
      { icon: "mdi-clock-time-two-outline", name: "ความทรงจำ" },
      { icon: "mdi-youtube-tv", name: "Watch" },
      { icon: "mdi-chevron-down-circle", name: "ดูเพิ่มเติม" },
    ],
  }),
};
</script>

<style>
</style>
