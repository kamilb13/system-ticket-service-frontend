<script setup>
import {getTickets} from "@/api/ticket-service.ts";
import {onMounted, ref} from "vue";
import TicketCard from "@/components/TicketCard.vue";

const tickets = ref([]);
const selectedTicket = ref(null);

onMounted(async () => {
  try {
    tickets.value = await getTickets();
  } catch (error) {
    console.error(error);
  }
});

</script>

<template>
  <div class="dashboard">
    <div class="sidenav">
      <ul>
        <li v-for="ticket in tickets" :key="ticket.id" @click="selectedTicket = ticket" class="ticket-item">
          <TicketCard :title="ticket.title" :description="ticket.description" :category="ticket.category"></TicketCard>
        </li>
      </ul>
    </div>
    <div class="main">
      <div class="ticket-details" v-if="selectedTicket !== null">
        <p>{{ selectedTicket.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  height: 100%;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
}

.sidenav {
  width: 400px;
  border: 1px solid #555;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.main {
  flex: 1;
  border: 1px solid #555;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
}

.ticket-item {
  cursor: pointer;
  margin-bottom: 8px;
}

.ticket-details {
  overflow-y: auto
}
</style>