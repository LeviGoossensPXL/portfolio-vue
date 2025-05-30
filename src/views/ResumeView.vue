<script setup>
import Experience from "@/components/resume/Experience.vue";
import Study from "@/components/resume/Study.vue";
import {onMounted, ref} from "vue";
import experienceServices from "@/services/ExperienceServices.js";
import studyServices from "@/services/StudyServices.js";
import SummarySkill from "@/components/resume/skill/SummarySkill.vue";
import SkillServices from "@/services/SkillServices.js";
import ContactDetails from "@/components/resume/ContactDetails.vue";


const studies = ref([]);
const experiences = ref([]);
const softSkills = ref({});
const hardSkills = ref({});
onMounted(async () => {
  experiences.value = await experienceServices.getExperiences();
  studies.value = await studyServices.getStudies();

  hardSkills.value = await SkillServices.getSkillsOfType("hard");

  softSkills.value = await SkillServices.getSkillsOfType("soft");
});
</script>

<template>
  <ContactDetails/>
  <section>
    <h1>Opleidingen</h1>
    <Study v-for="study in studies" :key="study.id" :study="study"/>
  </section>
  <section>
    <h1>Werkervaring</h1>
    <Experience v-for="experience in experiences" :key="experience.id" :experience="experience"/>
  </section>
  <section>
    <h1>Hard Skills</h1>
    <SummarySkill v-for="skill in hardSkills" :key="skill.id" :general-skill="skill.name" :specific-skills="skill.skill_list"/>
  </section>
</template>

<style scoped>

</style>