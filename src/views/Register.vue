<script setup lang="ts">
import router from "@/router";
import {
  AuthError,
  getEmailErrors,
  getPasswordErrors,
  getUsernameErrors,
  register,
} from "@/service/AuthService";
import { computed, reactive, ref } from "vue";
import { user } from "../state/user";

const registerState = reactive({
  username: "mzhunio",
  password: "12345",
  rePassword: "12345",
  email: "a@a.com",
});

const usernameErrors = computed(() =>
  getUsernameErrors(registerState.username)
);

const passwordErrors = computed(() =>
  getPasswordErrors(registerState.password, registerState.rePassword)
);

const emailErrors = computed(() => getEmailErrors(registerState.email));

const apiError = ref("");

async function onRegisterClicked(
  username: string,
  password: string,
  email: string
): Promise<void> {
  try {
    user.value = await register({
      username,
      password,
      email,
      isAdmin: false,
      lastActive: "",
      imagePath: "",
    });
    router.push("/login");
  } catch (error: any) {
    user.value = null;
    apiError.value =
      error.response.data.message ?? "Sorry, we could not register the user";
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
                    'is-danger': usernameErrors,
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
                  v-if="usernameErrors?.InvalidUsernameMinLength"
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

                <div
                  class="mt-1 has-text-danger is-size-7"
                  v-if="passwordErrors?.InvalidPasswordAndRePasswordDoNotMatch"
                >
                  {{ AuthError.InvalidPasswordAndRePasswordDoNotMatch }}
                </div>
                <div
                  class="mt-1 has-text-danger is-size-7"
                  v-if="passwordErrors?.InvalidPasswordMinLength"
                >
                  {{ AuthError.InvalidPasswordMinLength }}
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  :class="{
                    'is-danger': emailErrors,
                  }"
                  type="email"
                  v-model="registerState.email"
                  placeholder="Email"
                />
                <span class="icon is-small is-left">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <div
                  class="mt-1 has-text-danger is-size-7"
                  v-if="emailErrors?.InvalidEmail"
                >
                  {{ AuthError.InvalidEmail }}
                </div>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <button
                  style="width: 100%"
                  class="button is-success is-light"
                  :class="{
                    'is-danger':
                      usernameErrors || emailErrors || passwordErrors,
                  }"
                  :disabled="!!usernameErrors || !!emailErrors || !!passwordErrors"
                  @click="
                    onRegisterClicked(
                      registerState.username,
                      registerState.password,
                      registerState.email
                    )
                  "
                >
                  Register
                </button>
                <br />
                <p v-if="apiError" class="help is-danger">{{ apiError }}</p>
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
  /* box-shadow: 3px 3px #42a168; */
  font-family: "Minecraft";
}
.input {
  font-family: "Minecraft";
}
</style>
