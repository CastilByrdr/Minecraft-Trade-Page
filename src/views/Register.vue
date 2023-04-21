<script setup lang="ts">
import {
  AuthError,
  isEmailValid,
  isPasswordValid,
  isUsernameValid,
  register,
} from "@/service/AuthService";
import { computed, reactive } from "vue";
import { user } from "../state/user";

const registerState = reactive({
  username: "mzhunio",
  password: "12345",
  rePassword: "12345",
  email: "a@a.com",
});

const isUsernameInvalid = computed(() => !isUsernameValid(registerState.username));

async function onRegisterClicked(
  username: string,
  password: string,
  rePassword: string,
  email: string
): Promise<void> {
  const isFormValid =
    isUsernameValid(username) &&
    isPasswordValid(password, rePassword) &&
    isEmailValid(email);

  if (!isFormValid) {
    return;
  }

  try {
    user.value = await register({
      username,
      password,
      email,
      isAdmin: false,
      lastActive: "",
    });
  } catch (error) {
    user.value = null;
    // TODO: ShowErrorMessage
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
            <div class="title mt-2 has-text-centered">Register</div>

            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  :class="{
                    'is-danger': isUsernameInvalid,
                  }"
                  type="text"
                  v-model="registerState.username"
                  placeholder="Username"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <div
                  class="mt-1 has-text-danger is-size-7"
                  v-if="isUsernameInvalid"
                >
                  {{ AuthError.InvalidUsernameMinLength }}
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  v-model="registerState.password"
                  placeholder="Password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Re-enter Password</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  v-model="registerState.rePassword"
                  placeholder="Password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="email"
                  v-model="registerState.email"
                  placeholder="Email"
                />
                <span class="icon is-small is-left">
                  <i class="fa-solid fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <div class="control is-flex">
                <button
                  class="button is-success is-light is-flex-grow-1"
                  @click="
                    onRegisterClicked(
                      registerState.username,
                      registerState.password,
                      registerState.rePassword,
                      registerState.email
                    )
                  "
                >
                  Register
                </button>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  Need to login? Click <a href="./login">here</a>
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
.button {
  box-shadow: 3px 3px #42a168;
  font-family: "Minecraft";
}
.input {
  font-family: "Minecraft";
}
</style>
