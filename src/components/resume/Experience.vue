<script setup>
import {computed} from "vue";

const props = defineProps({
  experience: Object
})
const periodDates = computed(() => {
  return `${props.experience.start_date} - ${props.experience.end_date}`
})
</script>

<template>
  <div>
    <h2><a :href="experience.website" target="_blank">{{ experience.company_name }}</a></h2>
    <h3>{{ experience.job_title }}</h3>
    <div>
      <p>{{ periodDates }}</p>
      <ul v-for="task in experience.tasks">
        <li>{{ task }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>