<template>
  <v-card class="mx-auto" max-width="680" width="100%">
    <div class="d-flex justify-start align-center px-4 py-3">
      <v-avatar class="mr-2" size="avatarSize">
        <img :src="post.user.avatar" alt="alt" width="40" />
      </v-avatar>
      <div>
        <div style="font-size: 14px; font-weight: bold">
          {{ post.user.name }}
        </div>
        <div style="font-size: 12px">
          1 ชม. · <v-icon size="small">mdi-earth</v-icon>
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="" elevation="0" icon size="small">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </div>
    <div v-if="post.detail" class="px-4" style="word-break: break-word">
      {{ post.detail }}
    </div>
    <v-img
      v-if="post.image"
      class="mt-1"
      :src="post.image"
      :style="`background-image: url('${post.image}');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;`"
    >
    </v-img>
    <div class="d-flex justify-start align-center mx-3" style="height: 43px">
      <v-icon class="mr-1" size="x-small">mdi-thumb-up</v-icon>
      <span style="font-size: 15px">1k</span>
    </div>
    <v-divider class="mx-3"></v-divider>
    <v-row no-gutters="">
      <v-col cols="4">
        <v-btn
          class="ma-1 font-weight-bold"
          color="#65676B"
          block
          variant="text"
        >
          <v-icon>mdi-thumb-up-outline</v-icon>
          ถูกใจ
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          class="ma-1 font-weight-bold"
          color="#65676B"
          block
          variant="text"
        >
          <v-icon>mdi-comment-outline</v-icon>
          แสดงความคิดเห็น
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          class="ma-1 font-weight-bold"
          color="#65676B"
          block
          variant="text"
        >
          <v-icon>mdi-share-outline</v-icon>
          แชร์
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      reqired: true,
    },
  },
};
</script>

<style>
</style>