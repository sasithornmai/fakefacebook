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
    <v-card-text v-else class="text-center">
      <p class="mb-5">{{ descript }}</p>
      <v-btn
        depressed
        block
        elevation="0"
        color="#EEEEEE"
        class="font-weight-bold"
        @click="showEDdescript = !showEDdescript"
        >แก้ไขคำอธิบายตัวเอง</v-btn
      >
    </v-card-text>
    <!-- รายละเอียด -->
    <v-card-text>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-briefcase-variant </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5">
          <p>ทำงานที่ เรียนอยู่</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-school </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5">
          กำลังศึกษาที่ สถาบันเทคโนโลยีเพื่อการฆาตกรรมยังไงให้แนบเนียน
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-school </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5"> เคยศึกษาที่ โรงเรียนลอบสังหาร </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-home </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5"> อาศัยอยู่ที่ ตลาดมืด </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-heart </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5"> โสด </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-clock </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5"> เข้าร่วมเมื่อ มิถุนายม 2022 </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon size="26" color="#B0BEC5"> mdi-rss </v-icon>
        </v-col>
        <v-col cols="11" class="pl-5"> มีผู้ติดตาม 700 </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-btn
        depressed
        block
        elevation="0"
        color="#EEEEEE"
        class="font-weight-bold"
        @click="edit"
        >แก้ไขรายละเอียด</v-btn
      >
    </v-card-text>
    <!-- งานอดิเรก -->
    <v-card-text>
      <v-btn outlined rounded color="#fff" draggable="2">ซ่อนตัว</v-btn>
    </v-card-text>
    <v-card-text>
      <v-btn
        depressed
        block
        elevation="0"
        color="#EEEEEE"
        class="font-weight-bold"
        @click="edit"
        >แก้ไขงานอดิเรก</v-btn
      >
    </v-card-text>
    <!-- เนื้อหาแนะนำ -->
    <v-card-text>
      <v-btn
        depressed
        block
        elevation="0"
        color="#EEEEEE"
        class="font-weight-bold"
        @click="edit"
        >เพิ่มเนื้อหาที่แนะนำ</v-btn
      >
    </v-card-text>
    <!-- <v-card-text>
    </v-card-text> -->
    <!-- <v-card-actions>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  data: () => ({
    descript: "ฉัน คือสายลับ ที่ไม่ลับ ขององค์กร IT Camp",
    showEDdescript: false,
    checkDisabled: false,
  }),
  methods: {
    editSelfDescript() {
      this.showEDdescript = false;
    },
  },
};
</script>

<style>

</style>
