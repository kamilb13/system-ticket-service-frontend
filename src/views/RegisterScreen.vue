<script setup>
import { register } from '@/api/auth-service.ts';
import { ref } from 'vue';
import router from '@/router/index.js';

const formData = ref({
  username: '',
  password: '',
});

const handleRegister = async () => {
  try {
    await register(formData.value.username, formData.value.password);
    await router.push('/login');
  } catch (error) {
    console.error(error);
  }
};

</script>

<template>
  <v-form @submit.prevent="handleRegister">
    <v-col>
      <v-row>
        <v-text-field
          v-model="formData.username"
          label="Nazwa użytkownika"
        />
      </v-row>
      <v-row>
        <v-text-field
          v-model="formData.password"
          type="password"
          label="Hasło"
        />
      </v-row>
      <v-row>
        <v-btn type="submit">
          Zarejestruj
        </v-btn>
      </v-row>
      <v-row>
        <v-btn to="/login">
          Masz już konto? Zaloguj się
        </v-btn>
      </v-row>
    </v-col>
  </v-form>
</template>

<style scoped>

</style>