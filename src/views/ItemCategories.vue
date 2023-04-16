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
    imagePath:
      "https://img.game8.co/3526948/3d43677a8c7dd9b636e438e12b2f4287.png/show",
  },
  {
    name: "Tools",
    imagePath:
      "https://j-img.game8.co/1652483/9273ae96c9e284c3526bb73fa7947aa6.png/show?1527556514",
  },
  {
    name: "Armor",
    imagePath:
      "https://j-img.game8.co/1652516/1dd6206cad04eee6b73b051b2db934af.png/show?1527556516",
  },
  {
    name: "Arrows",
    imagePath:
      "https://j-img.game8.co/1652466/b6a3cbc380b0bda22ea5419ed2c18288.png/show?1527556513",
  },
  {
    name: "Weapons",
    imagePath:
      "https://j-img.game8.co/1652481/72952058c9cb7f74e0f5794d81a19854.png/show?1527556514",
  },
  {
    name: "Materials",
    imagePath:
      "https://j-img.game8.co/1652470/3ff71a3603600d697f9f45724c48285a.png/show?1527556513",
  },
  {
    name: "Decorations",
    imagePath:
      "https://j-img.game8.co/1652705/d13f99635bb8c8600c8da3905b8442f5.png/show?1527556528",
  },
  {
    name: "Transportation",
    imagePath:
      "https://j-img.game8.co/1652534/94a0636939aef0410aa224988025e657.png/show?1527556517",
  },
  {
    name: "Potions",
    imagePath:
      "https://img.game8.co/3527571/f252bc436cd7283b068c01fc2802f7f8.png/show",
  },
  {
    name: "Mog Eggs",
    imagePath:
      "https://j-img.game8.co/1652663/2ec3b3e0e5e2bf46442aabe885b96ff5.png/show?1527556526",
  },
  {
    name: "Records",
    imagePath:
      "https://j-img.game8.co/1652974/5e1bafdf5dcce4c4fd5b252dd4422837.png/show?1527556544",
  },
  {
    name: "Dyes",
    imagePath:
      "https://img.game8.co/3527352/efbacf3f3c927b9535ccded9716c1942.png/show",
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
