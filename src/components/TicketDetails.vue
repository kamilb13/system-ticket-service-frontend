<script setup>
defineProps({
  title: String,
  description: String,
  category: String,
  ticketCreator: String,
});
</script>

<template>
  <v-table>
    <tr>
      <td>Tytuł zgłoszenia:</td>
      <td>{{ title }}</td>
    </tr>
    <tr>
      <td>Opis zgłoszenia:</td>
      <td>{{ description }}</td>
    </tr>
    <tr>
      <td>Zgłaszający:</td>
      <td>{{ ticketCreator }}</td>
    </tr>
  </v-table>
</template>

<style scoped>

</style>