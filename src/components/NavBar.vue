<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import { authState, isUserLoggedIn } from "../state/user";

const isMenuActive = ref(false);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
  console.log({ isMenuActive });
}

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
      <div
        class="navbar-burger"
        :class="{ 'is-active': isMenuActive }"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbar" class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">
          <span>Home</span>
        </router-link>
        <router-link to="/userProfile" class="navbar-item" v-if="isUserLoggedIn">
          <span>Profile</span>
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Search </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> Items </a>
            <router-link to="/users" class="navbar-item" v-if="isUserLoggedIn">
              <span>Users</span>
            </router-link>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <button v-if="isUserLoggedIn" class="button has-text-black">
                <span>{{ authState.username }}</span>
              </button>
            </p>
            <p class="control">
              <button
                v-if="isUserLoggedIn"
                class="button is-primary"
                @click="onLogout()"
              >
                <span> Log Out</span>
              </button>
            </p>

            <p class="control">
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
button {
  font-family: "Minecraft";
}
.navbar {
  background-color: rgb(105, 172, 235);
}
</style>
