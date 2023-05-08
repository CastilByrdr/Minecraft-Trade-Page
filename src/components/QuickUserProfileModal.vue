<script setup lang="ts">
import {
  quickUserUserModal,
  mustShowUserModal,
  trades,
  closeUserModal
} from "@/service/QuickUserModalService";
import { format } from "date-fns";
</script>

<template>
  <div class="modal" :class="{ 'is-active': mustShowUserModal }">
        <div class="modal-background" @click="closeUserModal"></div>
    <div class="container mt-5">
      <div class="card has-background-primary-light">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  :src="quickUserUserModal?.imagePath"
                  style="width: 50px; height: 50px; border-radius: 50%"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">@{{ quickUserUserModal?.username }}</p>
            </div>
          </div>

          <div class="content">
            Hi, I am {{ quickUserUserModal?.username }}, and I would like to
            trade minecraft items. Please take a look at my list.

            <div class="columns mt-5">
              <div class="column" v-for="trade in trades">
                <div class="card has-background-primary-light">
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
                          >@{{ trade.user.username }}</div>
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
                    <a
                      href="#"
                      class="card-footer-item"
                      >Chat</a
                    >
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
