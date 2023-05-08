<script setup lang="ts">
import type { Trade } from "@/model/Trade";
import { deleteTrade, getTradesByUser } from "@/service/TradeService";
import { user } from "@/state/user";
import { format } from "date-fns";
import { computed, ref } from "vue";

const trades = ref<Trade[]>([]);

const isUserTradeExits = computed(() => trades.value.length == 0);

reloadTrades(user.value!.id);

async function reloadTrades(userId: number) {
  trades.value = await getTradesByUser(userId);
}

async function onCloseTradeClicked(tradeId: number) {
  await deleteTrade(tradeId);
  await reloadTrades(user.value!.id);
}
</script>

<template>
  <div class="tradelist mt-5">
    <h1 class="title ml-5 has-text-danger" v-if="!!isUserTradeExits">No Trade Listings in Minecraft Marketplace Active</h1>
    <div class="column" v-for="trade in trades">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="trade.categoryItem.image" alt="Placeholder image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title">@{{ trade.user.username }}</p>
              <p class="subtitle">
                <p class="has-text-link-dark">Server IP: {{ trade.serverIpAddress }}</p>
                <p>Category: {{ trade.categoryItem.category }}</p>
                <p>Item: {{ trade.categoryItem.name }}</p>
                <p>Quantity Available: {{ trade.quantity }}</p>
                <p v-if="trade.description.length != 0"><br>{{ trade.description }}</p>
                <p v-else><br><br></p>
              </p>
            </div>
          </div>
          <p>Posted:
          <time datetime="2023-1-1">{{
            format(new Date(trade.createdDate), "MM/dd/yyyy hh:ss aa")
          }}</time>
          </p>
        </div>
        <footer class="card-footer">
          <button
            style="width: 100%"
            class="button card-footer-item m-4"
            @click="onCloseTradeClicked(trade!.id)">
            Delete Listing
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: aliceblue;
}
button {
  font-family: "Minecraft";
}
.tradelist {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1.50rem;
}

.tradelist .card{
  display: grid;
  grid-template-rows: 1fr auto;

}

.tradelist .card .card-content {
  display: grid;
  grid-template-rows: 1fr auto auto;
}
</style>
