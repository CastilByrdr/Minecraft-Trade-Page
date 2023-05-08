<script setup lang="ts">
import type { Trade } from "@/model/Trade";
import type { User } from "@/model/UserModel";
import { quickUserUserModal, showUserModal, reloadTradesByUser } from "@/service/QuickUserModalService";
import QuickUserProfileModal from '@/components/QuickUserProfileModal.vue';
import { getTrades } from "@/service/TradeService";
import { user } from "@/state/user";
import { format } from "date-fns";
import { ref } from "vue";

const trades = ref<Trade[]>([]);

reloadTrades();

export async function reloadTrades() {
  trades.value = await getTrades();
}

async function onUsernameClicked(user: User){
  quickUserUserModal.value = user;
  await reloadTradesByUser(user.id);
  showUserModal();
}

</script>

<template>
  <div class="tradeList mt-5">
    <div class="card has-background-primary-light" v-for="trade in trades">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="trade.categoryItem.image" 
              alt="Placeholder image"/>
            </figure>      
          </div>
          <div class="media-content">
            <div class="title"
            @click="onUsernameClicked(trade.user)" 
              >@{{ trade.user.username }}</div>
            <p class="subtitle">
              <p>{{ trade.categoryItem.category }}</p>
              <p>{{ trade.categoryItem.name }}</p>
            </p>
          </div>
        </div>
        <QuickUserProfileModal />
        <time datetime="2023-1-1">{{
          format(new Date(trade.createdDate), "MM/dd/yyyy hh:ss aa")
        }}</time>
      </div>
      <footer class="card-footer">
        <a
          href="#"
          class="card-footer-item"
          >Chat</a
        >
      </footer>
    </div>
  </div>
</template>

<style scoped>
.tradeList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.75rem;
}
.tradeList .card {
  display: grid;
  grid-template-rows: 1fr auto;
}
.tradeList .card .card-content {
  display: grid;
  grid-template-rows: 1fr auto auto;
}
</style>
