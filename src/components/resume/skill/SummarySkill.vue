<script setup>
import {computed} from "vue";

const props = defineProps({
  generalSkill: String,
  specificSkills: Array,
})
const skillsCommaList = computed(() => {
  return props.specificSkills.join(", ")
})
</script>

<template>
<p>{{ generalSkill }}: <span>{{ skillsCommaList }}</span></p>
</template>

<style scoped>

</style>