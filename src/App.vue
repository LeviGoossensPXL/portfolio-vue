<script setup>
import Study from "@/components/resume/Study.vue";
import {onMounted, ref} from "vue";
import studyServices from "@/services/StudyServices.js";
import Experience from "@/components/resume/Experience.vue";
import experienceServices from "@/services/ExperienceServices.js";


const study1 = ref({});
const experience1 = ref({});
onMounted(async () => {
  study1.value = await studyServices.getStudyById(1);
  experience1.value = await experienceServices.getExperienceById(1);
})
</script>

<template>
  <RouterView/>
</template>

<style scoped>

</style>