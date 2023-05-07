<script setup lang="ts">
import {
  quickUserUserModal,
  mustShowUserModal,
} from "@/service/CreateUserModalService";
</script>

<template>
  <div class="modal" :class="{ 'is-active': mustShowUserModal }">
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
            trade minecraft items. Please take a loot at my list
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
