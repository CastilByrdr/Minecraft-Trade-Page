<script setup lang="ts">
import { getPasswordErrors } from "@/service/AuthService";
import { updateUser } from "@/service/UserService";
import { user } from "@/state/user";
import { ref, computed } from "vue";

const password = ref("");
const rePassword = ref("");

const passwordErrors = computed(() =>
  getPasswordErrors(password.value, rePassword.value)
);

async function onUpdatePasswordClicked() {
  user.value = await updateUser(user.value!.id, { password: password.value });
  password.value = "";
  rePassword.value = "";
  localStorage.setItem("user", JSON.stringify(user.value));
}
</script>

<template>
  <div class="container" v-if="user">
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
                  <input class="input" type="username" :value="user.username" disabled/>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" :value="user.email" disabled />
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" v-model="password" />
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Re-enter Password</label>
                <div class="control">
                  <input class="input" type="password" v-model="rePassword" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button
          class="button is-primary ml-5"
          :disabled="!!passwordErrors"
          @click="onUpdatePasswordClicked"
        >
          Update Password
        </button>
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
