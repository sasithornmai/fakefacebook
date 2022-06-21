<template>
  <v-card class="mx-auto px-4 py-3" max-width="680" width="100%">
    <div class="d-flex justify-start align-center">
      <v-avatar class="mr-2" size="avatarSize">
        <img
          :src="$store.state.defaultAvatar"
          alt="alt"
          width="40"
        />
      </v-avatar>
      <input
        type="text"
        placeholder="คุณคิดอะไรอยู่"
        class="searchTxt"
        @click="openPostDialog"
      />
    </div>
    <v-divider class="my-3"></v-divider>
    <v-row no-gutters="">
      <v-col cols="4">
        <v-btn color="red" block variant="text">ถ่ายทอดสด</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn color="success" block variant="text">รูปภาพ/วิดีโอ</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn color="warning" block variant="text">ความรู้สึก/กิจกรรม</v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" scrollable>
      <v-card width="500">
        <h2 class="text-center pa-3">สร้างโพสต์</h2>
        <v-divider></v-divider>
        <div>
          <div class="d-flex justify-start align-center px-4 py-3">
            <v-avatar class="mr-2" size="avatarSize">
              <img :src="$store.state.defaultAvatar" alt="alt" width="40" />
            </v-avatar>
            <div>
              <div style="font-size: 14px; font-weight: bold">
                {{ $store.state.user.email }}
              </div>
              <div style="font-size: 12px">
                <v-chip size="x-small">
                  <v-icon class="mr-1">mdi-earth</v-icon>
                  สาธารณะ
                </v-chip>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-3">
          <v-textarea
            v-model="detail"
            counter
            color="white"
            variant="plain"
          ></v-textarea>
          <v-card
            v-if="previewImg != null"
            class="pa-2 my-1"
            elevation="0"
            border="1"
          >
            <v-img :src="previewImg"></v-img>
            <v-btn
              class="ma-1"
              size="x-small"
              color="#d0d2d7"
              elevation="0"
              icon
              style="position: absolute; top: 0; right: 0"
              @click="previewImg = null"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card>
        </div>
        <v-card
          class="d-flex justify-start align-center mx-3 pa-3"
          border="1"
          elevation="0"
        >
          <b>เพิ่มลงในโพสต์ของคุณ</b>
          <v-spacer></v-spacer>
          <v-btn
            color=""
            icon
            size="x-small"
            elevation="0"
            @click="$refs.inputImg.click()"
          >
            <v-icon color="success">mdi-file-image</v-icon>
          </v-btn>
          <input
            ref="inputImg"
            class="d-none"
            type="file"
            accept="image/*"
            @change="onFilePicked"
          />
        </v-card>
        <div class="ma-3">
          <v-btn
            color="#1a6ed8"
            style="color: white"
            elevation="0"
            :disabled="detail == '' && previewImg == null"
            block
            :loading="loading"
            @click="addPost"
          >
            โพสต์
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import firebase from "@/config/firebase.js";
export default {
  data: () => ({
    dialog: false,
    previewImg: null,
    img: null,
    detail: "",
  }),
  methods: {
    openPostDialog() {
      this.dialog = true;
    },
    onFilePicked(e) {
      const imgFile = e.target.files[0];
      this.img = imgFile;
      if (!imgFile) {
        console.log("Please pick file");
      } else if (imgFile) {
        const imgUrl = URL.createObjectURL(imgFile);
        this.previewImg = imgUrl;
      }
    },
    async addPost() {
      this.loading = true;
      if (this.$store.state.user) {
        try {
          const filename = `${Math.floor(Math.random() * 1000000000)}.jpg`;
          const path = `images/${this.$store.state.user.uid}/${filename}`;
          const publicPath = `images%2F${this.$store.state.user.uid}%2F${filename}`;
          const ref = await firebase.storage.ref().child(path);
          const snap = await ref.put(this.img, {
            contentType: "image/jpeg",
          });
          if (snap) {
            const img = await firebase.storage;
            await firebase.firestore.collection("posts").add({
              user: {
                uid: this.$store.state.user.uid,
                name: this.$store.state.user.email,
                avatar: this.$store.state.user.photoURL
                  ? this.$store.state.user.photoURL
                  : this.$store.state.defaultAvatar,
              },
              detail: this.detail,
              image:
                this.previewImg == null
                  ? ""
                  : `https://firebasestorage.googleapis.com/v0/b/a-rai-gor-dai.appspot.com/o/${publicPath}?alt=media`,
              createAt: new Date(Date.now()),
              likes: [],
              comments: [],
            });
            if (img) {
              this.loading = false;
              this.detail = "";
              this.previewImg = null;
              this.img = null;
              this.dialog = false;
            }
          }
        } catch (error) {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style>
</style>