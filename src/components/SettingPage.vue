<template>
  <v-form
    ref="form"
    v-model="valid"
  >
    <v-text-field
      label="ชื่อ"
      v-model="data.name"
      :counter="10"
      :rules="nameRules"
      :value="data.name"
      required
    ></v-text-field>
    <v-text-field
      readonly
      :value="data.email"
    ></v-text-field>
      <v-text-field
        v-model="data.phone"
        filled
        color="deep-purple"
        label="Phone number"
      ></v-text-field>
      <v-textarea
        v-model="data.bio"
        auto-grow
        filled
        color="deep-purple"
        label="Bio"
        rows="1"
      ></v-textarea>
    <v-select
      v-model="data.sex"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="เพศ"
      required
    ></v-select>
          <v-textarea
        v-model="data.school"
        auto-grow
        filled
        color="deep-purple"
        label="กำลังศึกษาที่"
        rows="1"
      ></v-textarea>
          <v-textarea
        v-model="data.school2"
        auto-grow
        filled
        color="deep-purple"
        label="เคยศึกษาที่"
        rows="1"
      ></v-textarea>
          <v-textarea
        v-model="data.home"
        auto-grow
        filled
        color="deep-purple"
        label="อาศัยอยู่ที่"
        rows="1"
      ></v-textarea>
    <v-select
      v-model="data.status"
      :items="itemsheart"
      :rules="[v => !!v || 'Item is required']"
      label="สถานะ"
      required
    ></v-select>
    <v-btn
      color="success"
      class="mr-4"
      @click="updateFromFirestore"
    >
      Update
    </v-btn>
    <v-btn
      color="black"
      class="mr-4"
    >
    <a @click="$router.go(-1)">back</a>
    </v-btn>
  </v-form>
</template>

<script>
import firebase from "@/config/firebase.js";

  export default {
    name: "SettingPage",
    data: () => ({
        data: {
        valid: true,
        name: '',
        email: '',
        uid: '',
        sex: null,
        phone: undefined,
        bio: '',
        school: '',
        school2: '',
        home: '',
        status: '',
      },
      items: [
        'ชาย',
        'หญิง',
        'ไม่ระบุ',
      ],
      itemsheart: [
        'โสด',
        'มีแฟนแล้ว',
        'ไม่ระบุ',
      ],
    }),
    methods: {
    async updateFromFirestore() {
      try {
        const req = await firebase.firestore.collection('users').doc(this.$store.state.user.uid).set(this.data)
        console.log(req)
        this.$store.commit("setUser", this.data)
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(this.data));
        alert('updated')
      } catch(e) {
        alert(e)
      }
    }
    },
    async beforeCreate() {
      // this.fromfirestore = await firebase.firestore.collection('users').doc(this.$store.state.user.uid)
      // console.log(this.$store.state.user.uid)
      // console.log( await firebase.firestore.collection('users').doc(this.$store.state.user.uid).get())
      const userid = await firebase.firestore.collection('users').doc(this.$store.state.user.uid).get()
      console.log(userid.data())
      this.data.uid = userid.data().uid
      this.data.email = userid.data().email
      this.data.name = userid.data().name
      this.data.phone = userid.data().phone?userid.data().phone:""
      this.data.bio = userid.data().bio?userid.data().bio:""
      this.data.sex = userid.data().sex?userid.data().sex:""
      this.data.school = userid.data().school?userid.data().school:""
      this.data.school2 = userid.data().school2?userid.data().school2:""
      this.data.home = userid.data().home?userid.data().home:""
      this.data.status = userid.data().status?userid.data().status:""
    },
  }
  // console.log(firebase.firestore.collection('users').doc())
  // console.log(this.$store.state.user)
</script>

<style>

</style>
