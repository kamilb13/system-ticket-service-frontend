<script setup>
import {login} from '@/api/auth-service.ts'
import {ref} from "vue";
import router from "@/router/index.js";
import {getRoleFromToken} from "@/api/jwt-service.ts";

const formData = ref({
  username: '',
  password: '',
});
</script>

<template>
  <v-form @submit.prevent="async() => {
    const token = await login(formData.username, formData.password);
    if (getRoleFromToken(token) === 'ROLE_TECH') {
      await router.push('/tech/dashboard');
    } else {
      await router.push('/client/dashboard');
    }
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