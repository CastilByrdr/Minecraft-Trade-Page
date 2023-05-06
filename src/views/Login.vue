<script setup lang="ts">
import { Router } from "@/router";
import {
  AuthError,
  AuthService,
  getPasswordErrors,
  getUsernameErrors,
} from "@/service/AuthService";
import { computed, ref } from "vue";

const username = ref("mzhunio");
const password = ref("password");

const usernameErrors = computed(() => getUsernameErrors(username.value));
const passwordErrors = computed(() =>
  getPasswordErrors(password.value, password.value)
);

let loginError: string | null = null;

async function onLoginClicked() {
  try {
    await AuthService.login(username.value, password.value);
    await Router.goToHomePage();
  } catch (error: any) {
    loginError = error.message ?? "Could not login";
  }
}
</script>

<template>
  <div class="container is-fluid mt-5">
    <div class="columns is-justify-content-center">
      <div
        class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
      >
        <div class="card">
          <div class="card-content">
            <div class="title mt-2 has-text-centered">Sign In</div>

            <!-- USERNAME -->
            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  :class="{
                    'is-danger': usernameErrors,
                  }"
                  type="text"
                  placeholder="Username"
                  v-model="username"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>

                <!-- USERNAME ERRORS -->
                <div
                  class="mt-1 has-text-danger is-size-7"
                  v-if="usernameErrors?.InvalidUsernameMinLength"
                >
                  {{ AuthError.InvalidUsernameMinLength }}
                </div>
              </div>
            </div>

            <!-- PASSWORD -->
            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  :class="{
                    'is-danger': passwordErrors,
                  }"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>

                <!-- PASSWORD ERRORS -->
                <div
                  class="mt-1 has-text-danger is-size-7"
                  v-if="passwordErrors?.InvalidPasswordMinLength"
                >
                  {{ AuthError.InvalidPasswordMinLength }}
                </div>
              </div>
            </div>

            <!-- LOGIN ERRORS -->
            <div class="field" v-if="loginError">
              <div class="mt-1 has-text-danger is-size-7">
                We could not login because of invalid login credentials
              </div>
            </div>

            <div class="field">
              <div class="control is-flex">
                <button
                  class="button is-success is-light is-flex-grow-1"
                  type="button"
                  :disabled="!!usernameErrors || !!passwordErrors"
                  @click="onLoginClicked"
                >
                  Sign in
                </button>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  Need to register? Create an account
                  <a href="./register">here</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.control is-flex {
  font-size: 16px;
  transition: none;
}

.button {
  /* box-shadow: 3px 3px #42a168; */
  font-family: "Minecraft";
}
.input {
  font-family: "Minecraft";
}
</style>
