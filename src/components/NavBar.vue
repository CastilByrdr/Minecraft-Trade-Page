<script setup lang="ts">
import router from "@/router";
import { AuthService } from "@/service/AuthService";
import { ref } from "vue";
import { isUserLoggedIn, user } from "../state/user";

const isMenuActive = ref(false);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
  console.log({ isMenuActive });
}

async function onLogout() {
  AuthService.logout(user.value!.id);
  router.push("/");
}
</script>
”

<template>
  <nav class="navbar is-justify-content-center pt-2" role="navigation">
    <router-link to="./">
      <img
        id="title"
        src="/graphics/HeaderTitle.png"
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
        <router-link
          to="/marketplace"
          class="navbar-item"
          v-if="isUserLoggedIn">
          <span>Marketplace</span>
        </router-link>
        <router-link
          to="/profile/userList"
          class="navbar-item"
          v-if="isUserLoggedIn">
          <span>Profile</span>
        </router-link>
        <div
          class="navbar-item has-dropdown is-hoverable"
          v-if="isUserLoggedIn && !!user!.isAdmin"
        >
          <a class="navbar-link"> Admin </a>

          <div class="navbar-dropdown">
            <router-link
              to="/users"
              class="navbar-item"
              v-if="isUserLoggedIn && !!user!.isAdmin"
            >
              <span>Users</span>
            </router-link>
            <router-link
              to="/trades"
              class="navbar-item"
              v-if="isUserLoggedIn && !!user!.isAdmin"
            >
              <span>Trades</span>
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
                <span> {{ user?.username }}</span>
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
