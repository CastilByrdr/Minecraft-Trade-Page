<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

const foods = [
  { foodName: 'sadfsad', imageSrc: '/subcategories/food/cooked-food/cooked-chicken.png' },
  { foodName: 'sadfsad', imageSrc: '/subcategories/food/cooked-food/cooked-cod.png' },
];
</script>

<template>
  <NavBar />

  <div v-for="food in foods">
    <div>{{ food.foodName }}</div>
    <img :src="food.imageSrc" :alt="food.foodName">
  </div>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
