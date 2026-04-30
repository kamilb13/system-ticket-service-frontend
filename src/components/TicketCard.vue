<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Tytuł zgłoszenia',
  },
  description: {
    type: String,
    default: 'Opis zgłoszenia',
  },
  category: {
    type: String,
    default: 'Kategoria zgłoszenia',
  },
});
</script>

<template>
  <v-card variant="outlined">
    <v-card-title>{{ props.title }}</v-card-title>
    <v-card-subtitle>{{ props.description }}</v-card-subtitle>
    <v-card-text>{{ props.category }}</v-card-text>
  </v-card>
</template>

<style scoped>

</style>