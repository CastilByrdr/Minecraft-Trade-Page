<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1 class="title m-4">Welcome, user!</h1>
  
    <div class="card server-list">
      <header class="card-header">
        <h3 class="title has-text-centered m-4">Server List</h3>
      </header>
      <div class="content">
        <a href="./serverpage" class="m-4">Temp Server Page</a>
        <button class="button m-4 is-success">Add Server</button>
      </div>
    </div>

  <hr>

  <div class="about-us m-4">
    <h3 class="title">About Minecraft Marketplace:</h3>
    <p>
      The more players there are on a Minecraft server, the harder it becomes to configure trades between players.<br>
      We are proposing a solution to this problem by making a user-friendly marketplace website where users can post
      listings to offer up their in-game items for trades as well as view the listings posted by other users.
    </p>

    <hr>

    <h3 class="title">How to get started:</h3>
    <p>
      1. Register for an account on our website by clicking the register button at the top of the page.<br>
      2. Once you are logged in, you can create a connection to an existing Minecraft Server by clicking the Add Server button in the Server List section at the top of the Homepage. 
      The servers you create connections with will appear in your Server List.<br>
      3. In the Server List section, click on the Minecraft Server you want to view the listings page for.
      4. Now you can view listings posted by other users that are also connected to that Minecraft Server and post your own!
    </p>
  </div>
  </div>
</template>

<style scoped>
.button {
  font-family: "Minecraft";
}
</style>
