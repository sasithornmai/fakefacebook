<template>
  <v-card class="mx-auto" max-width="680" width="100%" v-if="this.post.user.uid === id.uid">
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
      <v-menu
        v-if="this.post.user.uid === this.$store.state.user.uid"
        location="start"
      >
        <template v-slot:activator="{ props }">
          <v-btn color="" elevation="0" icon size="small" v-bind="props">
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item width="200" @click="delPost">
            <v-list-item-title>
              <v-icon class="mr-2">mdi-trash-can</v-icon>ลบโพสต์
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
      <span style="font-size: 15px">{{ post.likes.length }}</span>
    </div>
    <v-divider class="mx-3"></v-divider>
    <v-row no-gutters="">
      <v-col cols="4">
        <v-btn
          class="ma-1 font-weight-bold"
          color="#65676B"
          block
          variant="text"
          @click="like"
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
    <v-divider class="mx-3"></v-divider>
    <div v-for="chat in post.comments" :key="chat.message">
      <div class="d-flex justify-start align-center px-3 pt-2">
      <v-avatar class="mr-2" size="avatarSize">
        <img
          :src="$store.state.defaultAvatar"
          alt="alt"
          width="40"
        />
      </v-avatar>
        <div style="font-size: 14px; font-weight: bold">
          {{ chat.sender }}
        </div>
      </div>
      <div class="px-15">
        <div style="font-size: 15px">
          {{ chat.comment }}
        </div>
      </div>
    </div>
    <div class="d-flex justify-start align-center px-4 py-3">
      <v-avatar class="mr-2" size="avatarSize">
        <img
          :src="$store.state.defaultAvatar"
          alt="alt"
          width="40"
        />
      </v-avatar>
      <input
        type="text"
        placeholder="เขียนความคิดเห็น..."
        class="searchTxt"
        v-model="data.comment"
      />
      <v-btn @click="sendComment">comment</v-btn>
    </div>
  </v-card>
</template>

<script>
import firebase from "@/config/firebase";
export default {
  props: {
    post: {
      type: Object,
      reqired: true,
    },
    id: {
      type: Object,
      reqired: true,
    }
  },
  data() {
    return {
      data: {
        comment:'',
        sender:'',
      },
    }
  },
  firestore: {
    // chats: firebase.firestore.collection('posts')
  },
  methods: {
    delPost() {
      if (this.post.user.uid === this.$store.state.user.uid) {
        firebase.firestore.collection("posts").doc(this.post.id).delete();
      }
    },
    sendComment() {
        firebase.firestore.collection('posts').doc(this.post.id).update({
        // comments:[{sender:this.$store.state.user.name, comment:this.data.comment}]
        comments: firebase.firebase.firestore.FieldValue.arrayUnion({sender:this.$store.state.user.name, comment:this.data.comment})
      })
      .then(e => {
        console.log(e)
      })
      .catch(e => {
        console.log('error : ' + e)
      })
    },
    like() {
      // alert('like')
      firebase.firestore.collection('posts').doc(this.post.id).update({
        // comments:[{sender:this.$store.state.user.name, comment:this.data.comment}]
        likes: firebase.firebase.firestore.FieldValue.arrayUnion({user:this.$store.state.user.email})
      })
      .then(e => {
        console.log(e)
      })
      .catch(e => {
        console.log('error : ' + e)
      })
    }
  },
};
</script>

<style>
</style>
