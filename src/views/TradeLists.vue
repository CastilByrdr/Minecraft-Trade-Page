<script setup lang="ts">
import type { Trade } from "@/model/Trade";
import { deleteTrade, getTrades } from "@/service/TradeService";
import { format } from "date-fns";
import { ref } from "vue";

const trades = ref<Trade[]>([]);

reloadTrades();

async function reloadTrades() {
  trades.value = await getTrades();
}

async function onCloseTradeClicked(tradeId: number) {
  await deleteTrade(tradeId);
  await reloadTrades();
}
</script>

<template>
  <div class="columns mt-5">
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
            class="card-footer-item"
            >Chat</a
          >
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
