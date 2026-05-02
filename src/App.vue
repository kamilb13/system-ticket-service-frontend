<script setup>
import TabNav from './components/TabNav.vue';
</script>

<template>
  <v-app>
    <v-app-bar>
      <TabNav />
    </v-app-bar>
    <v-main>
      <v-container
        fluid
        class="mt-5"
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
