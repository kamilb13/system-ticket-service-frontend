<script setup>
defineProps({
  title: String,
  description: String,
  category: String,
})
</script>

<template>
  <v-card variant="outlined">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ description }}</v-card-subtitle>
    <v-card-text>{{ category }}</v-card-text>
  </v-card>
</template>

<style scoped>

</style>