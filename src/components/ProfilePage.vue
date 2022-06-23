<template>
  <v-card class="py-3 px-2">
    <v-card-title class="font-weight-black text-h5">แนะนำตัว</v-card-title>
    <!-- คำอธิบาย -->
    <v-card-text v-if="showEDdescript">
      <v-text-field
        v-model="descript"
        :rules="nameRules"
        :counter="50"
        required
      ></v-text-field>
      <div class="text-right">
        <v-btn
          depressed
          elevation="0"
          color="#EEEEEE"
          class="mr-3 font-weight-bold"
          @click="showEDdescript = !showEDdescript"
          >ยกเลิก</v-btn
        >
        <v-btn
          depressed
          disabled
          elevation="0"
          color="#EEEEEE"
          class="font-weight-bold"
          @click="editSelfDescript"
          >บันทึก</v-btn
        >
      </div>
    </v-card-text>
    <v-card-text v-else class="">
      <p>{{ bio }}</p>
      <!-- <v-btn
        depressed
        block
        elevation="0"
        color="#EEEEEE"
        class="font-weight-bold"
        @click="showEDdescript = !showEDdescript"
        >แก้ไขคำอธิบายตัวเอง</v-btn
      > -->
    </v-card-text>
    <!-- รายละเอียด -->
    <v-card-text>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-school </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5">
          กำลังศึกษาที่ {{ school }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-school </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5"> เคยศึกษาที่ {{ school2 }} </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-home </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5"> อาศัยอยู่ที่ {{ home }} </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-heart </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5"> {{ status }} </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-phone </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5"> {{ phone }} </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-account </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5"> เพศ {{ sex }} </v-col>
      </v-row>
    </v-card-text>
    <!-- <v-card-text>
      <v-btn
        depressed
        block
        elevation="0"
        color="#EEEEEE"
        class="font-weight-bold"
        @click="edit"
        >แก้ไขรายละเอียด</v-btn
      >
    </v-card-text> -->
    <!-- งานอดิเรก -->
    <!-- <v-card-text>
      <v-btn outlined rounded color="#fff" draggable="2">ซ่อนตัว</v-btn>
    </v-card-text> -->
    <v-card-text>
      <v-btn
        depressed
        block
        elevation="0"
        color="#EEEEEE"
        class="font-weight-bold"
        @click="edit"
        ><router-link to="/setting">แก้ไขข้อมูล</router-link></v-btn
      >
    </v-card-text>
    <!-- เนื้อหาแนะนำ -->
    <!-- <v-card-text>
    </v-card-text> -->
    <!-- <v-card-actions>
    </v-card-actions> -->
  </v-card>
</template>

<script>
import firebase from "@/config/firebase.js";
export default {
  data: () => ({
    bio:'',
    school: '',
    school2: '',
    home: '',
    status: '',
    phone: '',
    sex: '',
    showEDdescript: false,
    checkDisabled: false,
  }),
  methods: {
    editSelfDescript() {
      this.showEDdescript = false;
    },
  },
  async beforeCreate() {
      // this.fromfirestore = await firebase.firestore.collection('users').doc(this.$store.state.user.uid)
      // console.log(this.$store.state.user.uid)
      // console.log( await firebase.firestore.collection('users').doc(this.$store.state.user.uid).get())
      const userid = await firebase.firestore.collection('users').doc(this.$store.state.user.uid).get()
      console.log(userid.data())
      this.phone = userid.data().phone?userid.data().phone:"-"
      this.bio = userid.data().bio?userid.data().bio:"-"
      this.sex = userid.data().sex?userid.data().sex:"-"
      this.school = userid.data().school?userid.data().school:"-"
      this.school2 = userid.data().school2?userid.data().school2:"-"
      this.home = userid.data().home?userid.data().home:"-"
      this.status = userid.data().status?userid.data().status:"-"
    },
};
</script>

<style>

</style>
