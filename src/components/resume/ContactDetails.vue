<script setup>
import {computed, onMounted, ref} from "vue";
import infoServices from "@/services/InfoServices.js";

const personalInfo = ref({});
onMounted(async () => {
  personalInfo.value = await infoServices.getInfo();
})

const age = computed(() => {
  const dateBirthDay = Date.parse(personalInfo.birthday);
  return Date.now() - dateBirthDay;
});
</script>

<template>
{{ age }}
</template>

<style scoped>

</style>