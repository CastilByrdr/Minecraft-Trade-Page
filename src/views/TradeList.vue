<script setup lang="ts">
import { format } from 'date-fns';

const trades = [
  {
    name: "Mr. Cat",
    username: "@mr.kitty",
    description: "Item Description",
    date: new Date().toISOString(),
  },
  {
    name: "Mr. Cat",
    username: "@mr.kitty",
    description: "Item Description",
    date: new Date().toISOString(),
  },
  {
    name: "Mr. Cat",
    username: "@mr.kitty",
    description: "Item Description",
    date: new Date().toISOString(),
  },
];
</script>

<template>
  <div class="columns mt-5">
    <div class="column" v-for="trade in trades">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ trade.name }}</p>
              <p class="subtitle is-6">{{ trade.username }}</p>
            </div>
          </div>

          <div class="content">{{ trade.description }}</div>
          <time datetime="2023-1-1">{{ format(new Date(trade.date), 'MM/dd/yyyy hh:ss aa') }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
