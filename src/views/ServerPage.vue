<script setup lang="ts"></script>

<template>
  <div class="container">
    <h3 class="title">ServerPage</h3>
    <h1 class="title m-4">Welcome to Server Name's marketplace!</h1>

    <div class="card is-justify-content-center">
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
          <span>Qty </span>
          <i class="quantity">
            {{ product.quantity }}
          </i>
        </p>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Edit Listing</a>
          <a href="#" class="card-footer-item">Send Message</a>
          <br />
        </footer>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped></style>
