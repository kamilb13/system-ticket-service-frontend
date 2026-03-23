<script setup>
import {login, register} from '@/api/auth-service.ts'
import {ref} from "vue";
import router from "@/router/index.js";

const formData = ref({
  username: '',
  password: '',
});

</script>

<template>
  <v-form @submit.prevent="async () => {
    await register(formData.username, formData.password);
    await login(formData.username, formData.password);

    // TODO check role
    await router.push('/dashboard');
  }">
    <v-col>
      <v-row>
        <v-text-field v-model="formData.username" label="Nazwa użytkownika"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field v-model="formData.password" type="password" label="Hasło"></v-text-field>
      </v-row>
      <v-row>
        <v-btn type="submit">Zarejestruj</v-btn>
      </v-row>
      <v-row>
        <v-btn to="/login">Masz już konto? Zaloguj się</v-btn>
      </v-row>
    </v-col>
  </v-form>
</template>

<style scoped>

</style>