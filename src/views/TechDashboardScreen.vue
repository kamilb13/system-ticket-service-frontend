<script setup>
import {getTickets} from "@/api/ticket-service.ts";
import {ref} from "vue";
import TicketCard from "@/components/TicketCard.vue";

const tickets = await getTickets();
const selectedTicket = ref();

</script>

<template>
  <div class="nav">
    <ul>
      <li v-for="ticket in tickets" :key="ticket.id">
        <TicketCard/>
      </li>
    </ul>
  </div>
  <div class="main">

  </div>
</template>

<style scoped>

</style>