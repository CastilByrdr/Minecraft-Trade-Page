<script setup lang="ts">
import { user } from "@/state/user";

const trades = [
  { tradeName: "A", something: "sdfas" },
  { tradeName: "B", something: "sdfas" },
  { tradeName: "C", something: "sdfas" },
  { tradeName: "D", something: "sdfas" },
];
</script>

<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                :src="user?.imagePath"
                style="width: 50px; height: 50px; border-radius: 50%"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">@{{ user?.username }}</p>
          </div>
        </div>

        <div class="content">
          Hi, I am {{ user?.username }} and I would like to trade
          minecraft items. Please take a look at my list.
        </div>

        <div class="tabs is-left">
          <ul>
            <RouterLink class="is-active" to="/profile/createPost"
              >Create Listing</RouterLink
            >
            <RouterLink class="is-active" to="/profile/userList"
              >My Listings</RouterLink
            >

            <RouterLink class="is-active" to="/profile/settings">
              Settings
            </RouterLink>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.card-content {
  padding-bottom: 5px;
}
.card {
  background-color: aliceblue;
}
</style>
