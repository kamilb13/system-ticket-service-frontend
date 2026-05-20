<script setup>
import { ref } from 'vue';
import { createTicket } from '@/api/ticket-service.ts';
import router from '@/router/index.js';

const formData = ref({
  title: '',
  description: '',
  category: '',
});
</script>

<template>
  <v-form
    @submit.prevent="async() => {
      await createTicket(formData.title, formData.description, formData.category);
      await router.push('/dashboard');
    }"
  >
    <v-col>
      <v-row>
        <v-text-field
          v-model="formData.title"
          label="Tytuł zgłoszenia"
          class="px-5"
        />
      </v-row>
      <v-row>
        <v-text-field
          v-model="formData.description"
          label="Opis zgłoszenia"
          class="px-5"
        />
      </v-row>
      <v-row>
        <v-text-field
          v-model="formData.category"
          label="Kategoria zgłoszenia"
          class="px-5"
        />
      </v-row>
      <v-row justify="center">
        <v-btn
          type="submit"
          class="px-8 py-4"
        >
          Utwórz zgłoszenie
        </v-btn>
      </v-row>
    </v-col>
  </v-form>
</template>

<style scoped>

</style>