<template>
  <v-card class="pa-4 mx-auto" rounded="lg" elevation="4" max-width="396">
    <v-text-field
      v-model="email"
      type="email"
      class="mb-3"
      name="email"
      label="อีเมล์หรือหมายเลขโทรศัพท์มือถือ"
      id="email"
      hide-details
      variant="outlined"
    ></v-text-field>
    <v-text-field
      v-model="password"
      type="password"
      class="mb-3"
      name="password"
      label="รหัสผ่าน"
      id="password"
      hide-details
      variant="outlined"
    ></v-text-field>
    <v-alert
      v-if="ErrorMsg !== ''"
      class="my-3"
      type="error"
      color="red"
      style="color: white !important"
    >
      {{ ErrorMsg }}
    </v-alert>
    <v-btn
      color="#166fe5"
      block
      style="font-size: large; color: white"
      elevation="0"
      size="large"
      :disabled="email === '' || password === ''"
      :loading="loading"
      @click="SignIn"
    >
      เข้าสู่ระบบ
    </v-btn>
    <div style="width: 100%; margin-top: 16px; text-align: center">
      <a class="forgotbtn" href="/" style="color: #166fe5">
        ลืมรหัสผ่านก็ไปสร้างใหม่ไป
      </a>
    </div>
    <v-divider style="margin: 20px 16px"></v-divider>
    <div class="text-center">
      <SignUpForm/>
    </div>
  </v-card>
</template>

<script>
import firebase from "@/config/firebase.js";
import SignUpForm from "@/components/AuthForm/SignUpForm.vue";
export default {
  name: "SignInForm",
  data() {
    return {
      email: "",
      password: "",
      ErrorMsg: "",
      loading: false,
    };
  },
  methods: {
    async SignIn() {
      this.loading = true;
      try {
        const res = await firebase.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        if (res) {
          //   alert("Success");
          console.log(res.user);
          localStorage.setItem("user", JSON.stringify(res.user));
          this.$store.commit("setUser", res.user);
          //   this.$router.push("/");
          this.loading = false;
        }
      } catch (error) {
        this.ErrorMsg = error.message;
        this.loading = false;
      }
    },
  },
  components: {
    SignUpForm
  }
};
</script>

<style>
</style>
