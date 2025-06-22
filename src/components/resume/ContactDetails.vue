<script setup>
import {computed, onMounted, ref} from "vue";
import infoServices from "@/services/InfoServices.js";
import {DateTime} from "luxon";

const personalInfo = ref({});
onMounted(async () => {
  personalInfo.value = await infoServices.getInfo();
})

const age = computed(() => {
  const birthday = DateTime.fromISO(personalInfo.value.birthday);

  const diffInMonths = DateTime.now().diff(birthday, "years");
  return Math.floor(diffInMonths.years)
});
</script>

<template>
</template>

<style scoped>

</style>