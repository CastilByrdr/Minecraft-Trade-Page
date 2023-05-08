<script setup lang="ts">
import type { Trade } from "@/model/Trade";
import { quickUserUserModal, showUserModal, reloadTradesByUser } from "@/service/QuickUserModalService";
import QuickUserProfileModal from '@/components/QuickUserProfileModal.vue';
import { deleteTrade, getTrades } from "@/service/TradeService";
import { user } from "@/state/user";
import { format } from "date-fns";
import { ref } from "vue";
import type { User } from "@/model/UserModel";

const trades = ref<Trade[]>([]);

reloadTrades();

async function reloadTrades() {
  trades.value = await getTrades();
}

async function onCloseTradeClicked(tradeId: number) {
  await deleteTrade(tradeId);
  await reloadTrades();
}

async function onUsernameClicked(user: User){
  quickUserUserModal.value = user;
  await reloadTradesByUser(user.id);
  showUserModal();
}

</script>

<template>
  <div class="header has-text-centered">
      <img class="image is-64x64 m-2 content" src="/graphics/parrot.gif" alt="parrot gif">
      <h1 class="title m-4 content">Welcome to the Marketplace, <span class="has-text-success">{{ user?.username }}</span> !</h1>
      <img class="image is-64x64 mx-2 content" src="/graphics/bee.gif" alt="bee gif">
  </div>
  <div class="has-text-centered ">
    <RouterLink class="is-active" v-slot="{ navigate }" to="/profile/createPost">
        <button
          @click="navigate"
          role="link"
          class="button is-size-4 has-text-link create">
          Create Listing
      </button>
    </RouterLink>
  </div>
  <div class="tradelist mt-5">
    <div class="card" v-for="trade in trades">
      <!-- <div class="card"> -->
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="trade.categoryItem.image" alt="Placeholder image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title"  @click="onUsernameClicked(trade.user)">@{{ trade.user.username }}</p>
              <p class="subtitle"> 
                <p class="has-text-link-dark">Server IP: {{ trade.serverIpAddress }}</p>
                <p>Item: {{ trade.categoryItem.name }}</p>
                <p>Category: {{ trade.categoryItem.category }}</p>
                <p>Qty Available: {{ trade.quantity }}</p>
                <p v-if="trade.description.length != 0"><br>{{ trade.description }}</p>
                <p v-else><br><br></p>
              </p>
            </div>
          </div>
            <QuickUserProfileModal />
          <p>Posted: 
          <time datetime="2023-1-1">{{
            format(new Date(trade.createdDate), "MM/dd/yyyy hh:ss aa")
          }}</time>
          </p>
        </div>
        <footer class="card-footer">

          <button v-if="trade.user.username === user?.username"
            style="width: 100%"
            class="button m-4"
            @click="onCloseTradeClicked(trade!.id)">
            Delete Listing
          </button>

          <router-link v-else
            to="/message"
            custom
            v-slot="{ navigate }"
          >
            <button
            style="width: 100%"
            class="button m-4"
            @click="navigate"
            role="link"
            >
              Send Message
            </button>
          </router-link>
          <br />
        </footer>
      <!-- </div> -->
    </div>
  </div>
</template>

<style scoped>

button {
  font-family: "Minecraft";
}
.create {
  border-radius: 5px;
  background-color: aliceblue;
}
.card {
  background-color: aliceblue;
}
.card-content {
  padding-bottom: 5px;
}
.content {
  display: inline-block;
  vertical-align: middle;
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
