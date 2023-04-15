<script setup lang="ts">
import { authState, isUserLoggedIn } from "../state/user";
</script>

<template>
  <div class="container">
    <div class="card mt-5">
      <header class="card-header">
        <p class="card-header-title">My Account</p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa-solid fa-pen-to-square"></i>
          </span>
        </button>
      </header>

      <div class="card-content">
        <div class="content">
          <p>USER INFORMATION</p>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Username</label>
                <div class="control">
                  <input class="input" type="username" placeholder="username"/>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input"
                    type="email"
                    placeholder="email"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="button is-primary ml-5">Update</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  font-family: "Minecraft";
}

.input {
    font-family: "Minecraft";
}
</style>
