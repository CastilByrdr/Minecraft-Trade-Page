<script setup lang="ts">
  import { Router } from "@/router";
  import { server } from "../state/server";
  import { user } from "../state/user"
  import router from "@/router";
  import {
    //ServerService,
    AuthError,
    //getIpErrors,
    registerServer,
    //addServer,
  } from "@/service/ServerService";
  import { ref, computed, reactive } from "vue";
  const apiError = ref("");
  //import { product } from "../state/product"
 
  const serverRegisterState = reactive({
    ipAddress: "huckleberry.aternos.me",
    name: "Huckleberry",
    userId: 3,
  });

  const foods = [
  {
    id: "366",
    username: "mzhunio",
    foodName: "Cooked Chicken",
    imageSrc: "/subcategories/food/cooked-food/cooked-chicken.png",
    quantity: "5",
    dateTime: "5/4/23",
  },
  {
    id: "350",
    username: "kfugon",
    foodName: "Cooked Cod",
    imageSrc: "/subcategories/food/cooked-food/cooked-cod.png",
    quantity: "5",
    dateTime: "5/2/23",
  },
  {
    id: "324",
    username: "fiona",
    foodName: "Cooked Mutton",
    imageSrc: "/subcategories/food/cooked-food/cooked-mutton.png",
    quantity: "5",
    dateTime: "4/26/23",
  },
  {
    id: "320",
    username: "rzhunio",
    foodName: "Cooked Porkchop",
    imageSrc: "/subcategories/food/cooked-food/cooked-porkchop.png",
    quantity: "5",
    dateTime: "5/1/23",
  },
  {
    id: "412",
    username: "lzhunio",
    foodName: "Cooked Rabbit",
    imageSrc: "/subcategories/food/cooked-food/cooked-rabbit.png",
    quantity: "5",
    dateTime: "5/2/23",
  },
];

/*const ipErrors = computed(() =>
  getIpErrors(serverRegisterState.ipAddress)
);

let addServerError: string | null = null;

  async function onAddServerClicked(
    ipAddress: string
): Promise<void> {
  try {
    await ServerService.addServer(ipAddress.valueOf);
  } catch (error: any) {
    addServerError = error.message ?? "Could not add server";
  } 
}

  async function onRegisterServerClicked(
    ipAddress: string,
    name: string,
    userId: number
): Promise<void> {
  try {
    server.value = await registerServer({
      ipAddress,
      name,
      userId,
    });
    router.push("/serverPage");
  } catch (error: any) {
    server.value = null;
    apiError.value =
      error.response.data.message ?? "Sorry, we could not register the server";
  }
}*/
</script>

<template>
  <div class="container">
    <div class="header">
      <!--<h1 class="title m-4">Welcome to <span>{{ server?.name }}'s</span> marketplace!</h1>-->
      <h1 class="title m-4">Welcome to the Marketplace, <span>{{ user?.username }}</span>!</h1>
    </div>

    <!--<div class="field">
              <div class="control">
                <button
                  style="width: 100%"
                  class="button is-success is-light"
                  :class="{
                    'is-danger':
                      ipErrors,
                  }"
                  :disabled="!!ipErrors"
                  @click="
                    onRegisterServerClicked(
                      serverRegisterState.ipAddress,
                      serverRegisterState.name,
                      serverRegisterState.userId
                    )
                  "
                >
                  Register Server
                </button>
                <br />
                <p v-if="apiError" class="help is-danger">{{ apiError }}</p>
              </div>
    </div>-->
    <div class="card is-justify-content-center">
    <header class="card-header">
      <p class="card-header-title">CURRENT LISTINGS:</p>
    </header>
    <div class="food-list ml-2 mt-2 ">
      <progress
        v-if="!foods.length"
        class="progress is-large is-info"
        max="100"
      >
        60%
      </progress>

      <div class="food" v-for="food in foods" :key="food.id">
        <h3>{{ food.foodName }}</h3>
        <img :src="food.imageSrc" :alt="food.foodName" class="image mt-4 mb-4" />
        <p>
          <span>Seller: </span>
          {{ food.username }}
        </p>
        <p>
           <span>Posted:</span>
           {{ food.dateTime }}
        </p>
        <p>
          <span>Qty Available: </span>
          <i class="quantity">
            {{ food.quantity }}
          </i>
        </p>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Send Message</a>
          <br />
        </footer>
      </div>
    </div>
  </div>

<!--<div class="card is-justify-content-center">
    <header class="card-header">
      <p class="card-header-title">Current Listings</p>
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
