<script setup>
import { getTickets, getTicketsByClient, setTicketStatus } from '@/api/ticket-service.ts';
import { onMounted, ref } from 'vue';
import TicketCard from '@/components/TicketCard.vue';
import { TicketStatus } from '@/types/ticket-status.ts';
import { useTokenStore } from '@/stores/token-store.ts';
import TicketDetails from '@/components/TicketDetails.vue';

const tokenStore = useTokenStore();

const tickets = ref([]);
const selectedTicket = ref(null);
const selectedStatus = ref(null);

const selectTicket = (ticket) => {
  selectedTicket.value = ticket;
  selectedStatus.value = null;
};

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
};

const fetchTickets = async () => {
  tickets.value = tokenStore.role === 'ROLE_TECH' ? await getTickets() : await getTicketsByClient();
};

const onCommentAdded = async () => {
  const selectedTicketId = selectedTicket.value.id;
  await fetchTickets();
  if (selectedTicketId !== null) {
    const updatedTicket = tickets.value.find(t => t.id === selectedTicketId);
    if (updatedTicket) {
      selectTicket(updatedTicket);
    }
  }
};

onMounted(async () => {
  try {
    await fetchTickets();
  } catch (error) {
    console.error(error);
  }
});

</script>

<template>
  <div class="dashboard">
    <div class="sidenav">
      <ul>
        <li
          v-for="ticket in tickets"
          :key="ticket.id"
          class="ticket-item"
          @click="selectTicket(ticket)"
        >
          <TicketCard
            :title="ticket.title"
            :description="ticket.description"
            :category="ticket.category"
          />
        </li>
      </ul>
    </div>
    <div class="main">
      <div
        v-if="selectedTicket !== null"
        class="ticket-details"
      >
        <v-form
          v-if="tokenStore.role === 'ROLE_TECH'"
          @submit.prevent="updateTicketStatus"
        >
          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props">
                {{ selectedStatus ? TicketStatus[selectedStatus] : TicketStatus[selectedTicket.status] }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(value, key) in TicketStatus"
                :key="key"
                @click="selectedStatus = key"
              >
                <v-list-item-title>{{ value }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn type="submit">
            Zatwierdź
          </v-btn>
        </v-form>
        <TicketDetails
          :id="selectedTicket.id"
          :title="selectedTicket.title"
          :description="selectedTicket.description"
          :category="selectedTicket.category"
          :ticket-creator="selectedTicket.ticketCreator"
          :comments="selectedTicket.comments"
          @comment-added="onCommentAdded"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  height: calc(100vh - 180px);
  width: calc(100vw - 120px);
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  box-sizing: border-box;
}

.sidenav {
  width: 400px;
  border: 1px solid #ffffff;
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
  border: 1px solid #ffffff;
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