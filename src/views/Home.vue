<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";
  import { isUserLoggedIn, user } from "@/state/user";
</script>

<template>
  <div class="container">
    <div class ="welcome">
      <h1 v-if="isUserLoggedIn" class="title m-4">Welcome, 
        <span>{{ user?.username }}</span> !
      </h1>
      <h1 v-else class="title m-4">Welcome, user! Please register/login!</h1>
    </div>

    <hr/>

    <div class="about-us m-4">
      <h3 class="title">About Minecraft Marketplace:</h3>
      <p class="mb-4">
        The more players there are on a Minecraft server, the harder it becomes
        to configure trades between players.<br />
        We are proposing a solution to this problem by making a user-friendly
        marketplace website where users can post listings to offer up their
        in-game items for trades as well as view the listings posted by other
        users.
      </p>
    </div>

      <hr/>

    <div class="m-4">
      <h3 class="title">Meet the Development Team:</h3>
      <div class="cards p-4 has-text-centered">
        <img class="is-rounded" src="/graphics/user.png" alt="profile image">
        <h1 class="title">Joseph Ertman</h1>
        <h1 class="subtitle">Product Owner</h1>
      </div>
      <div class="cards p-4 has-text-centered">
        <img src="/graphics/user.png" alt="profile image">
        <h1 class="title">Fiona Kennedy</h1>
        <h1 class="subtitle">Scrum Master</h1>
      </div>
      <div class="cards p-4 has-text-centered">
        <img src="/graphics/user.png" alt="profile image">
        <h1 class="title">Michelle Zhunio</h1>
        <h1 class="subtitle">Developer</h1>
      </div>
      <div class="cards p-4 has-text-centered">
        <img src="/graphics/user.png" alt="profile image">
        <h1 class="title">Gisela Fugon</h1>
        <h1 class="subtitle">Developer</h1>
      </div>
    </div>

      <hr/>

    <div class="m-4"> 
      <h3 class="title">How to get started:</h3>
      <p>
        1. Register for an account on our website by clicking the register
        button at the top of the page.<br />
        2. Once you are logged in, you can create a connection to an existing
        Minecraft Server by clicking the Add Server button in the Server List
        section at the top of the Homepage. The servers you create connections
        with will appear in your Server List.<br />
        3. In the Server List section, click on the Minecraft Server you want to
        view the listings page for. 4. Now you can view listings posted by other
        users that are also connected to that Minecraft Server and post your
        own!
      </p>
    </div>

  </div>
</template>

<style scoped>
.button {
  font-family: "Minecraft";
}
.cards {
  background-color:lightgray;
  width: 15%;
  display: inline-block;
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
