<script setup>
import {ref} from "vue";
import {createTicket} from "@/api/ticket-service.ts";

const formData = ref({
  title: '',
  description: '',
  category: '',
});
</script>

<template>
  <v-form @submit.prevent="async() => {
    await createTicket(formData.title, formData.description, formData.category);
  }">
    <v-col>
      <v-row>
        <v-text-field v-model="formData.title" label="Tytuł zgłoszenia"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field v-model="formData.description" label="Opis zgłoszenia"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field v-model="formData.category" label="Kategoria zgłoszenia"></v-text-field>
      </v-row>
      <v-row>
        <v-btn type="submit">Utwórz zgłoszenie</v-btn>
      </v-row>
    </v-col>
  </v-form>
</template>

<style scoped>

</style>