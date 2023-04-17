<script setup lang="ts">
import { showModal } from "@/modal/modal";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

interface Category {
  imagePath: string;
  name: string;
}

const categories = ref<Category[]>([
  {
    name: "Food",
    imagePath: "/src/assets/categories/food.png",
  },
  {
    name: "Tools",
    imagePath: "/src/assets/categories/tools.png",
  },
  {
    name: "Armor",
    imagePath: "/src/assets/categories/armor.png",
  },
  {
    name: "Arrows",
    imagePath: "/src/assets/categories/arrows.png",
  },
  {
    name: "Weapons",
    imagePath: "/src/assets/categories/weapons.png",
  },
  {
    name: "Materials",
    imagePath: "/src/assets/categories/materials.png",
  },
  {
    name: "Decorations",
    imagePath: "/src/assets/categories/decorations.png",
  },
  {
    name: "Transportation",
    imagePath: "/src/assets/categories/transportation.png",
  },
  {
    name: "Potions",
    imagePath: "/src/assets/categories/potions.png",
  },
  {
    name: "Mog Eggs",
    imagePath: "/src/assets/categories/mog-eggs.png",
  },
  {
    name: "Records",
    imagePath: "/src/assets/categories/records.png",
  },
  {
    name: "Dyes",
    imagePath: "/src/assets/categories/dyes.png",
  },
]);
</script>
<template>
  <div class="container is-max-desktop mt-5">
    <h1 class="title">What would you like to trade?</h1>
    <div class="grid-container" mt-1>
      <div class="grid-item" v-for="category in categories">
        <figure class="image is-64x64">
          <img :src="category.imagePath" :alt="category.name" />
        </figure>
        <button class="mt-2" @click="showModal" data-toggle="modal">
          {{ category.name }}
        </button>
        <Modal />
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 1rem;
  gap: 1rem;
}
.grid-item {
  background-color: hsl(180, 77%, 88%);
  margin-right: -10px;
  margin-bottom: -10px;
  padding: 3rem;
  text-align: center;
}
.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.mt-2 {
  background-color: aquamarine;
}
</style>
