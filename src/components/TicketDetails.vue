<script setup>
import { useTokenStore } from '@/stores/token-store.ts';
import { addComment } from '@/api/ticket-service.ts';
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    default: 1,
  },
  title: {
    type: String,
    default: 'Tytuł zgłoszenia',
  },
  description: {
    type: String,
    default: 'Opis zgłoszenia',
  },
  category: {
    type: String,
    default: 'Kategoria zgłoszenia',
  },
  ticketCreator: {
    type: String,
    default: 'Zgłaszający',
  },
  comments: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['comment-added']);

const tokenStore = useTokenStore();

const submitComment = async () => {
  try {
    await addComment(props.id, newComment.value);
    newComment.value = '';
    emit('comment-added');
  } catch (error) {
    console.error(error);
  }
};

const newComment = ref('');
</script>

<template>
  <p>Zgłaszający: {{ props.ticketCreator }}</p>
  <p>Kategoria: {{ props.category }}</p>
  <p>Tytuł: {{ props.title }}</p>
  <p>Opis: {{ props.description }}</p>
  <p>Komentarze:</p>
  <ul>
    <li
      v-for="comment in props.comments"
      :key="comment.id"
    >
      {{ comment.commentContent }}
    </li>
  </ul>

  <br>
  <v-form
    v-if="tokenStore.role === 'ROLE_TECH'"
    @submit.prevent="submitComment"
  >
    <v-text-field
      v-model="newComment"
      label="Nowy komentarz"
      type="text"
    />
    <v-btn type="submit">
      Dodaj
    </v-btn>
  </v-form>
</template>

<style scoped>

</style>