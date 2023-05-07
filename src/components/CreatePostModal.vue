<script setup lang="ts">
import type { CategoryItem } from "@/model/CategoryItemModel";
import type { CreateTradeModel } from "@/model/Trade";
import router from "@/router";
import {
categoryItems,
closeModal,
mustShowModal,
} from "@/service/CreatePostModalService";
import { createTrade } from "@/service/TradeService";
import { user } from "@/state/user";
import { ref } from "vue";

const description = ref("");
const serverIpAddress = ref("");
const quantity = ref("");
const currentCategoryItem = ref<CategoryItem | null>(null);

async function onCreatePostClicked() {
  const createTradeModel: CreateTradeModel = {
    userId: user.value!.id,
    categoryItemId: currentCategoryItem.value!.id,
    description: description.value,
    serverIpAddress: serverIpAddress.value,
    quantity: quantity.value
  };

  await createTrade(createTradeModel);
  closeModal();
  router.push({ path: "/profile/userList" });
}
</script>

<template>
  <div class="modal" :class="{ 'is-active': mustShowModal }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create Trade</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Category Item</label>
          <div class="control">
            <div class="select">
              <select v-model="currentCategoryItem">
                <option
                  v-for="categoryItem of categoryItems"
                  :value="categoryItem"
                >
                  {{ categoryItem.name }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Server Ip Address</label>
          <div class="control">
            <input type="text" style="width: 300px" v-model="serverIpAddress" placeholder="Enter Ip Address of desired Minecraft Server"/>
          </div>
        </div>

        <div class="field">
          <label class="label">Quantity Available</label>
          <div class="control">
            <input type="text" style="width: 300px" v-model="quantity" placeholder="Enter quantity of item available"/>
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              v-model="description"
              class="textarea"
              placeholder="Enter listing description (availability details, desired items to trade for, etc)"
            ></textarea>
          </div>
        </div>

      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-success is-primary"
          @click.prevent="onCreatePostClicked()"
        >
          Save
        </button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-card-head {
  background-color: rgb(144, 244, 180);
}
.modal-card-body {
  background-color: rgb(224, 244, 228);
}
</style>
