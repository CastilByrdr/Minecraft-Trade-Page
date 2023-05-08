<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";
  import { isUserLoggedIn, user } from "@/state/user";
</script>

<template>
  <div class="container">
    <div class ="welcome">
      <h1 v-if="isUserLoggedIn" class="title m-4 greeting">Welcome, 
        <span class="has-text-success">{{ user?.username }}</span> !
      </h1>
      <h1 v-else class="title m-4 greeting">Welcome, user! Please register/login to get started!</h1>
      <img class="image is-48x48 m-2 greeting" src="/graphics/compass.gif" alt="compass gif">
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
        <img class="round" src="/profile/mcpfp - Joseph.png" alt="profile image">
        <h1 class="title">Joseph Ertman</h1>
        <h1 class="subtitle">Product Owner</h1>
      </div>
      <div class="cards p-4 has-text-centered">
        <img class="round" src="/profile/mcpfp - Fiona.png" alt="profile image">
        <h1 class="title">Fiona Kennedy</h1>
        <h1 class="subtitle">Scrum Master</h1>
      </div>
      <div class="cards p-4 has-text-centered">
        <img class="round" src="/profile/mcpfp - Michelle.png" alt="profile image">
        <h1 class="title">Michelle Zhunio</h1>
        <h1 class="subtitle">Developer</h1>
      </div>
      <div class="cards p-4 has-text-centered">
        <img class="round" src="/profile/mcpfp - Gisela.png" alt="profile image">
        <h1 class="title">Gisela Fugon</h1>
        <h1 class="subtitle">Developer</h1>
      </div>
    </div>

      <hr/>

    <div class="m-4"> 
      <h3 class="title">How to get started:</h3>
      <ol class="m-4">
        <li>Register for an account on our website by clicking the register
        button at the top right of the page.</li><br />
        <li>Once you are logged in, you can visit your Profile Page where you can
        edit your account information, post trade listings and view all of your active listings.</li><br />
        <li>Visit the Marketplace page to view/inquire about all users' active listings. You can find listings for your
        desired Minecraft Server by typing the IP Address in the Search Bar at the top of the page.</li>
      </ol>
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
.greeting {
  display: inline-block;
  vertical-align: middle;
}
.round {
  border-radius: 50%;
}

hr {
  margin: 10px;
  background-color:lightgrey;
  height: 3px;
}
</style>
