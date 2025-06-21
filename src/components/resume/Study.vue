<script setup>
defineProps({
  study: Object
})
</script>

<template>
  <div>
    <h2>{{ study.title }}</h2>
    <p>{{ study.type }}</p>
    <p><a :href="study.place_website" target="_blank">{{ study.place }}</a> | {{ study.location }}</p>
    <p>{{ study.start_date }} - {{ study.end_date }}</p>
  </div>
</template>

<style scoped>

</style>