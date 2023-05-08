<script setup lang="ts">
import type { Trade } from "@/model/Trade";
import { deleteTrade, getTrades, reloaddTrades } from "@/service/TradeService";
import { format } from "date-fns";
import { ref } from "vue";
import { users } from "../state/user";

const trades = ref<Trade[]>([]);

getTrades();
reloadTrades();

async function onDeleteTradeClicked(tradeId: number) {
  await deleteTrade(tradeId);
  await reloadTrades();
}

async function reloadTrades() {
  trades.value = await getTrades();
}

</script>

<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-narrow">
        <table class="table is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>Image</th>
              <th>Username</th>
              <th>Category</th>    
              <th>Item</th>
              <th>Description</th>
              <th>Created Date</th>
              <th>Server IP</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="trade in trades">
            <tr>
              <td>
                <figure>
                  <img
                    :src="trade.categoryItem.image"
                    style="width: 70px; height: 70px"
                  />
                </figure>
              </td>
              <td>
                <abbr title="id">{{ trade.user.username }}</abbr>
              </td>
              <td>
                <abbr title="category">{{ trade.categoryItem.category }}</abbr>
              </td>
              <td>
                <abbr title="item">{{  trade.categoryItem.name }}</abbr>
              </td>
              <td>
                <abbr title="description">{{  trade.description }}</abbr>
              </td>
              <td>
                <abbr title="createdDate">{{
                  format(new Date(trade.createdDate), "MM/dd/yyyy hh:ss aa")
                }}</abbr>
              </td>
              <td>
                <abbr title="adressIP">{{ trade.serverIpAddress }}</abbr>
              </td>
              <td>
                <abbr title="quantity">{{ trade.quantity }}</abbr>
              </td>
              <th>
                <abbr title="Played">
                  <button class="button" @click="onDeleteTradeClicked(trade.id)">
                    <i class="fas fa-trash"></i>
                  </button>
                </abbr>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
table,
th,
td {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
