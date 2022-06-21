<template>
  <div>
    <div class="authSection d-flex justify-center align-center">
      <v-card
        max-width="980"
        width="100%"
        elevation="0"
        style="background: none"
      >
        <v-row>
          <v-col cols="6">
            <h1 style="font-size: 50px; color: #166fe5">Facebook</h1>
            <span style="font-size: 30px">
              Facebook ช่วยคุณเชื่อมต่อและแชร์กับผู้คนมากมายรอบตัวคุณ
            </span>
          </v-col>
          <v-col cols="6">
            <SignInForm />
            <div class="mt-7 text-center">
              <b>สร้างเพจ</b> สำหรับคนดัง แบรนด์ หรือธุรกิจ
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div class="footer d-flex justify-center align-center">
      <v-card
        class="pt-5"
        max-width="980"
        width="100%"
        elevation="0"
        style="background: none"
      >
        <div>
          ภาษาไทย English (UK) 日本語 中文(简体) Tiếng Việt Français (France)
          Deutsch Русский Español Português (Brasil) Italiano
        </div>
        <v-divider class="my-2"></v-divider>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
          pariatur hic at vel, perferendis fugit similique velit est recusandae
          numquam placeat repudiandae odio sequi nihil excepturi vitae veritatis
          rem! Veritatis! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Quia, pariatur hic at vel, perferendis fugit similique velit est
          recusandae numquam placeat repudiandae odio sequi nihil excepturi
          vitae veritatis rem! Veritatis!Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quia, pariatur hic at vel
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import SignInForm from "./AuthForm/SignInForm.vue";
export default {
  name: "AuthPage",
  components: { SignInForm },
};
</script>

<style>
.authSection {
  background: linear-gradient(to bottom, #f0f2f5 0%, #f0f2f5 100%);
  height: 75vh;
}
</style>