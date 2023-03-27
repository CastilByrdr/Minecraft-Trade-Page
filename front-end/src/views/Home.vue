<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="header">
        <img id="title" src="images/Header Title.png" alt="Minecraft Marketplace: The online item-trading hub for Minecraft servers!" class="center">
        <div class="navbar">
            <ul>
                <li class="left"><a id="home" href="homepage.html">Home</a></li>
                <li class="right"><a id="inbox" href="inbox.html">Inbox</a></li>
                <li class="right"><a id="profile" href="profile.html">Profile</a></li>
            </ul>
        </div>
    </div>
    <div class="welcome">
        <h1>Welcome, user!</h1>
    </div>
    <form class="serverlist">
        <h1 class="formtitle">Server List:</h1><hr><br>
        <button class="add-server" type="button">Add Server</button>
    </form>
  </div>
</template>

<style scoped></style>
