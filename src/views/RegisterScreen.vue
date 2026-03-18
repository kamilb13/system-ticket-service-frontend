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
    <v-btn type="submit">Zarejestruj</v-btn>
  </v-form>

  <v-btn to="/login">Masz już konto? Zaloguj się</v-btn>
</template>

<style scoped>

</style>