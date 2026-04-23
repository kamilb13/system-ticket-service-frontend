<script setup>
import {useTokenStore} from "@/stores/token-store.ts";
import router from "@/router/index.js";
import {Role} from "@/types/role.ts";


const tokenStore = useTokenStore();

</script>

<template>
  <v-container fluid class="nav d-flex justify-end">
    <v-btn v-if="tokenStore.role === Role['Klient'] && tokenStore.token !== null" @click="async () => {
      await router.push('/tickets/create');
  }">Utwórz zgłoszenie
    </v-btn>
    <v-btn v-if="tokenStore.token !== null" @click="async () => {
      console.log(tokenStore.token);
    if (tokenStore.role === Role['Technik']) {
       await router.push('/tech/dashboard');
    } else {
      await router.push('/client/dashboard');
    }
  }">Dashboard
    </v-btn>
    <v-btn @click="async () => {
    if (tokenStore.token === null) {
        await router.push('/login');
    } else {
       tokenStore.clearToken();
       console.log(tokenStore.token);
       await router.push('/');
    }
  }">{{ tokenStore.token === null ? "Zaloguj" : "Wyloguj" }}
    </v-btn>
  </v-container>
</template>

<style scoped>
</style>