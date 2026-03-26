<script setup>
import {getTickets, setTicketStatus} from "@/api/ticket-service.ts";
import {onMounted, ref} from "vue";
import TicketCard from "@/components/TicketCard.vue";
import {TicketStatus} from "@/types/ticket-status.ts";

const tickets = ref([]);
const selectedTicket = ref(null);
const selectedStatus = ref(null);

const selectTicket = (ticket) => {
  selectedTicket.value = ticket;
  selectedStatus.value = null;
}

const updateTicketStatus = async () => {
  if (selectedStatus.value !== null) {
    try {
      await setTicketStatus(selectedTicket.value.id, selectedStatus.value);
      selectedTicket.value.status = selectedStatus.value;
      selectedStatus.value = null;
    } catch (error) {
      console.error(error);
    }
  }
}

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
        <li v-for="ticket in tickets" :key="ticket.id" @click="selectTicket(ticket)" class="ticket-item">
          <TicketCard :title="ticket.title" :description="ticket.description" :category="ticket.category"></TicketCard>
        </li>
      </ul>
    </div>
    <div class="main">
      <div class="ticket-details" v-if="selectedTicket !== null">
        <v-form @submit.prevent="updateTicketStatus">
          <p>{{selectedTicket.title}}</p>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props">
                {{ selectedStatus ? TicketStatus[selectedStatus] : TicketStatus[selectedTicket.status] }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(value, key) in TicketStatus" :key="key" @click="selectedStatus = key">
                <v-list-item-title>{{ value }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn type="submit">Zatwierdź</v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  height: calc(100vh - 40px);
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  box-sizing: border-box;
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
  display: flex;
  flex: 1;
  flex-direction: column;
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
  flex: 1;
  overflow-y: auto
}
</style>