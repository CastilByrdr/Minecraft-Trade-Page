<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

const foods = [
  {
    username: "mzhunio",
    foodName: "Cooked Chicken",
    imageSrc: "/subcategories/food/cooked-food/cooked-chicken.png",
    quantity: "5",
    dateTime: "11:09 PM - 1 May 2023",
  },
  {
    username: "kfugon",
    foodName: "Cooked Cod",
    imageSrc: "/subcategories/food/cooked-food/cooked-cod.png",
    quantity: "5",
    dateTime: "0:09 PM - 23 May 2023",
  },
  {
    username: "fiona",
    foodName: "Cooked Mutton",
    imageSrc: "/subcategories/food/cooked-food/cooked-mutton.png",
    quantity: "5",
    dateTime: "10:09 PM - 2 May 2023",
  },
  {
    username: "rzhunio",
    foodName: "Cooked Porkchop",
    imageSrc: "/subcategories/food/cooked-food/cooked-porkchop.png",
    quantity: "5",
    dateTime: "10:09 PM - 2 May 2023",
  },
  {
    username: "lzhunio",
    foodName: "Cooked Rabbit",
    imageSrc: "/subcategories/food/cooked-food/cooked-rabbit.png",
    quantity: "5",
    dateTime: "10:09 PM - 2 May 2023",
  },
  {
    username: "fiona",
    foodName: "Cooked Salcom",
    imageSrc: "/subcategories/food/cooked-food/cooked-salmon.png",
    quantity: "5",
    dateTime: "10:09 PM - 2 May 2023",
  },
];
</script>

<template>

  <div class="card is-justify-content-center">
    <header class="card-header">
      <p class="card-header-title">List of Foods</p>
      <button class="card-header-icon">
        <span class="icon">
          <i class="fas fa-angle-down"></i>
        </span>
      </button>
    </header>
    <p class="card-header-title">Cooked Foods</p>
    <div class="food-list ml-2 mt-2 ">
      <progress
        v-if="!foods.length"
        class="progress is-large is-info"
        max="100"
      >
        60%
      </progress>

      <div class="food" v-for="food in foods">
        <h3>{{ food.foodName }}</h3>
        <img :src="food.imageSrc" :alt="food.foodName" class="image" />
        <p>{{ food.username }}</p>
        <time datetime="2016-1-1"> {{ food.dateTime }}</time>
        <p>
          <span>Qty </span>
          <i class="quantity">
            {{ food.quantity }}
          </i>
        </p>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Delete</a>
          <a href="#" class="card-footer-item">Send Message</a>
          <br />
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.food-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.food {
  flex-basis: 12rem;
  flex-grow: 1;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color: aliceblue;
}
</style>
