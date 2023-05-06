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
  <div class="columns mt-5">
    <h1 class="title ml-5 has-text-danger" v-if="!!isUserTradeExits">No Trade Items in Minecraft Market Place Created</h1>
    <div class="column" v-for="trade in trades">
      <div class="card has-background-primary-light">
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
                <p>{{ trade.categoryItem.category }}</p>
                <p>{{ trade.categoryItem.name }}</p>
              </p>
            </div>
          </div>
          <time datetime="2023-1-1">{{
            format(new Date(trade.createdDate), "MM/dd/yyyy hh:ss aa")
          }}</time>
        </div>
        <footer class="card-footer">
          <a
            href="#"
            @click="onCloseTradeClicked(trade!.id)"
            class="card-footer-item"
            >Close Trade</a
          >
          <a
            href="#"
            class="card-footer-item"
            >Chat</a
          >
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
