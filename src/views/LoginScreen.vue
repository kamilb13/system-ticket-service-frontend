<script setup>

</script>

<template>
  <v-form>
    <v-col>
      <v-row>
        <v-text-field label="E-mail"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field type="password" label="Hasło"></v-text-field>
      </v-row>
    </v-col>
    <v-btn type="submit">Zaloguj</v-btn>
  </v-form>

  <v-btn to="/register">Nie masz konta? Zarejestruj się</v-btn>
</template>

<style scoped>

</style>