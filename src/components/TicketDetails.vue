<script setup>
defineProps({
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
  ticketCreator: {
    type: String,
    default: 'Zgłaszający',
  },
});
</script>

<template>
  <v-card variant="outlined">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ description }}</v-card-subtitle>
    <v-card-text>{{ category }}</v-card-text>
    <v-card-text>{{ ticketCreator }}</v-card-text>
  </v-card>
</template>

<style scoped>

</style>