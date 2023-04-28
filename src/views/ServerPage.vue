<script setup lang="ts">
  import { Router } from "@/router";
  import { server } from "../state/server";
  import { user } from "../state/user"
  //import { product } from "../state/product"
</script>

<template>
  <div class="container">
    <h3 class="title">ServerPage</h3>
    <h1 class="title m-4">Welcome to <span>{{ server?.name }}</span> marketplace!</h1>

    <div class="card server-list">
      <header class="card-header">
        <h3 class="title has-text-centered m-4">Server List</h3>
      </header>
      <div class="content">
        <router-link to="/">Server Page</router-link>
        <button class="button m-4 is-success">Add Server</button>
      </div>
    </div>

<!--  <div class="card is-justify-content-center">
    <header class="card-header">
      <p class="card-header-title">Open Listings</p>
    </header>
    <div class="listings-list ml-2 mt-2 ">
      <progress
        v-if="!products.length"
        class="progress is-large is-info"
        max="100"
      >
        60%
      </progress>

  <div class="listings" v-for="product in products" :key="product.id">
        <h3>{{ product.itemName }}</h3>
        <img :src="product.imageURL" :alt="product.itemName" class="image" />
        <p>{{ product.postedBy }}</p>
        <time datetime="2016-1-1"> {{ product.dateTime }}</time>
        <p>
          <span>Qty: </span>
          <i class="quantity">
            {{ product.quantity }}
          </i>
        </p>
        <footer class="card-footer">
          <a v-if="user?.username == product.postedBy" href="#" class="card-footer-item">Edit Listing</a>
          <a href="#" class="card-footer-item">Message Trader</a>
          <br/>
        </footer>
      </div>
    </div>
  </div>-->
  </div>
</template>

<style scoped></style>
