<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn
            color="#36a420"
            style="font-size: large; color: white"
            size="large"
            elevation="0"
            v-bind="props"
            class="mt-3 mb-3"
        >
          สร้างบัญชีใหม่
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5 ml-5 mt-5">สมัครสมาชิก</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                  v-model="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  v-model="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog = false"
          >
            ยกเลิก
          </v-btn>
          <v-btn
            color="blue-darken-1 mr-5"
            text
            @click="signup"
          >
            สมัคร
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import firebase from "@/config/firebase.js";
export default {
    data: () => ({
      dialog: false,
      users: [],
      email: '',
      password: '',
      user: null,
    }),
    methods: {
      async signup() {
        firebase.auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          localStorage.setItem('user', cred.user)
          this.userid = cred.user
          this.dialog = false
        })
        .catch(e => {
          console.log('error : ' + e)
          this.dialog = false
        })
    },
    }
  }
</script>

<style>

</style>
