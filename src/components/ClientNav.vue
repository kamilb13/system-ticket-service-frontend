<script setup>
import {useTokenStore} from "@/stores/token-store.ts";
import router from "@/router/index.js";

const store = useTokenStore();

</script>

<template>
<v-container>
  <v-btn v-if=""></v-btn>
  <v-btn @click="async () => {
    if (store.role === 'ROLE_TECH') {
       await router.push('/tech/dashboard');
    } else {
      await router.push('/client/dashboard');
    }
  }">Dashboard</v-btn>
  <v-btn>{{ store.token !== null ? "Wyloguj" : "Zaloguj" }}</v-btn>
</v-container>
</template>

<style scoped>

</style>