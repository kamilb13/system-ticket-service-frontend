<script setup>
import { login } from '@/api/auth-service.ts';
import { ref } from 'vue';
import router from '@/router/index.js';
import { useTokenStore } from '@/stores/token-store.ts';

const tokenStore = useTokenStore();

const formData = ref({
  username: '',
  password: '',
});

const handleLogin = async () => {
  const token = await login(formData.value.username, formData.value.password);
  tokenStore.setToken(token);
  if (tokenStore.role === 'ROLE_TECH') {
    await router.push('/tech/dashboard');
  } else {
    await router.push('/client/dashboard');
  }
};
</script>

<template>
  <v-form @submit.prevent="handleLogin">
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
          Zaloguj
        </v-btn>
      </v-row>
      <v-row>
        <v-btn to="/register">
          Nie masz konta? Zarejestruj się
        </v-btn>
      </v-row>
    </v-col>
  </v-form>
</template>

<style scoped>

</style>