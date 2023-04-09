<script setup lang="ts">
import router from "@/router";
import { computed, ref } from "vue";
import { authState } from "../state/user";

const isMenuActive = ref(false);
const isUserLoggedIn = computed(() => !!authState.username.value);

function onLogout(): void {
  logOutApi();
}

function logOutApi() {
  console.log("Logging out...");

  setTimeout(() => {
    console.log("Logged out successfully");
    authState.username.value = "";
    router.push("/login");
  }, 3000);
}
</script>

<template>
  <nav class="navbar is-justify-content-center pt-2" role="navigation">
    <router-link to="./">
      <img
        id="title"
        src="graphics/HeaderTitle.png"
        alt="Minecraft Marketplace: The online item-trading hub for Minecraft servers!"
        class="navbar-item center"
      />
    </router-link>
  </nav>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <div class="navbar-burger" data-target="navbar"></div>
    </div>

    <div id="navbar" class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-start">
        <router-link to="/home" class="navbar-item">
          <span>Home</span>
        </router-link>
        <router-link to="/index" class="navbar-item">
          <span>Index</span>
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Search </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Jobs </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <button v-if="isUserLoggedIn" class="button">
                Welcome {{ authState.username }}
              </button>
              <button v-if="isUserLoggedIn" class="button" @click="onLogout()">
                Log Out
              </button>
              <router-link
                v-if="!isUserLoggedIn"
                to="/register"
                class="button has-text-black"
              >
                <span class="icon">
                  <i class="fa-solid fa-user-plus"></i>
                </span>
                <span>Register</span>
              </router-link>
            </p>
            <p class="control">
              <router-link
                v-if="!isUserLoggedIn"
                to="/login"
                class="button is-primary"
              >
                <span class="icon">
                  <i class="fa-solid fa-right-to-bracket"></i>
                </span>
                <span>Login</span>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: rgb(105, 172, 235);
}
</style>
