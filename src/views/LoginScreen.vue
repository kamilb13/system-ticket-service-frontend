<script setup>
import {login} from '@/api/auth-service.ts'
import {ref} from "vue";
import router from "@/router/index.js";

const formData = ref({
  username: '',
  password: '',
});
</script>

<template>
  <v-form @submit.prevent="async() => {
    await login(formData.username, formData.password);
    await router.push('/tickets/create');
  }">
    <v-col>
      <v-row>
        <v-text-field v-model="formData.username" label="Nazwa użytkownika"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field v-model="formData.password" type="password" label="Hasło"></v-text-field>
      </v-row>
      <v-row>
        <v-btn type="submit">Zaloguj</v-btn>
      </v-row>
      <v-row>
        <v-btn to="/register">Nie masz konta? Zarejestruj się</v-btn>
      </v-row>
    </v-col>
  </v-form>
</template>

<style scoped>

</style>